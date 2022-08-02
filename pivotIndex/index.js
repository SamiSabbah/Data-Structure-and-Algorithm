/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  let pivot = -1;
  let leftSum;
  let rightSum;

  leftSum = left(nums);
  rightSum = right(nums);

  let join = leftSum.concat(rightSum);
  let common = [];

  for (let i = 0; i < join.length; i++) {
    for (let j = 0; j < join.length; j++) {
      if (i !== j && join[i] === join[j]) {
        common.push(i, j);
      }
    }
  }
  console.log(leftSum);
  console.log(rightSum);
  console.log(join);
  console.log(common);
};

var left = function (nums) {
  for (let i = 1; i < nums.length; i++) {
    console.log(nums[i]);
    nums[i] = nums[i] + nums[i - 1];
  }

  return nums;
};

var right = function (nums) {
  for (let i = nums.length - 1; i > 0; i--) {
    nums[i] = nums[i] + nums[i + 1];
  }

  return nums;
};

pivotIndex([1, 7, 3, 6, 5, 6]);
