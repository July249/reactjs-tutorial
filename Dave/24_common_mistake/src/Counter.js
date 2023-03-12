import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleAdd = () => {
    setCount(count + 1); // count === prev
    setCount(count + 1); // count === prev not prev + 1
  };

  const handleSubtract = () => {
    setCount(count - 1);
  };

  return (
    <section>
      <h1>{count}</h1>
      <div className='row'>
        <button onClick={handleAdd}>+</button>
        <button onClick={handleSubtract}>-</button>
      </div>
      <div className='row'>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>
    </section>
  );
};

export default Counter;
