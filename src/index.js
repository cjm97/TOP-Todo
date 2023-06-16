import { toDoItem, projectFolder } from './toDoCreator';
import './styles.css';

let firstToDoItem = new toDoItem(
  'First todo!',
  'Test todo',
  'due now!!!',
  1,
  false
);
let secondToDoItem = new toDoItem(
  'Second todo!',
  'Test todo 2',
  'due later!!!',
  5,
  false
);
let thirdToDoItem = new toDoItem('Third 2do', 'test3', 'later', 3, false);

let OdinProject = new projectFolder(
  'The Odin Project',
  'The Odin Project project list',
  []
);

OdinProject.toDoList.push(firstToDoItem, secondToDoItem, thirdToDoItem);

console.log(firstToDoItem);
console.log(secondToDoItem);

console.log(OdinProject);

