import { defineMessages } from 'react-intl';
import { computeDocDisplayName } from './utils';

export default (pluginContext) => {
  const {
    AutocompleteInput,
    CompoundInput,
    OptionPickerInput,
    TextInput,
    TermPickerInput,
    CheckboxInput,
  } = pluginContext.inputComponents;

  const {
    configKey: config,
  } = pluginContext.configHelpers;

  const {
    DATA_TYPE_BOOL,
  } = pluginContext.dataTypes;

  return {
    document: {
      'ns2:collectionobjects_cinefiles': {
        [config]: {
          compute: computeDocDisplayName,
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
            // compute: ({ data, path, recordData }) => computeDocDisplayName(data),
          },
        },
        docType: {
          [config]: {
            defaultValue: 'urn:cspace:cinefiles.cspace.berkeley.edu:vocabularies:name(doctype):item:name(2)\'article\'',
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
                source: 'organization/organization', // TO DO: Correct the source?
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
        hasCastCrSearch: {},
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
        hasTechCrSearch: {},
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
        hasBoxInfoSearch: {},
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
        hasFilmogSearch: {},
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
        hasBiblioSearch: {},
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
        hasDistCoSearch: {},
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
        hasProdCoSearch: {},
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
        hasCostInfoSearch: {},
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
        hasIllustSearch: {},
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
                  source: 'person/person, organization/organization, organization/committee', // TO DO: Fix source names?
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
                  source: 'work/work', // TO DO: Fix source names?
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
                  source: 'concept/concept', // TO DO: Fix me
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
        contentConcepts: {
          contentConcept: {
            [config]: {
              view: {
                props: {
                  source: 'concept/concept, concept/genre', // TO DO: Fix vocab terms?
                },
              },
            },
          },
        },
        contentPersons: {
          contentPerson: {
            [config]: {
              repeating: true,
              view: {
                type: AutocompleteInput,
                props: {
                  source: 'person/person', // TO DO: Change source name?
                },
              },
            },
          },
        },
        contentOrganizations: {
          contentOrganization: {
            [config]: {
              repeating: true,
              view: {
                type: AutocompleteInput,
                props: {
                  source: 'organization/organization, organization/committee',
                },
              },
            },
          },
        },
        objectProductionPersonGroupList: {
          objectProductionPersonGroup: {
            objectProductionPersonRole: {
              [config]: {
                view: {
                  type: TermPickerInput,
                  props: {
                    source: 'productionpersonrole',
                    // ONLY works if there are 1+ terms in the array
                  },
                },
                defaultValue: 'Author',
              },
            },
          },
        },
      },
    },
  };
};
