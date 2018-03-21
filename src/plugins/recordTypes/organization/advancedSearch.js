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
        path: 'ns2:organizations_common/orgTermGroupList/orgTermGroup/termDisplayName',
      },
      {
        op: OP_EQ,
        path: 'ns2:organizations_common/orgTermGroupList/orgTermGroup/termStatus',
      },
      {
        op: OP_EQ,
        path: 'ns2:organizations_cinefiles/foundingCity',
      },
      {
        op: OP_CONTAIN,
        path: 'ns2:organizations_cinefiles/foundingState',
      },
      {
        op: OP_CONTAIN,
        path: 'ns2:organizations_common/foundingPlace',
      },
      {
        op: OP_RANGE,
        path: 'ns2:organizations_common/foundingDateGroup',
      },
      {
        op: OP_EQ,
        path: 'ns2:organizations_cinefiles/accessCode',
      },
      ...extensions.core.advancedSearch,
    ],
  };
};
