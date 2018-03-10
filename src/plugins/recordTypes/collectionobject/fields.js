import { defineMessages } from 'react-intl';
import { computeDocDisplayName } from '../utils';

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
    // DATA_TYPE_BOOL,
    DATA_TYPE_STRING,
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
                defaultMessage: 'Title namex',
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
            searchView: {
              type: TextInput,
              props: {
                required: false,
              },
            },
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
                source: 'organization/local',
              },
            },
          },
        },
        pageInfo: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_cinefiles.pageInfo.name',
                defaultMessage: 'Original pagination',
              },
            }),
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
            searchView: {
              type: OptionPickerInput,
              props: {
                source: 'checkBoxOptions',
                repeating: false,
              },
            },
            view: {
              // dataType: DATA_TYPE_BOOL,
              type: CheckboxInput,
            },
          },
        },
        hasCastCrSearch: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_cinefiles.hasCastCrSearch.name',
                defaultMessage: 'Cast cr.',
              },
            }),
            view: {
              type: OptionPickerInput,
              props: {
                source: 'checkBoxOptions',
              },
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
            // dataType: DATA_TYPE_BOOL,
            searchView: {
              type: OptionPickerInput,
              props: {
                source: 'checkBoxOptions',
                repeating: false,
              },
            },
            view: {
              type: CheckboxInput,
            },
          },
        },
        hasTechCrSearch: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_cinefiles.hasTechCrSearch.name',
                defaultMessage: 'Tech cr.',
              },
            }),
            view: {
              type: OptionPickerInput,
              props: {
                source: 'checkBoxOptions',
              },
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
            // dataType: DATA_TYPE_BOOL,
            searchView: {
              type: OptionPickerInput,
              props: {
                source: 'checkBoxOptions',
                repeating: false,
              },
            },
            view: {
              type: CheckboxInput,
            },
          },
        },
        hasBoxInfoSearch: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_cinefiles.hasBoxInfoSearch.name',
                defaultMessage: 'Box Office.',
              },
            }),
            view: {
              type: OptionPickerInput,
              props: {
                source: 'checkBoxOptions',
              },
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
            // dataType: DATA_TYPE_BOOL,
            searchView: {
              type: OptionPickerInput,
              props: {
                source: 'checkBoxOptions',
                repeating: false,
              },
            },
            view: {
              type: CheckboxInput,
            },
          },
        },
        hasFilmogSearch: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_cinefiles.hasFilmogSearch.name',
                defaultMessage: 'Filmography',
              },
            }),
            view: {
              type: OptionPickerInput,
              props: {
                source: 'checkBoxOptions',
              },
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
            // dataType: DATA_TYPE_BOOL,
            searchView: {
              type: OptionPickerInput,
              props: {
                source: 'checkBoxOptions',
                repeating: false,
              },
            },
            view: {
              type: CheckboxInput,
            },
          },
        },
        hasBiblioSearch: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_cinefiles.hasBiblioSearch.name',
                defaultMessage: 'Bibliography',
              },
            }),
            view: {
              type: OptionPickerInput,
              props: {
                source: 'checkBoxOptions',
              },
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
            // dataType: DATA_TYPE_BOOL,
            searchView: {
              type: OptionPickerInput,
              props: {
                source: 'checkBoxOptions',
                repeating: false,
              },
            },
            view: {
              type: CheckboxInput,
            },
          },
        },
        hasDistCoSearch: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_cinefiles.hasDistCoSearch.name',
                defaultMessage: 'Dist. co.',
              },
            }),
            view: {
              type: OptionPickerInput,
              props: {
                source: 'checkBoxOptions',
              },
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
            // dataType: DATA_TYPE_BOOL,
            searchView: {
              type: OptionPickerInput,
              props: {
                source: 'checkBoxOptions',
                repeating: false,
              },
            },
            view: {
              type: CheckboxInput,
            },
          },
        },
        hasProdCoSearch: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_cinefiles.hasProdCoSearch.name',
                defaultMessage: 'Prod. co.',
              },
            }),
            view: {
              type: OptionPickerInput,
              props: {
                source: 'checkBoxOptions',
              },
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
            // dataType: DATA_TYPE_BOOL,
            searchView: {
              type: OptionPickerInput,
              props: {
                source: 'checkBoxOptions',
                repeating: false,
              },
            },
            view: {
              type: CheckboxInput,
            },
          },
        },
        hasCostInfoSearch: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_cinefiles.hasCostInfoSearch.name',
                defaultMessage: 'Cost information',
              },
            }),
            view: {
              type: OptionPickerInput,
              props: {
                source: 'checkBoxOptions',
              },
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
            searchView: {
              type: OptionPickerInput,
              props: {
                source: 'checkBoxOptions',
                repeating: false,
              },
            },
            // dataType: DATA_TYPE_BOOL,
            view: {
              type: CheckboxInput,
            },
          },
        },
        hasIllustSearch: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_cinefiles.hasIllustSearch.name',
                defaultMessage: 'With illustration',
              },
            }),
            view: {
              type: OptionPickerInput,
              props: {
                source: 'checkBoxOptions',
              },
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
                  source: 'person/local, organization/local, organization/committee',
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
                  source: 'work/local',
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
                  source: 'concept/associated',
                },
              },
            },
          },
        },
      },
      'ns2:collectionobjects_common': {
        objectNumber: {
          [config]: {
            view: {
              props: {
                source: 'document,stills',
              },
            },
          },
        },
        collection: {
          [config]: {
            defaultValue: 'urn:cspace:cinefiles.cspace.berkeley.edu:vocabularies:name(collection):item:name(cinefiles)\'CineFiles\'',
          },
        },
        responsibleDepartments: {
          responsibleDepartment: {
            [config]: {
              defaultValue: 'urn:cspace:cinefiles.cspace.berkeley.edu:vocabularies:name(department):item:name(pfalibrary)\'PFA Library\'',
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
          referenceGroup: {
            reference: {
              [config]: {
                view: {
                  props: {
                    source: 'organization/local',
                  },
                },
              },
            },
          },
        },
        contentConcepts: {
          contentConcept: {
            [config]: {
              view: {
                props: {
                  source: 'concept/associated, concept/genre',
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
                  source: 'person/local',
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
                  source: 'organization/local, organization/committee',
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
                  },
                },
                defaultValue: 'urn:cspace:cinefiles.cspace.berkeley.edu:vocabularies:name(productionpersonrole):item:name(author)\'Author\'',
              },
            },
          },
        },
        fieldCollectionPlace: {
          [config]: {
            view: {
              type: AutocompleteInput,
              props: {
                source: 'place/local',
              },
            },
          },
        },
        numberOfObjects: {
          [config]: {
            required: true,
          },
        },
      },
    },
  };
};
