import classNames from 'classnames';
import LanguageSelection from '../LanguageSelection';
import Logo from './Logo';
import { CSSTransition } from 'react-transition-group';
import { ENTER_METHOD, NAVIGATION } from 'src/constants/tea';
import './Drawer.scss';
import NavigationList from '../NavigationList';
import { langToRegionByDefault } from 'src/utils/seoulGateway/utils';
import { MouseEventHandler } from 'react';

const Drawer = (props: { active: boolean; setActive: MouseEventHandler; lang: string; theme: string }): JSX.Element => {
  const { active, setActive, lang, theme } = props;
  const region = langToRegionByDefault(lang);

  return (
    <div>
      <CSSTransition unmountOnExit timeout={300} in={active} classNames="drawer">
        <div className="drawer-mask" onClick={setActive} />
      </CSSTransition>
      <CSSTransition unmountOnExit timeout={300} in={active} classNames="drawer">
        <nav className={classNames('drawer-content')}>
          <Logo theme={theme} />
          <NavigationList
            lang={lang}
            region={region}
            eventName={NAVIGATION.SECONDARY}
            enterMethod={ENTER_METHOD.SECONDARY_NAV}
          />
          <LanguageSelection lang={lang} enter_method={ENTER_METHOD.SECONDARY_NAV} />
        </nav>
      </CSSTransition>
    </div>
  );
};

export default Drawer;
