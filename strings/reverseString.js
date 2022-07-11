let str = "learnersbucket";
//split: makes an array out of the string,
//reverse: reverses the array
//join: joins the string
const revStr = str.split("").reverse().join("");
console.log(revStr);

// brute force approach

let reversed = "";
for (let index = str.length - 1; index >= 0; index--) {
  reversed += str[index];
}

console.log(reversed);
