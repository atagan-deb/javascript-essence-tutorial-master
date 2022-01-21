const wm = new WeakMap();
export class Person {
  constructor(name, age) {
    // this._name = name;
    wm.set(this, { name });
  }

  hello() {
    // console.log(`hello ${this._name}`);
    console.log(`hello ${wm.get(this).name}`);
  }
}
