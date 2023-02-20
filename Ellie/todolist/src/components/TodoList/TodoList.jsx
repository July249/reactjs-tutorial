import React, { useEffect, useState } from "react";
import AddTodo from "../AddTodo/AddTodo";
import Todo from "../Todo/Todo";
import styles from "./TodoList.module.css";

export default function TodoList({ filter }) {
  const [todos, setTodos] = useState(readTodosFromLocalStorage);
  // useState 안에 콜백함수를 사용한 이유는 그래야 초기화하는함수를 처음에만 호출하고 값이 있는 경우에는 다시 호출하지 않기 때문이다.
  // 이렇게 하지 않으면 값을 추가할 때마다 다시 로컬스토리지에서 값을 가져오는 불필요한 함수 호출이 지속되게 된다.
  // const [todos, setTodos] = useState(() => readTodosFromLocalStorage());

  const handleAdd = (todo) => {
    setTodos([...todos, todo]);
  };
  const handleUpdate = (updated) => setTodos(todos.map((t) => (t.id === updated.id ? updated : t)));
  const handleDelete = (deleted) => setTodos(todos.filter((t) => t.id !== deleted.id));

  useEffect(() => {
    localStorage.setItem("todolist", JSON.stringify(todos));
  }, [todos]);

  const filtered = getFilteredItems(todos, filter);

  return (
    <section className={styles.container}>
      <ul className={styles.list}>
        {filtered?.map((item) => (
          <Todo key={item.id} id={item.id} todo={item} onUpdate={handleUpdate} onDelete={handleDelete} />
        ))}
      </ul>
      <AddTodo onAdd={handleAdd} />
    </section>
  );
}

// 초기에만 호출되면 되는 함수임
function readTodosFromLocalStorage() {
  const todos = localStorage.getItem("todolist");
  return todos ? JSON.parse(todos) : [];
}
function getFilteredItems(todos, filter) {
  if (filter === "all") {
    return todos;
  }
  return todos.filter((todo) => todo.status === filter);
}
