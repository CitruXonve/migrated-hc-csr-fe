import { EEA_COUNTRY } from './areaCodeNew';

export const VISIBLE_LEGAL_KEY = [
  'cookie-policy-eu',
  'open-source',
  'virtual-items',
  'copyright-policy',
  'law-enforcement',
  'licensing',
  'au-modern-slavery-policy',
  'privacy-policy-row',
  'terms-of-service',
  'impressum',
  'privacy-policy-for-younger-users',
  'modern-slavery-statement',
  'turkey-social-media-law-5651',
  'bc-policy',
];

export const IN_VISIBLE_LEGAL_IN_NAV = ['open-source', 'virtual-items', 'bc-policy'];

export const TIK_TOK_DEVELOPER_TERMS_OF_SERVICE = 'tik-tok-developer-terms-of-service';

export const getCookiePolicy = (region: string): string => {
  return EEA_COUNTRY.includes(region) ? 'tiktok-website-cookies-policy' : 'cookie-policy';
};
