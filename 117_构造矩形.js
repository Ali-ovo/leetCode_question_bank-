var constructRectangle = function (area) {
  let w = Math.floor(Math.sqrt(area))
  while (area % w !== 0) {
    --w
  }
  return [Math.floor(area / w), w]
}

constructRectangle(122122) // [427, 286]
