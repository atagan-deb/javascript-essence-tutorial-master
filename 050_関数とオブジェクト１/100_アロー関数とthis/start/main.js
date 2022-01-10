window.name = "John";
const a = () => console.log("Bye " + this.name);
const person = {
  name: "Tom",
  hello: function () {
    console.log("Hello " + this.name);
    const b = () => console.log("Good Luck " + this.name);
    a();
    b();
  },
  hi() {
    console.log("Hi " + this.name);
  },
  hey: () => {
    console.log("Hey " + this.name);
  },
};
person.hello();
person.hi();
person.hey(); // アロー関数ではthisはレキシカルスコープを参照する
