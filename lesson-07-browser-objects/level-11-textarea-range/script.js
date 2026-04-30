// Level 11 — textarea-range starter
// TODO: in submit handler read textarea and range values via form.elements and convert range with Number()

function handleSubmit(event) {
  event.preventDefault();
  // const form = event.target;
  const form = event.target;
  const message = form.elements.message.value;
  const volume = Number(form.elements.volume.value);
  console.log(typeof volume);
  console.log("textarea & range scaffold");
  console.log(message);
  console.log(volume);
}

const form = document.getElementById("sample-form");
if (form) form.onsubmit = handleSubmit;
