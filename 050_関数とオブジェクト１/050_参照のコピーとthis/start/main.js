const person = {
  name: "Tom",
  hello: function () {
    console.log("Hello " + this.name);
  },
};
person.hello();

const ref = person.hello;
ref();

window.name = "John";
ref(); // 関数として実行される場合はthisはグローバルオブジェクトを参照する
console.log(this.name);
