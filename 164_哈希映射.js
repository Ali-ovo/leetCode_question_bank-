class MyHashMap {
  constructor() {
    this.hashMap = {}
  }

  put(key, value) {
    this.hashMap[key] = value
  }

  get(key) {
    return (this.hashMap[key] || this.hashMap[key] === 0) ? this.hashMap[key] : -1
  }

  remove(key) {
    delete this.hashMap[key]
  }
}

const myHashMap = new MyHashMap()
myHashMap.put(1, 1) // myHashMap 现在为 [[1,1]]
myHashMap.put(2, 2) // myHashMap 现在为 [[1,1], [2,2]]
myHashMap.get(1) // 返回 1 ，myHashMap 现在为 [[1,1], [2,2]]
myHashMap.get(3) // 返回 -1（未找到），myHashMap 现在为 [[1,1], [2,2]]
myHashMap.put(2, 1) // myHashMap 现在为 [[1,1], [2,1]]（更新已有的值）
myHashMap.get(2) // 返回 1 ，myHashMap 现在为 [[1,1], [2,1]]
myHashMap.remove(2) // 删除键为 2 的数据，myHashMap 现在为 [[1,1]]
myHashMap.get(2) // 返回 -1（未找到），myHashMap 现在为 [[1,1]]
