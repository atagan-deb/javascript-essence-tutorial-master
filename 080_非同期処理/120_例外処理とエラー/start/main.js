// try {
//   console.log("start");
//   throw new Error("error message");
//   console.log("end");
// } catch (e) {
//   console.error(e);
// } finally {
//   console.log("bye");
// }

async function fetchUsers() {
  const response = await fetch("users.json");
  console.log(response);
  if (response.ok) {
    const json = await response.json();
    if (!json.length) {
      throw new NoDataError("No data");
    }
    return json;
  } else {
    throw new Error("not found");
  }
}

class NoDataError extends Error {
  constructor(message) {
    super(message);
    this.name = "NoDataError";
  }
}
async function init() {
  try {
    const users = await fetchUsers();
    for (const user of users) {
      console.log(`I'm ${user.name}, ${user.age} years old`);
    }
  } catch (e) {
    console.error(e);
  } finally {
    console.log("bye");
  }
  console.log("end");
}
init();
