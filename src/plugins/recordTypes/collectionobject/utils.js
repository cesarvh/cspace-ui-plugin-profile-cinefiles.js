export const computeFullTitle = (article, title) =>
  `${article} ${title}`;


export const computeDocDisplayName = ({ data }) => {
  const article = data.get('docTitleArticle' || '');
  const title = data.get('docTitle' || '');
  const displayName = computeFullTitle(article, title);

  return data.set('docDisplayName', displayName);
};
