let a = 2;
window.a = 4;
function fn1() {
  // let a = 1;
  function fn2() {
    console.log(a);

    // とりあえず、varは使う必要がないな
    if (true) {
      var a = 3;
    }
  }
  fn2();
}
fn1();

// スコープチェーン
// スコープ（ブロック）が入れ子構造になって、内側から外側への参照がつながっている（可能である）こと
// 内側から順に探していく
// グローバルスコープはスクリプトスコープより外側に存在する
