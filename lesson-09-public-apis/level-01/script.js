const form = document.getElementById("login-form");
const errorEl = document.getElementById("error");
const success = document.getElementById("success");
form.onsubmit = handleSubmit;

async function handleSubmit(event) {
  event.preventDefault();
  try {
    const data = {
      username: form.elements.username.value,
      password: form.elements.password.value,
    };
    const dataString = await JSON.stringify(data);
    const waiting = await fetch("https://dummyjson.com/users", {
      method: "POST",
      body: dataString,
      headers: {
        "Content-Type": application / json,
      },
    });
    const receive = await waiting.json();
    success.innerText = "HELP";
  } catch {
    console.log("help");
  }
}
