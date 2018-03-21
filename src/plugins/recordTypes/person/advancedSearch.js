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
        path: 'ns2:persons_common/personTermGroupList/personTermGroup/termDisplayName',
      },
      {
        op: OP_EQ,
        path: 'ns2:persons_common/personTermGroupList/personTermGroup/termStatus',
      },
      {
        op: OP_EQ,
        path: 'ns2:persons_common/gender',
      },
      {
        op: OP_CONTAIN,
        path: 'ns2:persons_cinefiles/birthCity',
      },
      {
        op: OP_CONTAIN,
        path: 'ns2:persons_cinefiles/birthState',
      },
      {
        op: OP_EQ,
        path: 'ns2:persons_common/birthPlace',
      },
      {
        op: OP_RANGE,
        path: 'ns2:persons_common/birthDateGroup',
      },
      {
        op: OP_RANGE,
        path: 'ns2:persons_common/deathDateGroup',
      },
      {
        op: OP_EQ,
        path: 'ns2:persons_cinefiles/accessCode',
      },
      ...extensions.core.advancedSearch,
    ],
  };
};
