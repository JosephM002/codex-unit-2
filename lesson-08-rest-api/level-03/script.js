// Level 03 starter script
// TODO: Use async/await when calling fetch inside the submit handler.
const form = document.getElementById("sample-form");
if (form) form.onsubmit = handleSubmit;

async function handleSubmit(event) {
  event.preventDefault();
  // TODO: use async/await to call fetch('https://postman-echo.com/get') and then set result.innerText
  const waiting = await fetch("https://jsonplaceholder.typicode.com");
  const result = document.getElementById("result");
  result.innerText =
    "async/await causes the code to wait until a process occurs to perform an action";
}
