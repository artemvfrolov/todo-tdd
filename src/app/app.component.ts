import { Component } from '@angular/core';

import { TodoStore } from './services/store.service';
import { Todo } from './models/todo.model';

@Component({
  selector: 'todo-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class TodoAppComponent {
  todosClone: Todo[];
  newTodoText = '';

  constructor(public todoStore: TodoStore) {
    this.todosClone = todoStore.todos;
  }

  addTodo(form) {
    this.newTodoText = form.value.todo;

    if (this.newTodoText.trim().length) {
      this.todoStore.add(this.newTodoText);
      this.newTodoText = '';
      form.reset();
    }
  }

  removeCompleted() {
    this.todoStore.removeCompleted();
  }

  toggleCompletion(todo: Todo) {
    this.todoStore.toggleCompletion(todo);
  }

  remove(todo: Todo) {
    this.todoStore.remove(todo);
  }

  filter(name: string) {

    const arrAll = this.todoStore.todos;
    const arrActive = [];
    const arrCompleted = [];

    arrAll.forEach(item => {
      if (item.completed) {
        arrActive.push(item);
      } else {
        arrCompleted.push(item);
      }
    });

    switch (name) {
      case  'all':
        this.todosClone = arrAll;
        break;

      case  'active':
        this.todosClone = arrCompleted;
        break;

      case  'completed':
        this.todosClone = arrActive;
        break;

      default:
        break;
    }
  }
}
