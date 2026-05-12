// Level 11 starter script
// TODO: Implement a complete flow: create form, collect values, POST to echo server, render response fields.
const form = document.getElementById("sample-form");
const r1 = document.getElementById("r1");
const r2 = document.getElementById("r2");
const r3 = document.getElementById("r3");

async function handleSubmit(e) {
  e.preventDefault();
  const form = event.target;
  const data = {
    one: form.elements.one.value,
    two: form.elements.two.value,
    two: form.elements.three.value,
  };
  const dataString = JSON.stringify(data);
  const response = await fetch("https://api.jsoning.com/mock/public/products", {
    method: "POST",
    headers: { "Content-type": "application/JSON" },
    body: dataString,
  });
  // TODO: build data object, POST it, parse response, and display three response values
}
const test = response.JSON;
const r11 = test.body;
const r22 = test.username;
const r33 = test.password;
r1.innerText = r11;
r2.innerText = r22;
r3.innerText = r33;

if (form) form.onsubmit = handleSubmit;
