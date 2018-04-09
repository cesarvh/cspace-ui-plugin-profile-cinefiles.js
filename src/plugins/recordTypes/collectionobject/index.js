import forms from './forms';
import fields from './fields';
import optionLists from './optionLists';
import messages from './messages';
import idGenerators from './idGenerators';
import title from './title';

export default () => pluginContext => ({
  optionLists,
  idGenerators,
  recordTypes: {
    collectionobject: {
      messages,
      forms: forms(pluginContext),
      fields: fields(pluginContext),
      title: title(pluginContext),
    },
  },
});
