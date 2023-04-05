import { useState, useTransition, useDeferredValue } from 'react';

const Example1 = () => {
  const [count, setCount] = useState(0);
  const [item, setItem] = useState([]);
  const [isPending, startTransition] = useTransition();
  const deferredCount = useDeferredValue(count);

  const handleClick = () => {
    // urgent update
    setCount(count + 1);

    // transition update (not urgent update)
    startTransition(() => {
      const myArr = Array(20000)
        .fill(1)
        .map((el, i) => count + 20000 - i);
      setItem(myArr);
    });
  };

  const content = (
    <div className='App'>
      <button onClick={handleClick}>{count}</button>
      {/* deferredCount is handled like not urgent update! */}
      <p>Deferred Count: {deferredCount}</p>
      {isPending ? <p>Loading ...</p> : null}
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
