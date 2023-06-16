import { createToDoItem } from './Creator';

export default function loadDOM(toDoList, selectedFolder) {
  const header = document.querySelector('.projects-header');
  header.textContent = `To Do List : ${selectedFolder.title}`
  const content = document.querySelector('.toDoItems-container');
  if (toDoList.length > 0) {
    toDoList.forEach((toDo) => {
      const toDoContainer = document.createElement('div'),
        toDoTitle = document.createElement('h3'),
        toDoDescription = document.createElement('p'),
        toDoDueDate = document.createElement('p'),
        toDoPriority = document.createElement('p'),
        toDoCompleted = document.createElement('input');
      toDoContainer.classList.add('toDo-container');
      toDoTitle.textContent = toDo.title;
      toDoDescription.textContent = toDo.description;
      toDoDueDate.textContent = `Due Date: ${toDo.dueDate}`;
      toDoPriority.textContent = `Priority: ${toDo.priority}`;
      toDoCompleted.type = 'checkbox';
      toDoCompleted.value = toDo.completed;
      content.appendChild(toDoContainer);

      toDoContainer.append(
        toDoTitle,
        toDoDescription,
        toDoDueDate,
        toDoPriority,
        toDoCompleted
      );
    });
  } else {
    const toDoTitle = document.createElement('h3');
    toDoTitle.textContent = 'Start Adding tasks!';
    content.appendChild(toDoTitle);
  }
}

export function clearDOM() {
  const content = document.querySelector('.toDoItems-container');
  content.innerHTML = '';
}

