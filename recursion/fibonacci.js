//fibonacci recursive calls
let ans = 0;
function fibo(num) {
  if (num < 2) return num;

  let ans = fibo(num - 1) + fibo(num - 2);
  return ans;
}

console.log(fibo(20));

//time complexity: O(2^n)
