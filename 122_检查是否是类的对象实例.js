function checkIfInstanceOf(obj, classFunction) {
  if (classFunction == null) return false

  while (obj != null) {
    const proto = Object.getPrototypeOf(obj)
    if (proto === classFunction.prototype) return true
    obj = proto
  }
  return false
}

// func = () => {
//   class Animal {}
//   class Dog extends Animal {}
//   return checkIfInstanceOf(new Dog(), Animal) // true
// }

func = () => checkIfInstanceOf(5, Number) // false
console.log(func())
