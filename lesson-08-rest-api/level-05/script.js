// Level 05 starter script
// TODO: Fetch GET https://postman-echo.com/get, await response.json(), and read response.url and selected headers.
const form = document.getElementById("sample-form");
const pUrl = document.getElementById("url");
const pHost = document.getElementById("host");
const pEnc = document.getElementById("encoding");

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
