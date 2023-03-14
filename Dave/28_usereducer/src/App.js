import { useState, useReducer } from 'react';

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'newUserInput':
      return { userInput: action.payload };
    case 'toggleColor':
      return { color: !state.color };
    default:
      throw new Error('Not Expected Action!');
  }
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
