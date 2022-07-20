//Given two strings s and t, return true if t is an anagram of s, and false otherwise.
//An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
// typically using all the original letters exactly once.

var isAnagram = function (s, t) {
  let n1 = s.length;
  let n2 = t.length;

  if (n1 !== n2) return false;

  let map1 = {};
  let map2 = {};

  for (let i = 0; i < s.length; i++) {
    map1[s[i]] = map1[s[i]] ? map1[s[i]] + 1 : 1;
    map2[t[i]] = map2[t[i]] ? map2[t[i]] + 1 : 1;
    console.log(map2[t[i]]);
  }
  console.log(map1, map2);
  for (let i = 0; i < Object.keys(map1).length; i++) {
    console.log('here');
    if (
      !(
        Object.keys(map1).includes(Object.keys(map2)[i]) &&
        map1[Object.keys(map1)[i]] === map2[Object.keys(map1)[i]]
      )
    ) {
      return false;
    }
  }
  return true;
};
console.log(isAnagram('dgqztusjuu', 'dqugjzutsu'));
