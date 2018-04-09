export default configContext => (data) => {
  const {
    getPart,
  } = configContext.recordDataHelpers;

  if (!data) {
    return '';
  }

  const commonData = getPart(data, 'collectionobjects_common');
  const cinefilesData = getPart(data, 'collectionobjects_cinefiles');

  const titleParts = [];

  if (commonData) {
    titleParts.push(commonData.get('objectNumber'));
  }

  if (cinefilesData) {
    titleParts.push(cinefilesData.get('docDisplayName'));
  }

  return titleParts.filter(part => !!part).join(' - ');
};
