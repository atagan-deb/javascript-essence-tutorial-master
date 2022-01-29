const arry1 = [1, 2, 3, 4, 5];
const arry2 = [...arry1];

console.log(arry2);
console.log(arry1 === arry2);
const arry3 = [0, ...arry2, 7];
arry2.push(6);
console.log(arry1, arry2, arry3);

function sum(...args) {
  let ret = 0;
  for (let v of args) {
    ret += v;
  }
  return ret;
}

const result = sum(1, 2, 3, 4);
const result2 = sum(...arry1);
console.log(result);
console.log(result2);

const obj1 = {
  prop1: "value1",
  prop2: "value2",
  prop3: "value3",
};

Object.prototype[Symbol.iterator] = function* () {
  for (let key in this) {
    yield [key, this[key]];
  }
};
const arry4 = [...obj1];
console.log(arry4);

const obj4 = { ...obj1 };
console.log(obj4);
