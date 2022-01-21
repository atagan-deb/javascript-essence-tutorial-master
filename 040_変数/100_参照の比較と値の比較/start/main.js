const a = {
  prop: 0,
};

const b = {
  prop: 0,
};

console.log(a === b); // 参照の比較：false
console.log(a == b); // 参照の比較：false
console.log(a.prop === b.prop); // 値の比較：true

const c = a; // 参照先をコピー
console.log(a === c); // 参照の比較：true
