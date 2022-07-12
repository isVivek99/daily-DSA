//Given an integer array nums, return true if any value appears at
//least twice in the array, and return false if every element is distinct.

//test cases
// Input: nums = [1,2,3,1]
// Output: true

// Example 2:
// Input: nums = [1,2,3,4]
// Output: false

// Example 3:
// Input: nums = [1,1,1,3,3,4,3,2,4,2 ]
// Output: true

// 1. intution
var containsDuplicate = function (nums) {
  let obj = {};
  if (nums.length === 1) false;
  for (let i = 0; i < nums.length; i++) {
    let cnt = 0;
    if (obj[nums[i]] === undefined) {
      obj[nums[i]] = cnt;
    } else {
      obj[nums[i]] = obj[nums[i]] + 1;
      return true;
    }
  }
  return false;
};

console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));

////
//approach-2
// create a Set and then compare length of previous arr and new set, and if set has less length return it

// time complexity O(n)
// space complexity O(n)
