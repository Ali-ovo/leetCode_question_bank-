var isValid = function (s) {
  var a = s.length / 2;
  for (var i = 0; i < a; i++) {
    s = s.replaceAll("()", "").replaceAll("{}", "").replaceAll("[]", "");
  }
  return s.length == 0;
};


console.log(isValid("{[()]}"));