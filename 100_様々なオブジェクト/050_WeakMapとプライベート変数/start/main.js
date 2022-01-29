import { Person } from "./person.js";

const tim = new Person("Tim", 23);
tim.hello();
// console.log(tim._name); // private変数も参照できてしまう
const bob = new Person("Bob", 23);
bob.hello();
// WeakMapを使用することでprivate変数を定義できる