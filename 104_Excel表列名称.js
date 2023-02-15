/* 
  A -> 1
  B -> 2
  C -> 3
  ...
  Z -> 26
  AA -> 27
  AB -> 28 
  ... 


  输入：columnNumber = 1
  输出："A"


  输入：columnNumber = 2147483647
  输出："FXSHRXW"
*/

// Excel表列名称
function convertToTitle(columnNumber) {
  const str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  let res = ''
  while (columnNumber) {
    columnNumber--
    res = str[columnNumber % 26] + res
    columnNumber = Math.floor(columnNumber / 26)
  }
  return res
}


// const result = []
// while (columnNumber > 0) {
//   columnNumber--
//   result.push(String.fromCharCode("A".charCodeAt(0) + (columnNumber % 26)))
//   columnNumber = Math.floor(columnNumber / 26)
// }
// return result.reverse().join('')

convertToTitle(28)
