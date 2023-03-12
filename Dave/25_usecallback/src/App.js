import { useState, useEffect } from 'react';

const App = () => {
  // userInput exists only for re-rendering when you type.
  const [userInput, setUserInput] = useState('');
  const [result, setResult] = useState(0);
  const [num1] = useState(4);
  const [num2] = useState(5);

  /**
   * The 'sum' function makes the dependencies of useEffect Hook (at line 15) change on every render.
   * Move it inside the useEffect callback.
   * Alternatively, wrap the definition of 'sum' in its own useCallback() Hook.
   */
  const sum = () => num1 + num2;

  useEffect(() => {
    console.log(`New sum. Value: ${sum()}`);
    setResult();
  }, [sum /* dep. is object! */]);

  return (
    <main className='App'>
      <input
        type='text'
        placeholder='input'
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      />
      <h1>Output: {userInput || '--'}</h1>
    </main>
  );
};

export default App;
