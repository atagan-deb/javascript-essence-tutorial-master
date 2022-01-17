// function sleep(callback, val) {
function sleep(val) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      console.log(val++);
      resolve(val);
      // callback(val);
    }, 1000);
  });
}

sleep(0)
  .then(function (val) {
    return sleep(val);
  })
  .then(function (val) {
    return sleep(val);
  })
  .then(function (val) {
    sleep(val);
    return val; // promiseが返却されない
  })
  .then(function (val) {
    return sleep(val);
  })
  .then(function (val) {
    return sleep(val);
  });
