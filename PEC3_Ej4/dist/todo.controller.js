"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TodoController = void 0;
var TodoController = /** @class */function () {
  function TodoController(service, view) {
    var _this = this;
    this.onTodoListChanged = function (todos) {
      _this.view.displayTodos(todos);
    };
    this.handleAddTodo = function (todoText) {
      _this.service.addTodo(todoText);
    };
    this.handleEditTodo = function (id, todoText) {
      _this.service.editTodo(id, todoText);
    };
    this.handleDeleteTodo = function (id) {
      _this.service.deleteTodo(id);
    };
    this.handleToggleTodo = function (id) {
      _this.service.toggleTodo(id);
    };
    this.service = service;
    this.view = view;
    // Explicit this binding
    this.service.bindTodoListChanged(this.onTodoListChanged.bind(this));
    this.view.bindAddTodo(this.handleAddTodo.bind(this));
    this.view.bindEditTodo(this.handleEditTodo.bind(this));
    this.view.bindDeleteTodo(this.handleDeleteTodo.bind(this));
    this.view.bindToggleTodo(this.handleToggleTodo.bind(this));
    // Display initial todos
    this.onTodoListChanged(this.service.todos);
  }
  return TodoController;
}();
exports.TodoController = TodoController;
//# sourceMappingURL=todo.controller.js.map