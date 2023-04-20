import { useForm } from 'react-hook-form';
import { atom, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';

const todoState = atom({
  key: 'todo',
  default: [],
});

interface IFormData {
  todo: string;
}

function ToDoList() {
  const [value, modFn] = useRecoilState(todoState);
  // const value = useRecoilValue(todoState);
  // const modFn = useSetRecoilState(todoState);
  const { register, handleSubmit, setValue, setError } = useForm<IFormData>();

  const onAddTodo = (data: IFormData) => {
    console.log('add to do', data.todo);
    setValue('todo', ''); // reset input
  };
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
      <ul></ul>
    </div>
  );
}

export default ToDoList;
