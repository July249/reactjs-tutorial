import { useState, useEffect } from 'react';

function App1() {
  /**
   * 기본적으로 컴포넌트 안에서 state나 props가 업데이트 되면 컴포넌트는 리렌더링 되는데,
   * 만약 아래 코드처럼 사용자로부터 입력 받는 input 요소 같이 업데이트가 잦은 state가 있는
   * 컴포넌트라면 매번 새롭게 이벤트 핸들러 함수가 생성됩니다
   */
  const [id, setId] = useState('');

  const handleChageId = (e) => {
    setId(e.target.value);
  };

  return (
    <main className='App'>
      <input type='text' placeholder='input' onChange={handleChageId} />
      <p>{id}</p>
    </main>
  );
}

export default App1;
