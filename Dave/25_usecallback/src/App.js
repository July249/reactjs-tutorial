import { useState, useEffect, useCallback } from 'react';

const App = () => {
  // userInput exists only for re-rendering when you type.
  const [userInput, setUserInput] = useState('');
  const [result, setResult] = useState(0);
  const [num1] = useState(4);
  const [num2] = useState(5);

  /**
   * The 'sum' function makes the dependencies of useEffect Hook (at line 15) change on every render.
   * Move it inside the useEffect callback.
   * Alternatively, wrap the definition of 'sum' in its own useCallback() Hook.
   */
  const sum = useCallback(() => num1 + num2, [num1, num2]);

  /**
   * The 'buildArray' function makes the dependencies of useEffect Hook (at line 33) change on every render.
   * Move it inside the useEffect callback.
   * Alternatively, wrap the definition of 'buildArray' in its own useCallback() Hook.
   */
  const buildArray = useCallback(() => [num1, num2], [num1, num2]);

  useEffect(() => {
    console.log(`New array: ${buildArray()}`);
    setResult(buildArray()); // => it makes endless rendering loop
    /**
     * 콘솔창에 2개만 찍히는 이유는 sum의 결과가 원시값 9로 고정되어 있기 때문에
     * 더이상 출력할 필요를 느끼지 못해서 출력하지 않았을 뿐이다
     * 로직만 보았을 때는 이미 무한루프에 해당한다
     * 왜냐하면 리렌더링될 때마다 sum() 함수 참조값이 바뀌기 때문이다 (참조 동일성 문제가 나타난다)
     *
     * Note: userInput 값만 바뀌는데 왜 useEffect도 동작할까?
     * => 그 이유는 리액트의 리렌더링 조건 중 state 값이 바뀌면 컴포넌트 전체가 리렌더링 되기 때문이다
     *
     * useCallback으로 sum() 함수를 메모이제이션하면 userInput값이 변경되어도 sum 함수에 변화가 없으면 useEffect도 실행되지 않는다
     * 정확히 의도한 sum 함수에만 의존하게 되는 것이다
     */
  }, [buildArray /* dep. is object! */]);

  return (
    <main className='App'>
      <input
        type='text'
        placeholder='input'
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      />
      <h1>Output: {userInput || '--'}</h1>
    </main>
  );
};

export default App;
