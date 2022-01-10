// function fn(a, b) {
//   console.log(a, b);
// }
// fn(1);
// あとに定義された関数が実行される
// 関数宣言はホイスティングが行われる
// function fn(a, b) {
//   console.log(2);
// }

function fn(a, b = 11) {
  console.log(arguments);
  console.log(a, b);
}
fn(1);
fn(1, undefined);

function fn2() {
  // argumentsは勝手に作成される
  console.log(arguments);
  const a = arguments[0];
  const b = arguments[1];
  console.log(a, b);
}

const c = fn2(1, 2);
console.log(c);

function fn3(...args) {
  // argumentsは勝手に作成される
  console.log(args);
  const a = args[0];
  const b = args[1];
  console.log(a, b);
  return args;
}

const ret = fn3(111, 2222, 333);
console.log(ret);
