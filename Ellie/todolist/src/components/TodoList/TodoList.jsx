import React, { useState } from "react";
import AddTodo from "../AddTodo/AddTodo";
import Todo from "../Todo/Todo";
import styles from "./TodoList.module.css";

export default function TodoList({ filter }) {
  const [todos, setTodos] = useState([
    { id: "123", text: "장보기", status: "active" },
    { id: "124", text: "공부하기", status: "active" },
  ]);

  const handleAdd = (todo) => setTodos([...todos, todo]);
  const handleUpdate = (updated) => setTodos(todos.map((t) => (t.id === updated.id ? updated : t)));
  const handleDelete = (deleted) => setTodos(todos.filter((t) => t.id !== deleted.id));

  const filtered = getFilteredItems(todos, filter);
  return (
    <section className={styles.container}>
      <ul className={styles.list}>
        {filtered.map((item) => (
          <Todo key={item.id} todo={item} onUpdate={handleUpdate} onDelete={handleDelete} />
        ))}
      </ul>
      <AddTodo onAdd={handleAdd} />
    </section>
  );
}

function getFilteredItems(todos, filter) {
  if (filter === "all") {
    return todos;
  }
  return todos.filter((todo) => todo.status === filter);
}
