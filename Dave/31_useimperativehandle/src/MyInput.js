import { forwardRef, useImperativeHandle, useRef } from 'react';

function MyInput(props, ref) {
  const inputRef = useRef();
  useImperativeHandle(ref, () => ({
    customFocus: () => {
      inputRef.current.focus();
      inputRef.current.value = '포커스 되었습니다.';
    },
  }));
  return <input ref={inputRef} />;
}

export default forwardRef(MyInput);
