const handler = {
  set: (target, key, value, receiver) => {
    const res = Reflect.set(target, key, value, receiver);
    console.log(
      "%c[reactive:set]",
      "background: green; color: white;",
      key,
      res
    );
    trigger();
    return res;
  },
  get: (target, key, receiver) => {
    const res = Reflect.get(target, key, receiver);
    console.log("%c[reactive:get]", "background: blue; color: white", key, res);
    return res;
  },
};
function reactive(target) {
  return new Proxy(target, handler);
}

let activeEffect = null;
function effect(fn) {
  activeEffect = fn;
}
function trigger() {
  activeEffect();
}

export { effect, reactive };
