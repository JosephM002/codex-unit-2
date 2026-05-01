// Level 07 starter script
// TODO: Build a data object from form.elements and use fetch POST to https://postman-echo.com/post
const form = document.getElementById("sample-form");
const result = document.getElementById("result");

async function handleSubmit(e) {
  e.preventDefault();
  // TODO: collect values via form.elements[0].value, form.elements[1].value, form.elements[2].value
  // build a data object and post it with fetch; then set result.innerText explaining how data is attached
  const data = {
    name: form.elements[0].value,
    email: form.elements[1].value,
    note: form.elements[2].value,
  };
  const waiting = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const received = await waiting.json();
  result.innerText =
    "Data is attached to a post request by sending it with a json";
}

if (form) form.onsubmit = handleSubmit;
