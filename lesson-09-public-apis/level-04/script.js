const formTag = document.getElementById("queryForm");
formTag.onsubmit = handleSubmit;

function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const data = {
    category: formTag.elements.category.value,
    difficulty: formTag.elements.difficulty.value,
  };
  const params = new URLSearchParams(data);
  const query = params.toString();
  console.log(query);
  // TODO: Read form values with formTag.elements and create `data` object
  // TODO: Use `new URLSearchParams(data)` to create a query string and save to `query`
  // TODO: console.log(query)
}
