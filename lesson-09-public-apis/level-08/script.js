const btn8 = document.getElementById("get-joke");
const jokeEl = document.getElementById("joke");
const errorEl8 = document.getElementById("error");

async function handleSubmit(event) {
  event.preventDefault();
  const data = {
    "api-key": "123456789009876543321a",
  };
  const queryString = new URLSearchParams(data);
  const waiting = await fetch(
    "https://humorapi.com/memes/random" + "?" + queryString,
  );
  const received = await waiting.json();
  const description = received.description;
  const src = received.url;
  const imgTag = getElementById("meme");
  const outputTag = getElementById("description");
  outputTag.innerText = description;
  imgTag.src = src;
}
