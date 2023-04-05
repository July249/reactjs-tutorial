import { useState } from 'react';

const Example1 = () => {
  const [count, setCount] = useState(0);
  const [item, setItem] = useState([]);

  const handleClick = () => {
    setCount(count + 1);
    const myArr = Array(20000)
      .fill(1)
      .map((el, i) => count + 20000 - i);
    setItem(myArr);
  };

  const content = (
    <div className='App'>
      <button onClick={handleClick}>{count}</button>
      <ul>
        {item.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );

  return content;
};

export default Example1;
