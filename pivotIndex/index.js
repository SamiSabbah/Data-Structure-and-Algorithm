/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  let pivot = -1,
    leftSum = 0,
    rightSum = 0;

  for (let i = 0; i < nums.length; i++) {
    leftSum = arraySum(nums.slice(-0, i));
    rightSum = arraySum(nums.slice(i + 1));

    if (rightSum === leftSum) {
      return (pivot = i);
    }
  }

  return pivot;
};

const arraySum = (nums) => {
  let sum = 0;

  if (nums.length === 0) return 0;
  if (nums.length === 1) return nums[0];
  ``;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  return sum;
};

console.log(pivotIndex([-1, -1, 0, 0, -1, -1]));

// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var pivotIndex = function (nums) {
//   let sum = 0,
//     leftsum = 0;
//   nums.map((x) => (sum += x));
//   for (let i = 0; i < nums.length; ++i) {
//     if (leftsum == sum - leftsum - nums[i]) return i;
//     leftsum += nums[i];
//   }
//   return -1;
// };
