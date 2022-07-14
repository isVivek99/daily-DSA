//Given an integer array nums and an integer k, return true if there are two distinct indices i and j
// in the array such that nums[i] == nums[j] and abs(i - j) <= k.
//constraints
//1 <= nums.length <= 10^5
//-10^9 <= nums[i] <= 10^9
//0 <= k <= 10^5

//brute force or Intuition

const checkIndices = function (array, k) {
  console.log(array);
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      // console.log("i:", array[i], "j:", array[j],Math.abs(array[i] - array[j]), Math.abs(array[i] - array[j])<= k);
      if (Math.abs(array[i] - array[j]) <= k) return true;
    }
  }
};

var containsNearbyDuplicate = function (nums, k) {
  let obj = {};
  if (nums.length === 1) false;
  for (let i = 0; i < nums.length; i++) {
    if (obj[nums[i]] === undefined) {
      obj[nums[i]] = [i];
    } else if (Object.keys(obj).includes(`${nums[i]}`)) {
      obj[nums[i]] = [...obj[nums[i]], i];
      if (obj[nums[i]].length >= 2) {
        if (checkIndices(obj[nums[i]], k)) {
          return true;
        }
      }
    }
  }
  return false;
};
console.log(containsNearbyDuplicate([1, 2, 3, 1, 4, 2, 1], 6));
// time complexity: O(n^4)
//space complexity: O(n)
