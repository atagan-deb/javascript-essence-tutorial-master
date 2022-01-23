const obj = { a: 0, b: 1, c: 2 };

function replacer(prop, value) {
  if (value < 1) {
    return;
  }
  return value;
}
const json = JSON.stringify(obj, replacer);
const json2 = JSON.stringify(obj, ["a", "b"]);
console.log(json);
console.log(json2);

const obj2 = JSON.parse(json2);
console.log(obj2);