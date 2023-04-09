import { useState } from 'react';

function ToDoList() {
  const [todo, setTodo] = useState<string>('');
  const [todoError, setTodoError] = useState<string>('');
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = e;
    setTodoError('');
    setTodo(value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (todo.length < 10) {
      return setTodoError('To do should be longer than 10 characters');
    }
    console.log('submit');
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type='text' value={todo} onChange={onChange} placeholder='Write a to do' />
        <button type='submit'>Add</button>
        {todoError && <p>{todoError}</p>}
      </form>
    </div>
  );
}

export default ToDoList;
