function sleep(val) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      console.log(val++);
      resolve(val);
    }, 1000);
  });
}

async function init() {
  let obj = sleep(0);
  console.log(obj);
  let val = await sleep(0);
  val = await sleep(val);
  val = await sleep(val);
  val = await sleep(val);
  console.log(val);
  throw new Error();
}
init()
  .then(function (val) {
    console.log("hello", val);
  })
  .catch((e) => {
    console.error(e);
  });
console.log(init());
// sleep(0).then(function(val) {
//   return sleep(val);
// }).then(function(val) {
//   return sleep(val);
// }).then(function(val) {
//   return sleep(val);
// }).then(function(val) {
//   return sleep(val);
// }).then(function(val) {
//   return sleep(val);
// })
