// 分割代入では参照先の値をコピーする
// プリミティブ型のコピーに近い

const a = {
  prop: 0,
};

let { prop, b } = a; // bはundefined

console.log(prop, b);

prop = 1;

console.log(a, prop);

function fn(arg) {
  const { prop } = arg;
  console.log(a, prop);
}

fn(a);

function fn1({ prop }) {
  console.log(a, prop);
}

fn1(a);

const c = {
  prop1: {
    prop2: 0,
  },
};

let { prop1 } = c;
console.log(c);
prop1.prop2 = 1;

console.log(c, prop1);
