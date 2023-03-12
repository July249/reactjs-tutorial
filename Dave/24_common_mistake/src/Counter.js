import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  const [values, setValues] = useState([]);
  const [state, setState] = useState({ first: '', last: '' });

  const handleAdd = () => {
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
  };

  const handleSubtract = () => {
    setCount((prev) => prev - 1);
    setCount((prev) => prev - 1);
  };

  const updateArray = (newVal) => {
    setValues((prev) => [...prev, newVal]);
  };

  const updateValues = (newVal) => {
    setState((prev) => ({ ...prev, last: 'Kim' }));
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
