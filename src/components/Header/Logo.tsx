import logoDark from './assets/logo-dark.svg';
import logoDarkText from './assets/logo-text-dark.svg';
import logoLight from './assets/logo-light.svg';
import logoLightText from './assets/logo-text-light.svg';
import './Logo.scss';
import { getBaseURLForEnv, getCurrentEnv } from 'src/utils/host';
// import { Tea } from '@ttastra/core/runtime';
import { NAVIGATION } from 'src/constants/tea';

const Logo = (props: { lang?: string; theme: string; inDrawer?: boolean }): JSX.Element => {
  const renderLogo = (): JSX.Element => {
    const { theme = 'white', inDrawer = false } = props;
    const useLight = theme === 'transparent' && !inDrawer;
    return (
      <>
        <img className="logo-icon" src={useLight ? logoLight : logoDark} alt="TikTok" />
        <img className="logo-text" src={useLight ? logoLightText : logoDarkText} alt="TikTok" />
        <strong>TikTok</strong>
      </>
    );
  };

  const logoClick = (): void => {
    // Tea.collectEvent({ eventName: NAVIGATION.LOGO, params: {} });
  };

  const { lang = 'en', inDrawer = false } = props;
  let href = '/';

  const env = getCurrentEnv(location.host);
  const url = getBaseURLForEnv(env);
  href = `${url}?lang=${lang}`;
  return (
    <div className={inDrawer ? 'logo-container-drawer' : 'logo-container'}>
      <a title="TikTok" className="logo-link" href={href} onClick={logoClick}>
        {renderLogo()}
      </a>
    </div>
  );
};

export default Logo;
