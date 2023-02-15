var repeatedSubstringPattern = function (s) {
  let s1 = (s + s).slice(1, -1);
  console.log(s1);
  return s1.indexOf(s) != -1
};

console.log(repeatedSubstringPattern('abab'));