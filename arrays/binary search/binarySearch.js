function binarySearch(value, arr) {
  let lower = 0;
  let upper = arr.length - 1;

  while (lower <= upper) {
    const mid = lower + Math.round((upper - lower) / 2);
    if (arr[mid] === value) return true;
    if (value > arr[mid]) lower = mid + 1;
    else upper = mid - 1;
  }
  //if ele not found
  return -1;
}

const myList = [1, 3, 5, 7, 9];

console.log(binarySearch(3, myList));

//time complexity ; O(n)
//space complexity: if we consider the array we got in the function then it is O(n), but if we consider auxillary space
// i,e the space atuallly used the it is O(1)
