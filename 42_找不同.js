var findTheDifference = function (s, t) {
  let snum = 0;

  for (let i = 0; i < s.length; i++) {
    snum += s[i].charCodeAt();
  }

  let tnum = 0;

  for (let i = 0; i < t.length; i++) {
    tnum += t[i].charCodeAt();
  }


  return String.fromCharCode(tnum - snum);
};

console.log(findTheDifference("ae", "aea"));