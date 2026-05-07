const btn3 = document.getElementById("fetch-btn");
const errorEl3 = document.getElementById("error");
if (btn3) btn3.onsubmit = handleSubmit;
const errorTag = document.getElementById("error");

async function handleSubmit(event) {
  try {
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
    const message = await receive.message;

    errorTag.innerText = "message received";
  } catch (error) {
    console.log("Theres been an error");
    errorTag.innerText = "Theres been an error";
  }
}
