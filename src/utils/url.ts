import qs, { type ParsedQs } from 'qs';

export function getQuery(): ParsedQs {
  return typeof document === 'undefined'
    ? {}
    : qs.parse(location.search, { ignoreQueryPrefix: true });
}

export function getQueryEntries(): Record<string, string | undefined> {
  const entries: Record<string, string | undefined> = {};
  Object.entries(getQuery()).forEach(entry => {
    entries[entry[0]] = entry[1]?.toString() ?? undefined;
  });
  return entries;
}

export function getSearch(): string {
  return typeof document === 'undefined' ? '' : location.search;
}

export function trimSearchParam(host: string, pageUrl: string): string {
  const pagePath = pageUrl.split('?')[0] || pageUrl;
  return `https://${host}${pagePath}`;
}

// host is always "support"
export function urlToPageName(
  searchQuery: string,
  projectKey: string,
  categoryKey: string,
  articleKey: string,
): string {
  if (searchQuery) {
    return 'support_new_search';
  }
  if (!projectKey && !categoryKey && !articleKey) {
    return 'support_new_home';
  }
  return `support_new_${projectKey ? projectKey : ''}${categoryKey ? `/${categoryKey}` : ''}${
    articleKey ? `/${articleKey}` : ''
  }`;
}

export function urlToPageNameForPreview(articleKey: string): string {
  return `support_preview_${articleKey}`;
}
