const formTag = document.getElementById("jokeForm");
formTag.onsubmit = handleSubmit;

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
function handleSubmit(event) {
  event.preventDefault();
  // TODO: Create a `data` object with an "api-key" property (quoted when hyphenated)
  // TODO: Convert `data` into a query string and fetch jokes (or send as header if API requires)
  // TODO: Parse response and render a joke into the DOM. On invalid key, show an error message in the page
}

console.log("merci means thank you in french");
