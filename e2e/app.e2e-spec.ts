import { TodoTddPage } from './app.po';

describe('todo-tdd App', () => {
  let page: TodoTddPage;

  beforeEach(() => {
    page = new TodoTddPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
