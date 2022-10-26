/**
 * @param {number} x
 * @return {boolean}
 */
let isPalindrome = function (x) {
  let number = Array.from(String(x));
  let len = number.length;

  for (let i = 0; i < number.length / 2; i++) {
    if (number[i] !== number[len - 1]) {
      return false;
    }
    len--;
  }
  return true;
};

console.log(isPalindrome(-121));
