const formTag = document.getElementById("loginForm");
const err = document.getElementById("error");
const suc = document.getElementById("success");
formTag.onsubmit = handleSubmit;

async function handleSubmit(event) {
  event.preventDefault();
  try {
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
    const result = response.json;
    const succ = result;
    console.log("success");
    suc.innerText = succ;
    formTag.reset();
  } catch {
    err.innerText = "ERR";
    console.log("error");
  }
  // TODO: Wrap fetch code in try/catch
  // TODO: In try: send request, parse `result`, update `successEl` and call formTag.reset()
  // TODO: In catch: console.error(error) and update `errorEl.innerText`
}
