import { nodeOps } from "./nodeOps.js";
import { createVNode, patch } from "./renderer.js";
import { reactive, computed, effect } from "./reactive.js";

function createApp(args) {
  const { render, data, computed: computedData, methods } = args;

  const app = {};

  const rawData = data();

  app.publicCtx = createPublicCtx(app, rawData, computedData, methods);
  app.data = reactive(rawData);
  app.computed = createComputedData(app, computedData);
  app.mount = createMountFn(app, render);

  return app;
}

const createMountFn = (app, render) => {
  return (selector) => {
    const container = nodeOps.qs(selector);
    app.vnode = createVNode();
    effect(
      () => {
        const nextVNode = render.call(app.publicCtx);
        console.log(
          "%c[patch]",
          "background: orange; color: white;",
          app.vnode,
          nextVNode
        );
        patch(app.vnode, nextVNode, container);
        app.vnode = nextVNode;
      },
      { lazy: true }
    );
  };
};
const createComputedData = ({ publicCtx }, computedData) => {
  const res = {};
  for (const prop in computedData) {
    const c = computed(computedData[prop], publicCtx);
    res[prop] = c;
  }
  return res;
};
const createPublicCtx = (app, rawData, computedData, methods) => {
  const ctx = { ...rawData, ...computedData, ...methods };

  return new Proxy(ctx, {
    get(target, key, receiver) {
      if (rawData.hasOwnProperty(key)) {
        return app.data[key];
      }
      if (computedData.hasOwnProperty(key)) {
        return app.computed[key].value;
      }
      return Reflect.get(target, key, receiver);
    },
    set(target, key, value, receiver) {
      if (rawData.hasOwnProperty(key)) {
        return Reflect.set(app.data, key, value);
      }
    },
  });
};

export { nextTick } from "./scheduler.js";
export { createApp, createVNode as h };
