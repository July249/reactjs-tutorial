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

  // log "render" keep printing when you act on page
  // because this useEffect doesn't have any dependency
  /* useEffect(() => {
    console.log('render');
  }); */
  // log "load time" printed at the first render time
  // because this useEffect has empty array, [], dependency
  /* useEffect(() => {
    console.log('load time');
  }, []); */

  // So, there are two type of useEffect running!
  // 1. run all the time for every render
  // 2. run only at the app load time, just one time
  //    because the array, which has item info, never changes and this is a dependency

  /* updating items state (i.e. run when items state has changed) */
  useEffect(() => {
    console.log('updating items state');
  }, [items]);

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
