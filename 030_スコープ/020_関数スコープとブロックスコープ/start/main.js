// 関数スコープ
function a() {
  let b = 0;
  console.log(b);
}
// console.log(b); // error bが見えない
a();

// ブロックスコープ
{
  let c = 1;
  const d = 2;
  var e = 3;
  function f() {
    console.log("f is called");
  }
  const g = function () {
    console.log("g is called");
  };
}
// console.log(c); // エラー
// console.log(d); // error
console.log(e); // ok
f();
// g(); // error const定義