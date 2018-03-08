import forms from './forms';
import fields from './fields';
import optionLists from './optionLists';
import messages from './messages';

export default () => pluginContext => ({
  optionLists,
  recordTypes: {
    collectionobject: {
      messages,
      forms: forms(pluginContext),
      fields: fields(pluginContext),
    },
  },
});
