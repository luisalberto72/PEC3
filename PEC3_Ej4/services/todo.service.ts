import { Todo } from '../models/todo.model'; // Ajusta la ruta según tu estructura de archivos

/**
 * @class Service
 *
 * Manages the data of the application.
 */
class TodoService {
  todos: Todo[];
  onTodoListChanged: ((todos: Todo[]) => void) | null = null;

  constructor() {
    const savedTodosJson = localStorage.getItem("todos");
    const savedTodos: Todo[] = savedTodosJson ? JSON.parse(savedTodosJson) : [];
    this.todos = savedTodos.map((todo: Todo) => new Todo(todo));
  }

  bindTodoListChanged(callback: (todos: Todo[]) => void) {
    this.onTodoListChanged = callback;
  }

  private _commit() {
    if (this.onTodoListChanged) {
      this.onTodoListChanged(this.todos);
    }
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

  addTodo(text: string) {
    const newTodo = new Todo({ text, complete: false });
    this.todos.push(newTodo);
    this._commit();
  }

editTodo(id: number, updatedText: string) {
  let todoIndex = -1;
  for (let i = 0; i < this.todos.length; i++) {
    if (parseInt(this.todos[i].id) === id) { // Convertir id de string a number
      todoIndex = i;
      break;
    }
  }
  if (todoIndex !== -1) {
    this.todos[todoIndex].text = updatedText;
    this._commit();
  }
}

deleteTodo(id: number) {
  this.todos = this.todos.filter(todo => parseInt(todo.id) !== id);
  this._commit();
}

toggleTodo(id: number) {
  let todoToUpdate: Todo | undefined;
  for (const todo of this.todos) {
    if (parseInt(todo.id) === id) {
      todoToUpdate = todo;
      break;
    }
  }
  
  if (todoToUpdate) {
    todoToUpdate.complete = !todoToUpdate.complete;
    this._commit();
  } else {
    console.error("Todo not found");
  }
}
}

export { TodoService };
