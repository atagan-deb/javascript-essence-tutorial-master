let a = 0; // scriptスコープ
var b = 0; // globalスコープ
function c() {} // global

console.log(window.b);
console.log(b);

window.d = 1;
console.log(window.d);
// console.log(d)
let d = 2;
console.log(window.d);
console.log(d)

// debugger; // ここで実行が一時停止する
