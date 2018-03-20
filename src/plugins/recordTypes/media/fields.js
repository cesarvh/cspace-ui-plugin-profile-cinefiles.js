import { defineMessages } from 'react-intl';
import { computeMediaTitle } from './utils';

export default (pluginContext) => {
  const {
    TextInput,
  } = pluginContext.inputComponents;

  const {
    configKey: config,
  } = pluginContext.configHelpers;

  const {
    DATA_TYPE_INT,
  } = pluginContext.dataTypes;

  return {
    document: {
      'ns2:media_common': {
        identificationNumber: {
          [config]: {
            required: false,
          },
        },
        title: {
          [config]: {
            compute: computeMediaTitle,
          },
        },
      },
      'ns2:media_cinefiles': {
        [config]: {
          service: {
            ns: 'http://collectionspace.org/services/media/local/cinefiles',
          },
        },
        page: {
          [config]: {
            required: true,
            dataType: DATA_TYPE_INT,
            messages: defineMessages({
              name: {
                id: 'field.media_cinefiles.page.name',
                defaultMessage: 'Page number',
              },
            }),
            view: {
              type: TextInput,
            },
          },
        },
      },
    },
  };
};
