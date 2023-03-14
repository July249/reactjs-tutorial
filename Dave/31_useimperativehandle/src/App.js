/**
 * useImperativeHandle를 이용하면, 자식 컴포넌트에서 정의한 customFocus 메서드를 부모 컴포넌트에서 사용할 수 있다
 */

import { useRef } from 'react';
import MyInput from './MyInput';

const App = () => {
  const inputRef = useRef();

  return (
    <div style={{ margin: '20px 10px' }}>
      <MyInput ref={inputRef} />
      <button
        style={{ marginLeft: '10px' }}
        onClick={() => inputRef.current.customFocus()}
      >
        인풋 포커스
      </button>
    </div>
  );
};

export default App;
