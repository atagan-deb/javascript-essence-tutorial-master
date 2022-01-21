const items = {
  prop1: "value1",
  prop2: "value2",
  prop3: "value3",
};

Object.prototype[Symbol.iterator] = function* () {
  // const keys = Object.keys(this);
  // let i = 0;
  // while (i < keys.length) {
  //   yield [keys[i], this[keys[i]]];
  //   i++;
  // }
  for (let key in this) {
    yield [key, this[key]];
  }
  return;
};

for (let item of items) {
  console.log(item);
}
