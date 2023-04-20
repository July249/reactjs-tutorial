import CreateToDo from './components/CreateToDo';
import ToDo from './components/ToDo';
import { todoState } from './components/atoms';
import { useRecoilValue } from 'recoil';

function ToDoList() {
  const todos = useRecoilValue(todoState);

  return (
    <div>
      <h1>To Do</h1>
      <hr />
      <CreateToDo />
      <ul>
        {todos.map((todo) => (
          <ToDo {...todo} />
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
