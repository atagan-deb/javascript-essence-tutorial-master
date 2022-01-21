const targetObj = { a: 0 };

const handler = {
  set: (target, prop, value, receiver) => {
    console.log(receiver);
    console.log(`[set]: ${prop}`);
    // target[prop] = value;
    throw new Error("cannot add prop.");
  },
  get: (target, prop, receiver) => {
    console.log(receiver);
    console.log(`[get]: ${prop}`);
    return target[prop];
  },
  deleteProperty: (target, prop) => {
    console.log(`[delete]: ${prop}`);
    delete target[prop];
  },
};

const pxy = new Proxy(targetObj, handler);
// pxy.a = 1;
pxy.a;
delete pxy.a;
console.log(pxy);
