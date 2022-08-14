/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function (nums) {
  let evenNumberOfDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    let divide = 1;
    while (nums[i] / 10 >= 1) {
      nums[i] /= 10;
      divide++;
    }

    if (divide % 2 === 0) evenNumberOfDigits++;
  }

  return evenNumberOfDigits;
};
