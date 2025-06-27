export const ARTICLE_LIST = '/web/api/v2/project/articleList/';
export const ARTICLE_CONTENT = '/web/api/v2/project/articleContent/';

type ResponseBody = { article_title: string; article_content: string };

export const getResponseBody = (response: { status: number; data?: { body?: ResponseBody } }): ResponseBody => {
  if (response.status === 200 && response.data && response.data.body) {
    return response.data.body;
  }

  return { article_title: '', article_content: '' };
};

export const getResponseData = (response: {
  status: number;
  data?: { body?: ResponseBody };
}): { body?: ResponseBody } => {
  if (response.status === 200 && response.data) {
    return response.data;
  }

  return {};
};
