import { useForm } from 'react-hook-form';

interface IFormData {
  [key: string]: string;
  todo: string;
}

function ToDoList() {
  const { register, handleSubmit, setValue, setError } = useForm<IFormData>();

  const onAddTodo = (data: IFormData) => {
    console.log('add to do', data.todo);
    setValue('todo', ''); // reset input
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onAddTodo)}>
        <input
          type='text'
          {...register('todo', { required: 'Please, write a to do' })}
          placeholder='Write a to do'
        />
        <button type='submit'>Add</button>
      </form>
    </div>
  );
}

export default ToDoList;
