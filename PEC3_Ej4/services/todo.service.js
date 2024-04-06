"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoService = void 0;
var todo_model_1 = require("../models/todo.model"); // Ajusta la ruta según tu estructura de archivos
/**
 * @class Service
 *
 * Manages the data of the application.
 */
var TodoService = /** @class */ (function () {
    function TodoService() {
        this.onTodoListChanged = null;
        var savedTodosJson = localStorage.getItem("todos");
        var savedTodos = savedTodosJson ? JSON.parse(savedTodosJson) : [];
        this.todos = savedTodos.map(function (todo) { return new todo_model_1.Todo(todo); });
    }
    TodoService.prototype.bindTodoListChanged = function (callback) {
        this.onTodoListChanged = callback;
    };
    TodoService.prototype._commit = function () {
        if (this.onTodoListChanged) {
            this.onTodoListChanged(this.todos);
        }
        localStorage.setItem("todos", JSON.stringify(this.todos));
    };
    TodoService.prototype.addTodo = function (text) {
        var newTodo = new todo_model_1.Todo({ text: text, complete: false });
        this.todos.push(newTodo);
        this._commit();
    };
    TodoService.prototype.editTodo = function (id, updatedText) {
        var todoIndex = -1;
        for (var i = 0; i < this.todos.length; i++) {
            if (parseInt(this.todos[i].id) === id) { // Convertir id de string a number
                todoIndex = i;
                break;
            }
        }
        if (todoIndex !== -1) {
            this.todos[todoIndex].text = updatedText;
            this._commit();
        }
    };
    TodoService.prototype.deleteTodo = function (id) {
        this.todos = this.todos.filter(function (todo) { return parseInt(todo.id) !== id; });
        this._commit();
    };
    TodoService.prototype.toggleTodo = function (id) {
        var todoToUpdate;
        for (var _i = 0, _a = this.todos; _i < _a.length; _i++) {
            var todo = _a[_i];
            if (parseInt(todo.id) === id) {
                todoToUpdate = todo;
                break;
            }
        }
        if (todoToUpdate) {
            todoToUpdate.complete = !todoToUpdate.complete;
            this._commit();
        }
        else {
            console.error("Todo not found");
        }
    };
    return TodoService;
}());
exports.TodoService = TodoService;
