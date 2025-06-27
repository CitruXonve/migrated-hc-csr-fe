import './index.scss';
import { CMS_LANGUAGE_LIST } from 'src/constants/language';
// import { Tea } from '@ttastra/core/runtime';
import { LANUAGE } from 'src/constants/tea';
import { ChangeEvent } from 'react';

const LanguageSelection = (props: { lang: string; enter_method: string }): JSX.Element => {
  // overrideLangList not used for Support
  // lang obtained from URL location.pathname
  const { lang = 'en', enter_method } = props;
  const currentLanguage =
    CMS_LANGUAGE_LIST.filter(({ value, alias }) => value === lang || alias === lang)[0] ?? CMS_LANGUAGE_LIST[0];

  const languageOptions = CMS_LANGUAGE_LIST.map((item, index) => {
    const { label, value, children, alias } = item;
    return children.map((item) => {
      const isDefault = item.value === 'default';
      const itemLabel = isDefault ? label : `${label}(${item.label})`;
      const itemValue = isDefault ? value : `${value}-${item.value}`;

      return (
        <option key={itemValue} value={itemValue} data-alias={alias || null}>
          {itemLabel}
        </option>
      );
    });
  });

  const basicLanguageChange = (e: ChangeEvent<HTMLSelectElement>): void => {
    const value = e.target.value;
    location.pathname = `${value}`;

    // Tea.collectEvent({
    //   eventName: LANUAGE.CHANGE,
    //   params: {
    //     language: currentLanguage?.value,
    //     to_language: value,
    //     enter_method,
    //   },
    // });
  };

  return (
    <div className="language-selection">
      <p>
        <span>{currentLanguage.label}</span>
      </p>
      <select className="language-selection-form" value={currentLanguage.value} onChange={basicLanguageChange}>
        {languageOptions}
      </select>
    </div>
  );
};

export default LanguageSelection;
