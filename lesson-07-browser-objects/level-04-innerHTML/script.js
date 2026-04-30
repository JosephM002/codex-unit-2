// Level 04 — innerHTML starter
// TODO: select an element (e.g. document.getElementById('content'))
// TODO: log previous innerHTML, set a small markup string (e.g. <strong>), then log after value

// Scaffold:
// const el = document.getElementById('content');
// console.log('before innerHTML:', el && el.innerHTML);
// // TODO: el.innerHTML = '<strong>New content</strong>';
// console.log('after innerHTML:', el && el.innerHTML);

const el = document.getElementById("content");
console.log("before" + el && el.innerHTML);
el.innerHTML = <strong>This content has been updated</strong>;
console.log("after" + el && el.innerHTML);
