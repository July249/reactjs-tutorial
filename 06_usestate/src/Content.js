import { useState } from 'react';

const Content = () => {
  const [name, setName] = useState('Tom');
  const [count, setCount] = useState(0);

  const handleNameChange = () => {
    const names = ['Bob', 'Kevin', 'Carl', 'Tom'];
    const int = Math.floor(Math.random() * 4);
    setName(names[int]);
  };

  const handleClick = () => {
    setCount(count + 1); // log result is "0"
    // log result is "1" after click on second button and click on first button, again
    console.log(count);
  };

  const handleClick2 = () => {
    console.log(count); // log result is "1" after click on first button
    // NOTE: only print the result of "count"! Not calculated on "count"
    // So, keep printed same value of count
  };

  return (
    <main>
      <p onDoubleClick={handleClick}>Hello {name}!</p>
      <button onClick={handleNameChange}>Change Name</button>
      <button onClick={handleClick}>Click It</button>
      <button onClick={handleClick2}>Click It</button>
    </main>
  );
};

export default Content;
