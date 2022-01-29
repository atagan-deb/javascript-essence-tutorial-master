localStorage.setItem("key", "value");
const result = localStorage.getItem("key");
console.log(result);

const obj = { a: 0 };
localStorage.setItem("obj", obj);
const resObj = localStorage.getItem("obj");
console.log(resObj);

const json = JSON.stringify(obj);
localStorage.setItem("json", json);
const resJson = localStorage.getItem("json");
console.log(resJson);
