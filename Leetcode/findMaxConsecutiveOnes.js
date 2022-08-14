/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  let max = 0;
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) sum++;
    else sum = 0;

    if (sum > max) max = sum;
  }

  return max;
};
