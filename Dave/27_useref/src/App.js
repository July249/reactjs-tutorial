import { useState, useRef } from 'react';

function App() {
  const [randomInput, setRandomInput] = useState('');
  const renders = useRef(0);
  const inputRef = useRef();
  /**
   * Two Important Rules of useRef
   *
   * 1. Value persists that means it stays the same between renders
   * 2. Updating the reference does not trigger a re-render
   *
   * These two things are big difference between useState and useRef!
   */
  const handleChage = (e) => {
    setRandomInput(e.target.value);
    renders.current++;
  };

  /**
   * useRef to set focus on an element in JSX
   *
   * That kind of allows us access to the dom like Vanilla JS
   *
   */
  const focusOnInput = () => {
    inputRef.current.focus();
  };

  /**
   * Warning! - Use useRef to create a reference to something in your component when you really need to access it that way
   *
   * => Do not use useRef to make it Vanilla style!
   */

  return (
    <main className='App'>
      <input
        ref={inputRef}
        type='text'
        value={randomInput}
        placeholder='Random Input'
        onChange={handleChage}
      />
      <p>Renders: {renders.current}</p>
      <br />
      <br />
      <button onClick={focusOnInput}>Focus</button>
      <br />
      <br />
      <p>{randomInput}</p>
    </main>
  );
}

export default App;
