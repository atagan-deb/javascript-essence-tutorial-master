// let a = 1 + 2 * 3;
let a = 0;
console.log(a);

let b = a++;
console.log(a, b);
let c = ++a;
console.log(a, b, c);

a = b = 1;
console.log(a, b);

function fn() {
  let d = 0;
  return d++;
}
console.log(fn()); // 0
console.log(!fn() * 5); // 5
console.log(!(fn() * 5)); //true
