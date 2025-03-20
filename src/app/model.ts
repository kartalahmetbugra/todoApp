export class Model {
  user;
  items;

  constructor() {
    this.user = 'ABK';
    this.items = [
      new TodoItem('Spor', false),
      new TodoItem('Kahvaltı', false),
      new TodoItem('Ders', false),
    ];
  }
}

export class TodoItem {
  description: string;
  action: boolean;

  constructor(description: string, action: boolean) {
    this.description = description;
    this.action = action;
  }
}
