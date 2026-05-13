const formTag = document.getElementById("queryForm");
formTag.onsubmit = handleSubmit;
const IdTag = document.getElementById("question");

async function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const data = {
    categories: formTag.elements.category.value,
    difficulties: formTag.elements.difficulty.value,
  };
  const params = new URLSearchParams(data);
  const query = params.toString();
  const response = await fetch(
    "https://the-trivia-api.com/v2/questions" + "?" + query,
  );
  const result = await response.json;
  IdTag.innerText = result[0].question.text;
  // TODO: Build data object from formTag.elements and convert with URLSearchParams
  // TODO: Use async/await with fetch to call https://the-trivia-api.com/v2/questions
  // TODO: Parse `result` and display result[0].question.text into the DOM
}
