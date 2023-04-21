import CreateToDo from './components/CreateToDo';
import ToDo from './components/ToDo';
import { todoState, todoSelector } from './components/atoms';
import { useRecoilValue } from 'recoil';

function ToDoList() {
  const todos = useRecoilValue(todoState);
  const selectorOutput = useRecoilValue(todoSelector);
  console.log('selectorOutput', selectorOutput);

  return (
    <div>
      <h1>To Do</h1>
      <hr />
      <CreateToDo />
      <ul>
        {todos.map((todo) => (
          <ToDo key={todo.id} {...todo} />
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
