var isAnagram = function (s, t) {
  console.log([...s].sort().join(''));
  console.log([...t].sort().join(''));
  return s.length == t.length && [...s].sort().join('') == [...t].sort().join('')

};
console.log(isAnagram('anagram', 'nagaram'));