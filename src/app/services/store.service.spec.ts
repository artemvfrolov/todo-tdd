import { TodoStore } from './store.service';
import { Todo } from '../models/todo.model';

describe('TodoStore', () => {
  let context: TodoStore;
  const todos = [];

  beforeEach(() => {
    context = new TodoStore();
    context.todos = todos;
  });

  it('should add item', () => {
    context.add('name');
  });

  it('should remove item', () => {
    context.remove(new Todo('name'));
  });

  it('should getWithCompleted empty', () => {
    todos.push(new Todo('name'));
    const getWithCompleted = context.getWithCompleted(false);
    expect(getWithCompleted).toEqual([new Todo('name')]);
  });

  it('should getWithCompleted with data', () => {
    context.clean();
    todos.push(new Todo('name'));
    const getWithCompleted = context.getWithCompleted(false);
    expect(getWithCompleted).toEqual([new Todo('name')]);
  });

  it('should getAllTodos items empty', () => {
    context.clean();
    const getAllTodos = context.getAllTodos();
    expect(getAllTodos).toEqual([]);
  });

  it('should getAllTodos items with data', () => {
    context.clean();
    todos.push(new Todo('name'));
    const getAllTodos = context.getAllTodos();
    expect(getAllTodos).toEqual([new Todo('name')]);
  });

  it('should clean all items ', () => {
    context.clean();
  });

  it('should removeCompleted', () => {
    context.removeCompleted();
  });

  it('should getRemaining with data', () => {
    context.clean();
    todos.push(new Todo('name'));
    const getRemaining = context.getRemaining();
    expect(getRemaining).toEqual([new Todo('name')]);
  });

  it('should getRemaining empty', () => {
    context.clean();
    const getRemaining = context.getRemaining();
    expect(getRemaining).toEqual([]);
  });

  it('toggleCompletion', () => {
    context.toggleCompletion(new Todo('name'));
  });
});
