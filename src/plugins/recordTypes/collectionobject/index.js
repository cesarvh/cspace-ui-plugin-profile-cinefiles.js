import forms from './forms';
import fields from './fields';

export default () => pluginContext => ({
  recordTypes: {
    collectionobject: {
      forms: forms(pluginContext),
      fields: fields(pluginContext),
    },
  },
});
