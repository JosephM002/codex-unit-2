// Level 05 starter script
// TODO: Fetch GET https://api.jsoning.com/mock/public/users, await response.json(), and read display the data.
const form = document.getElementById("sample-form");
const pUsername = document.getElementById("username");
const pEmail = document.getElementById("email");
const pId = document.getElementById("id");

async function handleSubmit(e) {
  e.preventDefault();
  // TODO: implement fetch and set the three elements' innerText
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const userdata = await response.json();
  const found = userdata.userId;
  const headers = userdata.title;
  const encode = userdata.completed;
  pUrl.innerText = found;
  pHost.innerText = headers;
  pEnc.innerText = encode;
}

if (form) form.onsubmit = handleSubmit;
