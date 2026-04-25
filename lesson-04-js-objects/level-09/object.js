// TODO: Declare named functions then assign them as methods on the exported object.
// Example:
// function greet(name) { return 'Hi ' + name }
// const user = { name: 'Ava' }
// user.greet = greet
// export default user
const user = {
  name: "JM"
  /* TODO: add name */
};
export default user;

function Hello (name){
  return "Hello"+ name;
}
user.Hello = Hello;
export default user;