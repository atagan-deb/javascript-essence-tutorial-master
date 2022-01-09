let a = 0;

function fn1(arg1) {
  arg1 = 1;
  console.log(a, arg1);
}
fn1(a); // aの値は書き換わらない

let b = {
  prop: 0,
};

function fn2(arg2) {
  arg2.prop = 1;
  console.log(b, arg2);
}

fn2(b); // 参照先が同じであるため、bのプロパティも書き換わる


