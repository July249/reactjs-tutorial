import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TodoList from './routes/TodoList';
import Todo from './routes/Todo';

interface IRouterProps {}

function Router({}: IRouterProps) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<TodoList />} />
        <Route path='/:todoId/*' element={<Todo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
