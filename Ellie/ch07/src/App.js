import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <p>Home</p>,
    errorElement: <p>Not Found😅</p>,
  },
  {
    path: "/videos",
    element: <p>Videos</p>,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
