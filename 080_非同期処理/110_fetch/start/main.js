// window.fetch
// console.log(fetch("users.json"));

// fetch("users.json") // promiseを返す
//   .then((response) => {
//     console.log(response);
//     return response.json(); // jsonメソッド
//   }) // promiseを返す
//   .then((json) => {
//     console.log(json);
//     for (const user of json) {
//       console.log(user);
//     }
//   });

async function fetchUsers() {
  const response = await fetch("users.json");
  console.log(response);
  const json = await response.json();
  for (const user of json) {
    console.log(`I'm ${user.name}, ${user.age} years old.`);
  }
}
fetchUsers();
