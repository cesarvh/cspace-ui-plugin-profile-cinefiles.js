import forms from './forms';
import vocabularies from './vocabularies';
import fields from './fields';
import advancedSearch from './advancedSearch';

export default () => pluginContext => ({
  recordTypes: {
    organization: {
      vocabularies,
      advancedSearch: advancedSearch(pluginContext),
      forms: forms(pluginContext),
      fields: fields(pluginContext),
    },
  },
});
