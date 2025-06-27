import React, { useContext } from 'react';
import getNavigationList from './navigation-list';

// import imgLicensing from '../Footer/assets/licensing.png';
import { IN_VISIBLE_LEGAL_IN_NAV } from '@/constants/pages';
// import { i18n } from '@ttastra/core/runtime';
import TextTea from '../Tea/TextArea';
import { LegalArticle, getLegalList } from 'src/utils/getLegalList';
import { SharedContext } from '../Context/context';

const NavigationList = (props: {
  lang: string;
  region: string;
  eventName: string;
  enterMethod: string;
}): JSX.Element => {
  const { lang, region, eventName, enterMethod } = props;
  const { host, pathname } = location;
  const { i18nLoaded } = useContext(SharedContext);
  const legalList: LegalArticle[] = getLegalList(lang, region).legalList.filter(
    (item) => IN_VISIBLE_LEGAL_IN_NAV.indexOf(item.key) === -1,
  );
  const navigationList = getNavigationList(
    lang,
    legalList,
    // appProps source unknown
    false,
    region,
    host,
    pathname,
    i18nLoaded,
  );

  return (
    <>
      {navigationList.map(({ title: columnTitle, children }, xindex) => {
        return (
          <div key={columnTitle} className="footer-content-column">
            {/* <h4>{i18n.t(columnTitle)}</h4> */}
            <h4>{columnTitle}</h4>
            {children.map(({ title, path, href }, idx): JSX.Element => {
              const hrefStr =
                href && typeof href !== 'string'
                  ? (href as (arg0: string, arg1: string, arg2: string) => string)?.(host, pathname, lang)
                  : href;
              return (
                <h5 key={`footer-content-column-${xindex}-item-${idx}`} style={{ order: idx }}>
                  <a href={path || hrefStr} target="_blank" rel="noreferrer">
                    <TextTea text={title || ''} key={title} eventName={eventName} enterMethod={enterMethod} />
                  </a>
                </h5>
              );
            })}
            {columnTitle === 'Legal' && lang === 'ja' && (
              <h3>
                imgLicensing
                {/* <img style={{ width: 182, marginTop: 8 }} src={imgLicensing} /> */}
              </h3>
            )}
          </div>
        );
      })}
    </>
  );
};

export default NavigationList;
