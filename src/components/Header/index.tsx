import classNames from 'classnames';
import { MouseEventHandler, useContext, useState } from 'react';
import { SharedContext } from '../Context/context';
import Logo from './Logo';
import './index.scss';
// import { i18n, Tea } from '@ttastra/core/runtime';
import HamburgerMenu from './HamburgerMenu';
import Drawer from './Drawer';
import { NAVIGATION } from 'src/constants/tea';

const Header = (props: { lang: string }): JSX.Element => {
  const { lang = 'en' } = props;
  const as = `/${lang}`;
  const theme = 'white';
  // const { i18nLoaded } = useContext(SharedContext);
  const [drawerActive, setDrawerActive] = useState(false);

  const toggleDrawerActive: MouseEventHandler = () => {
    if (!drawerActive) {
      // Tea.collectEvent({
      //   eventName: NAVIGATION.HEADER,
      //   params: {
      //     target: 'more',
      //     order: null,
      //   },
      // });
    }
    setDrawerActive(!drawerActive);
  };

  return (
    <div className={classNames('header-container', theme)}>
      <div className="header-content">
        <div className="hamburger-wrapper">
          <HamburgerMenu theme={theme} active={drawerActive} lang={lang} setActive={toggleDrawerActive} />
          <Logo lang={lang} theme={theme} />
        </div>
        <div className="header-toolbar">
          <div className="support-nav-container">
            {/* {i18nLoaded ? (
              <a className="logo-link" href={as}>
                {i18n.t('tt_helpcenter_home')}
              </a>
            ) : null} */}
          </div>
        </div>
      </div>
      <Drawer theme={theme} active={drawerActive} lang={lang} setActive={toggleDrawerActive} />
    </div>
  );
};

export default Header;
