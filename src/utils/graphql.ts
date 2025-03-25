import axios, { type AxiosResponse } from 'axios';
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
      },
    },
  );
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

type Category = {
  category_key: string;
  category_name: string;
  starling_key: string;
  recent_article_list: Article[];
  allowed_country: string[];
};

export type Project = {
  project_key: string;
  project_name: string;
  title: string;
  order: number;
  starling_key: string;
  category_list?: Category[];
  allowed_country: string[];
};

type CMSProject = {
  key: string;
  name: string;
  title: string;
  create_time: string;
  update_time: string;
};

export async function getProjectList(
  region: string,
  preview: boolean,
): Promise<{ project_list: Project[] }> {
  const queryString = `
    query {
      listProjects {
        name
        title
        create_time
        update_time
        key
      }
    }
  `;

  return getGraphQLContent(queryString).then(({ data }) => {
    const projects: CMSProject[] = data.data?.listProjects ?? [];
    return {
      project_list: projects.map(({ key, name, title }, idx): Project => {
        return {
          project_key: key,
          project_name: name,
          title,
          starling_key: '',
          allowed_country: [],
          order: idx,
        };
      }),
    };
  });
}
