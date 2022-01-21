let a  = 'Hello';
let b = a; // 値(実体)ごとコピー
b = 'Bye';
console.log(b);
console.log(a);

let c = {
  prop: 'Hello',
};
let d = c; // 参照先（アドレス）をコピー
c.prop = 'Bye';
console.log(d);
console.log(c);

d = {}; // 参照先が変わる
console.log(d);
console.log(c);