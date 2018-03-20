/* eslint-disable import/prefer-default-export */

export const computeMediaTitle = ({ subrecordData }) => {
  const blobCommonData = subrecordData.getIn(['blob', 'document', 'ns2:blobs_common']);
  if (blobCommonData) {
    const name = blobCommonData.get('name');

    if (name) {
      return name;
    }

    const fileList = blobCommonData.get('file');

    if (fileList && fileList.length > 0) {
      return fileList[0].name;
    }
  }
  return null;
};

