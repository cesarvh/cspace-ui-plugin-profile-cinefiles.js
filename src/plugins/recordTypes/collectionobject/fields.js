import { defineMessages } from 'react-intl';

export default (pluginContext) => {
  const {
    AutocompleteInput,
    CompoundInput,
    // DateInput,
    // IDGeneratorInput,
    OptionPickerInput,
    // StructuredDateInput,
    TextInput,
    TermPickerInput,
    CheckboxInput,
  } = pluginContext.inputComponents;

  const {
    configKey: config,
  } = pluginContext.configHelpers;

  const {
    // DATA_TYPE_INT,
    // DATA_TYPE_FLOAT,
    // DATA_TYPE_STRUCTURED_DATE,
    DATA_TYPE_BOOL,
  } = pluginContext.dataTypes;

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
        docTitleArticle: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_cinefiles.docTitleArticle.name',
                defaultMessage: 'Article',
              },
            }),
            view: {
              type: OptionPickerInput,
              props: {
                source: 'articles',
              },
            },
          },
        },
        docTitle: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_cinefiles.docTitle.name',
                defaultMessage: 'Name',
              },
              fullName: {
                id: 'field.collectionobjects_cinefiles.docTitle.fullName',
                defaultMessage: 'Title',
              },
            }),
            required: true,
            view: {
              type: TextInput,
            },
          },
        },
        docDisplayName: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_cinefiles.docDisplayName.name',
                defaultMessage: 'Display Name',
              },
            }),
            view: {
              type: TextInput,
              props: {
                readOnly: true,
              },
            },
          },
        },
        docType: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_cinefiles.docType.name',
                defaultMessage: 'Document type',
              },
            }),
            required: true,
            view: {
              type: TermPickerInput,
              props: {
                source: 'doctype',
              },
            },
          },
        },
        source: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_cinefiles.source.name',
                defaultMessage: 'Source',
              },
            }),
            view: {
              type: AutocompleteInput,
              props: {
                source: 'organization/local', // TO DO: Correct the source
              },
            },
          },
        },
        pageInfo: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_cinefiles.pageInfo.name',
                defaultMessage: 'Number of pages',
              },
            }),
            required: true,
            view: {
              type: TextInput,
            },
          },
        },
        accessCode: {
          [config]: {
            defaultValue: 'PFA Staff Only',
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_cinefiles.accessCode.name',
                defaultMessage: 'Access code override',
              },
            }),
            view: {
              type: OptionPickerInput,
              props: {
                source: 'accessCodes',
              },
            },
          },
        },
        hasCastCr: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_cinefiles.hasCastCr.name',
                defaultMessage: 'Cast cr.',
              },
            }),
            dataType: DATA_TYPE_BOOL,
            view: {
              type: CheckboxInput,
            },
          },
        },
        hasTechCr: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_cinefiles.hasTechCr.name',
                defaultMessage: 'Tech cr.',
              },
            }),
            dataType: DATA_TYPE_BOOL,
            view: {
              type: CheckboxInput,
            },
          },
        },
        hasBoxInfo: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_cinefiles.hasBoxInfo.name',
                defaultMessage: 'Box Office.',
              },
            }),
            dataType: DATA_TYPE_BOOL,
            view: {
              type: CheckboxInput,
            },
          },
        },
        hasFilmog: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_cinefiles.hasFilmog.name',
                defaultMessage: 'Filmography',
              },
            }),
            dataType: DATA_TYPE_BOOL,
            view: {
              type: CheckboxInput,
            },
          },
        },
        hasBiblio: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_cinefiles.hasBiblio.name',
                defaultMessage: 'Bibliography',
              },
            }),
            dataType: DATA_TYPE_BOOL,
            view: {
              type: CheckboxInput,
            },
          },
        },
        hasDistCo: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_cinefiles.hasDistCo.name',
                defaultMessage: 'Dist. co.',
              },
            }),
            dataType: DATA_TYPE_BOOL,
            view: {
              type: CheckboxInput,
            },
          },
        },
        hasProdCo: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_cinefiles.hasProdCo.name',
                defaultMessage: 'Prod. co.',
              },
            }),
            dataType: DATA_TYPE_BOOL,
            view: {
              type: CheckboxInput,
            },
          },
        },
        hasCostInfo: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_cinefiles.hasCostInfo.name',
                defaultMessage: 'Cost information',
              },
            }),
            dataType: DATA_TYPE_BOOL,
            view: {
              type: CheckboxInput,
            },
          },
        },
        hasIllust: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_cinefiles.hasIllust.name',
                defaultMessage: 'With illustration',
              },
            }),
            dataType: DATA_TYPE_BOOL,
            view: {
              type: CheckboxInput,
            },
          },
        },
        docLanguages: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          docLanguage: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.collectionobjects_cinefiles.docLanguage.name',
                  defaultMessage: 'Document language',
                },
              }),
              repeating: true,
              view: {
                type: TermPickerInput,
                props: {
                  source: 'languages',
                },
              },
            },
          },
        },
        nameSubjects: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          nameSubject: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.collectionobjects_cinefiles.nameSubject.name',
                  defaultMessage: 'Name subject',
                },
              }),
              repeating: true,
              view: {
                type: AutocompleteInput,
                props: {
                  source: 'person/local, organization/local', // TO DO: Fix me
                },
              },
            },
          },
        },
        filmSubjects: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          filmSubject: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.collectionobjects_cinefiles.filmSubject.name',
                  defaultMessage: 'Film subject',
                },
              }),
              repeating: true,
              view: {
                type: AutocompleteInput,
                props: {
                  source: 'work/local', // TO DO: Fix me
                },
              },
            },
          },
        },
        docSubjects: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          docSubject: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.collectionobjects_cinefiles.docSubject.name',
                  defaultMessage: 'Document subject',
                },
              }),
              repeating: true,
              view: {
                type: AutocompleteInput,
                props: {
                  source: 'concept/local', // TO DO: Fix me
                },
              },
            },
          },
        },
      },
      'ns2:collectionobjects_common': {
        collection: {
          [config]: {
            defaultValue: 'CineFiles',
          },
        },
        responsibleDepartments: {
          responsibleDepartment: {
            [config]: {
              defaultValue: 'PFA Library', // TO DO: Fix me
            },
          },
        },
        referenceGroupList: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_commmon.referenceGroupList.name',
                defaultMessage: 'External document URL details',
              },
            }),
          },
        },
      },
    },
  };
};
