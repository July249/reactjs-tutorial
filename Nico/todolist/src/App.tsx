import reset from 'styled-reset';
import { createGlobalStyle } from 'styled-components';
import ToDoList from './ToDoList';

const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <ToDoList />
    </>
  );
}

export default App;
