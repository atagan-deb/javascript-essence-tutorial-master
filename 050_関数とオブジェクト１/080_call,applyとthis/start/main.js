function a(name) {
  console.log("hello " + name);
}

const b = a.bind(null, "Tim");

b();

function c() {
  console.log("hello " + this.name);
}
const tim = { name: "Tim" };
const d = c.bind(tim);

d();
c.apply(tim);
c.call(tim);

function e(name1, name2) {
  console.log("hello " + name1 + ", " + name2);
}
const f = e.bind(tim);

f();
e.apply(tim, ["Jolly", "allen"]);
e.call(tim, "Jolly");

const array = [1, 2, 3, 4, 5];

Math.max(1, 2);
const result = Math.max.apply(null, array);
console.log(result);

const spread = Math.max(...array);
console.log(spread);
