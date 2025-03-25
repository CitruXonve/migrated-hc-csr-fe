import { isDev } from 'src/utils';

export const IS_GCP = false; // && !!process?.env && !!process?.env?.NODE_REGION ? process.env.NODE_REGION === 'GCP' || process.env.REGION === 'IN' : false;

export const GRAPHQL_URL = isDev()
  ? 'https://tk-hc-dev.citruxonve.net/api/v1/graphql'
  : 'https://support.tiktok.com/graphql';

