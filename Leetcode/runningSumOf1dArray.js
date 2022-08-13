/**
 * @param {number[]} nums
 * @return {number[]}
 * with  check
 */
var runningSum = function (nums) {
  if (1 >= nums.length >= 1000) return [];

  for (let i = 1; i < nums.length; i++) {
    if ((-10 ^ 6) >= nums[i] >= (10 ^ 6)) return [];
    nums[i] = nums[i] + nums[i - 1];
  }

  return nums;
};

const test = runningSum([1, 2, 3]);

console.log(test);

// /**
//  * @param {number[]} nums
//  * @return {number[]}
//  * with out check
//  */
// var runningSum = function (nums) {
//   for (let i = 1; i < nums.length; i++) {
//     nums[i] = nums[i] + nums[i - 1];
//   }

//   return nums;
// };
