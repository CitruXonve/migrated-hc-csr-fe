// import { i18n } from '@ttastra/core/runtime';
import classNames from 'classnames';
import React from 'react';
import rightArrow from './right-arrow.svg';
import './index.scss';
import i18n_t from '@/utils/i18n';

type LinkElement = {
  tier: number;
  key: string;
  i18nKey: string;
  link: string;
};

const BreadCrumb = (props: {
  lang: string;
  linkArray: LinkElement[];
}): JSX.Element => {
  const { linkArray = [] } = props;

  return (
    <div
      className={classNames('help-center-breadcrumb-container')}
      style={{ height: '24px' }}
    >
      <nav className="breadcrumb-nav">
        <div className={classNames('help-center-breadcrumb')}>
          {linkArray.length ? (
            linkArray.map((linkElement, idx) => {
              const { i18nKey, link } = linkElement;

              return (
                <React.Fragment key={`breadcrumb-${i18nKey}`}>
                  <span style={{ order: idx }}>
                    <a href={link}>{i18n_t(i18nKey)}</a>
                    <img alt="right-arrow" src={rightArrow} />
                  </span>
                </React.Fragment>
              );
            })
          ) : (
            <span />
          )}
        </div>
      </nav>
    </div>
  );
};

export default BreadCrumb;
