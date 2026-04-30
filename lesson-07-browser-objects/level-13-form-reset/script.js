// Level 13 — form-reset starter
// TODO: validate one field in submit handler, on success display summary and call form.reset()

function handleSubmit(event) {
  event.preventDefault();
  // const form = event.target;
  // TODO: validate fields, show summary in DOM, then call form.reset();
  const form = event.console.log("form-reset scaffold");
  if (form) {
    form.reset();
  }
}

const form = document.getElementById("sample-form");
if (form) form.onsubmit = handleSubmit;
