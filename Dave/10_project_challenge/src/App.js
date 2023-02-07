import { useState } from 'react';
import Square from './Square';
import Input from './Input';

function App() {
  const [color, setColor] = useState('');
  const [newColor, setNewColor] = useState('');

  const addColor = (color) => {
    setColor(color);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!newColor) return;
    addColor(newColor);
    setNewColor('');
  };

  return (
    <div className="App">
      <Square color={color} />
      <Input
        newColor={newColor}
        setNewColor={setNewColor}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}

export default App;
