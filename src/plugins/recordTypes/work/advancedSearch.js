export default (pluginContext) => {
  const {
    OP_EQ,
    OP_CONTAIN,
    OP_RANGE,
  } = pluginContext.searchOperators;

  const {
    defaultAdvancedSearchBooleanOp,
    extensions,
  } = pluginContext.config;

  return {
    op: defaultAdvancedSearchBooleanOp,
    value: [
      {
        op: OP_CONTAIN,
        path: 'ns2:works_common/workTermGroupList/workTermGroup/termDisplayName',
      },
      {
        op: OP_CONTAIN,
        path: 'ns2:works_common/workTermGroupList/workTermGroup/termName',
      },
      {
        op: OP_EQ,
        path: 'ns2:works_common/workTermGroupList/workTermGroup/termLanguage',
      },
      {
        op: OP_EQ,
        path: 'ns2:works_common/workTermGroupList/workTermGroup/termStatus',
      },
      {
        op: OP_EQ,
        path: 'ns2:works_common/workType',
      },
      {
        op: OP_EQ,
        path: 'ns2:works_common/creatorGroupList/creatorGroup/creator',
      },
      {
        op: OP_EQ,
        path: 'ns2:works_cinefiles/genres/genre',
      },
      {
        op: OP_RANGE,
        path: 'ns2:works_common/workDateGroupList/workDateGroup',
      },
      {
        op: OP_EQ,
        path: 'ns2:works_cinefiles/countries/country',
      },
      {
        op: OP_EQ,
        path: 'ns2:works_cinefiles/languages/language',
      },
      {
        op: OP_EQ,
        path: 'ns2:works_common/publisherGroupList/publisherGroup/publisher',
      },
      {
        op: OP_EQ,
        path: 'ns2:works_cinefiles/subjects/subject',
      },
      {
        op: OP_EQ,
        path: 'ns2:works_cinefiles/themes/theme',
      },
      ...extensions.core.advancedSearch,
    ],
  };
};
