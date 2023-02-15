var longestCommonPrefix = function (strs) {
  var re = strs[0] ? strs[0] : '';
  for (var i = 1; i < strs.length; i++) {
    var regex = new RegExp('^' + re);

    while (!regex.test(strs[i]) && re.length) {
      re = re.slice(0, re.length - 1);
      regex = new RegExp('^' + re);
    }
  }
  return re;
};
longestCommonPrefix(["flower", "flow", "flight"])