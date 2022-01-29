// コレクション
const map = new Map();
const key1 = {};
map.set(key1, "value1");
console.log(map.get(key1));

const key2 = function () {};
map.set(key2, "value2");
console.log(map.get(key2));

const key3 = 0;
map.set(key3, "value3");
console.log(map.get(key3));

console.log(
  map.get({}),
  map.get(function () {}),
  map.get(0)
);
console.log(map);

map.delete(key3);
console.log(map.get(key3));

for (const m of map) {
  console.log(m);
}
for (const [k, v] of map) {
  console.log(k, v);
}
for (const k in map) {
  // 出力されない
  console.log(k);
}
console.log("----------------------------------------------------");
const s = new Set();
s.add(key1);
s.add(key1); // 重複したら追加されない
s.add(key2);
s.add(key3);

console.log(s);
for (let k of s) {
  console.log(k);
}

console.log(s[0]); // undefined
s.delete(key3);
console.log(s.has(key2));
console.log(s.has(key3));
console.log(s);

const arry1 = [...s];
const arry2 = Array.from(s);
console.log(arry1, arry2);