// Level 03 starter script
// TODO: Use async/await when calling fetch inside the submit handler.
const form = document.getElementById("sample-form");
if (form) form.onsubmit = handleSubmit;

async function handleSubmit(event) {
  event.preventDefault();
  // TODO: use async/await to call fetch('https://api.jsoning.com/mock/public/users') and then set result.innerText
}
