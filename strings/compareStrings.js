let a = "gfg";
let b = "y";
let c = "geeksforgeeks";

console.log(a.localeCompare(b));
console.log(a.localeCompare(c));
// returns
//0: If both the strings are equal.
//1: If first string is smaller than second string in sorted order.
//-1: If first is greater than second string.

//normal equlity comparison
console.log("2" === 2);
// == converts vlue to different data type while comparing, here 2 is converted to string i.e. 2
console.log("2" == 2);
//compare 2 strings
//compares each character from left to right
console.log("ax" < "az");


