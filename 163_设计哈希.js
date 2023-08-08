class MyHashSet {
  hashArr = []

  constructor() {
    this.hashArr = []
  }

  add(key) {
    if (!this.contains(key)) {
      this.hashArr.push(key)
    }
  }

  remove(key) {
    if (this.contains(key)) {
      const index = this.hashArr.indexOf(key)
      this.hashArr.splice(index, 1)
    }
  }

  contains(key) {
    return this.hashArr.includes(key)
  }
}
const myHashSet = new MyHashSet()
myHashSet.add(1) // set = [1]
myHashSet.add(2) // set = [1, 2]
myHashSet.contains(1) // 返回 True
myHashSet.contains(3) // 返回 False ，（未找到）
myHashSet.add(2) // set = [1, 2]
myHashSet.contains(2) // 返回 True
myHashSet.remove(2) // set = [1]
myHashSet.contains(2) // 返回 False ，（已移除）
