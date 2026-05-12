// Level 07 starter script
// TODO: Build a data object from form.elements and use fetch POST to https://api.jsoning.com/mock/public/users
const form = document.getElementById("sample-form");
const result = document.getElementById("result");

async function handleSubmit(e) {
  e.preventDefault();
  const form = event.target;
  const data = {
    username: form.elements.username.value,
    email: form.elements.email.value,
  };
  const dataString = JSON.stringify(data);
  const response = await fetch("https://api.jsoning.com/mock/public/users", {
    method: "POST",
    headers: { "Content-type": "application/JSON" },
    body: dataString,
  });
  result.innerText =
    "data is saved in the data constant. turned to a string with stringify, then attached to the body when fetch";
  // TODO: collect values via form.elements[0].value, form.elements[1].value, form.elements[2].value
  // build a data object and post it with fetch; then set result.innerText explaining how data is attached
}

if (form) form.onsubmit = handleSubmit;
