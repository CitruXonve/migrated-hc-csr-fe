import qs from 'qs';
// import { i18n } from '@ttastra/core/runtime';
import { getBaseURLForEnv, getCurrentEnv } from 'src/utils/host';
import { LegalArticle } from 'src/utils/getLegalList';

type ListEntryChild = {
  title: string;
  asPath?: string;
  path?: string;
  href?: string | ((arg0: string, arg1: string, arg2: string) => string);
  includeByRegion?: string[];
  includeByLanguage?: string[];
  useLink?: boolean;
};

type ListEntry = {
  title: string;
  children: ListEntryChild[];
};

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
function getCompanyList(isBanned: boolean): ListEntry {
  const children: ListEntryChild[] = [
    {
      title: 'About',
      href: 'https://www.tiktok.com/about',
      // path: '/about',
      // asPath: '/about',
    },
    {
      title: 'TikTok UK Tax Strategy',
      path: '/article/legal?articleKey=tiktok-uk-tax-strategy',
      asPath: '/legal/tiktok-uk-tax-strategy',
      includeByRegion: ['GB'],
    },
    {
      title: 'Newsroom',
      href: 'https://newsroom.tiktok.com',
      useLink: false,
    },
  ];
  if (!isBanned) {
    children.push(
      {
        title: 'Contact',
        href: 'https://www.tiktok.com/about/contact',
        // path: '/contact',
        // asPath: '/about/contact',
      },
      {
        title: 'Careers',
        href: 'https://careers.tiktok.com',
        // newWindow: true,
        useLink: false,
      },
    );
  }
  return {
    title: 'Company',
    children,
  };
}

function getProgramsList(isBanned: boolean, i18nLoaded: boolean): ListEntry {
  const children = [
    {
      title: 'TikTok for Good',
      path: '/forgood',
      asPath: '/forgood',
    },
  ];
  if (!isBanned) {
    children.push({
      title: 'TikTok for Developers',
      // @ts-expect-error ts-migrate(2345) FIXME: Object literal may only specify known properties, ... Remove this comment to see the full error message
      href: 'https://developers.tiktok.com/?refer=tiktok_web',
      newWindow: true,
      useLink: false,
    });
  }

  // Adding Effect House link in the footer
  children.push({
    title: 'Effect House',
    // @ts-expect-error ts-migrate(2345) FIXME: Object literal may only specify known properties, ... Remove this comment to see the full error message
    href: 'https://effecthouse.tiktok.com/?utm_source=tiktok_web_article',
    useLink: false,
  });

  // {
  //     title: 'TikTok for Artists',
  //     href: 'https://artists.tiktok.com',
  //     newWindow: true,
  //     useLink: false,
  // },
  children.push(
    {
      title: 'Advertise on TikTok',
      // @ts-expect-error ts-migrate(2345) FIXME: Object literal may only specify known properties, ... Remove this comment to see the full error message
      href: 'https://www.tiktok.com/business/&attr_source=tt_official_site&attr_medium=tt_official_site_guidance',
      newWindow: true,
      useLink: false,
    },
    i18nLoaded
      ? {
          // title: i18n.t('web_menu_tiktok_rewards'),
          title: 'web_menu_tiktok_rewards',
          href: 'https://www.tiktok.com/tiktok-rewards',
          useLink: false,
        }
      : null,
    {
      title: 'TikTok Browse',
      href: (host: string, pathname: string, language: string) => {
        if (['es', 'pt_BR'].includes(language)) {
          return `https://www.tiktok.com/browse?lang=${language}`;
        }
        return `https://www.tiktok.com/browse`;
      },
      newWindow: true,
      useLink: false,
    },
    {
      title: 'TikTok Embeds',
      href: 'https://www.tiktok.com/embed',
      newWindow: true,
      useLink: false,
    },
    {
      title: 'TikTok Music',
      href: 'https://music.tiktok.com?channel=TTHome',
      includeByRegion: ['BR', 'ID', 'MX', 'SG', 'AU'],
      newWindow: true,
      useLink: false,
    },
  );
  return {
    title: 'Programs',
    children,
  };
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
function getList(isWebappDisabled: boolean, i18nLoaded: boolean): ListEntry[] {
  const transparencyLangs = [
    'id',
    'de',
    'en',
    'es',
    'fr',
    'it',
    'pl',
    'pt_BR',
    'vi',
    'tr',
    'ru',
    'hi',
    'ko',
    'ar',
    'th',
    'ja',
    'zh_Hant',
  ];

  const resourcesListChildren = [
    {
      title: 'Help Center',
      href: (host: string, pathname: string, language: string): string => {
        return `https://support.tiktok.com/${language
          .replace('en', language === 'he_IL' ? 'he_IL' : 'en')
          .replace('pt_BR', 'pt')
          .replace('zh_Hant', 'zh-Hant')}`;
      },
      useLink: false,
    },
    {
      title: 'safety center',
      path: '/article/safety',
      asPath: '/safety',
      useLink: false,
    },
    {
      title: 'Creator Portal',
      href: 'https://www.tiktok.com/creators/creator-portal/',
      useLink: false,
    },
    {
      title: 'Community Guidelines',
      href: (host: string, pathname: string, language: string) =>
        `https://www.tiktok.com/community-guidelines?lang=${language}`,
      useLink: false,
    },
    {
      title: 'Transparency',
      href: (host: string, pathname: string, language: string) => {
        if (!transparencyLangs.includes(language)) return 'https://www.tiktok.com/transparency?lang=en';
        return `https://www.tiktok.com/transparency?lang=${language}`;
      },
      useLink: false,
    },
    {
      title: 'Accessibility',
      href: 'https://www.tiktok.com/accessibility',
      useLink: false,
    },
  ];
  return [
    getCompanyList(isWebappDisabled),
    getProgramsList(isWebappDisabled, i18nLoaded),
    {
      title: 'resources',
      children: i18nLoaded
        ? [
            ...resourcesListChildren,
            {
              // title: i18n.t('web_webapp_MStV'),
              title: 'web_webapp_MStV',
              href: 'https://www.tiktok.com/transparency/de-de/german-state-treaty/',
              includeByLanguage: ['de'],
              useLink: false,
            },
          ]
        : resourcesListChildren,
    },
  ];
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const getNavigationList = (
  language: string,
  legalList: LegalArticle[] = [],
  isWebappDisabled: boolean,
  region: string,
  host: string,
  pathname: string,
  i18nLoaded: boolean,
) => {
  const env = getCurrentEnv(host);

  const navigationList = [
    ...getList(isWebappDisabled, i18nLoaded),
    {
      title: 'Legal',
      children: legalList as ListEntryChild[],
    },
  ];
  const displayOutput = navigationList.map((item) => {
    const output = { ...item };

    output.children = output.children
      .filter(
        (child) =>
          !!child &&
          // language
          (!child.includeByLanguage ||
            (child.includeByLanguage.length && child.includeByLanguage.includes(language))) &&
          // region
          (!child.includeByRegion || (child.includeByRegion.length && child.includeByRegion.includes(region))),
      )
      .map((child) => {
        const outputChild = { ...child };
        // To do: remove line below when Hebrew is supported by other sites other than help center
        const lang = language === 'he_IL' ? 'en' : language;
        if (outputChild.path) {
          // get rid of the remaining segments after lang?
          outputChild.href = location.href;

          const [path, search] = outputChild.path.split('?');
          const searchObj = qs.parse(search);
          outputChild.path = `${path}?${qs.stringify({
            lang,
            ...searchObj,
          })}`;
        }

        if (typeof outputChild.href === 'function') {
          outputChild.href = outputChild.href(host, pathname, language);
        }

        if (!/^http/.test(outputChild.href ?? '')) {
          const baseUrl = getBaseURLForEnv(env);
          outputChild.href = `${baseUrl}${outputChild.href}`;
          outputChild.path = undefined;
        }

        return outputChild;
      });
    return output;
  });
  return i18nLoaded ? displayOutput : [];
};

export default getNavigationList;
