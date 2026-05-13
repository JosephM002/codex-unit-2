const formTag = document.getElementById("loginForm");
formTag.onsubmit = handleSubmit;

async function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const data = {
    username: form.elements.username.value,
    password: form.elements.password.value,
  };
  const dataString = JSON.stringify(data);
  const response = await fetch("https://dummyjson.com/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: dataString,
  });
  const result = await response.json;
  console.log(result);
  // TODO: Build `data` object from `form.elements` (username, password)
  // TODO: Use async/await and fetch to POST to https://dummyjson.com/auth/login
  // TODO: Include headers: { 'Content-Type': 'application/json' }
  // TODO: Parse response into `result` and update `errorEl.innerText` or `successEl.innerText`
  // TODO: On success, call form.reset()
}
