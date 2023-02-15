var isPalindrome = function (s) {

  s = s.toUpperCase().replace(/[^A-Za-z0-9]/g, "")
  return s == s.split("").reverse().join("") ? true : false
};

console.log(isPalindrome("0P"));