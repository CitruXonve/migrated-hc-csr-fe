// Domains for online environment.
const SUPPORT = 'support.tiktok.com';

// Domains for online environment.
const TTP_SUPPORT = 'support.us.tiktok.com';
const TTP_SUPPORT_TIKTOKW = 'support.tiktokw.us';
const TTP2_SUPPORT_TIKTOKW = 'support-ttp2.tiktokw.us';

// Domain for local development.
const DEV_SUPPORT = 'dev-support.tiktok.com';

// domain for ie
const IE_SUPPORT = 'support.tiktokw.eu';

class HostConfig {
  domainToKey: Map<string, string>;
  keyToDomains: Map<string, string[]>;
  constructor() {
    this.keyToDomains = new Map<string, string[]>();
    this.domainToKey = new Map();

    this.addConfig('prod', [SUPPORT, TTP_SUPPORT, IE_SUPPORT, TTP_SUPPORT_TIKTOKW, TTP2_SUPPORT_TIKTOKW]);
    this.addConfig('dev', [DEV_SUPPORT]);
  }

  // host is always support
  parseDomain(domain: string): string {
    if (domain === 'localhost') {
      return 'dev';
    }
    const fallback = 'test';

    const key = this.domainToKey.get(domain);
    if (key) {
      return key;
    }

    return fallback;
  }

  // host is always support; key is always env
  getDomain(env: string): string | string[] {
    const domains = this.keyToDomains.get(env);
    if (domains?.length) {
      return domains[0];
    }

    console.error(`cannot find domain, env:${env}`);
    const prodDomain = this.keyToDomains.get('prod');
    if (!prodDomain) {
      console.warn('getDomain prodDomain:', prodDomain);
      return SUPPORT;
    }
    return prodDomain;
  }

  // host is always support; key is always env
  addConfig(env: string, domains: string[]): void {
    this.keyToDomains.set(env, domains);
    for (const domain of domains) {
      this.domainToKey.set(domain, env);
    }
  }
}

const hostConfig = new HostConfig();

export const getCurrentEnv = (domain: string): string => {
  return hostConfig.parseDomain(domain);
};

// host is always support; key is always env
export const getDomain = (env: string): string | string[] => {
  return hostConfig.getDomain(env);
};

// host is always support; key is always env
export const getBaseURLForEnv = (env: string): string => {
  const protocol = env === 'test' || env === 'dev' ? 'http' : 'https';
  const domain = getDomain(env);
  if (Array.isArray(domain)) {
    return `${protocol}://${domain[0]}`;
  }
  return `${protocol}://${domain}`;
};

// Export for test.
export const domains = [SUPPORT, DEV_SUPPORT];
