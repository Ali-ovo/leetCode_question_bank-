var findRestaurant = function (list1, list2) {
  let map = new Map()
  for (let i = 0; i < list1.length; i++) {
    map.set(list1[i], i)
  }
  let obj = {}
  let min = Infinity
  
  for (let i = 0; i < list2.length; i++) {
    let key = list2[i]
    if (map.has(key)) {
      obj[key] = map.get(key) + i
      min = Math.min(min, obj[key])
    }
  }
  console.log(obj);
  let res = []
  for (let prop in obj) {
    if (obj[prop] === min) res.push(prop)
  }
  return res
};

console.log(findRestaurant(["Shogun", "Tapioca Express", "Burger King", "KFC"], ["Piatti", "The Grill at Torrey Pines", "Hungry Hunter Steakhouse", "Shogun"]));