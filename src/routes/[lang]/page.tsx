// import { Slardar, Tea } from '@ttastra/core/runtime';
// import { useParams } from '@ttastra/core/runtime/router';
import { useParams } from '@modern-js/runtime/router';
import classNames from 'classnames';
import { useEffect } from 'react';
// import Footer from 'src/components/Footer';
// import Header from 'src/components/Header';
import { RTL_LANGUAGE } from 'src/constants/language';
import { initSEOStorage } from 'src/utils';
import { langToRegionByDefault } from 'src/utils/seoulGateway/utils';
import Support from '../../components/support';

const Index = (): JSX.Element => {
  const { lang = 'en' } = useParams();
  const isRTL = RTL_LANGUAGE.includes(lang);

  useEffect(() => {
    // Slardar.init({ bid: 'tiktok_web_article', pid: 'support_tiktok_home', autoStart: true });
    // Tea.init({ app_id: 172277, autoStart: true });
    initSEOStorage();
  }, []);

  return (
    <div
      id="main"
      className={classNames({
        'is-rtl': isRTL,
      })}
    >
      <p>Language: {lang}</p>
      {/* <Header lang={lang} /> */}
      <div className="container-box main-body page-with-header">
        <Support lang={lang} />
      </div>
      {/* <Footer lang={lang} region={langToRegionByDefault(lang)} /> */}
    </div>
  );
};

export default Index;
