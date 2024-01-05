/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor() {
    this.todoList = [];
  }

  add(todo) {
    this.todoList.push(todo);
  }

  remove(indexOfTodo) {
    this.todoList.splice(indexOfTodo, 1);
  }

  update(index, updatedTodo) {
    if (this.todoList.length === 0 || index < 0 || index > this.todoList.length - 1) {
      return null;
    }
    this.todoList[index] = updatedTodo;
  }

  getAll() {
    return this.todoList;
  }

  get(indexOfTodo) {
    if (this.todoList.length === 0 || indexOfTodo < 0 || indexOfTodo > this.todoList.length - 1) {
      return null;
    }
    return this.todoList[indexOfTodo];
  }

  clear() {
    this.todoList.length = 0;
  }
}

module.exports = Todo;
