import { DOWNLOAD_LINK } from '@/constants/link';
import qs from 'qs';

export function isProd(): boolean {
  return process.env.NODE_ENV === 'production';
}

export function isDev(): boolean {
  return process.env.NODE_ENV === 'development';
}

export function getTrafficType(): string {
  const referrer = document.referrer;
  let host = '';
  let traffic_type = 'others';
  if (URL) {
    let url = {};
    try {
      url = new URL(referrer);
    } catch (e) {
      // console.log('parse url err', e);
    }
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'host' does not exist on type '{}'.
    host = url.host || '';
  } else {
    const url = referrer.match(
      /^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/,
    );
    host = url?.[4] || '';
  }
  if (host.match(/google/gi)) {
    traffic_type = 'google';
  } else if (host.match(/yahoo/gi)) {
    traffic_type = 'yahoo';
  } else if (host.match(/yandex/gi)) {
    traffic_type = 'yandex';
  } else if (host.match(/bing/gi)) {
    traffic_type = 'bing';
  } else if (host.match(/naver/gi)) {
    traffic_type = 'naver';
  }
  return traffic_type;
}

export function initSEOStorage(): void {
  const trafficType = getTrafficType();
  if (trafficType !== 'others' && !isFromSEO()) {
    try {
      sessionStorage.setItem('fromSEO', 'true');
    } catch (e) {
      console.log(e);
    }
  }
}

export function isFromSEO(): boolean {
  try {
    return sessionStorage.getItem('fromSEO') === 'true';
  } catch (e) {
    return false;
  }
}

export function getDownloadLinkParam(page: string): {
  af_adset_id: string;
  pid: string;
} {
  const param = {
    af_adset_id: page,
    pid: 'tiktokweb',
  };
  if (isFromSEO()) {
    param.pid = 'tiktokwebseo';
  }
  return param;
}

export function getItemSession(key: string, defaultValue = ''): string {
  try {
    return sessionStorage.getItem(key) || defaultValue;
  } catch (error) {
    return defaultValue;
  }
}

export function getDownloadLinkCode(page: string): {
  pageName: string;
  launchMode: string;
  trafficType: string;
} {
  const launchMode = getItemSession('webapp_launch_mode');
  const trafficType = getItemSession('webapp_original_traffic_type');

  const param = {
    pageName: page,
    launchMode,
    trafficType,
  };
  return param;
}

export function getDownloadLink(appType: string, page: string): string {
  const param = getDownloadLinkParam(page);
  // @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
  const downloadLink = DOWNLOAD_LINK[appType.toLocaleUpperCase()];
  return `${downloadLink}?${qs.stringify(param)}`;
}
