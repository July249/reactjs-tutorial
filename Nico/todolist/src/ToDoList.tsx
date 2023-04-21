import CreateToDo from './components/CreateToDo';
import ToDo from './components/ToDo';
import { todoState, todoSelector, categoryState } from './components/atoms';
import { useRecoilValue, useRecoilState } from 'recoil';

function ToDoList() {
  const todolist = useRecoilValue(todoSelector);
  const [category, setCategory] = useRecoilState(categoryState);
  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setCategory(value);
  };
  // console.log(category);

  return (
    <div>
      <h1>To Do</h1>
      <hr />
      <form>
        <select value={category} onInput={onInput}>
          <option value='TO_DO'>TO_DO</option>
          <option value='DOING'>DOING</option>
          <option value='DONE'>DONE</option>
        </select>
      </form>
      <CreateToDo />
      {todolist?.map((todo) => (
        <ToDo key={todo.id} {...todo} />
      ))}
    </div>
  );
}

export default ToDoList;
