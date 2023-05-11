Array.prototype.groupBy = function (fn) {
  let res = {}
  this.forEach((item) => {
    const key = fn(item)
    if (!res[key]) res[key] = []
    res[key].push(item)
  })

  return res
}

const arr = [{ id: '1' }, { id: '1' }, { id: '2' }]
console.log(arr.groupBy((item) => item.id))
// {   "1": [{"id": "1"}, {"id": "1"}],    "2": [{"id": "2"}] }
