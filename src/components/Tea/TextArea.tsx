// import { i18n, Tea } from '@ttastra/core/runtime';
import { ENTER_METHOD, ENTER_PAGE } from 'src/constants/tea';

const TextTea = (props: { text: string; eventName: string; enterMethod: string }): JSX.Element => {
  const { text = '', eventName, enterMethod } = props;

  const clickTea = (): void => {
    // const { event, text, ...parmas } = this.props;
    // Tea.collectEvent({
    //   eventName,
    //   params: {
    //     enterMethod,
    //     target: text === 'home_header_btn' ? 'trending' : text.replace(/ /g, '_').toLowerCase(),
    //   },
    // });

    // if (text === 'Trending' || text === 'home_header_btn') {
    //   Tea.collectEvent({
    //     eventName: ENTER_PAGE.TRENDING,
    //     params: {
    //       enter_mothod: ENTER_METHOD.NAVIGATION,
    //     },
    //   });
    // }

    // if (text === 'Discover') {
    //   Tea.collectEvent({
    //     eventName: ENTER_PAGE.DISCOVER,
    //     params: {
    //       enter_mothod: ENTER_METHOD.NAVIGATION,
    //     },
    //   });
    // }
  };

  // return <span onClick={clickTea}>{i18n.t(text)}</span>;
  return <span onClick={clickTea}>{text}</span>;
};

export default TextTea;
