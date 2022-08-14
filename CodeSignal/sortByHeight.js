function solution(a) {
  let sortedArray = a.filter((ele) => ele !== -1).sort((a, b) => a - b);
  let currentSortedIndex = 0;

  for (let i = 0; i < a.length; i++) {
    if (a[i] !== -1) {
      a[i] = sortedArray[currentSortedIndex];
      currentSortedIndex++;
    }
  }

  return a;
}
