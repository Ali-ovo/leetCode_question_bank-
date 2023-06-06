class ArrayWrapper {
  constructor(nums) {
    this.values = nums
  }

  valueOf() {
    return this.values.reduce((a, b) => a + b, 0)
  }

  toString() {
    return `[${this.values.join()}]`
  }
}

const obj1 = new ArrayWrapper([1, 2])
const obj2 = new ArrayWrapper([3, 4])
// obj1 + obj2 // 10
// String(obj1) // "[1,2]"
// String(obj2) // "[3,4]"
