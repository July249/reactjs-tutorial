import CreateToDo from './components/CreateToDo';
import ToDo from './components/ToDo';
import { todoState, todoSelector } from './components/atoms';
import { useRecoilValue } from 'recoil';

function ToDoList() {
  const [TO_DOs, DOINGs, DONEs] = useRecoilValue(todoSelector);

  return (
    <div>
      <h1>To Do</h1>
      <hr />
      <CreateToDo />
      <h2>To Do</h2>
      <ul>
        {TO_DOs.map((todo) => (
          <ToDo key={todo.id} {...todo} />
        ))}
      </ul>
      <hr />
      <h2>Doing</h2>
      <ul>
        {DOINGs.map((todo) => (
          <ToDo key={todo.id} {...todo} />
        ))}
      </ul>
      <hr />
      <h2>Done</h2>
      <ul>
        {DONEs.map((todo) => (
          <ToDo key={todo.id} {...todo} />
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
