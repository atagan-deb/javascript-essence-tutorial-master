import defaultValue, * as moduleA from "./moduleA.js";
// import defaultValue, { publicVal as valA, publicFn as fnA } from "./moduleA.js";
console.log(moduleA.publicVal);
moduleA.publicFn();

console.log(defaultValue);
