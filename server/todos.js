const todos = [];

function getTodos() {
  return todos;
}

function addTodo(todo) {
  todos.push(todo);
}

module.exports = {
  getTodos,
  addTodo,
};
