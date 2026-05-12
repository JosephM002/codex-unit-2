// Level 11 starter script
// TODO: Implement a complete flow: create form, collect values, POST to echo server, render response fields.
const form = document.getElementById("sample-form");
const r1 = document.getElementById("r1");
const r2 = document.getElementById("r2");
const r3 = document.getElementById("r3");

async function handleSubmit(e) {
  e.preventDefault();
  const response = await fetch("https://api.jsoning.com/mock/public/users", {
    method: "POST",
    headers: { "Content-type": "application/JSON" },
    body: JSON.stringify(),
  });
  // TODO: build data object, POST it, parse response, and display three response values
}

if (form) form.onsubmit = handleSubmit;
