import { useState, useEffect } from 'react';
import Header from './Header';
import SearchItem from './SearchItem';
import AddItem from './AddItem';
import Content from './Content';
import Footer from './Footer';

function App() {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem('shoppinglist')) || []
  );
  const [newItem, setNewItem] = useState('');
  const [search, setSearch] = useState('');

  /* Different order of rendering */
  console.log('before useEffect');

  useEffect(() => {
    console.log('inside useEffect');
  }, [items]);

  console.log('after useEffect');

  /* logs
  before useEffect
  after useEffect
  inside useEffect
  */
  // From above logs, you can find the fact of useEffect
  // 1. useEffect is asynchronous function
  // 2. useEffect runs only at dependency changes

  const setAndSaveItems = (newItems) => {
    setItems(newItems);
    localStorage.setItem('shoppinglist', JSON.stringify(newItems));
  };

  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id, checked: false, item };
    const listItems = [...items, myNewItem];
    setAndSaveItems(listItems);
  };

  const handleCheck = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setAndSaveItems(listItems);
  };

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setAndSaveItems(listItems);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!newItem) return;
    addItem(newItem);
    setNewItem('');
  };

  return (
    <div className="App">
      <Header title="Grocery List" />
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <SearchItem search={search} setSearch={setSearch} />
      {/* Apply search filter */}
      <Content
        items={items.filter((item) =>
          item.item.toLowerCase().includes(search.toLowerCase())
        )}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer length={items.length} />
    </div>
  );
}

export default App;
