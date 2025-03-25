import { ACCESS_TO_MORE_INFO_REGION } from '../../constants/language';

export function langToRegionByDefault(lang: string): string {
  const language = ACCESS_TO_MORE_INFO_REGION.find(
    item => item.value === lang || item.alias === lang,
  );
  return language ? language.region : 'US';
}
