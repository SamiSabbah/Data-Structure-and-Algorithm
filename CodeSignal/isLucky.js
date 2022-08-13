function solution(n) {
  const nArray = toArray(n);
  let leftSum = 0;
  let rightSum = 0;

  for (let i = 0; i < nArray.length; i++) {
    if (i < nArray.length / 2) {
      leftSum += nArray[i];
    } else {
      rightSum += nArray[i];
    }
  }

  return rightSum == leftSum;
}

function toArray(n) {
  let myFunc = (num) => Number(num);

  return Array.from(String(n), myFunc);
}
