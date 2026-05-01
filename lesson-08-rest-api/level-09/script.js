// Level 09 starter script
// TODO: POST pre-processed data, parse JSON response, and display three selected values.
const form = document.getElementById("sample-form");
const v1 = document.getElementById("v1");
const v2 = document.getElementById("v2");
const v3 = document.getElementById("v3");

async function handleSubmit(e) {
  e.preventDefault();
  // TODO: collect data, POST to echo server, parse response, and insert values into v1/v2/v3
  const waiting = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const recieved = waiting.json();
  const a = form.elements[0].value;
  const b = form.elements[1].value;
  const c = form.elements[2].value;
  const data = {
    a: form.elements[0].value,
    b: form.elements[1].value,
    c: form.elements[2].value,
  };
  v1.innerText = a;
  v2.innerText = b;
  v3.innerText = c;
}

if (form) form.onsubmit = handleSubmit;
