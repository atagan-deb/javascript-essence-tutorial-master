// import { publicVal, publicFn } from "./moduleA.js";

// publicFn();

// import("./moduleA.js").then((modules) => {
//   console.log(modules);
//   console.log(modules.publicVal);
//   modules.publicFn();
// })

async function fn(){
  const modules = await import('./moduleA.js');
  modules.publicFn();
}
fn();