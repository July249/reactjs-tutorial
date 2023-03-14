import { useState, useRef, useEffect, useLayoutEffect } from 'react';

function App() {
  /**
   * KeyNote
   *
   * The only difference is exactly when useLayoutEffect vs. useEffect runs the code that's inside of the effect
   * and as the name indicates useEffect or useLayoutEffect the code inside is really considered to be a side effect something that changes after something else has changed in the component
   * and that's why we put a dependency inside the array.
   *
   * We're listening or looking for a change and if say number changes then we're going to run this code
   * and that's the same for useEffect and useLayoutEffect
   *
   * The difference is useEffect is asynchronous
   * so it will not delay painting the DOM to the browser
   *
   * but useLayoutEffect is synchronous and it will delay painting the DOM to the browser
   * it wants to run its code before painting to the browser
   *
   * When does this come into play well really it makes useEffect the correct and more performance choice about 99% of the time
   *
   * However there's that 1% of the time when you want to choose useLayoutEffect over useEffect
   *
   * That's because you want the code to run before it directly modifies the DOM
   * and that modification of course, is observable to the user
   * You don't want the user to observe that change
   */
  const [number, setNumber] = useState(0);
  const [sectionStyle, setSectionStyle] = useState({});
  const sectionRef = useRef();

  // useEffect(() => {
  //   const random = Math.floor(Math.random() * 500);

  //   for (let i = 0; i <= 100000000; i++) {
  //     if (i === 100000000) setSectionStyle({ paddingTop: `${random}px` });
  //   }
  // }, [number]);

  useLayoutEffect(() => {
    const random = Math.floor(Math.random() * 500);

    for (let i = 0; i <= 100000000; i++) {
      if (i === 100000000) setSectionStyle({ paddingTop: `${random}px` });
    }
  }, [number]);

  /**
   * Look at the browser!
   *
   * When you use useEffect, you can see the number change
   * it does not delay painting the DOM to the browser
   *
   * However, you cannot see the number change in the case of useLayoutEffect
   * it does delay delay painting the DOM to the browser
   * it wants to run its code before painting to the browser
   */

  return (
    <main className='App'>
      <section ref={sectionRef} style={sectionStyle}>
        <p>{number}</p>
        <div>
          <button onClick={() => setNumber((prev) => prev - 1)}>-</button>
          <button onClick={() => setNumber((prev) => prev + 1)}>+</button>
        </div>
      </section>
    </main>
  );
}

export default App;
