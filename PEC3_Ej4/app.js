"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var todo_service_1 = require("./services/todo.service");
var todo_views_1 = require("./views/todo.views");
var todo_controller_1 = require("./controllers/todo.controller");
var app = new todo_controller_1.TodoController(new todo_service_1.TodoService(), new todo_views_1.TodoView());
