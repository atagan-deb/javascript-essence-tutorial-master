window.name = "John";

const person = {
  name: "Tom",
  hello: function () {
    console.log("Hello " + this.name);
  },
};
person.hello();

const helloTom = person.hello.bind(person); // bindにより新たな関数が作成される
// bindによるthisの束縛

function fn(ref) {
  ref();
}

fn(person.hello);
fn(helloTom);

function a() {
  console.log("hello " + this.name);
}
const b = a.bind({ name: "Joy" });
b();
b("Tim");

function c(name) {
  console.log("hey " + name);
}
const d = c.bind(null, "JOlly");
d();
d("Tim");
