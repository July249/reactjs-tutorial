import React from 'react';
import { useSetRecoilState } from 'recoil';
import { ITodo, todoState } from './atoms';

function ToDo({ text, category, id }: ITodo) {
  const setTodos = useSetRecoilState(todoState);
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;
    setTodos((prev) => {
      const targetIndex = prev.findIndex((todo) => todo.id === id);
      const newTodo = { text, id, category: name as ITodo['category'] };
      return [...prev.slice(0, targetIndex), newTodo, ...prev.slice(targetIndex + 1)];
    });
  };
  return (
    <li>
      <span>{text}</span>
      {category !== 'DOING' && (
        <button name='DOING' onClick={onClick}>
          Doing
        </button>
      )}
      {category !== 'TO_DO' && (
        <button name='TO_DO' onClick={onClick}>
          To Do
        </button>
      )}
      {category !== 'DONE' && (
        <button name='DONE' onClick={onClick}>
          Done
        </button>
      )}
    </li>
  );
}

export default ToDo;
