const formTag = document.getElementById("queryForm");
const questionTag = document.getElementById("question");
const choiceTag = document.getElementById("choices");
formTag.onsubmit = handleSubmit;

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
  const questionText = result[0].question.text;
  questionTag.innerText = questionText;
  const correct = result[0].correctAnswer;
  const One = result[0].incorrectAnswers[0];
  const Two = result[0].incorrectAnswers[1];
  const Thr = result[0].incorrectAnswers[2];
  choiceTag.innerText = correct + One + Two + Thr;

  // TODO: Fetch trivia questions with async/await
  // TODO: Save first question to `question` and separate choices into variables
  // TODO: Render question and choices into DOM
}
