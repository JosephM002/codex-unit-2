// Level 05 starter script
// TODO: Fetch GET https://api.jsoning.com/mock/public/users, await response.json(), and read display the data.
const form = document.getElementById("sample-form");
const pUsername = document.getElementById("username");
const pEmail = document.getElementById("email");
const pId = document.getElementById("id");

async function handleSubmit(e) {
  e.preventDefault();
  // TODO: implement fetch and set the three elements' innerText
  const response = await fetch("https://api.jsoning.com/mock/public/users");
  const userdata = await response.json();
  const found = response.url;
  const headers = response.headers.get("host");
  const encode = response.headers.get("accept-encoding");
  pUsername.innerText = found;
  pEmail.innerText = headers;
  pId.innerText = encode;
}

if (form) form.onsubmit = handleSubmit;
