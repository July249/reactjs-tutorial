import CreateToDo from './components/CreateToDo';
import ToDo from './components/ToDo';
import { todoSelector, categoryState, Categories } from './components/atoms';
import { useRecoilValue, useRecoilState } from 'recoil';

function ToDoList() {
  const todolist = useRecoilValue(todoSelector);
  const [category, setCategory] = useRecoilState(categoryState);
  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setCategory(value as any);
  };

  return (
    <div>
      <h1>To Do</h1>
      <hr />
      <form>
        <select value={category} onInput={onInput}>
          <option value={Categories.TO_DO}>TO_DO</option>
          <option value={Categories.DOING}>DOING</option>
          <option value={Categories.DONE}>DONE</option>
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
