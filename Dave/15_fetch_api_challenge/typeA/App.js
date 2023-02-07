import { useState, useEffect } from 'react';
import Lists from './Lists';

function App() {
  const API_URL = 'https://jsonplaceholder.typicode.com/';

  const [lists, setLists] = useState([]);
  const [cat, setCat] = useState('users');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${API_URL}${cat}`);
        const data = await res.json();
        setLists(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [cat]);

  const handleClick = async (e) => {
    setCat(e.target.id);
  };

  return (
    <div className="App">
      <nav onClick={(e) => handleClick(e)}>
        <button id="users" className="category">
          users
        </button>
        <button id="posts" className="category">
          posts
        </button>
        <button id="comments" className="category">
          comments
        </button>
      </nav>
      <main>
        <Lists lists={lists} />
      </main>
    </div>
  );
}

export default App;
