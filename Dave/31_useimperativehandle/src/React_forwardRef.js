/**
 * React.forwardRef
 *
 * React.forwardRef는 부모 컴포넌트가 자식 컴포넌트에게 ref를 전달할 때 사용하는 기술이다
 *
 * 부모 컴포넌트가 자식 컴포넌트의 DOM 노드에 직접 접근해야 할 때 특히 유용하게 사용된다
 *
 * React 컴포넌트에서 ref를 props로 전달하기 위해서는 React.forwardRef를 사용해야한다
 *
 * 아래의 코드와 같이 React.forwardRef를 사용하면 HTML 요소에 ref를 전달하듯 부모 컴포넌트가 자식 컴포넌트에게 ref를 전달할 수 있게 됩니다
 * 일반적으로 forwardRef 함수는 어플리케이션 전체적으로 재사용성이 높은 최하위 컴포넌트를 대상으로 주로 사용되며, 그 보다 상위 컴포넌트에서 사용하는 것은 권장되지 않습니다
 *
 */

import { useRef } from 'react';
import MyInput from './MyInput';

const React_forwardRef = () => {
  const inputRef = useRef();

  const onFocus = () => {
    inputRef.current.focus();
  };

  return (
    <div style={{ margin: '20px 10px' }}>
      <MyInput ref={inputRef} />
      <button style={{ marginLeft: '10px' }} onClick={onFocus}>
        인풋 포커스
      </button>
    </div>
  );
};

export default React_forwardRef;
