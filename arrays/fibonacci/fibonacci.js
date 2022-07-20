const fib = function (n) {
  let n1 = 0,
    n2 = 1,
    nextTerm;
  for (let i = 1; i <= n; i++) {
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
  }
  return n1;
};
console.log(fib(4));
//time Complexity: o(n)
