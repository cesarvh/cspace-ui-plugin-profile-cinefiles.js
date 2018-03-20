const nonWhitespacePattern = /\S/;

export const requiresFollowingSpace = (article) => {
  const lastChar = article.substring(article.length - 1);
  return (lastChar !== "'" && lastChar !== '-');
};

export const isBlank = string =>
  (typeof (string) === 'undefined' || !nonWhitespacePattern.test(string));

export const computeDisplayName = ({ data }) => {
  const article = data.get('termQualifier' || '');
  let title = data.get('termName' || '');

  title = isBlank(title) ? '' : title.trim();

  if (isBlank(article)) {
    return data
      .set('termDisplayName', title)
      .set('termDisplayNameSearch', title);
  }

  const displayName = requiresFollowingSpace(article) ? `${article} ${title}` : `${article}${title}`;
  console.log(displayName.length);
  return data
    .set('termDisplayName', displayName)
    .set('termDisplayNameSearch', displayName);
};
