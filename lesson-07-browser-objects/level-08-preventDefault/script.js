// Level 08 — preventDefault starter
// TODO: update your submit handler to call event.preventDefault() before other logic

function handleSubmit(event) {
  // TODO: uncomment the next line when you want to prevent navigation
  event.preventDefault();
  console.log("preventDefault is called to prevent Navigation");
}

// Attach scaffold:
const form = document.getElementById("sample-form");
if (form) form.onsubmit = handleSubmit;
