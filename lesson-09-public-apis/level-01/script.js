const formTag = document.getElementById("loginForm");
formTag.onsubmit = handleSubmit;

async function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  data = {
    username: form.elements.email.value,
    password: form.elements.password.value,
  };
  const dataString = JSON.stringify(data);
  const response = await fetch("https://dummyjson.com/auth/login", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
    body: dataString,
  });
  const result = await response.json;
  console.log(result);
  // TODO: Call event.preventDefault()
  // TODO: Create `data` object with username and password from form.elements
  // TODO: const dataString = JSON.stringify(data)
  // TODO: Use async/await with fetch to POST to https://dummyjson.com/auth/login
  // TODO: Include headers: { 'Content-Type': 'application/json' }
  // TODO: Parse response into `result` and console.log(result)
}
