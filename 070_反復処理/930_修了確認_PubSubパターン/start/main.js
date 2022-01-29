/**
 * 問題：
 * my-library.jsに記載。
 */

function customFn1() {
  console.log("customFn1");
}
function customFn2() {
  console.log("customFn2");
}
function customFn3() {
  console.log("customFn3");
}

// const events = {
//   map: new Map(),
//   on(key, fn) {
//     const fns = this.map.get(key);
//     if (fns?.length > 0) {
//       this.map.set(key, [...fns, fn]);
//     } else {
//       this.map.set(key, [fn]);
//     }
//   },
//   off(key, fn) {
//     this.map.delete(key);
//   },
//   emit(key) {
//     const fns = this.map.get(key);
//     for (f of fns) {
//       f();
//     }
//   },
// };

const events = (function () {
  const eventStack = new Map();

  return {
    on(type, fn) {
      const fnStack = eventStack.get(type) || new Set();
      fnStack.add(fn);
      eventStack.set(type, fnStack);
    },
    off(type, fn) {
      const fnStack = eventStack.get(type);
      if (fnStack && fnStack.has(fn)) {
        fnStack.delete(fn);
      }
    },
    emit(type, _this) {
      const fnStack = eventStack.get(type);
      if (fnStack) {
        for (fn of fnStack) {
          fn();
					fn.call(_this);
        }
      }
    },
  };
})();

events.on("beforeInit", customFn1);
events.on("beforeInit", customFn2);
events.off("beforeInit", customFn3);
events.on("afterInit", customFn3);

// console.log("----------------------------------");
// console.log(events);
// console.log("----------------------------------");

new MyLibrary();

// MapとSetを組み合わせてeventを登録する処理が勉強になる
