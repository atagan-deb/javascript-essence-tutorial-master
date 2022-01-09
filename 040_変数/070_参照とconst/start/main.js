const a = "hello";
// a = "bye"; // error

const b = {
  prop: "hello",
};
// b = {} // error
b.prop = "bye"; // プロパティは変更可能
console.log(b);
