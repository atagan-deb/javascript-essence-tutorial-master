const obj = {
  prop1: "value1",
  prop2: "value2",
  prop3: "value3",
};

Object.prototype.method = function () {};

for (let key in obj) {
  console.log(key, obj[key]);
}

const obj2 = {
  prop1: "value1",
  prop2: "value2",
  prop3: "value3",
};

Object.prototype.method = function () {};
Object.defineProperty(Object.prototype, "method", {
  enumerable: false,
});
const d = Object.getOwnPropertyDescriptor(Object.prototype, "method");
console.log(d);
for (let key in obj2) {
  console.log(key, obj2[key]);
}

const obj3 = {
  prop1: "value1",
  prop2: "value2",
  prop3: "value3",
};

Object.prototype.method = function () {};
Object.defineProperty(Object.prototype, "method", {
  enumerable: false,
});
for (let key in obj3) {
  if (obj3.hasOwnProperty(key)) {
    // 自身のプロパティか確認
    console.log(key, obj3[key]);
  }
}

const s = Symbol();
const obj4 = {
  prop1: "value1",
  prop2: "value2",
  prop3: "value3",
  [s]: "value4",
};

Object.prototype.method = function () {};
Object.defineProperty(Object.prototype, "method", {
  enumerable: false,
});
const d4 = Object.getOwnPropertyDescriptor(obj4, s); // シンボルは列挙可能になっていても列挙されない
console.log("d4", d4);
for (let key in obj4) {
  // if (obj4.hasOwnProperty(key)) {
    // 自身のプロパティか確認
    console.log(key, obj3[key]);
  // }
}
