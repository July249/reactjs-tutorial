import { useState } from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import ContainerStyle from "./App.module.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <article className={ContainerStyle.app}>
      <Header darkMode={darkMode} />
      <Main />
    </article>
  );
}

export default App;
