function solution(s1, s2) {
  let commonCount = 0;
  let slicedS2;

  for (let i = 0; i < s1.length; i++) {
    for (let j = 0; j < s2.length; j++) {
      if (s1[i] == s2[j]) {
        commonCount++;
        if (s2[j] != s2.length) {
          s2 = s2.replace(s2[j], '');
        }
        break;
      }
    }
  }

  return commonCount;
}
