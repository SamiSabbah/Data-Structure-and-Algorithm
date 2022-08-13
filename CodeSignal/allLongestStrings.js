function solution(inputArray) {
  let max = 0;

  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i].length > max) {
      max = inputArray[i].length;
    }
  }

  const result = inputArray.filter((ele) => ele.length == max);
  return result;
}
