import { defineMessages } from 'react-intl';

export default () => ({
  default: {
    blobCsid: {
      disabled: true,
    },
    page: {
      messages: defineMessages({
        label: {
          id: 'column.media.default.page',
          defaultMessage: 'Page number',
        },
      }),
      order: 10,
      width: 200,
      sortBy: 'media_cinefiles:page',
    },
    identificationNumber: {
      disabled: true,
    },
  },
});
