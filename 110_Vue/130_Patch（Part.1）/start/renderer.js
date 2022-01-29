import { nodeOps } from "./nodeOps.js";

function createVNode(type = "", props = {}, children = "") {
  return {
    type,
    props,
    children,
  };
}

function patch(n1, n2, container) {
  let el;
  if (n1.type !== n2.type) {
    // n1は空文字であることを前提
    el = nodeOps.create(n2.type);
  }
  if (n1.children !== n2.children) {
    // childrenは文字列を想定
    nodeOps.html(el, n2.children);
  }
}

export { createVNode, patch };
