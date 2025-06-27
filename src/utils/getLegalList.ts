import { LINK } from '../constants/index';

interface LegalArticle {
  title: string;
  key: string;
  href: string;
  path?: string;
}

const legalPrefix = '/legal/';
const MODERN_SLAVERY_STATEMENT = 'modern-slavery-statement';
const LAW_ENFORCEMENT_POLICY = 'law-enforcement';
const AU_MODERN_SLAVERY_POLICY = 'au-modern-slavery-policy';
const BRANDED_CONTENT_POLICY = 'bc-policy';

const getLegalList = (lang: string, region: string): { legalList: LegalArticle[] } => {
  const legalList: LegalArticle[] = [
    {
      title: 'Terms of Use',
      key: 'terms-of-service',
      href: `${LINK.TIKTOK}${legalPrefix}terms-of-service?lang=${lang}`,
    },
    {
      title: 'Privacy Policy',
      key: 'privacy-policy-row',
      href: `${LINK.TIKTOK}${legalPrefix}privacy-policy-row?lang=${lang}`,
    },
  ];

  // Move branded content policy to last
  const brandedContentPolicyIndex = legalList.findIndex((item) => item.key === BRANDED_CONTENT_POLICY);
  if (brandedContentPolicyIndex >= 0) {
    const brandedContentPolicy = legalList[brandedContentPolicyIndex];
    legalList.splice(brandedContentPolicyIndex, 1);
    legalList.push(brandedContentPolicy);
  }

  // Move australia modern slavery policy to position after law enforcement policy
  const lawEnforcementPolicyIndex = legalList.findIndex((item) => item.key === LAW_ENFORCEMENT_POLICY);
  const modernSlaveryPolicyIndex = legalList.findIndex((item) => item.key === AU_MODERN_SLAVERY_POLICY);
  if (modernSlaveryPolicyIndex >= 0 && lawEnforcementPolicyIndex >= 0) {
    const modernSlaveryPolicyArticle = legalList[modernSlaveryPolicyIndex];
    legalList.splice(modernSlaveryPolicyIndex, 1);
    legalList.splice(lawEnforcementPolicyIndex + 1, 0, modernSlaveryPolicyArticle);
  }

  // Move slavery statement to last article.
  const slaveryStmtIndex = legalList.findIndex((item) => item.key === MODERN_SLAVERY_STATEMENT);
  if (slaveryStmtIndex >= 0) {
    const slaveryStmtArticle = legalList[slaveryStmtIndex];
    legalList.splice(slaveryStmtIndex, 1);
    legalList.push(slaveryStmtArticle);
  }

  return { legalList };
};

export { getLegalList, LegalArticle };
