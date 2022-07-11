function binarySearch(value, arr) {
  let lower = 0;
  let upper = arr.length - 1;

  while (lower >= upper) {
    const mid = lower + Math.round((upper - lower) / 2);
  }
  //if ele not found
  return -1;
}

const myList = [1, 3, 5, 7, 9];

console.log(binarySearch(3, myList));
