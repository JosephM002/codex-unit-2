// Level 03 starter script
// TODO: Use async/await when calling fetch inside the submit handler.
const form = document.getElementById("sample-form");
const result = document.getElementById("result");
if (form) form.onsubmit = handleSubmit;

async function handleSubmit(event) {
  event.preventDefault();
  const response = await fetch("https://api.jsoning.com/mock/public/users");
  result.innerText =
    "async makes a function asynchronous, await tells function to wait for a response";
  // TODO: use async/await to call fetch('https://api.jsoning.com/mock/public/users') and then set result.innerText
}
