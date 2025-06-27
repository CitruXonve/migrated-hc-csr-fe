/* eslint-disable @typescript-eslint/naming-convention */
type LanguageType = {
  value: string;
  alias?: string;
  label: string;
  hidden?: boolean;
  children: [
    {
      value: string;
      label: string;
    },
  ];
};
type LanguageListType = Array<LanguageType>;

type AliasMapType = {
  v2a: StringMap;
  a2v: StringMap;
};

type Language = {
  value: string;
  label: string;
  alias: string;
  hidden?: boolean;
  children: {
    value: string;
    label: string;
  }[];
};

export const LANGUAGE_LIST: LanguageListType = [
  {
    value: 'id',
    alias: 'id-ID',
    label: 'Bahasa Indonesia',
    children: [
      {
        value: 'default',
        label: '',
      },
    ],
  },
  {
    value: 'de',
    alias: 'de-DE',
    label: 'Deutsch',
    children: [
      {
        value: 'default',
        label: '',
      },
    ],
  },
  {
    value: 'en',
    alias: 'en',
    label: 'English',
    children: [
      {
        value: 'default',
        label: '',
      },
      // {
      //     value: 'uk',
      //     label: 'UK',
      // },
    ],
  },
  {
    value: 'es',
    alias: 'es',
    label: 'Español',
    children: [
      {
        value: 'default',
        label: '',
      },
    ],
  },
  {
    value: 'fr',
    alias: 'fr',
    label: 'Français',
    children: [
      {
        value: 'default',
        label: '',
      },
    ],
  },
  {
    value: 'it',
    alias: 'it-IT',
    label: 'Italiano',
    children: [
      {
        value: 'default',
        label: '',
      },
    ],
  },
  {
    value: 'pl',
    alias: 'pl-PL',
    label: 'Polski',
    children: [
      {
        value: 'default',
        label: '',
      },
    ],
  },
  {
    value: 'pt_BR',
    alias: 'pt-BR',
    label: 'Português',
    children: [
      {
        value: 'default',
        label: '',
      },
    ],
  },
  {
    value: 'vi',
    alias: 'vi-VN',
    label: 'Tiếng Việt',
    children: [
      {
        value: 'default',
        label: '',
      },
    ],
  },
  {
    value: 'tr',
    alias: 'tr-TR',
    label: 'Türkçe',
    children: [
      {
        value: 'default',
        label: '',
      },
    ],
  },
  {
    value: 'ru',
    alias: 'ru-RU',
    label: 'Русский',
    children: [
      {
        value: 'default',
        label: '',
      },
    ],
  },
  {
    value: 'hi',
    alias: 'hi-IN',
    label: 'हिन्दी',
    children: [
      {
        value: 'default',
        label: '',
      },
    ],
  },
  {
    value: 'ko',
    alias: 'ko-KR',
    label: '한국어',
    children: [
      {
        value: 'default',
        label: '',
      },
    ],
  },
  {
    value: 'ja',
    alias: 'ja-JP',
    label: '日本語',
    children: [
      {
        value: 'default',
        label: '',
      },
    ],
  },
  {
    value: 'zh_Hant',
    alias: 'zh-Hant-TW',
    label: '繁體中文',
    children: [
      {
        value: 'default',
        label: '',
      },
    ],
  },
  {
    value: 'zh_Hans',
    alias: 'zh-Hans',
    label: '简体中文',
    hidden: true,
    children: [
      {
        value: 'default',
        label: '',
      },
    ],
  },
  {
    value: 'ar',
    alias: 'ar',
    label: 'العربية',
    children: [
      {
        value: 'default',
        label: '',
      },
    ],
  },
  {
    value: 'ur',
    alias: 'ur',
    label: 'اردو',
    children: [
      {
        value: 'default',
        label: '',
      },
    ],
  },
  {
    value: 'ms',
    alias: 'ms-MY',
    label: 'Bahasa Melayu',
    hidden: true,
    children: [
      {
        value: 'default',
        label: '',
      },
    ],
  },
  // {
  //     value: 'jv',
  //     label: 'Basa Jawa',
  //     children: [
  //         {
  //             value: 'default',
  //             label: '',
  //         },
  //     ],
  // },
  {
    value: 'ceb',
    label: 'Cebuano',
    hidden: true,
    children: [
      {
        value: 'default',
        label: '',
      },
    ],
  },
  {
    value: 'tl',
    label: 'Tagalog',
    hidden: true,
    children: [
      {
        value: 'default',
        label: '',
      },
    ],
  },
  {
    value: 'cs',
    alias: 'cs-CZ',
    label: 'Čeština',
    children: [
      {
        value: 'default',
        label: '',
      },
    ],
  },
  {
    value: 'fil',
    alias: 'tl',
    label: 'Filipino',
    children: [
      {
        value: 'default',
        label: '',
      },
    ],
  },
  {
    value: 'hu',
    alias: 'hu-HU',
    label: 'Magyar',
    children: [
      {
        value: 'default',
        label: '',
      },
    ],
  },
  {
    value: 'uz',
    alias: 'uz',
    label: 'Uzbek',
    children: [
      {
        value: 'default',
        label: '',
      },
    ],
  },
  {
    value: 'nl',
    alias: 'NL',
    label: 'Nederlands',
    hidden: true,
    children: [
      {
        value: 'default',
        label: '',
      },
    ],
  },
  {
    value: 'ga',
    alias: 'ga',
    label: 'Gaeilge',
    children: [
      {
        value: 'default',
        label: '',
      },
    ],
  },
  {
    value: 'is',
    alias: 'is',
    label: 'Íslenska',
    children: [
      {
        value: 'default',
        label: '',
      },
    ],
  },
  {
    value: 'ro',
    alias: 'ro-RO',
    label: 'Română',
    children: [
      {
        value: 'default',
        label: '',
      },
    ],
  },
  {
    value: 'sv',
    alias: 'sv-SE',
    label: 'Svenska',
    hidden: true,
    children: [
      {
        value: 'default',
        label: '',
      },
    ],
  },
  {
    value: 'el',
    alias: 'el-GR',
    label: 'Ελληνικά',
    children: [
      {
        value: 'default',
        label: '',
      },
    ],
  },
  {
    value: 'uk',
    alias: 'uk-UA',
    label: 'Українська',
    children: [
      {
        value: 'default',
        label: '',
      },
    ],
  },
  // {
  //     value: 'mr',
  //     alias: 'mr-IN',
  //     label: 'मराठी',
  //     hidden: true,
  //     children: [
  //         {
  //             value: 'default',
  //             label: '',
  //         },
  //     ],
  // },
  {
    value: 'bn',
    alias: 'bn-IN',
    label: 'বাংলা',
    hidden: true,
    children: [
      {
        value: 'default',
        label: '',
      },
    ],
  },
  {
    value: 'pa',
    alias: 'pa-IN',
    label: 'ਪੰਜਾਬੀ',
    hidden: true,
    children: [
      {
        value: 'default',
        label: '',
      },
    ],
  },
  {
    value: 'gu',
    alias: 'gu-IN',
    label: 'ગુજરાતી',
    hidden: true,
    children: [
      {
        value: 'default',
        label: '',
      },
    ],
  },
  // {
  //     value: 'ta',
  //     alias: 'ta-IN',
  //     label: 'தமிழ்',
  //     hidden: true,
  //     children: [
  //         {
  //             value: 'default',
  //             label: '',
  //         },
  //     ],
  // },
  // {
  //     value: 'te',
  //     alias: 'te-IN',
  //     label: 'తెలుగు',
  //     hidden: true,
  //     children: [
  //         {
  //             value: 'default',
  //             label: '',
  //         },
  //     ],
  // },
  {
    value: 'ml',
    alias: 'ml-IN',
    label: 'മലയാളം',
    hidden: true,
    children: [
      {
        value: 'default',
        label: '',
      },
    ],
  },
  {
    value: 'th',
    alias: 'TH',
    label: 'ภาษาไทย',
    hidden: true,
    children: [
      {
        value: 'default',
        label: '',
      },
    ],
  },
  {
    value: 'my',
    alias: 'my-MM',
    label: 'မြန်မာဘာသာ',
    hidden: true,
    children: [
      {
        value: 'default',
        label: '',
      },
    ],
  },
  {
    value: 'km',
    alias: 'km-KH',
    label: 'ភាសាខ្មែរ',
    children: [
      {
        value: 'default',
        label: '',
      },
    ],
  },
  {
    value: 'fi',
    alias: 'fi-FI',
    label: 'Suomi',
    children: [
      {
        value: 'default',
        label: '',
      },
    ],
  },
  {
    value: 'et',
    alias: 'et-EE',
    label: 'eesti keel',
    children: [
      {
        value: 'default',
        label: '',
      },
    ],
  },
  {
    value: 'bg',
    alias: 'bg-BG',
    label: 'български език',
    children: [
      {
        value: 'default',
        label: '',
      },
    ],
  },
  {
    value: 'hr',
    alias: 'hr-HR',
    label: 'hrvatski jezik',
    children: [
      {
        value: 'default',
        label: '',
      },
    ],
  },
  {
    value: 'lv',
    alias: 'lv-LV',
    label: 'latviešu valoda',
    children: [
      {
        value: 'default',
        label: '',
      },
    ],
  },
  {
    value: 'lo',
    alias: 'lo-LA',
    label: 'ພາສາລາວ',
    children: [
      {
        value: 'default',
        label: '',
      },
    ],
  },
  {
    value: 'da',
    alias: 'da-DK',
    label: 'dansk',
    children: [
      {
        value: 'default',
        label: '',
      },
    ],
  },
  {
    value: 'es-latam',
    alias: 'es-LATAM',
    label: 'Español (América Latina)',
    children: [
      {
        value: 'default',
        label: '',
      },
    ],
  },
  {
    value: 'uz',
    alias: 'uz',
    label: 'Oʻzbek',
    children: [
      {
        value: 'default',
        label: '',
      },
    ],
  },
  {
    value: 'lt',
    alias: 'lt',
    label: 'lietuvių kalba',
    children: [
      {
        value: 'default',
        label: '',
      },
    ],
  },
  {
    value: 'sk',
    alias: 'sk',
    label: 'slovenčina',
    children: [
      {
        value: 'default',
        label: '',
      },
    ],
  },
  {
    value: 'nb',
    alias: 'nb',
    label: 'norsk bokmål',
    children: [
      {
        value: 'default',
        label: '',
      },
    ],
  },
  {
    value: 'kk',
    alias: 'kk',
    label: 'Қазақша',
    hidden: true,
    children: [
      {
        value: 'default',
        label: '',
      },
    ],
  },
  {
    value: 'sl',
    alias: 'sl',
    label: 'slovenski jezik',
    hidden: true,
    children: [
      {
        value: 'default',
        label: '',
      },
    ],
  },
];

export const SAFETY_CENTER_LANGUAGE_LIST: LanguageListType = [
  {
    value: 'id-id',
    alias: 'id-id',
    label: 'Bahasa Indonesia',
    children: [
      {
        value: 'default',
        label: '',
      },
    ],
  },
  {
    value: 'de-de',
    alias: 'de-de',
    label: 'Deutsch',
    children: [
      {
        value: 'default',
        label: '',
      },
    ],
  },
  {
    value: 'en',
    alias: 'en',
    label: 'English',
    children: [
      {
        value: 'default',
        label: '',
      },
      // {
      //     value: 'uk',
      //     label: 'UK',
      // },
    ],
  },
  {
    value: 'en-us',
    alias: 'en-us',
    label: 'English (United States)',
    children: [
      {
        value: 'default',
        label: '',
      },
    ],
  },
  {
    value: 'en-gb',
    alias: 'en-gb',
    label: 'English (United Kingdom)',
    children: [
      {
        value: 'default',
        label: '',
      },
    ],
  },
  {
    value: 'en-ca',
    alias: 'en-ca',
    label: 'English (Canada)',
    children: [
      {
        value: 'default',
        label: '',
      },
    ],
  },
  {
    value: 'en-au',
    alias: 'en-au',
    label: 'English (Austrailia)',
    children: [
      {
        value: 'default',
        label: '',
      },
    ],
  },
  {
    value: 'en-nz',
    alias: 'en-nz',
    label: 'English (New Zealand)',
    children: [
      {
        value: 'default',
        label: '',
      },
    ],
  },
  {
    value: 'en-sg',
    alias: 'en-sg',
    label: 'English (Singapore)',
    children: [
      {
        value: 'default',
        label: '',
      },
    ],
  },
  {
    value: 'en-za',
    alias: 'en-za',
    label: 'English (South Africa)',
    children: [
      {
        value: 'default',
        label: '',
      },
    ],
  },
  {
    value: 'es-es',
    alias: 'es-es',
    label: 'Español',
    children: [
      {
        value: 'default',
        label: '',
      },
    ],
  },
  {
    value: 'es-latam',
    alias: 'es-latam',
    label: 'Español (América Latina)',
    children: [
      {
        value: 'default',
        label: '',
      },
    ],
  },
  {
    value: 'fr-fr',
    alias: 'fr-fr',
    label: 'Français',
    children: [
      {
        value: 'default',
        label: '',
      },
    ],
  },
  {
    value: 'fr_CA',
    alias: 'fr-CA',
    label: 'Français (Canada)',
    children: [
      {
        value: 'default',
        label: '',
      },
    ],
  },
  {
    value: 'it-it',
    alias: 'it-it',
    label: 'Italiano',
    children: [
      {
        value: 'default',
        label: '',
      },
    ],
  },
  {
    value: 'pl-pl',
    alias: 'pl-pl',
    label: 'Polski',
    children: [
      {
        value: 'default',
        label: '',
      },
    ],
  },
  {
    value: 'pt-pt',
    alias: 'pt-pt',
    label: 'Português',
    children: [
      {
        value: 'default',
        label: '',
      },
    ],
  },
  {
    value: 'pt-br',
    alias: 'pt-br',
    label: 'Português (Brasil)',
    children: [
      {
        value: 'default',
        label: '',
      },
    ],
  },
  {
    value: 'vi-vn',
    alias: 'vi-vn',
    label: 'Tiếng Việt',
    children: [
      {
        value: 'default',
        label: '',
      },
    ],
  },
  {
    value: 'tr-tr',
    alias: 'tr-tr',
    label: 'Türkçe',
    children: [
      {
        value: 'default',
        label: '',
      },
    ],
  },
  {
    value: 'ru-ru',
    alias: 'ru-ru',
    label: 'Русский',
    children: [
      {
        value: 'default',
        label: '',
      },
    ],
  },
  {
    value: 'hi',
    alias: 'hi-IN',
    label: 'हिन्दी',
    children: [
      {
        value: 'default',
        label: '',
      },
    ],
  },
  {
    value: 'ko-kr',
    alias: 'ko-kr',
    label: '한국어',
    children: [
      {
        value: 'default',
        label: '',
      },
    ],
  },
  {
    value: 'ja-jp',
    alias: 'ja-jp',
    label: '日本語',
    children: [
      {
        value: 'default',
        label: '',
      },
    ],
  },
  {
    value: 'zh-tw',
    alias: 'zh-tw',
    label: '繁體中文',
    children: [
      {
        value: 'default',
        label: '',
      },
    ],
  },
  {
    value: 'ar-ae',
    alias: 'ar-ae',
    label: 'العربية',
    children: [
      {
        value: 'default',
        label: '',
      },
    ],
  },
  {
    value: 'ar-sa',
    alias: 'ar-sa',
    label: 'لعربية (المملكة العربية السعودية)',
    children: [
      {
        value: 'default',
        label: '',
      },
    ],
  },
  {
    value: 'ar-eg',
    alias: 'ar-eg',
    label: 'العربية (مصر)',
    children: [
      {
        value: 'default',
        label: '',
      },
    ],
  },
  {
    value: 'ur-pk',
    alias: 'ur-pk',
    label: 'اردو',
    children: [
      {
        value: 'default',
        label: '',
      },
    ],
  },
  {
    value: 'ms-my',
    alias: 'ms-my',
    label: 'Bahasa Melayu',
    children: [
      {
        value: 'default',
        label: '',
      },
    ],
  },
  {
    value: 'ceb-ph',
    alias: 'ceb-ph',
    label: 'Cebuano',
    children: [
      {
        value: 'default',
        label: '',
      },
    ],
  },
  {
    value: 'tl-ph',
    alias: 'tl-ph',
    label: 'Tagalog',
    children: [
      {
        value: 'default',
        label: '',
      },
    ],
  },
  {
    value: 'cs',
    alias: 'cs-CZ',
    label: 'Čeština',
    children: [
      {
        value: 'default',
        label: '',
      },
    ],
  },
  {
    value: 'hu',
    alias: 'hu-HU',
    label: 'Magyar',
    children: [
      {
        value: 'default',
        label: '',
      },
    ],
  },
  {
    value: 'nl-nl',
    alias: 'nl-nl',
    label: 'Nederlands',
    hidden: true,
    children: [
      {
        value: 'default',
        label: '',
      },
    ],
  },
  {
    value: 'ro',
    alias: 'ro-RO',
    label: 'Română',
    children: [
      {
        value: 'default',
        label: '',
      },
    ],
  },
  {
    value: 'sv-se',
    alias: 'sv-se',
    label: 'Svenska',
    children: [
      {
        value: 'default',
        label: '',
      },
    ],
  },
  {
    value: 'uk-ua',
    alias: 'uk-ua',
    label: 'Українська',
    children: [
      {
        value: 'default',
        label: '',
      },
    ],
  },
  {
    value: 'el',
    alias: 'el-GR',
    label: 'Ελληνικά',
    children: [
      {
        value: 'default',
        label: '',
      },
    ],
  },
  {
    value: 'he-il',
    alias: 'he-il',
    label: 'עִבְרִית',
    children: [
      {
        value: 'default',
        label: '',
      },
    ],
  },
  // {
  //     value: "mr",
  //     alias: "mr-IN",
  //     label: "मराठी",
  //     hidden: true,
  //     children: [
  //         {
  //             value: "default",
  //             label: "",
  //         },
  //     ],
  // },
  {
    value: 'bn-bd',
    alias: 'bn-bd',
    label: 'বাংলা',
    children: [
      {
        value: 'default',
        label: '',
      },
    ],
  },
  {
    value: 'pa',
    alias: 'pa-IN',
    label: 'ਪੰਜਾਬੀ',
    hidden: true,
    children: [
      {
        value: 'default',
        label: '',
      },
    ],
  },
  {
    value: 'gu',
    alias: 'gu-IN',
    label: 'ગુજરાતી',
    hidden: true,
    children: [
      {
        value: 'default',
        label: '',
      },
    ],
  },
  // {
  //     value: "ta",
  //     alias: "ta-IN",
  //     label: "தமிழ்",
  //     hidden: true,
  //     children: [
  //         {
  //             value: "default",
  //             label: "",
  //         },
  //     ],
  // },
  // {
  //     value: "te",
  //     alias: "te-IN",
  //     label: "తెలుగు",
  //     hidden: true,
  //     children: [
  //         {
  //             value: "default",
  //             label: "",
  //         },
  //     ],
  // },
  {
    value: 'ml',
    alias: 'ml-IN',
    label: 'മലയാളം',
    hidden: true,
    children: [
      {
        value: 'default',
        label: '',
      },
    ],
  },
  {
    value: 'th-th',
    alias: 'th-th',
    label: 'ภาษาไทย',
    hidden: true,
    children: [
      {
        value: 'default',
        label: '',
      },
    ],
  },
  {
    value: 'my',
    alias: 'my-MM',
    label: 'မြန်မာဘာသာ',
    hidden: true,
    children: [
      {
        value: 'default',
        label: '',
      },
    ],
  },
  {
    value: 'km',
    alias: 'km-KH',
    label: 'ភាសាខ្មែរ',
    children: [
      {
        value: 'default',
        label: '',
      },
    ],
  },
  {
    value: 'sl',
    alias: 'sl',
    label: 'slovenski jezik',
    hidden: true,
    children: [
      {
        value: 'default',
        label: '',
      },
    ],
  },
];

const SAFETY_CENTER_REDIRECT_MAP_SIDELINK = {
  en: true,
  'de-DE': true,
  'tr-tr': true,
  pt_BR: true,
  'id-ID': true,
  es: true,
  'ja-jp': true,
};
const SAFETY_CENTER_REDIRECT_MAP_LANGUAGE_SELECTION = {
  en: true,
  'en-us': true,
  'en-gb': true,
  'en-au': true,
  'en-nz': true,
  'en-sg': true,
  'en-za': true,
  'en-ca': true,
  'de-de': true,
  'tr-tr': true,
  'pt-br': true,
  'id-id': true,
  'es-latam': true,
  'ja-jp': true,
  'es-es': true,
  'fr-fr': true,
  'fr-ca': true,
  'it-it': true,
  'ru-ru': true,
  'ko-kr': true,
  'ar-ae': true,
  'ar-sa': true,
  'ar-eg': true,
  'nl-nl': true,
  'th-th': true,
  'vi-vn': true,
  'sv-se': true,
  'he-il': true,
  'ur-pk': true,
  'pt-pt': true,
  'pl-pl': true,
  'bn-bd': true,
  'zh-tw': true,
  'ms-my': true,
  'ceb-ph': true,
  'tl-ph': true,
  'uk-ua': true,
};

const SAFETY_CENTER_ROUTES_MAP: StringMap = {
  '/safety/tools': '/safety/{{lang}}/safety-privacy-controls',
  '/safety/tools/your-connections': '/safety/{{lang}}/community-controls',
  '/safety/tools/your-content': '/safety/{{lang}}/content-controls',
  '/safety/tools/your-account': '/safety/{{lang}}/account-settings',
  '/safety/resources': '/safety/{{lang}}',
  '/safety/resources/2020-us-elections': '/safety/{{lang}}/election-integrity',
  '/safety/resources/covid-19': '/safety/{{lang}}/covid-19',
  '/safety/resources/local-health-resources': '/safety/{{lang}}/covid-19',
  '/safety/resources/impersonation': '/safety/{{lang}}',
  '/safety/resources/safety-videos': '/safety/{{lang}}',
  '/safety/resources/safety-partners': '/safety/{{lang}}/safety-partners',
  '/safety/resources/anti-bully': '/safety/{{lang}}/bullying-prevention',
  '/safety/resources/hacked-account':
    'https://support.tiktok.com/{{lang}}/log-in-troubleshoot/log-in/my-account-has-been-hacked',
  '/safety/resources/digital-wellbeing': '/safety/{{lang}}/well-being',
  '/safety/resources/suicide-hotline-resources': '/safety/{{lang}}/suicide-self-harm/',
  '/safety/resources/for-parents': '/safety/{{lang}}/guardians-guide',
  '/safety/resources/online-safety': '/safety/{{lang}}/our-approach-to-safety',
  '/safety/resources/wellness': '/safety/{{lang}}/well-being',
  '/safety/resources/privacy-and-security': '/safety/{{lang}}/privacy-and-security-on-tiktok',
};

const ARTICLE_TO_COMMUNITY_GUIDELINES_MAP = {
  en: ['en'],
  ar: [
    'ar',
    'ar-ae',
    'ar-bh',
    'ar-dz',
    'ar-eg',
    'ar-iq',
    'ar-jo',
    'ar-kw',
    'ar-lb',
    'ar-ly',
    'ar-ma',
    'ar-mena',
    'ar-om',
    'ar-qa',
    'ar-sa',
    'ar-sy',
    'ar-tn',
    'ar-ye',
  ],
  es: ['es', 'es-es', 'es-ES', 'es-xl'],
  'es-LATAM': ['es-latam', 'es-LATAM'],
  'tr-TR': ['tr', 'tr-tr', 'tr-TR'],
  'ru-RU': ['ru', 'ru-ru', 'ru-RU'],
  fr: ['fr', 'fr-be', 'fr-ca', 'fr-ch', 'fr-fr', 'fr-lu', 'fr-mc'],
  'de-DE': ['de', 'de-at', 'de-ch', 'de-de', 'de-li', 'de-lu', 'de-DE'],
  'it-IT': ['it', 'it-ch', 'it-it', 'it-IT'],
  'pl-PL': ['pl', 'pl-pl', 'pl-PL'],
  'pt-BR': ['pt_BR', 'pt-br', 'pt-BR', 'pu', 'pt', 'pt-pt'],
  'ko-KR': ['ko', 'ko-kr', 'ko-KR', 'ko-kore'],
  'ja-JP': ['ja', 'ja-jp', 'ja-jpan', 'ja-JP'],
  'zh-Hant-TW': ['zh_Hant', 'zh_TW', 'zh-tw', 'zh-hk', 'zh-Hant', 'zh-Hant-TW'],
  'id-ID': ['id', 'id-id', 'in-id', 'in', 'id-ID'],
  'vi-VN': ['vi', 'vi-vn', 'vi-VN'],
  ur: ['ur'],
  'bn-IN': ['bn', 'bn-in', 'bn-IN'],
  'sv-SE': ['sv', 'sv-se', 'sv-SE'],
  NL: ['nl', 'NL', 'nl-be', 'nl-nl', 'nl-NL'],
  TH: ['th', 'th-th', 'TH', 'th-TH'],
  tl: ['fil', 'tl-ph', 'tl', 'fil-ph', 'fil-PH'],
  'ms-MY': ['ms', 'ms-bn', 'ms-my', 'ms-MY'],
  'my-MM': ['my', 'my', 'my-mm', 'my-MM'],
  'km-KH': ['km', 'km-kh', 'km-KH'],
  'et-EE': ['et', 'et-EE'],
  'bg-BG': ['bg', 'bg-BG'],
  'da-DK': ['da', 'da-DK'],
  'fi-FI': ['fi', 'fi-FI'],
  'cs-CZ': ['cs', 'cs-cz', 'cs-CZ'],
  'hr-HR': ['hr', 'hr-HR'],
  'lv-LV': ['lv', 'lv-LV'],
  'ro-RO': ['ro', 'ro-ro', 'ro-RO'],
  'el-GR': ['el', 'el-gr', 'el-GR'],
  'hu-HU': ['hu', 'hu-hu', 'hu-HU'],
  'lo-LA': ['lo', 'lo-LA'],
  'uk-UA': ['uk', 'uk-ua', 'uk-UA'],
  uz: ['uz'],
  lt: ['lt'],
  sk: ['sk'],
  nb: ['nb'],
  kk: ['kk'],
};

const COMMUNITY_GUIDELINES_TO_ARTICLE_MAP: StringMap = {};

const LANGUAGE_ALIAS_MAP: AliasMapType = {
  // value to alias
  v2a: {},
  // alias to value
  a2v: {},
};

const SAFETY_CENTER_LANGUAGE_ALIAS_MAP: AliasMapType = {
  // value to alias
  v2a: {},
  // alias to value
  a2v: {},
};

// 全语言列表，Legal用，17+9个，包括印度小语种
const LANGUAGE_STRING_LIST: Array<string> = [];
const SAFETY_CENTER_LANGUAGE_STRING_LIST: Array<string> = [];

// 除印度小语种以外的语言列表，17个
const LANGUAGE_STRING_LIST_VISIBLE: Array<string> = [];
const SAFETY_CENTER_LANGUAGE_STRING_LIST_VISIBLE: Array<string> = [];

const populateAliasMap = (
  langList: LanguageListType,
  map: AliasMapType,
  stringList: Array<string>,
  stringVisibleList: Array<string>,
) =>
  langList.forEach(({ value, alias, hidden }) => {
    if (alias) {
      map.v2a[value] = alias;
      map.a2v[alias] = value;

      stringList.push(alias, value);
      if (!hidden) {
        stringVisibleList.push(alias, value);
      }
    }
  });

const transposeMap = (inMap: { [key: string]: string[] }, outMap: StringMap) => {
  for (const [key, value] of Object.entries(inMap)) {
    for (const v of value) {
      outMap[v] = key;
    }
  }
};

transposeMap(ARTICLE_TO_COMMUNITY_GUIDELINES_MAP, COMMUNITY_GUIDELINES_TO_ARTICLE_MAP);
populateAliasMap(LANGUAGE_LIST, LANGUAGE_ALIAS_MAP, LANGUAGE_STRING_LIST, LANGUAGE_STRING_LIST_VISIBLE);
populateAliasMap(
  SAFETY_CENTER_LANGUAGE_LIST,
  SAFETY_CENTER_LANGUAGE_ALIAS_MAP,
  SAFETY_CENTER_LANGUAGE_STRING_LIST,
  SAFETY_CENTER_LANGUAGE_STRING_LIST_VISIBLE,
);

const REGION_TO_LANGUAGE_MAP = {
  US: 'en',
  GB: 'en-GB',
  IN: 'en-IN',
  au: 'en-AU',
  ja: 'ja-JP',
  de: 'de-DE',
  BR: 'pt-BR',
  fr: 'fr',
  KR: 'ko-KR',
  IT: 'it-IT',
  es: 'es',
};

interface StringMap {
  [key: string]: string;
}

const ARTICLE_TO_NEWSROOM_MAP: StringMap = {
  en: 'en-us',
  'en-IN': 'en-in',
  'en-GB': 'en-gb',
  fr: 'fr-fr',
  de: 'de-de',
  ja: 'ja-jp',
  ko: 'ko-kr',
  vi: 'vi-vn',
  id: 'in-id',
  it: 'it-it',
  es: 'es-es',
  ru: 'ru-ru',
  my: 'en-my',
  pt_BR: 'pt-br',
  zh_Hant: 'zh-tw',
  nl: 'nl-nl',
  th: 'th-th',
  tr: 'tr-tr',
  ur: 'ur-pk',
  bn: 'bn-bd',
};

const ACCESS_TO_MORE_INFO_REGION = [
  { value: 'en', region: 'US', alias: 'en', label: 'United States', children: [{ value: 'default', label: '' }] },
  {
    value: 'en-GB',
    region: 'GB',
    alias: 'en-GB',
    label: 'United Kingdom',
    children: [{ value: 'default', label: '' }],
  },
  { value: 'en-IN', region: 'IN', alias: 'en-IN', label: 'India', children: [{ value: 'default', label: '' }] },
  { value: 'en-au', region: 'AU', alias: 'en-AU', label: 'Australia', children: [{ value: 'default', label: '' }] },
  { value: 'ja', region: 'JP', alias: 'ja-JP', label: 'Japan', children: [{ value: 'default', label: '' }] },
  { value: 'de-de', region: 'DE', alias: 'de-DE', label: 'Germany', children: [{ value: 'default', label: '' }] },
  { value: 'pt_BR', region: 'BR', alias: 'pt-BR', label: 'Brazil', children: [{ value: 'default', label: '' }] },
  { value: 'fr-fr', region: 'FR', alias: 'fr', label: 'France', children: [{ value: 'default', label: '' }] },
  { value: 'ko-kr', region: 'KR', alias: 'ko-KR', label: 'South Korea', children: [{ value: 'default', label: '' }] },
  { value: 'it-IT', region: 'IT', alias: 'it-IT', label: 'Italy', children: [{ value: 'default', label: '' }] },
  { value: 'es-MX', region: 'MX', alias: 'es-MX', label: 'Mexico', children: [{ value: 'default', label: '' }] },
  { value: 'es-SP', region: 'SP', alias: 'es-SP', label: 'Spain', children: [{ value: 'default', label: '' }] },
  { value: 'vi-VN', region: 'VI', alias: 'vi-VN', label: 'Vietnam', children: [{ value: 'default', label: '' }] },
  { value: 'ru-ru', region: 'RU', alias: 'ru-RU', label: 'Russia', children: [{ value: 'default', label: '' }] },
  { value: 'th', region: 'TH', alias: 'TH', label: 'Thailand', children: [{ value: 'default', label: '' }] },
  { value: 'tr-tr', region: 'TR', alias: 'tr-TR', label: 'Turkey', children: [{ value: 'default', label: '' }] },
  { value: 'ar-sa', region: 'SA', alias: 'ar', label: 'Saudi Arabia', children: [{ value: 'default', label: '' }] },
  { value: 'ar-ae', region: 'UAE', alias: 'ar-AE', label: 'U.A.E', children: [{ value: 'default', label: '' }] },
  {
    value: 'zh-Hant-TW',
    region: 'TW',
    alias: 'zh-Hant-TW',
    label: 'Taiwan',
    children: [{ value: 'default', label: '' }],
  },
  { value: 'ur', region: 'UR', alias: 'ur', label: 'Pakistan', children: [{ value: 'default', label: '' }] },
  { value: 'bn-IN', region: 'BN', alias: 'bn-IN', label: 'Bangladesh', children: [{ value: 'default', label: '' }] },
  { value: 'id-ID', region: 'ID', alias: 'id-ID', label: 'Indonesia', children: [{ value: 'default', label: '' }] },
];

// YOUTH-PORTAL-LANGUAGE-LIST
const YOUTH_PORTAL_LANGUAGE: Language[] = [
  { value: 'en', alias: 'en', label: 'English', children: [{ value: 'default', label: '' }] },
  { value: 'ja', alias: 'ja-JP', label: '日本語', children: [{ value: 'default', label: '' }] },
  { value: 'de', alias: 'de-DE', label: 'Deutsch', children: [{ value: 'default', label: '' }] },
  { value: 'pt_BR', alias: 'pt-BR', label: 'Português', children: [{ value: 'default', label: '' }] },
  { value: 'fr', alias: 'fr', label: 'Français', children: [{ value: 'default', label: '' }] },
  { value: 'ko', alias: 'ko-KR', label: '한국어', children: [{ value: 'default', label: '' }] },
  { value: 'it', alias: 'it-IT', label: 'Italiano', children: [{ value: 'default', label: '' }] },
  { value: 'es', alias: 'es', label: 'Español', children: [{ value: 'default', label: '' }] },
  { value: 'vi', alias: 'vi-VN', label: 'Tiếng Việt', children: [{ value: 'default', label: '' }] },
  { value: 'ru', alias: 'ru-RU', label: 'Русский', children: [{ value: 'default', label: '' }] },
  { value: 'tr', alias: 'tr-TR', label: 'Türkçe', children: [{ value: 'default', label: '' }] },
  { value: 'ar', alias: 'ar', label: 'العربية', children: [{ value: 'default', label: '' }] },
  { value: 'zh_Hant', alias: 'zh-Hant-TW', label: '繁體中文', children: [{ value: 'default', label: '' }] },
  { value: 'th', alias: 'TH', label: 'ภาษาไทย', children: [{ value: 'default', label: '' }] },
  { value: 'id', alias: 'id-ID', label: 'Bahasa Indonesia', children: [{ value: 'default', label: '' }] },
  { value: 'hi', alias: 'hi-IN', label: 'हिन्दी', children: [{ value: 'default', label: '' }] },
  // { value: 'mr', alias: 'mr-IN', label: 'मराठी', children: [{ value: 'default', label: '' }] },
  { value: 'pa', alias: 'pa-IN', label: 'ਪੰਜਾਬੀ', children: [{ value: 'default', label: '' }] },
  { value: 'gu', alias: 'gu-IN', label: 'ગુજરાતી', children: [{ value: 'default', label: '' }] },
  // { value: 'te', alias: 'te-IN', label: 'తెలుగు', children: [{ value: 'default', label: '' }] },
  { value: 'ml', alias: 'ml-IN', label: 'മലയാളം', children: [{ value: 'default', label: '' }] },
  { value: 'bn', alias: 'bn-IN', label: 'বাংলা', hidden: true, children: [{ value: 'default', label: '' }] },
  { value: 'ur', alias: 'ur', label: 'اردو', children: [{ value: 'default', label: '' }] },
  { value: 'nl', alias: 'NL', label: 'Nederlands', children: [{ value: 'default', label: '' }] },
];

// TRANSPARENCY-CENTER-LANGUAGE-LIST
const TRANSPARENCY_CENTER_LANGUAGE: Language[] = [
  { value: 'id', alias: 'id-ID', label: 'Bahasa Indonesia', children: [{ value: 'default', label: '' }] },
  { value: 'de', alias: 'de-DE', label: 'Deutsch', children: [{ value: 'default', label: '' }] },
  { value: 'en', alias: 'en', label: 'English', children: [{ value: 'default', label: '' }] },
  { value: 'es', alias: 'es', label: 'Español', children: [{ value: 'default', label: '' }] },
  { value: 'fr', alias: 'fr', label: 'Français', children: [{ value: 'default', label: '' }] },
  { value: 'it', alias: 'it-IT', label: 'Italiano', children: [{ value: 'default', label: '' }] },
  { value: 'pl', alias: 'pl-PL', label: 'Polski', children: [{ value: 'default', label: '' }] },
  { value: 'pt_BR', alias: 'pt-BR', label: 'Português', children: [{ value: 'default', label: '' }] },
  { value: 'vi', alias: 'vi-VN', label: 'Tiếng Việt', children: [{ value: 'default', label: '' }] },
  { value: 'tr', alias: 'tr-TR', label: 'Türkçe', children: [{ value: 'default', label: '' }] },
  { value: 'ru', alias: 'ru-RU', label: 'Русский', children: [{ value: 'default', label: '' }] },
  { value: 'hi', alias: 'hi-IN', label: 'हिन्दी', children: [{ value: 'default', label: '' }] },
  { value: 'ko', alias: 'ko-KR', label: '한국어', children: [{ value: 'default', label: '' }] },
  { value: 'ar', alias: 'ar', label: 'العربية', children: [{ value: 'default', label: '' }] },
  { value: 'th', alias: 'TH', label: 'ภาษาไทย', children: [{ value: 'default', label: '' }] },
  { value: 'ja', alias: 'ja-JP', label: '日本語', children: [{ value: 'default', label: '' }] },
  { value: 'zh_Hant', alias: 'zh-Hant-TW', label: '繁體中文', children: [{ value: 'default', label: '' }] },
];

// CMS_LANGUAGE_LIST
const CMS_LANGUAGE_LIST: Language[] = [
  { value: 'en', alias: 'en', label: 'English', children: [{ value: 'default', label: '' }] },
  { value: 'ar', alias: 'ar', label: 'العربية', children: [{ value: 'default', label: '' }] },
  { value: 'bg', alias: 'bg', label: 'български език', children: [{ value: 'default', label: '' }] },
  { value: 'cs', alias: 'cs-CZ', label: 'Čeština', children: [{ value: 'default', label: '' }] },
  { value: 'da', alias: 'da', label: 'Dansk', children: [{ value: 'default', label: '' }] },
  { value: 'de', alias: 'de-DE', label: 'Deutsch', children: [{ value: 'default', label: '' }] },
  { value: 'el', alias: 'el-GR', label: 'Ελληνικά', children: [{ value: 'default', label: '' }] },
  { value: 'es', alias: 'es-ES', label: 'Español', children: [{ value: 'default', label: '' }] },
  { value: 'et', alias: 'et', label: 'Eesti keel', children: [{ value: 'default', label: '' }] },
  { value: 'fi', alias: 'fi-FI', label: 'Suomi', children: [{ value: 'default', label: '' }] },
  { value: 'fr', alias: 'fr', label: 'Français', children: [{ value: 'default', label: '' }] },
  { value: 'ga', alias: 'ga', label: 'Gaeilge', children: [{ value: 'default', label: '' }] },
  { value: 'he_IL', alias: 'he-IL', label: 'עִבְרִית', children: [{ value: 'default', label: '' }] },
  { value: 'hi', alias: 'hi-IN', label: 'हिन्दी', children: [{ value: 'default', label: '' }] },
  { value: 'hr', alias: 'hr', label: 'Hrvatski jezik', children: [{ value: 'default', label: '' }] },
  { value: 'hu', alias: 'hu-HU', label: 'Magyar', children: [{ value: 'default', label: '' }] },
  { value: 'id', alias: 'id-ID', label: 'Bahasa Indonesia', children: [{ value: 'default', label: '' }] },
  { value: 'is', alias: 'is', label: 'Íslenska', children: [{ value: 'default', label: '' }] },
  { value: 'it', alias: 'it-IT', label: 'Italiano', children: [{ value: 'default', label: '' }] },
  { value: 'ja', alias: 'ja-JP', label: '日本語', children: [{ value: 'default', label: '' }] },
  { value: 'kk', alias: 'kk', label: 'қазақ тілі', children: [{ value: 'default', label: '' }] },
  { value: 'ko', alias: 'ko-KR', label: '한국어', children: [{ value: 'default', label: '' }] },
  { value: 'lt', alias: 'lt', label: 'Lietuvių kalba', children: [{ value: 'default', label: '' }] },
  { value: 'lv', alias: 'lv', label: 'Latviešu valoda', children: [{ value: 'default', label: '' }] },
  { value: 'nb', alias: 'nb', label: 'Norsk bokmål', children: [{ value: 'default', label: '' }] },
  { value: 'nl', alias: 'nl', label: 'Nederlands', children: [{ value: 'default', label: '' }] },
  { value: 'pl', alias: 'pl-PL', label: 'Polski', children: [{ value: 'default', label: '' }] },
  { value: 'pt_BR', alias: 'pt-BR', label: 'Português', children: [{ value: 'default', label: '' }] },
  { value: 'ro', alias: 'ro-RO', label: 'Română', children: [{ value: 'default', label: '' }] },
  { value: 'ru', alias: 'ru-RU', label: 'Русский', children: [{ value: 'default', label: '' }] },
  { value: 'sk', alias: 'sk', label: 'Slovenčina', children: [{ value: 'default', label: '' }] },
  { value: 'sl', alias: 'sl', label: 'Slovenski jezik', children: [{ value: 'default', label: '' }] },
  { value: 'sv', alias: 'sv-SE', label: 'Svenska', children: [{ value: 'default', label: '' }] },
  { value: 'th', alias: 'th-TH', label: 'ภาษาไทย', children: [{ value: 'default', label: '' }] },
  { value: 'tr', alias: 'tr-TR', label: 'Türkçe', children: [{ value: 'default', label: '' }] },
  { value: 'uz', alias: 'uz', label: 'Uzbek', children: [{ value: 'default', label: '' }] },
  { value: 'vi', alias: 'vi-VN', label: 'Tiếng Việt', children: [{ value: 'default', label: '' }] },
  { value: 'zh_Hant', alias: 'zh-Hant-TW', label: '繁體中文', children: [{ value: 'default', label: '' }] },
];

// SUPPORT_LANGUAGE_LIST
const SUPPORT_LANGUAGE_LIST: Language[] = [
  { value: 'id', alias: 'id-ID', label: 'Bahasa Indonesia', children: [{ value: 'default', label: '' }] },
  { value: 'de', alias: 'de-DE', label: 'Deutsch', children: [{ value: 'default', label: '' }] },
  { value: 'en', alias: 'en', label: 'English', children: [{ value: 'default', label: '' }] },
  { value: 'es', alias: 'es', label: 'Español', children: [{ value: 'default', label: '' }] },
  { value: 'fr', alias: 'fr', label: 'Français', children: [{ value: 'default', label: '' }] },
  { value: 'it', alias: 'it-IT', label: 'Italiano', children: [{ value: 'default', label: '' }] },
  { value: 'pt_BR', alias: 'pt-BR', label: 'Português', children: [{ value: 'default', label: '' }] },
  { value: 'vi', alias: 'vi-VN', label: 'Tiếng Việt', children: [{ value: 'default', label: '' }] },
  { value: 'tr', alias: 'tr-TR', label: 'Türkçe', children: [{ value: 'default', label: '' }] },
  { value: 'ru', alias: 'ru-RU', label: 'Русский', children: [{ value: 'default', label: '' }] },
  { value: 'hi', alias: 'hi-IN', label: 'हिन्दी', children: [{ value: 'default', label: '' }] },
  { value: 'ko', alias: 'ko-KR', label: '한국어', children: [{ value: 'default', label: '' }] },
  { value: 'ja', alias: 'ja-JP', label: '日本語', children: [{ value: 'default', label: '' }] },
  { value: 'zh_Hant', alias: 'zh-Hant-TW', label: '繁體中文', children: [{ value: 'default', label: '' }] },
  { value: 'ar', alias: 'ar', label: 'العربية', children: [{ value: 'default', label: '' }] },
  { value: 'th', alias: 'TH', label: 'ภาษาไทย', children: [{ value: 'default', label: '' }] },
  { value: 'he_IL', alias: 'he-IL', label: 'עִבְרִית', children: [{ value: 'default', label: '' }] },
  { value: 'nl', alias: 'NL', label: 'Nederlands', children: [{ value: 'default', label: '' }] },
  // EEU - 5
  { value: 'cs', alias: 'cs-CZ', label: 'Čeština', children: [{ value: 'default', label: '' }] },
  { value: 'el', alias: 'el-GR', label: 'Ελληνικά', children: [{ value: 'default', label: '' }] },
  { value: 'pl', alias: 'pl-PL', label: 'Polski', children: [{ value: 'default', label: '' }] },
  { value: 'ro', alias: 'ro-RO', label: 'Română', children: [{ value: 'default', label: '' }] },
  { value: 'sv', alias: 'sv-SE', label: 'Svenska', children: [{ value: 'default', label: '' }] },
  // 03/15 new 2 languages
  { value: 'ga', alias: 'ga', label: 'Gaeilge', children: [{ value: 'default', label: '' }] },
  { value: 'is', alias: 'is', label: 'Íslenska', children: [{ value: 'default', label: '' }] },
  // 12/18 new 3 languages
  { value: 'hu', alias: 'hu-HU', label: 'Magyar', children: [{ value: 'default', label: '' }] },
  { value: 'kk', alias: 'kk', label: 'қазақ тілі', children: [{ value: 'default', label: '' }] },
  { value: 'uz', alias: 'uz', label: 'Uzbek', children: [{ value: 'default', label: '' }] },
  // 7/26 new 10 languages
  { value: 'bg', alias: 'bg', label: 'български език', children: [{ value: 'default', label: '' }] },
  { value: 'hr', alias: 'hr', label: 'Hrvatski jezik', children: [{ value: 'default', label: '' }] },
  { value: 'da', alias: 'da', label: 'Dansk', children: [{ value: 'default', label: '' }] },
  { value: 'et', alias: 'et', label: 'Eesti keel', children: [{ value: 'default', label: '' }] },
  { value: 'fi', alias: 'fi-FI', label: 'Suomi', children: [{ value: 'default', label: '' }] },
  { value: 'lv', alias: 'lv', label: 'Latviešu valoda', children: [{ value: 'default', label: '' }] },
  { value: 'lt', alias: 'lt', label: 'Lietuvių kalba', children: [{ value: 'default', label: '' }] },
  { value: 'nb', alias: 'nb', label: 'Norsk bokmål', children: [{ value: 'default', label: '' }] },
  { value: 'sk', alias: 'sk', label: 'Slovenčina', children: [{ value: 'default', label: '' }] },
  { value: 'sl', alias: 'sl', label: 'Slovenski jezik', children: [{ value: 'default', label: '' }] },
];

type LangCode =
  | 'en'
  | 'ja'
  | 'zh_Hant'
  | 'id'
  | 'de'
  | 'es'
  | 'fr'
  | 'it'
  | 'pt_BR'
  | 'vi'
  | 'tr'
  | 'ru'
  | 'hi'
  | 'ko'
  | 'ar'
  | 'ur'
  | 'he_IL'
  | 'he_il'
  | 'ar_mena'
  | 'bg'
  | 'bn'
  | 'ceb'
  | 'cs'
  | 'da'
  | 'el'
  | 'et'
  | 'fi'
  | 'fil'
  | 'fr_CA'
  | 'gu'
  | 'hr'
  | 'hu'
  | 'jv'
  | 'km'
  | 'lt'
  | 'lv'
  | 'mr'
  | 'ms'
  | 'my'
  | 'nb'
  | 'nl'
  | 'pl'
  | 'ro'
  | 'sk'
  | 'sv'
  | 'th'
  | 'uk'
  | 'uz'
  | 'zh_Hans'
  | 'ur_pk';

const lang: Record<LangCode, Language> = {
  en: { value: 'en', alias: 'en', label: 'English', children: [{ value: 'default', label: '' }] },
  ja: { value: 'ja', alias: 'ja-JP', label: '日本語', children: [{ value: 'default', label: '' }] },
  zh_Hant: { value: 'zh_Hant', alias: 'zh-Hant-TW', label: '繁體中文', children: [{ value: 'default', label: '' }] },
  id: { value: 'id', alias: 'id-ID', label: 'Bahasa Indonesia', children: [{ value: 'default', label: '' }] },
  de: { value: 'de', alias: 'de-DE', label: 'Deutsch', children: [{ value: 'default', label: '' }] },
  es: { value: 'es', alias: 'es', label: 'Español', children: [{ value: 'default', label: '' }] },
  fr: { value: 'fr', alias: 'fr', label: 'Français (France)', children: [{ value: 'default', label: '' }] },
  it: { value: 'it', alias: 'it-IT', label: 'Italiano', children: [{ value: 'default', label: '' }] },
  pt_BR: { value: 'pt_BR', alias: 'pt-BR', label: 'Português', children: [{ value: 'default', label: '' }] },
  vi: { value: 'vi', alias: 'vi-VN', label: 'Tiếng Việt', children: [{ value: 'default', label: '' }] },
  tr: { value: 'tr', alias: 'tr-TR', label: 'Türkçe', children: [{ value: 'default', label: '' }] },
  ru: { value: 'ru', alias: 'ru-RU', label: 'Русский', children: [{ value: 'default', label: '' }] },
  hi: { value: 'hi', alias: 'hi-IN', label: 'हिन्दी', children: [{ value: 'default', label: '' }] },
  ko: { value: 'ko', alias: 'ko-KR', label: '한국어', children: [{ value: 'default', label: '' }] },
  ar: { value: 'ar', alias: 'ar', label: 'العربية', children: [{ value: 'default', label: '' }] },
  ur: { value: 'ur', alias: 'ur', label: 'اردو', children: [{ value: 'default', label: '' }] },
  ur_pk: { value: 'ur-pk', alias: 'ur-PK', label: 'اردو', children: [{ value: 'default', label: '' }] },
  he_IL: { value: 'he_IL', alias: 'he-IL', label: 'עִבְרִית', children: [{ value: 'default', label: '' }] },
  he_il: { value: 'he-il', alias: 'he-IL', label: 'עִבְרִית', children: [{ value: 'default', label: '' }] },
  ar_mena: { value: 'ar-mena', alias: 'ar-mena', label: 'Arabic - MENA', children: [{ value: 'default', label: '' }] },
  bg: { value: 'bg', alias: 'bg', label: 'български език', children: [{ value: 'default', label: '' }] },
  bn: { value: 'bn', alias: 'bn-IN', label: 'বাংলা', children: [{ value: 'default', label: '' }] },
  ceb: { value: 'ceb', alias: 'ceb-PH', label: 'Sinugbuanong Binisayâ', children: [{ value: 'default', label: '' }] },
  cs: { value: 'cs', alias: 'cs-CZ', label: 'Čeština', children: [{ value: 'default', label: '' }] },
  da: { value: 'da', alias: 'da', label: 'dansk', children: [{ value: 'default', label: '' }] },
  el: { value: 'el', alias: 'el-GR', label: 'Ελληνικά', children: [{ value: 'default', label: '' }] },
  et: { value: 'et', alias: 'et', label: 'eesti keel', children: [{ value: 'default', label: '' }] },
  fi: { value: 'fi', alias: 'fi-FI', label: 'Suomi', children: [{ value: 'default', label: '' }] },
  fil: { value: 'fil', alias: 'fil-PH', label: 'Filipino', children: [{ value: 'default', label: '' }] },
  fr_CA: { value: 'fr_CA', alias: 'fr-CA', label: 'Français (Canada)', children: [{ value: 'default', label: '' }] },
  gu: { value: 'gu', alias: 'gu-IN', label: 'ગુજરાતી', children: [{ value: 'default', label: '' }] },
  hr: { value: 'hr', alias: 'hr', label: 'hrvatski jezik', children: [{ value: 'default', label: '' }] },
  hu: { value: 'hu', alias: 'hu-HU', label: 'Magyar', children: [{ value: 'default', label: '' }] },
  jv: { value: 'jv', alias: 'jv-ID', label: 'Basa Jawa', children: [{ value: 'default', label: '' }] },
  km: { value: 'km', alias: 'km-KH', label: 'ភាសាខ្មែរ', children: [{ value: 'default', label: '' }] },
  lt: { value: 'lt', alias: 'lt', label: 'lietuvių kalba', children: [{ value: 'default', label: '' }] },
  lv: { value: 'lv', alias: 'lv', label: 'Latviešu valoda', children: [{ value: 'default', label: '' }] },
  mr: { value: 'mr', alias: 'mr', label: 'मराठी', children: [{ value: 'default', label: '' }] },
  ms: { value: 'ms', alias: 'ms-MY', label: 'Bahasa Melayu', children: [{ value: 'default', label: '' }] },
  my: { value: 'my', alias: 'my-MM', label: 'မြန်မာဘာသာ', children: [{ value: 'default', label: '' }] },
  nb: { value: 'nb', alias: 'nb', label: 'norsk bokmål', children: [{ value: 'default', label: '' }] },
  nl: { value: 'nl', alias: 'nl-NL', label: 'Nederlands', children: [{ value: 'default', label: '' }] },
  pl: { value: 'pl', alias: 'pl-PL', label: 'Polski', children: [{ value: 'default', label: '' }] },
  ro: { value: 'ro', alias: 'ro-RO', label: 'Română', children: [{ value: 'default', label: '' }] },
  sk: { value: 'sk', alias: 'sk', label: 'slovenčina', children: [{ value: 'default', label: '' }] },
  sv: { value: 'sv', alias: 'sv-SE', label: 'Svenska', children: [{ value: 'default', label: '' }] },
  th: { value: 'th', alias: 'th-TH', label: 'ภาษาไทย', children: [{ value: 'default', label: '' }] },
  uk: { value: 'uk', alias: 'uk-UA', label: 'Українська', children: [{ value: 'default', label: '' }] },
  uz: { value: 'uz', alias: 'uz', label: 'Oʻzbek', children: [{ value: 'default', label: '' }] },
  zh_Hans: { value: 'zh_Hans', alias: 'zh-Hans', label: '简体中文', children: [{ value: 'default', label: '' }] },
};

const ALL_STARLING_LANG: Language[] = [
  lang.ar,
  lang.bg,
  lang.bn,
  lang.ceb,
  lang.cs,
  lang.da,
  lang.de,
  lang.el,
  lang.en,
  lang.es,
  lang.et,
  lang.fi,
  lang.fil,
  lang.fr,
  lang.fr_CA,
  lang.gu,
  lang.he_IL,
  lang.hi,
  lang.hr,
  lang.hu,
  lang.id,
  lang.it,
  lang.ja,
  lang.jv,
  lang.km,
  lang.ko,
  lang.lt,
  lang.lv,
  lang.mr,
  lang.ms,
  lang.my,
  lang.nb,
  lang.nl,
  lang.pl,
  lang.pt_BR,
  lang.ro,
  lang.ru,
  lang.sk,
  lang.sv,
  lang.th,
  lang.tr,
  lang.uk,
  lang.ur,
  lang.uz,
  lang.vi,
  lang.zh_Hans,
  lang.zh_Hant,
];

const PRIVACY_LANGUAGE_LIST = [lang.en, lang.ja, lang.pt_BR, lang.de, lang.fr, lang.it, lang.es, lang.vi];
const CONTENT_REMOVAL_LANGUAGE_LIST = [lang.tr];
const PR_LANGUAGE_LIST = [lang.en, lang.ja, lang.ko, lang.es, lang.de];
const TRANSACTION_LANGUAGE_LIST = [lang.en, lang.fr, lang.de];
const FEEDBACK_LANGUAGE_LIST = [
  lang.id,
  lang.de,
  lang.en,
  lang.es,
  lang.fr,
  lang.it,
  lang.pt_BR,
  lang.vi,
  lang.tr,
  lang.ru,
  lang.hi,
  lang.ko,
  lang.ja,
  lang.zh_Hant,
  lang.ar,
  lang.he_IL,
];
const ACCOUNT_VERIFICATION_LANGUAGE_LIST = [
  lang.id,
  lang.de,
  lang.en,
  lang.es,
  lang.fr,
  lang.it,
  lang.pt_BR,
  lang.vi,
  lang.tr,
  lang.ru,
  lang.hi,
  lang.ko,
  lang.ja,
  lang.zh_Hant,
  lang.ar,
  lang.he_IL,
];
const EFFECT_HOUSE_LANGUAGE_LIST = [
  lang.id,
  lang.de,
  lang.en,
  lang.es,
  lang.fr,
  lang.it,
  lang.pt_BR,
  lang.vi,
  lang.tr,
  lang.ru,
  lang.hi,
  lang.ko,
  lang.ja,
  lang.zh_Hant,
  lang.ar,
  lang.he_IL,
];
const REPORTS_LANGUAGE_LIST = [lang.en, lang.ja, lang.pt_BR, lang.de, lang.fr, lang.it, lang.es];
const LICENSING_LANGUAGE_LIST = [lang.en];
const EUREQUEST_LANGUAGE_LIST = [lang.en, lang.fr, lang.de, lang.es, lang.it];
const DPO_LANGUAGE_LIST = [lang.en];
const DPO_QUEBEC_LANGUAGE_LIST = [lang.en, lang.fr];
const SCM_APPEAL_LANGUAGE_LIST = [lang.en];
const AVMS_LANGUAGE_LIST = [lang.en];
const RTL_LANGUAGE = [lang.ar, lang.ur, lang.he_IL, lang.he_il, lang.ar_mena, lang.ur_pk].map(({ value }) => value);
const COPYRIGHT_LANGUAGE_LIST = ALL_STARLING_LANG;
const TRADEMARK_LANGUAGE_LIST = ALL_STARLING_LANG;
const IP_COUNTER_LANGUAGE_LIST = ALL_STARLING_LANG;
const EDR_LANGUAGE_LIST = [lang.en];
const ECOM_IPR_LANGUAGE_LIST = [lang.en];

export type LanguageList = Language[];

export {
  LANGUAGE_ALIAS_MAP,
  LANGUAGE_STRING_LIST,
  LANGUAGE_STRING_LIST_VISIBLE,
  SAFETY_CENTER_LANGUAGE_ALIAS_MAP,
  SAFETY_CENTER_LANGUAGE_STRING_LIST,
  SAFETY_CENTER_LANGUAGE_STRING_LIST_VISIBLE,
  ACCESS_TO_MORE_INFO_REGION,
  YOUTH_PORTAL_LANGUAGE,
  TRANSPARENCY_CENTER_LANGUAGE,
  CMS_LANGUAGE_LIST,
  SUPPORT_LANGUAGE_LIST,
  REGION_TO_LANGUAGE_MAP,
  PRIVACY_LANGUAGE_LIST,
  REPORTS_LANGUAGE_LIST,
  EUREQUEST_LANGUAGE_LIST,
  PR_LANGUAGE_LIST,
  TRANSACTION_LANGUAGE_LIST,
  FEEDBACK_LANGUAGE_LIST,
  IP_COUNTER_LANGUAGE_LIST,
  CONTENT_REMOVAL_LANGUAGE_LIST,
  LICENSING_LANGUAGE_LIST,
  DPO_LANGUAGE_LIST,
  DPO_QUEBEC_LANGUAGE_LIST,
  SCM_APPEAL_LANGUAGE_LIST,
  AVMS_LANGUAGE_LIST,
  RTL_LANGUAGE,
  ARTICLE_TO_NEWSROOM_MAP,
  SAFETY_CENTER_REDIRECT_MAP_LANGUAGE_SELECTION,
  SAFETY_CENTER_ROUTES_MAP,
  SAFETY_CENTER_REDIRECT_MAP_SIDELINK,
  COMMUNITY_GUIDELINES_TO_ARTICLE_MAP,
  ACCOUNT_VERIFICATION_LANGUAGE_LIST,
  EFFECT_HOUSE_LANGUAGE_LIST,
  COPYRIGHT_LANGUAGE_LIST,
  TRADEMARK_LANGUAGE_LIST,
  EDR_LANGUAGE_LIST,
  ECOM_IPR_LANGUAGE_LIST,
};
