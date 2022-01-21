"use strict";

// value, configurable, enumerable, writable : ディスクリプター

const obj = { prop: 0 };

const descriptor = Object.getOwnPropertyDescriptor(obj, "prop");
console.log(descriptor);

const obj1 = {};
Object.defineProperty(obj1, "prop", {
  configurable: true,
  writable: true,
  value: 0,
});
const descriptor1 = Object.getOwnPropertyDescriptor(obj1, "prop");
console.log(descriptor1);

obj1.prop = 1;
console.log(obj1.prop);
