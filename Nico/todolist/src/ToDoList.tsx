import { useState } from 'react';
import { useForm } from 'react-hook-form';

function ToDoList() {
  // Before using react-hook-form
  // const [todo, setTodo] = useState<string>('');
  // const [todoError, setTodoError] = useState<string>('');
  // const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const {
  //     currentTarget: { value },
  //   } = e;
  //   setTodoError('');
  //   setTodo(value);
  // };
  // const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   if (todo.length < 10) {
  //     return setTodoError('To do should be longer than 10 characters');
  //   }
  //   console.log('submit');
  // };
  // return (
  //   <div>
  //     <form onSubmit={onSubmit}>
  //       <input type='text' value={todo} onChange={onChange} placeholder='Write a to do' />
  //       <button type='submit'>Add</button>
  //       {todoError && <p>{todoError}</p>}
  //     </form>
  //   </div>
  // );

  // After using react-hook-form
  const { register, watch } = useForm();

  return (
    <div>
      <form>
        <input type='text' {...register('toDo')} placeholder='Write a to do' />
        <button type='submit'>Add</button>
      </form>
    </div>
  );
}

export default ToDoList;
