// 関数コンストラクターは基本的には使わない
const fn1 = new Function("a", "b", "return a + b");

const ret1 = fn1(1, 2);
console.log(ret1);

function fn2(a, b) {
  return a + b;
}

console.log(fn2 instanceof Function);

let d = 0; // この外部スコープをコメントアウトするとerror
function fn() {
  let d = 1; // 関数コンストラクターでは関数スコープを参照しない
  // スクリプトスコープであるlet d = 0を見る
  // すなわちdには0が代入されるため、fn3の結果は常に0となる
  const fn3 = new Function("a", "b", "return a * b * d");
  return fn3;
}
const f = fn();
const ret3 = f(1, 2);
console.log(ret3);

const obj = new function () {
  this.a = 0;
};
const fn4 = new Function("return;");
console.log(obj, fn4);
const fn5 = new Function("this.a = 0;");
console.log(obj, fn5);
const fn6 = new Function("this.a = 0;");
const obj6 = new fn6();
console.log(obj, obj6);
