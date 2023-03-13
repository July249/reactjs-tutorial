import { useState } from 'react';

function App() {
  const [randomInput, setRandomInput] = useState('');

  const handleChage = (e) => {
    setRandomInput(e.target.value);
  };

  return (
    <main className='App'>
      <input
        type='text'
        value={randomInput}
        placeholder='Random Input'
        onChange={handleChage}
      />
      <br />
      <br />
      <p>{randomInput}</p>
    </main>
  );
}

export default App;
