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
  const { register, handleSubmit } = useForm();
  const onValid = (data: any) => {
    console.log(data);
  };

  return (
    <div>
      <form style={{ display: 'flex', flexDirection: 'column' }} onSubmit={handleSubmit(onValid)}>
        <input type='text' {...register('email', { required: true })} placeholder='Email' />
        <input
          type='text'
          {...register('firstName', { required: true })}
          placeholder='First Name'
        />
        <input type='text' {...register('lastName', { required: true })} placeholder='Last Name' />
        <input
          type='text'
          {...register('username', { required: true, minLength: 10 })}
          placeholder='Username'
        />
        <input type='text' {...register('password', { required: true })} placeholder='Password' />
        <input
          type='text'
          {...register('passwordCheck', { required: true })}
          placeholder='Password Check'
        />
        <button type='submit'>Add</button>
      </form>
    </div>
  );
}

export default ToDoList;
