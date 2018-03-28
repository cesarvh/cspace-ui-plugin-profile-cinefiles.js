const nonWhitespacePattern = /\S/;

export const requiresFollowingSpace = (article) => {
  const lastChar = article.substring(article.length - 1);
  return (lastChar !== "'" && lastChar !== '-');
};

export const isBlank = string =>
  (typeof (string) === 'undefined' || !nonWhitespacePattern.test(string));


export const computeFullTitle = (article, title) => {
  let tileCopy = title;
  tileCopy = isBlank(title) ? '' : title.trim();

  if (isBlank(article)) {
    return tileCopy;
  }
  return requiresFollowingSpace(article) ? `${article} ${tileCopy}` : `${article}${tileCopy}`;
};

export const computeWorkDisplayName = ({ data }) => {
  const article = data.get('termQualifier') || '';
  const title = data.get('termName') || '';
  const displayName = computeFullTitle(article, title);

  return data.set('termDisplayName', displayName);
};

export const computeDocDisplayName = ({ data }) => {
  const article = data.get('docTitleArticle' || '');
  const title = data.get('docTitle' || '');
  const displayName = computeFullTitle(article, title);

  return data.set('docDisplayName', displayName);
};
