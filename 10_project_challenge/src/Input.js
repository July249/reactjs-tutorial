import { useRef } from 'react';

const Input = ({ newColor, setNewColor, handleSubmit }) => {
  const inputRef = useRef();

  return (
    <form onSubmit={handleSubmit}>
      <label>Color Input</label>
      <input
        autoFocus
        type="text"
        placeholder="Add color name"
        required
        ref={inputRef}
        value={newColor}
        onChange={(e) => setNewColor(e.target.value)}
      />
      <button type="submit" onClick={() => inputRef.current.focus()}>
        Toggle Text Color
      </button>
    </form>
  );
};

export default Input;
