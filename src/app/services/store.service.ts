import { Todo } from '../models/todo.model';

export class TodoStore {
  todos: Todo[];

  constructor() {
    this.todos = [];
  }

  add(title: String) {
    this.todos.push(new Todo(title));
  }

  remove(todo: Todo) {
    this.todos.splice(this.todos.indexOf(todo), 1);
  }

  clean() {
    this.todos.length = 0;
  }

  getAllTodos(): Todo[] {
    return this.todos;
  }

  getWithCompleted(completed: Boolean): Todo[] {
    return this.todos.filter((todo: Todo) => todo.completed === completed);
  }

  removeCompleted() {
    this.todos = this.getWithCompleted(false);
  }

  getRemaining(): Todo[] {
    return this.getWithCompleted(false);
  }

  toggleCompletion(todo: Todo) {
    todo.completed = !todo.completed;
  }
}
