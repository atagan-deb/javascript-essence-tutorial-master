class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  hello(person) {
    console.log(`${this.name} says hello ${person.name}`);
    return this;
  }

  introduce() {
    console.log(`Hi, I'm ${this.name}, ${this.age} years old.`);
    return this;
  }

  shakeHands(person) {
    console.log(`${this.name} shake hands with ${person.name}.`);
    return this;
  }

  bye(person) {
    console.log(`Goodbye, ${person.name}.`);
    return this;
  }
}

const bob = new Person("Bob", 23);
const tim = new Person("Tim", 33);

// 関数の返り値にインスタンスを設定することで、チェーンメソッドを実装できる
// introduce以降は返ってきたオブジェクトに対して関数を探しに行く
bob.hello(tim).introduce().shakeHands(tim).bye(tim);
