import { isDev } from 'src/utils';

export const IS_GCP = false; // && !!process?.env && !!process?.env?.NODE_REGION ? process.env.NODE_REGION === 'GCP' || process.env.REGION === 'IN' : false;

export const GRAPHQL_URL = isDev()
  ? `https://tk-hc-dev.citruxonve.net/api/v1/graphql`
  : 'https://support.tiktok.com/graphql';

export const SLARDAR_BASE_DOMAIN = 'mon-va.byteoversea.com';

export const SG_TOS_BASE_DOMAIN = IS_GCP ? 'sf16-va.tiktokcdn-in.com' : 'sf-tb-sg.ibytedtos.com';
export const SG_TOS_BASE_URL = `https://${SG_TOS_BASE_DOMAIN}`;
export const IMG_TOS_URL = IS_GCP
  ? 'https://p16-va-h2.tiktokcdn-in.com/img/ttfe-malisg'
  : 'https://sf-tb-sg.ibytedtos.com/img/ttfe-malisg';
