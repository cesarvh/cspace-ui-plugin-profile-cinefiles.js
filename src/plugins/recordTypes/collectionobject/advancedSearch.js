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
        path: 'ns2:collectionobjects_common/objectNumber',
      },
      {
        op: OP_EQ,
        path: 'ns2:collectionobjects_common/responsibleDepartments/responsibleDepartment',
      },
      {
        op: OP_EQ,
        path: 'ns2:collectionobjects_common/collection',
      },
      {
        op: OP_CONTAIN,
        path: 'ns2:collectionobjects_cinefiles/docDisplayName',
      },
      {
        op: OP_EQ,
        path: 'ns2:collectionobjects_cinefiles/docType',
      },
      {
        op: OP_RANGE,
        path: 'ns2:collectionobjects_common/objectProductionDateGroupList/objectProductionDateGroup',
      },
      {
        op: OP_EQ,
        path: 'ns2:collectionobjects_common/objectProductionPersonGroupList/objectProductionPersonGroup/objectProductionPerson',
      },
      {
        op: OP_EQ,
        path: 'ns2:collectionobjects_cinefiles/source',
      },
      {
        op: OP_RANGE,
        path: 'ns2:collectionobjects_cinefiles/pageInfo',
      },
      {
        op: OP_EQ,
        path: 'ns2:collectionobjects_cinefiles/accessCode',
      },
      {
        op: OP_EQ,
        path: 'ns2:collectionobjects_common/recordStatus',
      },
      {
        op: OP_EQ,
        path: 'ns2:collectionobjects_cinefiles/hasCastCr',
      },
      {
        op: OP_EQ,
        path: 'ns2:collectionobjects_cinefiles/hasTechCr',
      },
      {
        op: OP_EQ,
        path: 'ns2:collectionobjects_cinefiles/hasBoxInfo',
      },
      {
        op: OP_EQ,
        path: 'ns2:collectionobjects_cinefiles/hasFilmog',
      },
      {
        op: OP_EQ,
        path: 'ns2:collectionobjects_cinefiles/hasBiblio',
      },
      {
        op: OP_EQ,
        path: 'ns2:collectionobjects_cinefiles/hasDistCo',
      },
      {
        op: OP_EQ,
        path: 'ns2:collectionobjects_cinefiles/hasProdCo',
      },
      {
        op: OP_EQ,
        path: 'ns2:collectionobjects_cinefiles/hasCostInfo',
      },
      {
        op: OP_EQ,
        path: 'ns2:collectionobjects_cinefiles/hasIllust',
      },
      {
        op: OP_EQ,
        path: 'ns2:collectionobjects_cinefiles/docLanguages/docLanguage',
      },
      {
        op: OP_EQ,
        path: 'ns2:collectionobjects_cinefiles/docSubjects/docSubject',
      },
      {
        op: OP_EQ,
        path: 'ns2:collectionobjects_cinefiles/filmSubjects/filmSubject',
      },
      {
        op: OP_EQ,
        path: 'ns2:collectionobjects_cinefiles/nameSubjects/nameSubject',
      },
      ...extensions.core.advancedSearch,
    ],
  };
};
