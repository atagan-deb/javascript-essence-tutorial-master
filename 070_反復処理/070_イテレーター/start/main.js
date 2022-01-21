// iteratorは構造がきまっている

// function genIterator(){
//   return { // iteratorの本体部
//     next: function(){ // 必須
//       return {
//         done: true / false, // ループ処理を続けるか？
//         value: "値" // 返却する値
//       }
//     }
//   }
// }

function genIterator(max = 10) {
  let i = 0;
  return {
    next: function () {
      if (i >= max) {
        return {
          done: true,
        };
      } else {
        return {
          done: false,
          value: i++,
        };
      }
    },
  };
}

const it = genIterator();
console.log(it.next());
console.log(it.next());
console.log(it.next());

const it10 = genIterator(10);
let a = it10.next();
while (!a.done && a.value < 1000) {
  console.log(a.value);
  a = it10.next();
}
console.log("----------------------------------------------------");
const obj = {
  [Symbol.iterator]: genIterator,
};
for (const i of obj) {
  console.log(i);
}

console.log("----------------------------------------------------");
const obj2 = {
  [Symbol.iterator]: genIterator.bind(null, 2),
};
for (const i of obj2) {
  console.log(i);
}

console.log("----------------------------------------------------");
const s = new Set(obj); // 反復可能オブジェクトで初期化可能
console.log(s);
