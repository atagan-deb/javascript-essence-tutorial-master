const obj = {
  prop1: "value1",
  prop2: "value2",
  prop3: "value3",
};

// const items = Object.entries(obj); // 配列になおして反復
// console.log(items);
// for (let item of items) {
//   console.log(item);
// }

// Objectのイテレータを変更するのはだめ
// 自作したオブジェクトなどのイテレータを書き換えるのはアリ
Object.prototype[Symbol.iterator] = function () {
  const keys = Object.keys(this);
  console.log(keys);
  let i = 0;
  let _this = this;
  return {
    next() {
      let key = keys[i++];
      console.log(this);
      console.log(_this);
      return {
        value: [key, _this[key]],
        done: i > keys.length,
      };
    },
  };
};
for (let item of obj) {
  console.log(item);
}
