import { createToDoItem, setCompleted, changePriority, createProjectFolder, addTaskToProject } from './Creator';
import loadDOM from './loadDOM';
import './styles.css';


let testFolder = createProjectFolder('Odin Projects', 'Learning javascript');
console.log(testFolder);
let item1 = createToDoItem('Title Test 1', 'Description test 1', '17/06/23', 1);
let item2 = createToDoItem('Title Test 2', 'Description test 2', '18/06/23', 2);
let item3 = createToDoItem('Title Test 3', 'Description test 3', '26/06/23', 3);
let item4 = createToDoItem('Title Test 4', 'Description test 3', '26/06/23', 3);
let item5 = createToDoItem('Title Test 5', 'Description test 3', '26/06/23', 3);
let item6 = createToDoItem('Title Test 6', 'Description test 3', '26/06/23', 3);
let item7 = createToDoItem('Title Test 7', 'Description test 3', '26/06/23', 3);
let item8 = createToDoItem('Title Test 8', 'Description test 3', '26/06/23', 3);
let item9 = createToDoItem('Title Test 9', 'Description test 3', '26/06/23', 3);
let item10 = createToDoItem(
  'Title Test 3',
  'Description test 3',
  '26/06/23',
  3
);
let item11 = createToDoItem(
  'Title Test 3',
  'Description test 3',
  '26/06/23',
  3
);

addTaskToProject(item1, testFolder);
addTaskToProject(item2, testFolder);
addTaskToProject(item3, testFolder);
addTaskToProject(item4, testFolder);

loadDOM(testFolder.toDoList, testFolder);
addTaskToProject(item5, testFolder);
addTaskToProject(item6, testFolder);



