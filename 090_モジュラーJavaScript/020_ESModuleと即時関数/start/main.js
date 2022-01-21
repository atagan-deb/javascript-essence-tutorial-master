const moduleA = (function () {
  console.log("IIFE called");

  let privateVal = 1;
  let publicVal = 10;

  function publicFn() {
    console.log("publicFn called: " + publicVal);
  }

  function privateFn() {}

  return {
    publicFn,
    publicVal,
  };
})();

// const moduleB = (function(moduleA){
const moduleB = (function ({ publicFn: fn, publicVal: val }) {
  fn();
  fn();
  console.log(val++); // 参照のコピー先に加算
  console.log(val++);
  fn();
  // moduleA.publicFn();
  // moduleA.publicFn();
  // console.log(moduleA.publicVal++); // 参照のコピー先に加算
  // console.log(moduleA.publicVal++);
  // moduleA.publicFn();
})(moduleA);
