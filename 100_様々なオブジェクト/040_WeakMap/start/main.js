const wm = new WeakMap(); // for ofは使用できない

const o = {};
wm.set(o, "value1");
console.log(wm.get(o));
console.log(wm.has(o));
console.log(wm.delete(o));
console.log(wm.get(o));

const wm2 = new WeakMap();

let o2 = {};
wm2.set(o2, "value1");
console.log(wm2.get(o2));

// キーオブジェクトが削除されるとWeakMapも自動で削除される
// このような仕組みをガベージコレクションと呼ぶ
o2 = null;
o2 = {};
console.log(wm2.get(o2));
