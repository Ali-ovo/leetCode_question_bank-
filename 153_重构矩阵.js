function matrixReshape(mat, r, c) {
  const res = new Array(r).fill(0).map(() => new Array(c).fill(0))

  if (mat.length * mat[0].length != r * c) {
    return mat
  }

  let row = 0
  let col = 0

  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[i].length; j++) {
      res[row][col] = mat[i][j]
      col++
      if (col == c) {
        row++
        col = 0
      }
    }
  }

  return res
}

matrixReshape(
  [
    [1, 2],
    [3, 4],
  ],
  1,
  4
)
// [[[1,2],[3,4]]]
