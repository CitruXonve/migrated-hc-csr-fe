import i18n_t from '@/utils/i18n';
import _ from 'lodash';
import React, { useEffect, useState } from 'react';
import { type Project, getProjectList } from '../utils/graphql';
import { urlToPageName, urlToPageNameForPreview } from '../utils/url';
import './content.scss';
import axios from 'axios';
import classNames from 'classnames';
import ReactDOMServer from 'react-dom/server';
import { HELP_CENTER_NEW } from 'src/constants/tea';
import { langToRegionByDefault } from 'src/utils/seoulGateway/utils';
import CheckMark from '../assets/checkmark.png';
import IconDown from '../assets/thumbs-down.png';
import IconUp from '../assets/thumbs-up.png';
import { CMS_LANGUAGE_LIST } from '../constants/language';
// import SimplerSideList from './Article/SideList';
import Loading from './Loading';

type CardList = {
  title?: string;
  desc?: string;
  href?: string;
  as?: string;
  // breadCrumb?: BreadCrumb[],
};

const helpfulContent2 = (): JSX.Element => (
  <>
    <p className="border-line" />
    <div className="help-container">
      <h3>{i18n_t('tt_helpcenter_response')}</h3>
      <img className="checkmark" src={CheckMark} />
    </div>
  </>
);

const helpfulContent1 = (): JSX.Element => (
  <>
    <p className="border-line" />
    <div className="help-container">
      <h3>{i18n_t('tt_helpcenter_feedback')}</h3>
      <div>
        <button className="help-button yes-button">
          <img src={IconUp} />
          {i18n_t('privacywebform_contactinfo_field2_yes')}
        </button>
        <button className="no-button">
          <img src={IconDown} />
          {i18n_t('privacywebform_contactinfo_field2_no')}
        </button>
      </div>
    </div>
  </>
);

export const shouldShowCategory = (
  country: string,
  projectKey: string,
  categoryKey: string,
): boolean => {
  if (projectKey !== 'business-and-creator') {
    return true;
  }
  const categoryKeysToAllowedCountryCodes: Record<
    string,
    Set<string>
  > = Object.freeze({
    'tiktok-creator-fund': new Set(['GB', 'DE', 'FR', 'IT', 'ES']),
    'tiktok-creator-fund-us': new Set(['US']),
  });

  return (
    !(categoryKey in categoryKeysToAllowedCountryCodes) ||
    categoryKeysToAllowedCountryCodes[categoryKey].has(country)
  );
};

// fetch article preview with article key (slug) specified from CMS or fallback to MinT.
const fetchArticlePreview = async (
  projectKey: string,
  articleKey: string,
  locale: string,
): Promise<{ article_title: string; article_content: string }> => {
  const cmsLocale = locale === 'hu-HU' ? 'hu' : locale;
  const graphqlData = {
    article_title: '',
    article_content: '',
  }; // await getRichTextContent(articleKey, cmsLocale, '', true);
  if (graphqlData.article_title && graphqlData.article_content) {
    // format "vertical tab character" in content, which comes from copied content
    return {
      article_title: graphqlData.article_title,
      article_content: _.unescape(graphqlData.article_content),
    };
  }

  if (projectKey) {
    // Fallback to request article data from MinT API for backward compatibility
  }
  return { article_title: '', article_content: '' };
};

// fetch article content with unique ID specified from CMS or fallback to MinT.
const fetchArticleContent = async (
  projectKey: string,
  categoryKey: string,
  articleKey: string,
  articleUniqueId: string,
  locale: string,
  region: string,
  isPreview: boolean,
): Promise<string> => {
  const cmsLocale = locale === 'hu-HU' ? 'hu' : locale;
  const graphqlData = {
    article_content: '',
    allowed_country: [],
  }; /* await getSingleArticleByUniqueId(
    articleUniqueId,
    cmsLocale,
    isPreview,
  ); */
  const geoVisible =
    isPreview ||
    graphqlData.allowed_country.length === 0 ||
    !!graphqlData.allowed_country.find(country => country === region);
  if (graphqlData.article_content && geoVisible) {
    // format "vertical tab character" in content, which comes from copied content
    return _.unescape(graphqlData.article_content); //.replace(/[\u000b\u000B]+/g, " ");
  }

  // Fallback to request article data from MinT API for backward compatibility
  // Same category and article for specified articleContent on second tier

  return '';
};

export type FormattedProject = {
  active: boolean;
  tier: string;
  dropdownIcon?: boolean;
  key: string;
  desc?: string;
  uniqueId?: string;
  title: string;
  href?: string;
  as: string;
  category?: string;
  content?: string;
  articleContent?: string;
  childrenClosed?: boolean;
  children: FormattedProject[];
  grandChildren: FormattedProject[];
};

const formatProjectData = async (
  {
    project_name,
    starling_key: projStarKey,
    category_list: categoryList,
  }: Project,
  cmsLocale: string,
  lang: string,
  projectKey: string,
  categoryKey: string,
  articleKey: string,
  region: string, // = 'SG', // default value to be removed
  isPreview: boolean,
): Promise<FormattedProject> => {
  const language = lang;

  // No need to load categories from MinT API
  const filteredCategories =
    categoryList?.filter(
      ({ category_key, category_name, recent_article_list }) =>
        shouldShowCategory(region, project_name, category_key) &&
        category_name !== 'default' &&
        recent_article_list.length > 0,
    ) ?? [];
  const filteredRecentArticles = filteredCategories
    .map(({ recent_article_list }) => recent_article_list)
    .reduce((article_list1, article_list2) =>
      article_list1.concat(article_list2),
    );
  const cmsArticleDict = new Map(); /* await getArticleDict(
    filteredRecentArticles.map(
      ({ article_unique_id }: { article_unique_id: string }) =>
        article_unique_id,
    ),
    cmsLocale,
    region,
    isPreview,
  );
  */

  const children = await Promise.all(
    filteredCategories.map(
      async ({
        category_name,
        category_key,
        recent_article_list,
        starling_key: categoryStarKey,
      }: {
        category_name: string;
        category_key: string;
        starling_key: string;
        recent_article_list: {
          article_title: string;
          article_key: string;
          article_content: string;
          article_unique_id: string;
        }[];
      }): Promise<FormattedProject> => {
        let activeSeconTier = false;
        if (categoryKey === category_name) activeSeconTier = true;

        const articleContent = '';
        const grandChildren: FormattedProject[] = recent_article_list.map(
          ({
            article_title,
            article_key,
            article_content,
            article_unique_id,
          }): FormattedProject => {
            let activeThirdTier = false;
            if (articleKey === article_key) activeThirdTier = true;

            // Article Level
            return {
              active: activeThirdTier,
              tier: 'thirdTier',
              dropdownIcon: false,
              key: article_key,
              uniqueId: article_unique_id,
              desc: article_content,
              title:
                cmsArticleDict.get(article_unique_id)?.article_title ||
                article_title, // fallback to starling title if missing CMS translation
              as: `/${language}/${project_name}/${category_name}/${article_key}`,
              category: category_name,
              content: articleContent,
              children: [],
              grandChildren: [],
            };
          },
        );

        const categoryStarlingKey = `tt_hc_stopic_${categoryStarKey}`;
        // Category Level: hide children if looking a project tier only
        return {
          active: activeSeconTier,
          articleContent,
          tier: 'secondTier',
          dropdownIcon: false,
          childrenClosed: false,
          category: category_name,
          key: category_key,
          title: categoryStarlingKey,
          desc: 'This is the description',
          as: `/${language}/${project_name}/${category_name}`,
          children: recent_article_list.length !== 1 ? grandChildren : [],
          grandChildren,
        };
      },
    ),
  );

  // Project Level
  const projectStarlingKey = `tt_hc_ptopic_${projStarKey}`;
  let isActive = false;
  if (projectKey === project_name) isActive = true;
  return {
    active: isActive,
    tier: 'firstTier',
    key: project_name,
    title: projectStarlingKey,
    as: `/${language}/${project_name}`,
    children,
    grandChildren: [],
  };
};

const getInitialProps = async (
  lang: string, // from URL params
  projectKey: string, // from URL params
  categoryKey: string, // from URL params
  articleKey: string, // from URL params
  isPreview: boolean, // from URL routing
): Promise<{
  projectList: FormattedProject[];
  cardList: CardList[];
  articleContent: string;
  title: string;
  dropdownTitle: string;
  pageName: string;
}> => {
  let projectList: FormattedProject[] = [];
  let cardList: CardList[] = [];
  let articleContent = '';
  const region = langToRegionByDefault(lang);
  const languageLocale = CMS_LANGUAGE_LIST.filter(
    ({ value, alias }) => value === lang || alias === lang,
  )[0];
  if (!languageLocale?.alias) {
    location.href = '/en';
  }
  const { alias: cmsLocale } = languageLocale;

  // obtain projectList
  if (typeof window === 'undefined' ? true : projectList.length === 0) {
    const { project_list = [] } = await getProjectList(region, isPreview);
    projectList = await Promise.all(
      project_list.map(
        (projectData: Project): Promise<FormattedProject> =>
          formatProjectData(
            projectData,
            cmsLocale,
            lang,
            projectKey,
            categoryKey,
            articleKey,
            region,
            isPreview,
          ),
      ),
    );
  }

  // if for preview w/o project key, fetch article title and content directly
  if (!projectKey && articleKey && isPreview) {
    const { article_title, article_content } = await fetchArticlePreview(
      '',
      articleKey,
      cmsLocale,
    );
    const title = article_title;
    articleContent = article_content;
    return {
      title,
      articleContent,
      projectList,
      cardList,
      dropdownTitle: 'Preview',
      pageName: urlToPageNameForPreview(articleKey),
    };
  }

  // show projectList
  let starlingProjTitle = '';
  const chosenProject = projectList.find(({ key }) => key === projectKey);
  const { title = '', children: categories = [] } = chosenProject ?? {};
  starlingProjTitle = title;
  cardList = categories.map(({ title = '', href = '', as = '' }): CardList => {
    return { title, href, as };
  });

  // Update active status of project List when rerouting happens.
  if (projectList.length) {
    for (const project of projectList) {
      const { key: currentProjectKey, children: currentCategoryChildren } =
        project;
      project.active = currentProjectKey === projectKey;
      for (const category of currentCategoryChildren) {
        const {
          category: currentCategoryKey,
          children: currentArticleChildren,
        } = category;
        category.active = currentCategoryKey === categoryKey;
        for (const article of currentArticleChildren) {
          const { key: currentArticleKey } = article;
          article.active = currentArticleKey === articleKey;
        }
      }
    }
  }

  // Risky: category may not always be found
  const allCategoryKeys = categories.map(category => category.key);
  if (categoryKey && allCategoryKeys.includes(categoryKey)) {
    const category = categories.find(
      ({ category }) => category === categoryKey,
    );
    const { title = '', grandChildren = [] } = category ?? {};

    if (title && grandChildren.length === 1) {
      // extract the only article key
      const { key: articleKey, uniqueId: articleUniqueId = '' } =
        grandChildren[0];
      starlingProjTitle = title;
      articleContent = await fetchArticleContent(
        projectKey,
        categoryKey,
        articleKey,
        articleUniqueId,
        cmsLocale,
        region,
        isPreview,
      );
    }

    // otherwise: show article list
    if (title && grandChildren.length) {
      starlingProjTitle = title;
      cardList = grandChildren.map(({ title, href, as }) => {
        return { title, href, as };
      });
    }

    // if only one article, show article content
    const allArticleKeys = grandChildren.map(article => article.key);
    if (articleKey && isPreview) {
      // if for preview, fetch article title and content directly
      const { article_title, article_content } = await fetchArticlePreview(
        projectKey,
        articleKey,
        cmsLocale,
      );
      starlingProjTitle = article_title;
      articleContent = article_content;
    } else if (articleKey && allArticleKeys.includes(articleKey)) {
      // if article key is included in "grandChildren"
      const { title = '', uniqueId: articleUniqueId = '' } =
        grandChildren.find(({ key }) => key === articleKey) ?? {};
      starlingProjTitle = title;
      articleContent = await fetchArticleContent(
        projectKey,
        categoryKey,
        articleKey,
        articleUniqueId,
        cmsLocale,
        region,
        isPreview,
      );
    } else if (articleKey && !allArticleKeys.includes(articleKey)) {
      // if article key isn't included, but article unique id is - lookup from MinT
    }
  }

  let navInfo = '';
  if (!navInfo)
    navInfo = `${i18n_t(starlingProjTitle)} | ${i18n_t('tt_hc_tiktok_help_center')}`;

  // processing searchList / if(searchTerm) here...

  let dropdownTitle = 'Topics';
  if (articleKey || categoryKey) dropdownTitle = starlingProjTitle;

  const pageName = urlToPageName('', projectKey, categoryKey, articleKey);
  return {
    projectList,
    cardList,
    articleContent,
    title: starlingProjTitle,
    dropdownTitle,
    pageName,
  };
};

const Content = (props: {
  lang: string;
  projectKey: string;
  categoryKey: string;
  articleKey: string;
  isPreview: boolean;
}): JSX.Element => {
  const [projectList, setProjectList] = useState([] as FormattedProject[]);
  const { lang, projectKey, categoryKey, articleKey, isPreview } = props;
  const [articleContent, setArticleContent] = useState('');
  const [title, setTitle] = useState('');
  const [cardList, setCardList] = useState([] as CardList[]);
  const [submittedFeedback, setSubmittedFeedback] = useState(false);

  const handleFeedback = (response: string): void => {
    const pageName = `article/${title}`;
    const { EVENTS, PAGENAMES } = HELP_CENTER_NEW;
    const { HELPFUL_CLICK_YES, HELPFUL_CLICK_NO } = EVENTS;
    const eventType = response === 'yes' ? HELPFUL_CLICK_YES : HELPFUL_CLICK_NO;
    // Tea.collectEvent(eventType, {
    //   enter_from: pageName,
    //   site_name: PAGENAMES.SUPPORT_NEW,
    // });

    setSubmittedFeedback(true);
  };

  const setFeedbackEvents = (): void => {
    const button1 = document.querySelector('.yes-button');
    const button2 = document.querySelector('.no-button');
    button1?.addEventListener('click', () => handleFeedback('yes'));
    button2?.addEventListener('click', () => handleFeedback('no'));
  };

  useEffect(() => {
    void getInitialProps(
      lang,
      projectKey,
      categoryKey || '',
      articleKey || '',
      isPreview || false,
    ).then(values => {
      if (values.articleContent) {
        setArticleContent(values.articleContent);
        setTimeout(setFeedbackEvents, 500);
      }
      if (values.title) {
        setTitle(values.title);
      }
      if (values.cardList.length) {
        setCardList(values.cardList);
      }
      if (values.projectList.length) {
        setProjectList(values.projectList);
      }
    });
  }, []);

  const aside_list = projectList.length ? (
    // <SimplerSideList
    //   listItems={projectList}
    //   projectKey={projectKey}
    //   categoryKey={categoryKey}
    //   articleKey={articleKey}
    // />
    <></>
  ) : (
    <div className={classNames('side-list-container', 'centered-loading')}>
      <Loading />
    </div>
  );

  const card_list = cardList.length ? (
    cardList.map(
      (
        {
          title = '',
          desc,
          href = '/',
          as = '/',
        }: // breadCrumb,
        CardList,
        idx,
      ) => {
        return (
          <a
            className={classNames('card-link', `${title}_${idx}`)}
            href={as}
            key={`${title}_${idx}`}
          >
            <article
              className="desc-container"
              // ref={e => this.listContainer = e}
              key={title}
            >
              <h1>{i18n_t(title)}</h1>
              {desc && <p>{i18n_t(desc)}</p>}
            </article>
          </a>
        );
      },
    )
  ) : (
    <div className={classNames('card-container', 'centered-loading')}>
      <Loading />
    </div>
  );

  const helpfulContent = ReactDOMServer.renderToStaticMarkup(
    submittedFeedback ? helpfulContent2() : helpfulContent1(),
  );
  const article_content = articleContent ? (
    <article
      dangerouslySetInnerHTML={{ __html: articleContent + helpfulContent }}
      className={classNames('desc-container', 'article-desc-container')}
      // ref={e => this.listContainer = e}
    />
  ) : (
    <Loading />
  );

  const main_content =
    title && articleContent
      ? [
          // display article title and content with CMS translation
          <h3
            className={classNames('article-title')}
            key={`${title}_${new Date().toISOString()}`}
          >
            {title.startsWith('tt_hc_stopic_') ? i18n_t(title) : title}
          </h3>,
          article_content,
        ]
      : [
          // display card list with starling translation
          <h3
            className={classNames('article-title')}
            key={`${title}_${new Date().toISOString()}`}
          >
            {i18n_t(title)}
          </h3>,
          card_list,
        ];

  return (
    <main className="main-container">
      {aside_list}
      <div className="card-container">
        {main_content}
        {
          <article className={'desc-container'}>
            <h1 className="helpful-links">{i18n_t('tt_hc_helpful_links')}</h1>
            <p>
              <a
                className="help-link"
                href={`/${lang}/getting-started/creating-an-account/creating-an-account`}
              >
                {i18n_t('tt_hc_stopic_creatingacct')}
              </a>
            </p>
            <p>
              <a
                className="help-link"
                href={`/${lang}/getting-started/setting-up-your-profile`}
              >
                {i18n_t('tt_hc_stopic_setupprofile')}
              </a>
            </p>
            <p>
              <a
                className="help-link"
                href={`/${lang}/getting-started/creating-your-first-video`}
              >
                {i18n_t('tt_helpcenter_related3')}
              </a>
            </p>
          </article>
        }
      </div>
    </main>
  );
};

export default Content;
