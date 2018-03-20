import fields from './fields';
import forms from './forms';

export default () => pluginContext => ({
  recordTypes: {
    media: {
      fields: fields(pluginContext),
      forms: forms(pluginContext),
    },
  },
});
