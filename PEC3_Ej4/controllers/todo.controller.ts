import { Todo } from '../models/todo.model';

interface TodoService {
  todos: Todo[];
  bindTodoListChanged(callback: (todos: Todo[]) => void): void;
  addTodo(todoText: string): void;
  editTodo(id: number, todoText: string): void;
  deleteTodo(id: number): void;
  toggleTodo(id: number): void;
}

interface TodoView {
  bindAddTodo(callback: (todoText: string) => void): void;
  bindEditTodo(callback: (id: number, todoText: string) => void): void;
  bindDeleteTodo(callback: (id: number) => void): void;
  bindToggleTodo(callback: (id: number) => void): void;
  displayTodos(todos: Todo[]): void;
}

export class TodoController {
  private service: TodoService;
  private view: TodoView;

  constructor(service: TodoService, view: TodoView) {
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

  private onTodoListChanged = (todos: Todo[]) => {
    this.view.displayTodos(todos);
  };

  private handleAddTodo = (todoText: string) => {
    this.service.addTodo(todoText);
  };

  private handleEditTodo = (id: number, todoText: string) => {
    this.service.editTodo(id, todoText);
  };

  private handleDeleteTodo = (id: number) => {
    this.service.deleteTodo(id);
  };

  private handleToggleTodo = (id: number) => {
    this.service.toggleTodo(id);
  };
}
