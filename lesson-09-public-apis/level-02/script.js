const form2 = document.getElementById("login-form");
const errorEl2 = document.getElementById("error");
const successEl2 = document.getElementById("success");
if (form2) form2.onsubmit = handleSubmit;
let progress = 0;

async function handleSubmit(event) {
  event.preventDefault();
  const formTag = event.target;
  const data = {
    username: formTag.elements.username.value,
    password: formTag.elements.password.value,
  };
  const dataString = JSON.stringify(data);
  const waiting = await fetch("https://dummyjson.com/auth/login", {
    method: "POST",
    body: dataString,
    headers: {
      "Content-Type": "application/json",
    },
  });
  const receive = await waiting.json();
  const message = receive.message;
  const firstName = receive.firstName;
  if (message) {
    const errorTag = document.getElementById("error");
    errorTag.innerText = message;
  } else if (firstName) {
    const successTag = document.getElementById("success");
    successTag.innerText = "Logged";
  }
}
