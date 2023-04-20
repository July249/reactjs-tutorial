import { useForm } from 'react-hook-form';
import { useSetRecoilState } from 'recoil';
import { todoState } from './atoms';

interface IFormData {
  todo: string;
}

function CreateToDo() {
  const setTodos = useSetRecoilState(todoState);
  const { register, handleSubmit, setValue } = useForm<IFormData>();
  const onAddTodo = ({ todo }: IFormData) => {
    console.log('add to do', todo);
    setTodos((prev) => [{ text: todo, id: Date.now(), category: 'TO_DO' }, ...prev]);
    setValue('todo', ''); // reset input
  };
  return (
    <form onSubmit={handleSubmit(onAddTodo)}>
      <input
        type='text'
        {...register('todo', { required: 'Please, write a to do' })}
        placeholder='Write a to do'
      />
      <button type='submit'>Add</button>
    </form>
  );
}

export default CreateToDo;
