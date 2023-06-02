Function.prototype.callPolyfill = function (context) {
  if (typeof this !== 'function') {
    throw new Error('type error')
  }
  if (context === null || context === undefined) {
    // 指定为 null 和 undefined 的 this 值会自动指向全局对象(浏览器中为window)
    context = window
  } else {
    // 值为原始值（数字，字符串，布尔值）的 this 会指向该原始值的实例对象
    context = Object(context)
  }

  // 使用Symbol 来确定唯一
  const fnSym = Symbol()

  //模拟对象的this指向
  context[fnSym] = this

  // 获取参数
  const args = [...arguments].slice(1)

  //绑定参数 并执行函数
  const result = context[fnSym](...args)

  //清除定义的this
  delete context[fnSym]

  // 返回结果
  return result
}

function increment() {
  this.count++
  return this.count
}
increment.callPolyfill({ count: 1 }) // 2
