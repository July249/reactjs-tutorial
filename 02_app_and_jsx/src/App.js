import logo from './logo.svg';
import './App.css';

function App() {
  const name = 'Jibro';

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {/* <p>{true === false}</p>
        <p>{4 === 2}</p> */}
        {/* Not render about the Boolean  */}

        {/* <p>{{ a: 1, b: 2 }}</p> */}
        {/* Error: Objects are not valid as a React child. If you meant to render a collection of children, use an array instead. */}

        {/* <p>{[1, 2, 3]}</p>
        <p>{name}</p>
        <p>{'TEST'}</p> */}
      </header>
    </div>
  );
}

export default App;
