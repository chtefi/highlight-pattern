import './array.prototype.fill.js';

export default (str, pattern) => {
  let onlyRepeatedStr = '';
  let lastMatchIndex = -1;
  const spaces = (n) => new Array(n).fill('-').join('');

  while ((lastMatchIndex = str.indexOf(pattern, lastMatchIndex)) >= 0) { // eslint-disable-line no-cond-assign
    onlyRepeatedStr += spaces(lastMatchIndex - onlyRepeatedStr.length) + pattern;
    // shift the beginning of the next loop .indexOf
    lastMatchIndex += pattern.length;
  }
  onlyRepeatedStr += spaces(str.length - onlyRepeatedStr.length);

  return onlyRepeatedStr;
};
