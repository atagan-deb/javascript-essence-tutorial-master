function Person(name, age) {
    this.name = name;
    this.age = age;
}

Object.prototype.hello = function() {
    console.log('Object: hello ' + this.name);
}

const bob = new Person('Bob', 18);
const ret1 = bob.hasOwnProperty('name');
console.log(ret1);
const ret2 = bob.hasOwnProperty('hello'); // プロトタイプチェーンを遡らない
console.log(ret2);

console.log('name' in bob);
console.log('hello' in bob); // プロトタイプチェーンを遡る
console.log('hasOwnProperty' in bob); // プロトタイプチェーンを遡る
