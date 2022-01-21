window.name = "John";

const person = {
  name: "Tom",
  hello: function () {
    console.log("Hello " + this.name);
  },
};
person.hello();

function fn(ref) {
  ref();
}

fn(person.hello); // あくまで、hello関数を引数として渡している、参照先を渡している
