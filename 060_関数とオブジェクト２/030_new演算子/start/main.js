function F(a, b) {
  this.a = a;
  this.b = b;
  // return 1;
  return {};
}

F.prototype.c = function () {};

// const instance = new F(1, 2);
// console.log(instance);

function newOpe(C, ...args) {
  const _this = Object.create(C.prototype);
  const result = C.apply(_this, args);
  // console.log(_this);
  console.log(result, _this);
  if (typeof result === "object" && result !== null) {
    return result;
  }
  return _this;
}

const inst = newOpe(F, 1, 2);
console.log(inst);
