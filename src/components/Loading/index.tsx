import classNames from 'classnames';
import './index.scss';

const Loading = ({
  show = true,
  isSmall = false,
  isCenter = true,
}): JSX.Element => {
  return (
    <>
      {show ? (
        <div
          className={classNames(
            isSmall ? 'tiktok-loading-small' : 'tiktok-loading',
            isCenter ? 'tiktok-loading-center' : '',
          )}
        />
      ) : null}
    </>
  );
};

export default Loading;
