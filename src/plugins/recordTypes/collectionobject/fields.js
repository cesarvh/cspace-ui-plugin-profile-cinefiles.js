import { defineMessages } from 'react-intl';

export default (pluginContext) => {
  const {
    // AutocompleteInput,
    // CompoundInput,
    // DateInput,
    IDGeneratorInput,
    // OptionPickerInput,
    // StructuredDateInput,
    TextInput,
    // TermPickerInput,
  } = pluginContext.inputComponents;

  const {
    configKey: config,
  } = pluginContext.configHelpers;

  // const {
    // DATA_TYPE_INT,
    // DATA_TYPE_FLOAT,
    // DATA_TYPE_STRUCTURED_DATE,
  // } = pluginContext.dataTypes;

  // const {
  //   extensions,
  // } = pluginContext.config;

  return {
    document: {
      'ns2:collectionobjects_cinefiles': {
        [config]: {
          service: {
            ns: 'http://collectionspace.org/services/collectionobject/local/cinefiles',
          },
        },
      },
      'ns2:collectionobjects_common': {
        objectNumber: {
          [config]: {
            cloneable: false,
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_common.objectNumber.name',
                defaultMessage: 'Identification number',
              },
            }),
            required: true,
            searchView: {
              type: TextInput,
            },
            view: {
              type: IDGeneratorInput,
              props: {
                idGeneratorName: 'accession,intake,loanin',
              },
            },
          },
        },
      },
    },
  };
};
