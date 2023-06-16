export class toDoItem {
  constructor(title, description, dueDate, priority, completed) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.completed = completed;
  }
}

export class projectFolder {
  constructor(title, description, toDoList) {
    this.title = title;
    this.description = description;
    this.toDoList = toDoList;
  }
}


