import loadDOM, { clearDOM } from "./loadDOM";

// class for creating individual todo list item
export class toDoItem {
  constructor(title, description, dueDate, priority, completed) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.completed = completed;
  }
}


// class for creating 'projects' folder that contains a list of to dos for that project
export class projectFolder {
  constructor(title, description, toDoList) {
    this.title = title;
    this.description = description;
    this.toDoList = toDoList;
  }
}


// function that creates a to do item using the class constructor above (2-10)
export function createToDoItem(title, description, dueDate, priority) {
  //retrieve info from app
  const completed = false; //set to false by default
  const newToDoItem = new toDoItem(
    title,
    description,
    dueDate,
    priority,
    completed
  );
  return newToDoItem;
}


// function that creates a project folder using the class constructor above (13-20)
export function createProjectFolder(title, description) {
  const toDoList = [];
  const newProject = new projectFolder(title, description, toDoList);
  return newProject;
}


// function to set a task's completion status to true (i.e. done)
export function setCompleted(toDo) {
  return (toDo.completed = true);
}


// function to change a task's priority
export function changePriority(toDo, priority) {
  return (toDo.priority = priority);
}


export function addTaskToProject(toDo, projectFolder){
  projectFolder.toDoList.push(toDo);
  clearDOM();
  loadDOM(projectFolder.toDoList, projectFolder);
}