import { createBrowserRouter } from 'react-router-dom';
import Home from './screens/Home';
import About from './screens/About';
import User from './screens/users/User';
import Root from './Root';
import NotFound from './screens/NotFound';
import ErrorComponent from './components/ErrorComponent';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '',
        element: <Home />,
        errorElement: <ErrorComponent />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'users/:id',
        element: <User />,
      },
    ],
    errorElement: <NotFound />,
  },
]);

export default router;
