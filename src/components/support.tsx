// import { i18n } from '@ttastra/core/runtime';
import i18n_t from '@/utils/i18n';
import React, { type JSX, useContext, useEffect, useState } from 'react';
import { type Project, getProjectList } from '../utils/graphql';
import './support.scss';
// import { Outlet } from '@ttastra/core/runtime/router';
import { Outlet } from '@modern-js/runtime/router';
import { langToRegionByDefault } from 'src/utils/seoulGateway/utils';
import backgroundImgMobile from '../assets/home-background-mobile.svg';
import backgroundImg from '../assets/home-background.svg';
import popularArticleIcon from '../assets/popular-article-icon.svg';
import { HELP_CENTER_NEW } from '../constants/tea';
import BreadCrumb from './Breadcrumb';
import { SharedContext } from './Context/context';
import Loading from './Loading';

const { METHOD, PAGENAMES } = HELP_CENTER_NEW;

type Key = {
  key: string;
  i18nKey: string;
};

type Topic = {
  projectNameKey: Key;
  categoryKeys: Key[];
  title: string;
  order: number;
};

type PopularArticle = {
  projectKey: string;
  categoryKey: string;
  articleKey?: string;
  projecti18nKey: string;
  categoryi18nKey: string;
  articlei18nKey?: string;
};

const popularArticles = (): PopularArticle[] => {
  return [
    {
      projectKey: 'getting-started',
      categoryKey: 'creating-an-account',
      projecti18nKey: 'tt_hc_ptopic_gettingstarted',
      categoryi18nKey: 'tt_hc_stopic_creatingacct',
    },
    {
      projectKey: 'getting-started',
      categoryKey: 'for-you',
      projecti18nKey: 'tt_hc_ptopic_gettingstarted',
      categoryi18nKey: 'tt_hc_stopic_foryou',
    },
    {
      projectKey: 'getting-started',
      categoryKey: 'setting-up-your-profile',
      projecti18nKey: 'tt_hc_ptopic_gettingstarted',
      categoryi18nKey: 'tt_hc_stopic_setupprofile',
    },
    {
      projectKey: 'log-in-troubleshoot',
      categoryKey: 'log-in',
      articleKey: 'reset-password',
      projecti18nKey: 'tt_hc_ptopic_login_troubleshoot',
      categoryi18nKey: 'tt_hc_stopic_login',
      articlei18nKey: 'tt_hc_stopic_resetpswd',
    },
  ];
};

let topics: Topic[] = [];
const Support = (props: { lang: string }): JSX.Element => {
  const [projects, setProjects] = useState([] as Project[]);
  // prepare to redirect if the lang is unsupported
  const { lang = 'en' } = props;

  const [cardSelectionMaxHeight, setCardSelectionMaxHeight] =
    useState('1800px');
  const cardSectionRef = React.createRef<HTMLDivElement>();

  async function fetchProjects(region: string): Promise<Project[]> {
    const projectList = await getProjectList(region, false);
    return projectList.project_list;
  }

  const fetchResponse = async () => {
    await fetchProjects(langToRegionByDefault(lang))
      .then(value => {
        console.log('fetchProjects resp:', value);
        setProjects(value);
        topics = value.map((data: Project): Topic => {
          const {
            project_name,
            title,
            starling_key,
            category_list = [],
            order,
          } = data;
          return {
            projectNameKey: {
              key: project_name,
              i18nKey: `tt_hc_ptopic_${starling_key}`,
            },
            categoryKeys: category_list
              .filter(
                category =>
                  category.starling_key && category.recent_article_list.length, //&& shouldShowCategory($region, project_name, category.category_key)
              )
              .map(category => {
                const { category_name, starling_key } = category;
                return {
                  key: category_name,
                  i18nKey: `tt_hc_stopic_${starling_key}`,
                };
              }),
            // title: starling_key,
            title,
            order,
          };
        });
      })
      .catch()
      .finally();
  };

  useEffect(() => {
    fetchResponse();
  }, []);

  const { i18nLoaded } = useContext(SharedContext);
  return i18nLoaded ? (
    <main className="help-center-v2">
      <Outlet />
      <section className="jumbotron">
        <img className="jumbotron-bg" src={backgroundImg} />
        <img className="jumbotron-bg-mobile" src={backgroundImgMobile} />
        <div className="jumbotron-content">
          <h3>{i18n_t('tt_helpcenter_hp_header')}</h3>
          <h1>{i18n_t('tt_helpcenter_hp_desc')}</h1>
        </div>
      </section>

      <section className="popular-articles">
        <div className="section-head">
          <h1>{i18n_t('tt_helpcenter_article_header')}</h1>
          <img className="icon-head" src={popularArticleIcon} />
        </div>
        <div className="section-cards">
          {popularArticles().map((article, idx) => {
            const {
              projectKey,
              categoryKey,
              articleKey,
              projecti18nKey,
              categoryi18nKey,
              articlei18nKey,
            } = article;
            const link = `/${lang}/${projectKey}/${categoryKey}${articleKey ? `/${articleKey}` : ''}`;
            const href = `/projects?lang=${lang}&projectKey=${projectKey}&categoryKey=${categoryKey}${
              articleKey ? `&articleKey=${articleKey}` : ''
            }&enter_from=${PAGENAMES.SUPPORT_NEW_HOME}&enter_method=${METHOD.HELP_NAV_CLICK}`;
            return (
              <div className="card" key={`article-card-${idx}`}>
                <BreadCrumb
                  lang={lang}
                  linkArray={[
                    {
                      tier: 1,
                      key: projectKey,
                      i18nKey: projecti18nKey,
                      link: `/${lang}/${projectKey}`,
                    },
                    {
                      tier: 2,
                      key: categoryKey,
                      i18nKey: categoryi18nKey,
                      link: `/${lang}/${projectKey}/${categoryKey}`,
                    },
                  ]}
                />
                <h3>
                  <a href={link} className="article-link">
                    {i18n_t(articlei18nKey || categoryi18nKey)}
                  </a>
                </h3>
              </div>
            );
          })}
        </div>
      </section>
      <section className="topics">
        <div className="section-head">
          <h1>
            {i18n_t('tt_helpcenter_topic_header')}-{topics.length.toString()}
          </h1>
        </div>
        <div
          className="section-cards"
          ref={cardSectionRef}
          style={{ maxHeight: cardSelectionMaxHeight }}
        >
          {topics.length ? (
            topics.map((topic, idx) => {
              const { projectNameKey, categoryKeys, title, order } = topic;
              const { key: projectKey, i18nKey: projecti18nKey } =
                projectNameKey;
              const topicLink = `/${lang}/${projectKey}`;
              const topicHref = `/projects?lang=${lang}&projectKey=${projectKey}&enter_from=${PAGENAMES.SUPPORT_NEW_HOME}&enter_method=${METHOD.HELP_NAV_CLICK}`;
              return (
                <div
                  className="card"
                  key={`topic-card-${idx}`}
                  style={{ order }}
                >
                  <div className="topic-card-header">
                    <h2>
                      <a href={topicLink} className="article-link">
                        {/* {i18n_t(projecti18nKey)} */}
                        {title}
                      </a>
                    </h2>
                  </div>
                  <ul className="category-list">
                    {categoryKeys.map(
                      (
                        { key: categoryKey, i18nKey: categoryi18nKey },
                        innerIdx,
                      ) => {
                        const categoryLink = `/${lang}/${projectKey}/${categoryKey}`;
                        const categoryHref = `/projects?lang=${lang}&projectKey=${projectKey}&categoryKey=${categoryKey}&enter_from=${PAGENAMES.SUPPORT_NEW_HOME}&enter_method=${METHOD.HELP_NAV_CLICK}`;
                        return (
                          <li key={`topic-item-${idx}-${innerIdx}`}>
                            <a href={categoryLink} className="topic-link">
                              {i18n_t(categoryi18nKey)}
                            </a>
                          </li>
                        );
                      },
                    )}
                  </ul>
                </div>
              );
            })
          ) : (
            <Loading />
          )}
        </div>
      </section>
    </main>
  ) : (
    <div />
  );
};

export default Support;
