import { useState, useReducer } from 'react';

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { ...state, count: state.count + 1 };
    case 'decrement':
      return { ...state, count: state.count - 1 };
    case 'newUserInput':
      return { ...state, userInput: action.payload };
    case 'toggleColor':
      return { ...state, color: !state.color };
    default:
      throw new Error('Not Expected Action!');
  }
  /**
   * Without spread state, it makes problem when you click the color toggle button
   * because it returns only color state not including count!
   *
   * So, if you click on color button without spread state, then count value will display "NaN"
   */
};

function App() {
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    userInput: '',
    color: false,
  });
  // const [userInput, setUserInput] = useState('');
  // const [count, setCount] = useState(0);
  // const [color, setColor] = useState(false);

  return (
    <main className='App' style={{ color: state.color ? '#FFF' : '#FFF952' }}>
      <input
        type='text'
        value={state.userInput}
        onChange={(e) =>
          dispatch({ type: 'newUserInput', payload: e.target.value })
        }
      />
      <br />
      <br />
      <p>{state.count}</p>
      <section>
        <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
        <button onClick={() => dispatch({ type: 'increment' })}>+</button>
        <button onClick={() => dispatch({ type: 'toggleColor' })}>Color</button>
      </section>
      <br />
      <br />
      <p>{state.userInput}</p>
    </main>
  );
}

export default App;
