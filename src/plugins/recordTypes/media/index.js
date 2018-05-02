import advancedSearch from './advancedSearch';
import fields from './fields';
import forms from './forms';
import title from './title';
import columns from './columns';

export default () => configContext => ({
  recordTypes: {
    media: {
      advancedSearch: advancedSearch(configContext),
      fields: fields(configContext),
      forms: forms(configContext),
      title: title(configContext),
      columns: columns(configContext),
    },
  },
});
