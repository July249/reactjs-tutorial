import { useState } from 'react';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

function App() {
  const [items, setItems] = useState([
    {
      id: 1,
      checked: false,
      item: 'One half pound bag of Cocoa Covered Almonds Unsalted',
    },
    {
      id: 2,
      checked: false,
      item: 'Item2',
    },
    {
      id: 3,
      checked: false,
      item: 'Item3',
    },
  ]);

  const handleCheck = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems);
    /* console.log(`key: ${id}`); */
    // local storage
    localStorage.setItem('shoppinglist', JSON.stringify(listItems));
  };

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
    /* console.log(id); */
    // local storage
    localStorage.setItem('shoppinglist', JSON.stringify(listItems));
  };

  return (
    <div className="App">
      <Header title="Grocery List" />
      <Content
        items={items}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer length={items.length} />
    </div>
  );
}

export default App;
