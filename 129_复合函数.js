function compose(functions) {
  return function (x) {
    return functions.reduceRight((p, c) => c(p), x)
  }
}

const fn = compose([(x) => 10 * x, (x) => 10 * x, (x) => 10 * x])
fn(1) // 1000
