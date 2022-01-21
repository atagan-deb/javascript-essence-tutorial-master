// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }
// Person.prototype.hello = function () {
//   console.log("hello " + this.name);
// };

// classを使って上記を表現
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  hello() {
    console.log("hello " + this.name);
  }
}

const bob = new Person("Bob", 23);
console.log(bob);

// es6以降はclassを使って記述する