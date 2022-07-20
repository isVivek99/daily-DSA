// 1
// 22
// 333
// 4444
// 55555

function print(num) {
  for (let index = 0; index < num; index++) {
    console.log(num + " ");
  }
  if (num - 1 === 0) return;
  print(num - 1);
}

print(5);
