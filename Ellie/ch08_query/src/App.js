import { useState } from "react";
import Products from "./components/Products";
import "./App.css";

function App() {
  const [showProducts, setShowProducts] = useState(true);
  return (
    <div className="App">
      {showProducts && <Products />}
      <button onClick={() => setShowProducts((show) => !show)}>Toggle</button>
    </div>
  );
}

export default App;
