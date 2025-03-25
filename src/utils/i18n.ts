// fake I18N method
const i18n_t = (starlingProjTitle: string): string => {
  let title = starlingProjTitle;
  let pos = title.indexOf('tt_helpcenter_');
  if (pos > -1) {
    title = title.substring(0, pos) + title.substring(pos + 14);
  }
  pos = title.indexOf('tt_');
  if (pos > -1) {
    title = title.substring(0, pos) + title.substring(pos + 3);
  }
  return starlingProjTitle.split('_').join(' ');
};

export default i18n_t;
