export class Todo {
  completed: Boolean;

  private _title: String;

  get title() {
    return this._title;
  }

  set title(value: String) {
    this._title = value.trim();
  }

  constructor(title: String, completed?: Boolean) {
    this.completed = completed || false;
    this.title = title.trim();
  }
}
