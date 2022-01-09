a(); // ok
function a() {
  console.log("a is called");
}

// aaaaa(); // error constで定義しているため
// const aaaaa = function() {
//   console.log("aaaaa is called");
// }

console.log(b); // ok
// console.log(c); // error
// console.log(d); // error
var b = 0;
let c = 0;
const d = 0;
