import { useState, useRef } from 'react';

function App() {
  const [randomInput, setRandomInput] = useState('');
  const renders = useRef(0);
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

  return (
    <main className='App'>
      <input
        type='text'
        value={randomInput}
        placeholder='Random Input'
        onChange={handleChage}
      />
      <p>Renders: {renders.current}</p>
      <br />
      <br />
      <p>{randomInput}</p>
    </main>
  );
}

export default App;
