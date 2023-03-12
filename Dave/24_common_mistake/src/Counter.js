import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <section>
      <h1>{count}</h1>
      <div className='row'>
        <button onClick={() => setCount(count + 1)}>+</button>
        <button onClick={() => setCount(count - 1)}>-</button>
      </div>
      <div className='row'>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>
    </section>
  );
};

export default Counter;
