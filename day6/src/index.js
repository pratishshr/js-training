// // // // ES6 Modules
// // // import Box from './Box';
// // // import Container from './Container';

// // // let container = new Container();
// // // let box = new Box();

// // // // var vs let
// // // var a = 1;
// // // var a = 10;

// // // let b = 1;
// // // // let b = 2;
// // // // let scoping
// // // function test() {
// // //   // for (var a = 1; a < 10; a++) {

// // //   // }

// // //   // console.log(a);
// // //   for (let b = 1; b < 10; b++) {

// // //   }

// // //   console.log(b);
// // // }

// // // // test();
// // // // console.log(a);

// // // const AGE = 1;
// // // // AGE = 2;
// // // console.log(AGE);


// // // Arrow functions
// // function Slider() {
// //   this.value = 'test';

// //   this.init = () => {
// //     setInterval(() => {
// //       console.log(this.value);
// //     }, 1000);
// //   }
// // }

// // let slider = new Slider();
// // slider.init();

// // let a = () => {

// // }

// // function doSomething() {

// // }

// // setInterval(() => {

// // }, 1000)

// // // let is the new var
// // // const


// // Pass by value

// let count = [1, 2, 3];
// let a = 1;

// function modify(params, b) {
//   params[0] = 3;
//   b = 2;
// }

// modify(count, a);

// console.log(a);
// console.log(count);


// let prev = [1, 2, 3];
// // let b = [1, 2, 3];

// function test(prev) {
//   let newValue = prev.slice();
//   newValue[0] = 'test';
//   console.log(newValue);
// }

// test(prev);
// console.log(prev)

// let strings = 1 + 'px' + 'asdf' + 'adsf';

// // Template Strings
// let a = 1;
// let templateString = `${a}px  ${a} ${a} ${a}`;
// console.log(templateString);

let test = {
  a: 1,
  b: 2,
  c: 3
};

console.log(test);

let hawa = 'name';

let obj = {
  [hawa]: 'test'
};

function modify(obj, key, value) {
  obj[key] = value;
}

modify(obj, 'name', 'hawa');

console.log(obj);

// For of loop
let interns = [
  {
    name: 'Aishwarya'
  },
  {
    name: 'Sagun'
  }
]

for (let intern of interns) {
  console.log(intern);
}


//destructuring

let shyal = {
  name: 'Sabin',
  age: 80,
  gender: 'male'
};

let { name, age } = shyal;

console.log(name)