
function printEquality(a, b){
  console.log(a === b);
  console.log(a == b);
}
let a = '1';
let b = 1;

printEquality(a, b);

console.log(b === Number(a));

let e = "";
let f = 0;
let g = "0"

printEquality(e, f);
printEquality(e, g);
printEquality(g, f);