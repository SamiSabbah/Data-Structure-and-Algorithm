/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  const firstWord = s.split('');
  const secondeWord = t.split('');
  console.log(firstWord);
  console.log(secondeWord);

  func(firstWord);
  func(secondeWord);

  console.log(firstWord);
  console.log(secondeWord);
  if (JSON.stringify(firstWord) == JSON.stringify(secondeWord)) return true;
  else return false;
};

const func = (word) => {
  let changed = false;
  for (let i = 0; i < word.length; i++) {
    if (Number.isInteger(word[i])) continue;
    for (let j = i + 1; j < word.length; j++) {
      if (word[i] === word[j]) {
        word[j] = i;
        changed = true;
      }
    }

    changed ? (word[i] = i) : (word[i] = -1);
    changed = false;
    console.log(word);
  }
};

console.log(isIsomorphic('paper', 'title'));
