import { useForm } from 'react-hook-form';
import { atom, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';

interface IFormData {
  todo: string;
}

interface ITodo {
  text: string;
  id: number;
  category: 'TO_DO' | 'DOING' | 'DONE';
}

const todoState = atom<ITodo[]>({
  key: 'todo',
  default: [],
});

function ToDoList() {
  const [todos, setTodos] = useRecoilState(todoState);
  const { register, handleSubmit, setValue, setError } = useForm<IFormData>();
  const onAddTodo = ({ todo }: IFormData) => {
    console.log('add to do', todo);
    setTodos((prev) => [{ text: todo, id: Date.now(), category: 'TO_DO' }, ...prev]);
    setValue('todo', ''); // reset input
  };
  console.log(todos);

  return (
    <div>
      <h1>To Do</h1>
      <hr />
      <form onSubmit={handleSubmit(onAddTodo)}>
        <input
          type='text'
          {...register('todo', { required: 'Please, write a to do' })}
          placeholder='Write a to do'
        />
        <button type='submit'>Add</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
