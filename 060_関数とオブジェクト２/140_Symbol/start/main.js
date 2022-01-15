// Symbol: 必ず一意の値を返す関数

const s = Symbol();
console.log(s);

const s1 = Symbol("hello");
console.log(s1);

const s2 = Symbol("hello");
console.log(s1 === s2); // false
console.log(typeof s2); // symbol

const str = new String("Tom");
console.log(str); // Symbol.iteratorが存在する

// es6導入時に過去のコードの実行を担保するためにSymbolが導入された
// 過去にiteratorという名前でプロパティを使用したコードが存在した場合、es6で追加されたiteratorと名前がかぶってしまい、どちらが実行されるか担保できない
// Symbol.iteratorとして登録することで、名前が重複しても異なるプロパティとして判断される

String.prototype.iterator = function () {};
String.prototype[s1] = function () {};
String.prototype[s2] = function () {};
console.log(str); // prototypeにSymbol('hello')という関数が２つ存在する

// ビルトインオブジェクトのプロトタイプを書き換えることは推奨されない
// プロトタイプ汚染
const s3 = Symbol("hello");
String.prototype[s3] = function () {
  return "hello " + this;
};
const tom = "Tom";
console.log(tom[s3]());
