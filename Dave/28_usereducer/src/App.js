import { useReducer } from 'react';

const ACTION = {
  INCREMENT: 'increment',
  DECREMENT: 'decrement',
  NEW_USER_INPUT: 'newUserInput',
  TG_COLOR: 'toggleColor',
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTION.INCREMENT:
      return { ...state, count: state.count + 1 };
    case ACTION.DECREMENT:
      return { ...state, count: state.count - 1 };
    case ACTION.NEW_USER_INPUT:
      return { ...state, userInput: action.payload };
    case ACTION.TG_COLOR:
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
          dispatch({ type: ACTION.NEW_USER_INPUT, payload: e.target.value })
        }
      />
      <br />
      <br />
      <p>{state.count}</p>
      <section>
        <button onClick={() => dispatch({ type: ACTION.DECREMENT })}>-</button>
        <button onClick={() => dispatch({ type: ACTION.INCREMENT })}>+</button>
        <button onClick={() => dispatch({ type: ACTION.TG_COLOR })}>
          Color
        </button>
      </section>
      <br />
      <br />
      <p>{state.userInput}</p>
    </main>
  );
}

export default App;
