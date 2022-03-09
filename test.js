// function fn(callback) {

//   function successFn() {
//     console.log('成功');
//   }

//   function c() {
//     callback()
//   }

//   return {
//     successFn,
//     c
//   }
// }

// const { successFn, c } = fn(() => {
//   successFn()
// })

// c()

// var x = 1;
// function test(
//   a,
//   y = function () {
//     x = 3;
//     console.log(x);
//   }
// ) {
//   console.log(x);
//   var x = 2
//   y();
//   console.log(x);
// }

// test();
// console.log(x);


let test2 = 123;
const people = {
  test1: "test1",
  hello() {
    console.log(this.test1);
  },
  hey:()=> {
    console.log(test2);
  },
};
people.hello();
people.hey()
