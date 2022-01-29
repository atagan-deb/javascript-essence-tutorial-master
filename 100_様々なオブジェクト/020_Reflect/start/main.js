class C {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }
}

// const obj1 = new C(1, 2);
// console.log(obj1);
// const obj2 = Reflect.construct(C, [1, 2]);
// console.log(obj2);
// console.log(obj1 === obj2);

// console.log("b" in obj1);
// console.log("c" in obj1);
// // 内部メソッドを関数として使用できる
// // コールバック関数などに使用
// console.log(Reflect.has(obj1, "b"));
// console.log(Reflect.has(obj1, "c"));

// Object.defineProperty -> Reflect.definePropertyとして使用可能
// es6からはReflectの使用を推奨
// try {
//   Object.defineProperty;
// } catch (e) {
//   throw new Error(e);
// }

// if (Reflect.defineProperty) {
// } else {
//   throw new Error("error");
// }

const bob = {
  name: "Bob",
  _hello: function () {
    console.log(`hello ${this.name}`);
  },
};

const tom = {
  name: "Tom",
  _hello: function () {
    console.log(`hello ${this.name}`);
  },
  get hello() {
    console.log(this);
    return this._hello();
  },
};

tom.hello;
tom._hello();
Reflect.get(tom, "hello", (receiver = bob)); // receiver = bind
