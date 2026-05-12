// Level 10 starter script
// TODO: POST pre-processed data, parse JSON response, and display three selected values.
const form = document.getElementById("sample-form");
const v1 = document.getElementById("v1");
const v2 = document.getElementById("v2");
const v3 = document.getElementById("v3");

async function handleSubmit(e) {
  e.preventDefault();
  const response = await fetch("https://api.jsoning.com/mock/public/users", {
    method: "POST",
    headers: { "Content-type": "application/JSON" },
    body: JSON.stringify(),
  });
  const body = await response.json;
  const v11 = body.json;
  v1.innerText = v11;
  const v22 = body.username;
  v2.innerText = v22;
  const v33 = body.password;
  v3.innerText = v33;

  // TODO: collect data, POST to echo server, parse response, and insert values into v1/v2/v3
}

if (form) form.onsubmit = handleSubmit;
