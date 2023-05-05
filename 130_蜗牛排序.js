const nums = [19, 10, 3, 7, 9, 8, 5, 2, 1, 17, 16, 14, 12, 18, 6, 13, 11, 20, 4, 15]
const rowsCount = 5
const colsCount = 4

Array.prototype.snail = function (rowsCount, colsCount) {
  if (this.length !== rowsCount * colsCount) {
    return []
  }
  const res = new Array(rowsCount).fill(null).map(() => new Array(colsCount).fill(0))

  let rowStart = 0
  let colStart = 0
  let index = 1

  for (let i = 0; i < this.length; i++) {
    res[rowStart][colStart] = this[i]
    if (rowStart === rowsCount - 1 && colStart % 2 === 0) {
      colStart++
      index *= -1
    } else if (rowStart === 0 && colStart % 2 === 1) {
      colStart++
      index *= -1
    } else {
      rowStart += index
    }
  }
  return res
}

nums.snail(5, 4)

/* [
  [19,17,16,15],
  [10,1,14,4],
  [3,2,12,20],
  [7,5,18,11],
  [9,8,6,13]
 ]
 */
