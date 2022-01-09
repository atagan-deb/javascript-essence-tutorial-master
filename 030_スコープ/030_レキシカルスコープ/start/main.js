let a = 2;
function fn1() {
  let b = 1;
  // OK
  function fn2() {
    let c = 3;
    console.log(b);
  }
  fn2();
}
fn1();

// error
// function fn3() {
//   let d = 3;
//   console.log(b); // error
// }
// fn3();

// レキシカルスコープ
// ＝ 外部スコープ (外側のスコープ)