import { useEffect, useState, useMemo } from 'react';

const fib = (n) => {
  return n <= 1 ? n : fib(n - 1) + fib(n - 2);
};

function App() {
  const [userNumber, setUserNumber] = useState('');
  const [randomInput, setRandomInput] = useState('');

  const fibNumber = useMemo(() => fib(userNumber), [userNumber]);
  /**
   * if userNumber = 20, fibNumber = 6765
   * if userNumber = 33, fibNumber = 3524578
   * if userNumber = 40, fibNumber = 102334155
   *
   * fib function is too heavy to calculate for every re-rendering!
   * => it needs memorization by using useMemo Hook!
   *
   * [useMemo vs. useCallback]
   *
   * useMemo gives us the result of a function it calls
   * useCallback use callback gives us a function with referential equality
   */

  useEffect(() => {
    console.log('New number');
    /**
     * Since fibNumber is primitive value, 'New number' doesn't print on console even if I type some value on RandomInput.
     * So, the dependency of useEffect works well!
     *
     */
  }, [fibNumber]);

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
