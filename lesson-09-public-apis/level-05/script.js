const triviaForm = document.getElementById("trivia-form");
const questionEl = document.getElementById("question");
triviaForm.onsubmit = trivia;

async function trivia(event) {
  event.preventDefault();
  const data = {
    category: triviaForm.elements.category.value,
    difficulty: triviaForm.elements.difficulty.value,
  };
  // TODO: preventDefault, build query params with URLSearchParams
  // TODO: fetch trivia API with async/await then parse JSON
  // TODO: render result[0].question.text into the page
  const param = new URLSearchParams(data);
  const waiting = await fetch(
    "https://the-trivia-api.com/v2/questions" + "?" + param,
  );
  const received = await waiting.json();
  console.log(received);
  questionEl.innerText = received[0].question.text;
  console.log("level-05 placeholder");
}
