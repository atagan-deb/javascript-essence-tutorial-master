import "./moduleA.js" // moduleAが一度実行される
console.log(this);

function fn() {
  console.log(this);
}
fn();

const obj = {
  fn,
};
obj.fn();

console.log(window.d);
