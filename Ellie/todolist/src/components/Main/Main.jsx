import { useEffect, useRef, useState } from "react";
import Item from "../Item/Item";
import AddTodo from "../AddTodo/AddTodo";
import MainStyle from "./Main.module.css";

// const todolist = [
//   {
//     id: 1,
//     isActive: true,
//     isCompleted: false,
//     todo: "전체 아이템들 보여주기",
//   },
//   {
//     id: 2,
//     isActive: false,
//     isCompleted: false,
//     todo: "아이템 추가",
//   },
//   {
//     id: 3,
//     isActive: false,
//     isCompleted: false,
//     todo: "아이템 삭제",
//   },
//   {
//     id: 4,
//     isActive: false,
//     isCompleted: false,
//     todo: "아이템 체크박스",
//   },
//   {
//     id: 5,
//     isActive: false,
//     isCompleted: false,
//     todo: "아이템 필터링",
//   },
//   {
//     id: 6,
//     isActive: false,
//     isCompleted: false,
//     todo: "전체 아이템들 보여주기",
//   },
// ];

const Main = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const handleRead = () => {
    console.log(localStorage.getItem("todolist"));
    console.log(JSON.parse(localStorage.getItem("todolist")));
    const localStorageData = JSON.parse(localStorage.getItem("todolist"));
    setTodos(localStorageData);
  };

  const handleCreate = (e) => {
    setNewTodo(e.target.value);
  };

  const handleDelete = (e) => {
    setTodos([]);
    localStorage.setItem("todolist", JSON.stringify(todos));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(todos, typeof todos);

    const newItem = {
      id: todos.length,
      isActive: false,
      isCompleted: false,
      isDeleted: false,
      todo: newTodo,
    };

    const newTodolist = [...todos, newItem];
    setTodos(newTodolist);
    localStorage.setItem("todolist", JSON.stringify(newTodolist));
  };

  useEffect(() => {
    if (!todos) {
      localStorage.setItem("todolist", JSON.stringify([]));
      handleRead();
    }
    handleRead();
  }, []);

  return (
    <main className={MainStyle.main}>
      <ul className={MainStyle.listContainer}>
        {todos?.map((item) => (
          <Item key={item.id} todo={item.todo} onDelete={handleDelete} />
        ))}
      </ul>
      <AddTodo onCreate={handleCreate} onSubmit={handleSubmit} />
    </main>
  );
};

export default Main;
