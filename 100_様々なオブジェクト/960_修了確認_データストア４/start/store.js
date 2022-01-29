import { DataSource } from "./DataSource.js";

const p = Promise.resolve();
let _dirty;


export const createStore = async (KEY) => {
  const handler = {
    set(target, prop, value, receiver) {
      _dirty = true;
      const result = Reflect.set(target, prop, value, receiver);
      p.then(() => {
        if (_dirty) {
          console.log("** update data **");
          _dirty = false;
          DataSource.set(KEY, target);
        }
      });
      return result;
    },
  };
  const targetObj = await DataSource.get(KEY);
  return new Proxy(targetObj, handler);
};
