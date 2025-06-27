import React, { useState } from 'react';
// import { Tea } from '@ttastra/core/runtime';

const Tap = (props: {
  eventName: string;
  params: object;
  href: string;
  target: string;
  rel: string;
  onClick: (arg0: MouseEvent) => void;
  children: JSX.Element;
  tag?: string;
  once?: boolean;
}): JSX.Element => {
  const { eventName, params, children = <></>, tag = 'span', once = false } = props;
  let onClick = props.onClick;
  const [hasTrigger, setHasTrigger] = useState(false);

  const handleTap = (eventName: string, params: object): void => {
    // Tea.collectEvent({
    //   eventName,
    //   params,
    // });
  };

  onClick = (...args) => {
    if (!hasTrigger || !once) {
      handleTap(eventName, params);
      setHasTrigger(true);
    }
    onClick?.(...args);
  };

  return React.createElement(
    tag,
    {
      ...props,
    },
    children,
  );
};

export default Tap;
