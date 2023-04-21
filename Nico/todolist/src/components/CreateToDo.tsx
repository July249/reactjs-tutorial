import { useForm } from 'react-hook-form';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { todoState, categoryState } from './atoms';

interface IFormData {
  todo: string;
}

function CreateToDo() {
  const setTodos = useSetRecoilState(todoState);
  const category = useRecoilValue(categoryState);
  const { register, handleSubmit, setValue } = useForm<IFormData>();
  const onAddTodo = ({ todo }: IFormData) => {
    setTodos((prev) => [{ text: todo, id: Date.now(), category }, ...prev]);
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
