import { TestBed, ComponentFixture, async } from '@angular/core/testing';

import { TodoAppComponent } from './app.component';
import { TodoStore } from './services/store.service';
import { Todo } from './models/todo.model';
import { FormsModule } from '@angular/forms';

describe('TodoAppComponent', () => {
  let fixture: ComponentFixture<TodoAppComponent>;
  let context: TodoAppComponent;
  let todoStore: TodoStore;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TodoAppComponent
      ],
      imports: [
        FormsModule
      ],
      providers: [
        TodoStore
      ]
    });

    fixture = TestBed.createComponent(TodoAppComponent);
    context = fixture.componentInstance;
    todoStore = TestBed.get(TodoStore);
    todoStore.todos = [
      new Todo('name'),
      new Todo('name', true)
    ];
  }));

  it('should remove completed ', () => {
    context.removeCompleted();
  });

  it('should toggle completion', () => {
    context.toggleCompletion(new Todo('name'));
  });

  it('should remove', () => {
    context.remove(new Todo('name'));
  });

  it('should addTodo', () => {
    const form = {
      value: {todo: 'name'},
      reset: x => x
    };

    context.addTodo(form);
  });

  it('should filter with todos empty', () => {
    context.filter('all');

    context.todoStore.todos.length = 0;

    expect(context.todoStore.todos).toEqual([]);
  });

  it('should filter with todos data all', () => {
    context.filter('all');

    expect(context.todoStore.todos).toEqual([new Todo('name'), new Todo('name', true)]);
  });

  it('should filter with todos data active', () => {
    context.filter('active');

    expect(context.todosClone).toEqual([new Todo('name')]);
  });

  it('should filter with todos data completed', () => {
    context.filter('completed');

    expect(context.todosClone).toEqual([new Todo('name', true)]);
  });
});
