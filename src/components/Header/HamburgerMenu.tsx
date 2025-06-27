import classNames from 'classnames';
import './HamburgerMenu.scss';
import { MouseEventHandler } from 'react';

const HamburgerMenu = (props: {
  active: boolean;
  lang: string;
  theme: string;
  setActive: MouseEventHandler;
}): JSX.Element => {
  const { active, setActive, lang, theme = 'white' } = props;
  const rtl = lang === 'ar';

  return (
    <span
      className={classNames(['hamburger-menu', { 'hamburger-menu-active': active }, { 'is-rtl': rtl }])}
      onClick={setActive}
    >
      <span className={classNames(['hamburger-menu-wrapper', { transparent: theme === 'transparent' }])}>
        <span />
        <span />
        <span />
      </span>
    </span>
  );
};

export default HamburgerMenu;
