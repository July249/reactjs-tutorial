import { useState } from 'react';

function ToDoList() {
  const [todo, setTodo] = useState<string>('');
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = e;
    setTodo(value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(todo);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type='text' value={todo} onChange={onChange} placeholder='Write a to do' />
        <button type='submit'>Add</button>
      </form>
    </div>
  );
}

export default ToDoList;
