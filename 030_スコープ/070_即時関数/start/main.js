// 関数定義と同時に一度だけ実行される関数 (IIFE)
// let result = (function(仮引数){
//   return 戻り値;
// })(実引数)
// 実引数 => 仮引数
// 戻り値 => result

function a() {
  console.log("called");
}
a();

(function () {
  console.log("即時関数");
})();

let b = (function () {
  console.log("即時関数");
})();

let d = (function (c) {
  console.log(`引数：${c}`);
  return "戻り値";
})(10);
console.log(d);

let i = function () {
  let privateVal = 0;
  let publicVal = 20;

  function privateFn() {
    console.log("Private Function");
    privateVal++;
  }
  function publicFn() {
    console.log("Public Function");
    privateFn();
    return privateVal;
  }
  return {
    publicVal,
    publicFn,
  };
}();

i.publicFn();
i.publicFn();
const f = i.publicFn();
console.log(i.publicVal);
console.log(f);