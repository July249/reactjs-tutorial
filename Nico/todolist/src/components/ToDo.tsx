import React from 'react';
import { useSetRecoilState } from 'recoil';
import { ITodo, todoState, Categories } from './atoms';

function ToDo({ text, category, id }: ITodo) {
  const setTodos = useSetRecoilState(todoState);
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;
    setTodos((prev) => {
      const targetIndex = prev.findIndex((todo) => todo.id === id);
      const newTodo = { text, id, category: name as Categories };
      return [...prev.slice(0, targetIndex), newTodo, ...prev.slice(targetIndex + 1)];
    });
  };
  return (
    <li>
      <span>{text}</span>
      {category !== Categories.TO_DO && (
        <button name={Categories.TO_DO} onClick={onClick}>
          To Do
        </button>
      )}
      {category !== Categories.DOING && (
        <button name={Categories.DOING} onClick={onClick}>
          Doing
        </button>
      )}
      {category !== Categories.DONE && (
        <button name={Categories.DONE} onClick={onClick}>
          Done
        </button>
      )}
    </li>
  );
}

export default ToDo;
