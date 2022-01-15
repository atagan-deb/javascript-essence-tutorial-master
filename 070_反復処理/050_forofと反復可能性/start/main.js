const arry = ["a", "b", "c"];

arry[4] = "e";
Object.prototype.method = function () {};
Object.defineProperty(arry, 0, {
  enumerable: false,
});
const d = Object.getOwnPropertyDescriptor(arry, 0);
console.log(d);
for (let v of arry) {
  console.log(v); // arry[0]も表示される、methodは表示されない、prototype.Symbol.iteratorの挙動に依存
}
