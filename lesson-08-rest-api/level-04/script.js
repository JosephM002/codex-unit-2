// Level 04 starter script
// TODO: Await fetch and call response.json() to parse the body.
const form = document.getElementById("sample-form");
const result = document.getElementById("result");

async function handleSubmit(event) {
  event.preventDefault();
  // TODO: fetch and parse JSON, then set result.innerText with a short explanation
  const waiting = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data = await waiting.json();
  result.innerText = "Converts incoming data to a js object";
}

if (form) form.onsubmit = handleSubmit;
