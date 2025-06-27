import { isProd } from './index';

export function initSlardar(pid: string, bid: string, region = ''): void {
  // Don't init Slardar for India users.
  if (region === 'IN') {
    return;
  }

  const slardarConfig = {
    sample: {
      sampleRate: 1,
    },
    bid: bid || 'tiktok_web_article',
    pid,
    plugins: {
      ajax: {
        ignoreUrls: [/\.byteoversea\.com/],
      },
      fetch: {
        ignoreUrls: [/\.byteoversea\.com/],
      },
      resourceError: {
        ignoreUrls: [],
      },
      blankScreen: {
        rootSelector: '#main', // 可选，querySelector语法, 默认body, 开始计算得分的根元素选择器
        autoDetect: true, // 可选, 是否自动检测, 默认为true
        threshold: 1.5, // 得分阈值，小于阈值则判断为白屏
        screenshot: true, // 是否在判断为白屏的时候截屏上
        mask: false, // 截屏时对页面数据进行脱敏
        partialShot: false, // 默认截屏 document.body，启用该属性后，则只截屏传入的 rootSelector
        quality: 0.1, // 如你想更清晰截屏时的信息，可相对提高该属性。
      },
    },
    env: isProd() ? 'production' : 'development',
    release: process.env.releaseVersion,
  };

  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'Slardar'.
  window.Slardar('init', slardarConfig);
  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'Slardar'.
  window.Slardar('start');
}

export function captureMessage(title = '', level = '', extra = {}): void {
  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'Slardar'.
  if (!Slardar) {
    console.error('Slardar required initialize before use');
    return;
  }

  const nonErrorLogLevels = ['info', 'debug', 'warning'];
  if (nonErrorLogLevels.includes(level)) {
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'Slardar'.
    window.Slardar('sendLog', {
      content: title,
      level,
      extra,
    });
    return;
  }

  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'Slardar'.
  window.Slardar('captureException', new Error(title), {
    level,
    ...extra,
  });
}

export function sendWebformEvent({
  name,
  pageId,
  bid = 'tiktok_web_article',
}: {
  name: string;
  pageId: string;
  bid?: string;
}): void {
  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'Slardar'.
  if (!window.Slardar) {
    console.error('Slardar required initialize before use');
    return;
  }
  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'Slardar'.
  window.Slardar('sendEvent', {
    name,
    metrics: {
      count: 1,
    },
    categories: {
      bid,
      pageId,
    },
  });
}
