function* gen() {
  yield 1;
  yield 2;
  return 3;
}

const it = gen();
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());

console.log("-------------------------------------------");

function* genIterator(max = 10) {
  let i = 0;
  while (i < max) {
    yield i++;
  }
  return;
}

const itGen = genIterator(10);
let k = itGen.next();
console.log(k);
while (!k.done && k.value < 100) {
  console.log(k.value);
  k = itGen.next();
}

console.log("-------------------------------------------");
const obj = {
  [Symbol.iterator]: genIterator,
};
for (let i of obj) {
  console.log(i);
}

console.log("-------------------------------------------");
for (let i of genIterator()) {
  console.log(i);
}

const obj2 = {
  *[Symbol.iterator](max = 10) {
    let i = 0;
    while (i < max) {
      yield i++;
    }
    return;
  },
};
console.log("obj2-------------------------------------------");
for (let i of obj2) {
  console.log(i);
}
console.log(obj2);
