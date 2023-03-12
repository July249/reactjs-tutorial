import { useState } from 'react';

const fib = (n) => {
  return n <= 1 ? n : fib(n - 1) + fib(n - 2);
};

function App() {
  const [userNumber, setUserNumber] = useState('');
  const [randomInput, setRandomInput] = useState('');

  const fibNumber = fib(userNumber);

  return (
    <main className='App'>
      <label>Fibonacci Sequence:</label>
      <input
        type='number'
        value={userNumber}
        placeholder='Position'
        onChange={(e) => setUserNumber(e.target.value)}
      />
      <p>Number: {fibNumber || '--'}</p>
      <br />
      <br />
      <label>Random Input:</label>
      <input
        type='text'
        value={randomInput}
        placeholder='Random Input'
        onChange={(e) => setRandomInput(e.target.value)}
      />
      <p>{randomInput}</p>
    </main>
  );
}

export default App;
