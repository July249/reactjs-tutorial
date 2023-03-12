import { useState, useEffect } from 'react';

function App1() {
  const [id, setId] = useState('');

  const handleChageId = (e) => {
    setId(e.target.value);
  };

  return (
    <main className='App'>
      <input type='text' placeholder='input' onChange={handleChageId} />
      <p>{id}</p>
    </main>
  );
}

export default App1;
