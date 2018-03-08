import { defineMessages } from 'react-intl';

// FIXME: Plugins shouldn't have to import react-intl, since this unnecessarily increases the size
// when built as a standalone package. Instead, defineMessages should be supplied in the
// pluginContext. But this means that messages won't be extracted by the Babel plugin, since it
// only operates on files that import react-intl.

export default {
  departments: {
    values: [
      'pfalibrary',
    ],
    messages: defineMessages({
      pfalibrary: {
        id: 'option.departments.pfalibrary',
        defaultMessage: 'PFA Library',
      },
    }),
  },
  collections: {
    values: [
      'cinefiles',
      'pfastills',
    ],
    messages: defineMessages({
      cinefiles: {
        id: 'option.collections.cinefiles',
        defaultMessage: 'CineFiles',
      },
      pfastills: {
        id: 'option.collections.pfastills',
        defaultMessage: 'PFA stills',
      },
    }),
  },
  accessCodes: {
    values: [
      'PFA Staff Only',
      'In House Only',
      'Campus (UCB)',
      'Education (*.edu)',
      'World',
    ],
    messages: defineMessages({
      'PFA Staff Only': {
        id: 'option.collections.PFA Staff Only',
        defaultMessage: 'PFA Staff Only',
      },
      'In House Only': {
        id: 'option.collections.In House Only',
        defaultMessage: 'In House Only',
      },
      'Campus (UCB)': {
        id: 'option.collections.Campus (UCB)',
        defaultMessage: 'Campus (UCB)',
      },
      'Education (*.edu)': {
        id: 'option.collections.Education (*.edu)',
        defaultMessage: 'Education (*.edu)',
      },
      World: {
        id: 'option.collections.World',
        defaultMessage: 'World',
      },
    }),

  },
  articles: {
    values: [
      'A',
      'Al',
      'An',
      'As',
      'Az',
      'Das',
      'De',
      'Den',
      'Der',
      'Det',
      'Die',
      'Een',
      'Egy',
      'Ein',
      'Eine',
      'El',
      'El',
      'En',
      'Et',
      'Ett',
      'Gli',
      'Het',
      'I',
      'Il',
      'L',
      'La',
      'Las',
      'Le',
      'Les',
      'Lo',
      'Los',
      'O',
      'Os',
      'Ta',
      'The',
      'To',
      'Um',
      'Uma',
      'Un',
      'Un',
      'Una',
      'Une',
      'Uno',
      'Yr',
    ],
    messages: defineMessages({
      A: {
        id: 'option.articles.A',
        defaultMessage: 'A',
      },
      Al: {
        id: 'option.articles.Al',
        defaultMessage: 'Al',
      },
      An: {
        id: 'option.articles.An',
        defaultMessage: 'An',
      },
      As: {
        id: 'option.articles.As',
        defaultMessage: 'As',
      },
      Az: {
        id: 'option.articles.Az',
        defaultMessage: 'Az',
      },
      Das: {
        id: 'option.articles.Das',
        defaultMessage: 'Das',
      },
      De: {
        id: 'option.articles.De',
        defaultMessage: 'De',
      },
      Den: {
        id: 'option.articles.Den',
        defaultMessage: 'Den',
      },
      Der: {
        id: 'option.articles.Der',
        defaultMessage: 'Der',
      },
      Det: {
        id: 'option.articles.Det',
        defaultMessage: 'Det',
      },
      Die: {
        id: 'option.articles.Die',
        defaultMessage: 'Die',
      },
      Een: {
        id: 'option.articles.Een',
        defaultMessage: 'Een',
      },
      Egy: {
        id: 'option.articles.Egy',
        defaultMessage: 'Egy',
      },
      Ein: {
        id: 'option.articles.Ein',
        defaultMessage: 'Ein',
      },
      Eine: {
        id: 'option.articles.Eine',
        defaultMessage: 'Eine',
      },
      El: {
        id: 'option.articles.El',
        defaultMessage: 'El',
      },
      'El-': {
        id: 'option.articles.El-',
        defaultMessage: 'El-',
      },
      En: {
        id: 'option.articles.En',
        defaultMessage: 'En',
      },
      Et: {
        id: 'option.articles.Et',
        defaultMessage: 'Et',
      },
      Ett: {
        id: 'option.articles.Ett',
        defaultMessage: 'Ett',
      },
      Gli: {
        id: 'option.articles.Gli',
        defaultMessage: 'Gli',
      },
      Het: {
        id: 'option.articles.Het',
        defaultMessage: 'Het',
      },
      I: {
        id: 'option.articles.I',
        defaultMessage: 'I',
      },
      Il: {
        id: 'option.articles.Il',
        defaultMessage: 'Il',
      },
      L: {
        id: 'option.articles.L',
        defaultMessage: 'L',
      },
      La: {
        id: 'option.articles.La',
        defaultMessage: 'La',
      },
      Las: {
        id: 'option.articles.Las',
        defaultMessage: 'Las',
      },
      Le: {
        id: 'option.articles.Le',
        defaultMessage: 'Le',
      },
      Les: {
        id: 'option.articles.Les',
        defaultMessage: 'Les',
      },
      Lo: {
        id: 'option.articles.Lo',
        defaultMessage: 'Lo',
      },
      Los: {
        id: 'option.articles.Los',
        defaultMessage: 'Los',
      },
      O: {
        id: 'option.articles.O',
        defaultMessage: 'O',
      },
      Os: {
        id: 'option.articles.Os',
        defaultMessage: 'Os',
      },
      Ta: {
        id: 'option.articles.Ta',
        defaultMessage: 'Ta',
      },
      The: {
        id: 'option.articles.The',
        defaultMessage: 'The',
      },
      To: {
        id: 'option.articles.To',
        defaultMessage: 'To',
      },
      Um: {
        id: 'option.articles.Um',
        defaultMessage: 'Um',
      },
      Uma: {
        id: 'option.articles.Uma',
        defaultMessage: 'Uma',
      },
      Un: {
        id: 'option.articles.Un',
        defaultMessage: 'Un',
      },
      'Un\'': {
        id: 'option.articles.Un\'',
        defaultMessage: 'Un\'',
      },
      Una: {
        id: 'option.articles.Una',
        defaultMessage: 'Una',
      },
      Une: {
        id: 'option.articles.Une',
        defaultMessage: 'Une',
      },
      Uno: {
        id: 'option.articles.Uno',
        defaultMessage: 'Uno',
      },
      Yr: {
        id: 'option.articles.Yr',
        defaultMessage: 'Yr',
      },
    }),
  },


};
