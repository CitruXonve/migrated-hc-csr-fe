import {
  getRichTextContentQuery,
  getProjectArticleListQuery,
  getProjectListQuery,
  getArticleArrayQuery,
  getSingleArticleQueryByUniqueId,
} from '../constants/graphql-schema';
import axios, { AxiosResponse } from 'axios';
import { GRAPHQL_URL } from '../constants/env';

async function getGraphQLContent(queryString: string): Promise<AxiosResponse> {
  return axios.post(
    GRAPHQL_URL,
    {
      extensions: {},
      query: queryString,
    },
    {
      timeout: 30000,
      headers: {
        'Content-Type': 'application/json',
        'Origin': 'https://us-west-1.console.aws.amazon.com/',
        'x-api-key': 'da2-lo4vs7khcfdjld7yaewueodcdq',
      },
    },
  );
}

// fetch article content from CMS DB with article key (slug) and visibility in the region specified.
export async function getRichTextContent(
  articleKey: string,
  locale: string,
  region: string,
  preview: boolean,
): Promise<{ article_content: string; article_title: string }> {
  const queryString = getRichTextContentQuery(articleKey, locale, preview);
  return getGraphQLContent(queryString)
    .then(({ data }) => {
      const allowed_country: string[] = data.data?.article?.allowedCountry
        ? data.data?.article?.allowedCountry.map((country: { abbreviation: string }) => country?.abbreviation)
        : [];
      const geoVisible =
        preview || allowed_country.length === 0 || !!allowed_country.find((country) => country === region);
      return {
        article_content: geoVisible ? data.data?.article?.richText : '',
        article_title: geoVisible ? data.data?.article?.text : '',
      };
    })
    .catch((err) => {
      console.error(`[GraphQL getRichTextContent] request error: ${err}`);
      return { article_content: '', article_title: '' };
    });
}

type Article = {
  article_key: string;
  article_title: string;
  article_desc?: string;
  article_content: string;
  article_unique_id: string;
  allowed_country: string[];
};

type CMSArticle = {
  sys: { id: string };
  text: string;
  richText: string;
  uniqueId: string;
  allowedCountry: { abbreviation: string }[] | null;
};

// fetch article content from CMS DB with unique ID specified.
export async function getSingleArticleByUniqueId(uniqueId: string, locale: string, preview: boolean): Promise<Article> {
  let article: Article = {
    article_key: '',
    article_title: '',
    article_content: '',
    article_unique_id: '',
    allowed_country: [],
  };
  const queryString = getSingleArticleQueryByUniqueId(uniqueId, locale, preview);
  await getGraphQLContent(queryString)
    .then(({ data }) => {
      const item: CMSArticle | null = data.data?.articleCollection?.items?.[0] || null;
      if (item) {
        const article_key = item.sys?.id?.split('/')[1];
        article = {
          ...article,
          article_key,
          article_title: item.text,
          article_content: item.richText,
          article_unique_id: item.uniqueId,
          allowed_country:
            !preview && item.allowedCountry ? item.allowedCountry.map(({ abbreviation }) => abbreviation) : [],
        };
      }
    })
    .catch((err) => {
      console.error(`[GraphQL getArticleByUniqueId] request error: ${err}`);
    });
  return article;
}

export async function getArticleDict(
  uniqueIds: string[],
  locale: string,
  region: string,
  preview: boolean,
): Promise<Map<string, Article>> {
  const cmsLocale = locale === 'hu-HU' ? 'hu' : locale;
  const queryString = getArticleArrayQuery(uniqueIds, cmsLocale, preview);
  const cmsArticleDict = new Map<string, Article>();
  await getGraphQLContent(queryString)
    .then(({ data }) => {
      const items = data.data?.articleCollection?.items;
      if (items?.length) {
        items.forEach(
          (item: {
            sys: { id: string };
            text: string;
            richText: string;
            uniqueId: string;
            allowedCountry: { abbreviation: string }[] | null;
          }) => {
            const article_key = item.sys?.id?.split('/')[1];
            const article: Article = {
              article_key,
              article_title: item.text,
              article_content: item.richText,
              article_unique_id: item.uniqueId,
              allowed_country:
                !preview && item.allowedCountry ? item.allowedCountry.map(({ abbreviation }) => abbreviation) : [],
            };
            const geoVisible =
              preview ||
              article.allowed_country.length === 0 ||
              !!article.allowed_country.find((country) => country === region);
            if (article_key && item.uniqueId && geoVisible) {
              cmsArticleDict.set(item.uniqueId, article);
            }
          },
        );
      }
      return cmsArticleDict;
    })
    .catch((err) => {
      console.error(`[GraphQL getArticleTitleArray] request error: ${err}`);
    });
  return cmsArticleDict;
}

type Category = {
  category_key: string;
  category_name: string;
  starling_key: string;
  recent_article_list: Article[];
  allowed_country: string[];
};

export async function getArticleListUnderProject(
  projectKey: string,
  region: string,
): Promise<{ article_list: Article[] }> {
  const queryString = getProjectArticleListQuery(projectKey);
  return getGraphQLContent(queryString)
    .then(({ data }) => {
      let article_list = data.data?.project?.reference;
      article_list = article_list
        .filter((item: { __typename: string }) => item.__typename === 'Article')
        .map(
          (
            article: CMSArticle,
          ): {
            article_key: string;
            article_title: string;
            article_desc: string;
            allowed_country: string[];
          } => {
            const article_key = article.sys?.id?.split('/')[1];
            return {
              article_key,
              article_title: article.text,
              article_desc: article.richText,
              allowed_country: article.allowedCountry
                ? article.allowedCountry.map(({ abbreviation }) => abbreviation)
                : [],
            };
          },
        )
        .filter(
          (article: { allowed_country: string[] }) =>
            article.allowed_country.length === 0 || !!article.allowed_country.find((country) => country === region),
        );
      return { article_list };
    })
    .catch((err) => {
      console.error(`[GraphQL getArticleListUnderProject] request error: ${err}`);
      return { article_list: [] };
    });
}

export type Project = {
  category_list?: Category[];
  article_list?: Article[];
  project_name: string;
  starling_key: string;
  description: string;
  order: number;
  allowed_country: string[];
};

export async function getProjectList(region: string, preview: boolean): Promise<{ project_list: Project[] }> {
  const queryString = getProjectListQuery();
  return getGraphQLContent(queryString)
    .then(async ({ data }): Promise<{ project_list: Project[] }> => {
      let project_list: Project[] = await Promise.all(
        data.data?.projectCollection?.items.map(
          async (item: {
            sys: { id: string };
            title: string;
            description: string;
            weight: number;
            allowedCountry: { abbreviation: string }[] | null;
            reference: {
              sys: { id: string };
              __typename: string;
              title: string;
              allowedCountry: { abbreviation: string }[] | null;
              reference?: {
                sys: { id: string };
                __typename: string;
                uniqueId: string;
                text: string;
                allowedCountry: { abbreviation: string }[] | null;
              }[];
            }[];
          }): Promise<Project> => {
            const slug = item.sys?.id?.split('/')[1];
            let children: { category_list: Category[] } | { article_list: Article[] } = {
              category_list: item.reference?.length
                ? item.reference
                    .filter((reference) => reference.__typename === 'Category')
                    .map(
                      (category: {
                        sys: { id: string };
                        __typename: string;
                        title: string;
                        allowedCountry: { abbreviation: string }[] | null;
                        reference?: {
                          sys: { id: string };
                          __typename: string;
                          uniqueId: string;
                          text: string;
                          allowedCountry: { abbreviation: string }[] | null;
                        }[];
                      }) => {
                        const category_key = category.sys?.id?.split('/')[1];
                        const recentArticleList = category.reference?.length
                          ? category.reference
                              .map(
                                (article: {
                                  sys: { id: string };
                                  uniqueId: string;
                                  text: string;
                                  allowedCountry: { abbreviation: string }[] | null;
                                }) => {
                                  const article_key = article.sys?.id?.split('/')[1];
                                  return {
                                    article_key,
                                    article_title: article.text,
                                    article_content: '',
                                    article_unique_id: article.uniqueId,
                                    // eslint-disable-next-line max-nested-callbacks
                                    allowed_country:
                                      !preview && article.allowedCountry
                                        ? article.allowedCountry.map(({ abbreviation }) => abbreviation)
                                        : [],
                                    category_key,
                                  };
                                },
                              )
                              // eslint-disable-next-line max-nested-callbacks
                              .filter(
                                ({ allowed_country: allowedCountry }) =>
                                  preview ||
                                  allowedCountry.length === 0 ||
                                  !!allowedCountry.find((country) => country === region),
                              )
                          : [];

                        return {
                          category_key,
                          category_name: category_key,
                          starling_key: category.title,
                          recent_article_list: recentArticleList,
                          allowed_country:
                            !preview && category.allowedCountry
                              ? category.allowedCountry.map(({ abbreviation }) => abbreviation)
                              : [],
                        };
                      },
                    )
                    .filter(
                      ({ allowed_country: allowedCountry }) =>
                        allowedCountry.length === 0 || !!allowedCountry.find((country) => country === region),
                    )
                : [],
            };
            // obtain articles associated with this project instead, if there's no category
            if (!children.category_list.length) {
              children = await getArticleListUnderProject(slug, region);
            }
            return {
              ...children,
              project_name: slug,
              starling_key: item.title,
              description: item.description,
              order: item.weight,
              allowed_country:
                !preview && item.allowedCountry ? item.allowedCountry.map(({ abbreviation }) => abbreviation) : [],
            };
          },
        ),
      );
      if (!preview) {
        project_list = project_list.filter(
          ({ allowed_country: allowedCountry }) =>
            allowedCountry.length === 0 || !!allowedCountry.find((country) => country === region),
        );
      }
      project_list.sort((project1: Project, project2: Project) => project1.order - project2.order);
      return {
        project_list,
      };
    })
    .catch((err) => {
      console.error(`[GraphQL getProjectList] request error: ${err}`);
      return { project_list: [] };
    });
}
