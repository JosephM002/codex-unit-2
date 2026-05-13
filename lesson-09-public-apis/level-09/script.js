const formTag = document.getElementById("challengeForm");
formTag.onsubmit = handleSubmit;
const err = document.getElementById("error");
const suc = document.getElementById("success");

async function handleSubmit(event) {
  event.preventDefault();
  try {
    const form = event.target;
    const data = {
      name: formTag.elements.value.value,
    };
    const dataString = JSON.stringify(data);
    console.log(dataString);
    const response = await fetch("https://humorapi.com/memes/random", {});
    const result = await response.json;
    const suc1 = suc;
    suc1.innerText = "logging in!";
  } catch {
    console.log("error");
    const err1 = err;
    err1.innerText = "Theres been an error";
  }
  // TODO: Construct `data` from formTag.elements
  // TODO: Format data with `URLSearchParams` or `JSON.stringify`
  // TODO: Save formatted data into `dataString` and send via fetch using async/await
  // TODO: Parse `result` and update the page; handle errors with try/catch
}
