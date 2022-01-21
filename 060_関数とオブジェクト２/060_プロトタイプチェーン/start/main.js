function Person(name, age) {
  this.name = name;
  this.age = age;
  // this.hello = function () {
  //   console.log("OwnProperty: hello " + this.name);
  // };
}

// Person.prototype.hello = function () {
//   console.log("Person: hello " + this.name);
// };
Object.prototype.hello = function () {
  console.log("Object: hello " + this.name);
};

const bob = new Person("Bob", 18);

// 自身のプロパティ=>コンストラクタのプロトタイプのメソッド
// =>（下階層）オブジェクトプロトタイプのメソッド
// の順番に関数を探す
bob.hello();
console.log(bob);

const ret = bob.hasOwnProperty('name');
console.log(ret);