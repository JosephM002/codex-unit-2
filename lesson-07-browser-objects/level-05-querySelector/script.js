// Level 05 — querySelector starter
// TODO: use document.querySelector('#content') or document.querySelectorAll('.item')
// TODO: log previous content and update nodes (iterate NodeList with forEach)

// Scaffold:
// const one = document.querySelector('#content');
// console.log('before:', one && one.innerHTML);
// // TODO: one.innerHTML = '...';
// const list = document.querySelectorAll('.item');
// list.forEach((el, i) => {
//   // TODO: update each el.innerText
// });
const one = document.querySelector("#one");
console.log("before" + one && one.innerHTML);
one.innerHTML = <strong>single query</strong>;
console.log("after" + one + one.innerHTML);
const list = querySelectorAll(".item");
list.forEach((el, i) => (el.innerText = "Item " + (i + 1)));
console.log("Allchanged" + list + list.innerHTML);
