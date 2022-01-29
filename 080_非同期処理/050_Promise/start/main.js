new Promise(function (resolve, reject) {
  console.log("promise");
  // resolve('hello');
  // reject("bye");
  setTimeout(function () {
    resolve("hey");
    // reject("see you")
  }, 1000);
})
  .then(function (data) {
    console.log("then", data);
    return data;
  })
  .then(function (data) {
    console.log("then", data);
    throw new Error(data);
  })
  .then(function (data) {
    console.log("then", data);
    return data;
  })
  .catch(function (data) {
    console.log("catch", data);
    return data;
  })
  .finally(function (data) {
    console.log("finally");
    console.log(data); // undefined
  });

console.log("global end");
