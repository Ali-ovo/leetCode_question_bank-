function* fibGenerator() {
  let a = 0,
    b = 1
  while (true) {
    yield a
    b += a
    a = b - a
  }
}

const gen = fibGenerator()
gen.next().value // 0
gen.next().value // 1
gen.next().value // 1
