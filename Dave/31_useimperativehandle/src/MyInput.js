import { forwardRef } from 'react';

function MyInput(props, ref) {
  return <input ref={ref} />;
}

export default forwardRef(MyInput);
