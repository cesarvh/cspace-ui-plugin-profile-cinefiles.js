import fields from './fields';
import forms from './forms';

export default () => pluginContext => ({
  recordTypes: {
    work: {
      fields: fields(pluginContext),
      forms: forms(pluginContext),
    },
  },
});
