function Person1(name, age) {
  this.__name = name;
  this.age = age;
}

Object.defineProperty(Person1.prototype, "name", {
  get: function () {
    return this._name;
  },
  set: function (val) {
    this._name = val;
  },
});

const p1 = new Person1("Bob", 23);
console.log(p1.name);
p1.name = "Tom";
console.log(p1.name);
console.log(p1);

class Person2 {
  constructor(name, age) {
    this.__name = name;
    this.age = age;
  }
  get name() {
    return this._name;
  }
  set name(val) {
    this._name = val;
  }
	static hello(){ // 静的メソッド
		console.log('helllo' + this);
	}
}

const p2 = new Person2("Bob", 23);
console.log(p2.name);
p2.name = "Tom";
console.log(p2.name);
console.log(p2);
Person2.hello(); // 静的メソッドはコンストラクタから直接呼び出せる