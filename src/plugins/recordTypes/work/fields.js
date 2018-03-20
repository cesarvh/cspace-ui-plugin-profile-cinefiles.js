import { defineMessages } from 'react-intl';
import { computeDisplayName } from './utils';

export default (pluginContext) => {
  const {
    CompoundInput,
    TermPickerInput,
    AutocompleteInput,
    OptionPickerInput,
  } = pluginContext.inputComponents;

  const {
    configKey: config,
  } = pluginContext.configHelpers;

  return {
    document: {
      'ns2:works_cinefiles': {
        [config]: {
          service: {
            ns: 'http://collectionspace.org/services/work/local/cinefiles',
          },
        },
        genres: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          genre: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.works_cinefiles.genre.name',
                  defaultMessage: 'Genre',
                },
              }),
              repeating: true,
              view: {
                type: AutocompleteInput,
                props: {
                  source: 'concept/genre', // TO DO: fix
                },
              },
            },
          },
        },
        countries: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          country: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.works_cinefiles.country.name',
                  defaultMessage: 'Country',
                },
              }),
              repeating: true,
              view: {
                type: TermPickerInput,
                props: {
                  source: 'country',
                },
              },
            },
          },
        },
        languages: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          language: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.works_cinefiles.language.name',
                  defaultMessage: 'Language',
                },
              }),
              repeating: true,
              view: {
                type: TermPickerInput,
                props: {
                  source: 'language',
                },
              },
            },
          },
        },
        subjects: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          subject: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.works_cinefiles.subject.name',
                  defaultMessage: 'Subject',
                },
              }),
              repeating: true,
              view: {
                type: AutocompleteInput,
                props: {
                  source: 'concept/subject',
                },
              },
            },
          },
        },
        themes: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          theme: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.works_cinefiles.theme.name',
                  defaultMessage: 'Theme',
                },
              }),
              repeating: true,
              view: {
                type: AutocompleteInput,
                props: {
                  source: 'concept/theme',
                },
              },
            },
          },
        },
        termDisplayNameSearch: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.works_cinefiles.termDisplayNameSearch.name',
                defaultMessage: 'Term display name',
              },
            }),
            repeating: true,
          },
        },
      },
      'ns2:works_common': {
        workTermGroupList: {
          workTermGroup: {
            [config]: {
              compute: computeDisplayName,
            },
            termDisplayName: {
              [config]: {
                view: {
                  props: {
                    readOnly: true,
                  },
                },
              },
            },
            termQualifier: {
              [config]: {
                view: {
                  type: OptionPickerInput,
                  props: {
                    source: 'articles',
                  },
                },
              },
            },
          },
        },
      },
    },
  };
};
