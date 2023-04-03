import { createBrowserRouter } from 'react-router-dom';
// import Header from './components/Header';
// import Home from './screens/Home';
// import About from './screens/About';

// Step 1. Now rename Root instead of App
import Root from './Root';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
  },
]);

export default router;
