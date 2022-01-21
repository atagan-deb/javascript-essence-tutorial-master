// CommonModule: node.js require/exports .cjs
// ESModule: Browser import/export .mjs

export let publicVal = 0;

export function publicFn() {
  console.log("publicFn called: ");
}

// exports.publicFn = function () {}; // commonModule

export default "defaultValue";
