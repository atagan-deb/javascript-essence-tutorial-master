function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.hello = function () {
  console.log("hello " + this.name);
};

function Japanese(name, age, gender) {
  Person.call(this, name, age); // コンストラクタの継承
  this.gender = gender; // プロパティの追加
}
// プロトタイプの継承
Japanese.prototype = Object.create(Person.prototype); // __proto__を持ったPerson{}を生成・代入
console.log(Japanese.prototype);

const taro = new Japanese("Taro", 23, "M");
console.log(taro);

taro.hello();
// Japaneseコンストラクタ関数にhelloを追加
// コンストラクタ関数が先に呼ばれる
Japanese.prototype.hello = function () {
  console.log("Konnichiwa " + this.name);
};
taro.hello();
console.log(taro);

Japanese.prototype.bye = function () {
  console.log("Sayounara " + this.name);
};
taro.bye();
console.log(taro);
