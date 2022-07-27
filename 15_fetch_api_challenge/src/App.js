import Users from './Users';
// import Posts from './Posts';
// import Comments from './Comments';

function App() {
  return (
    <div className="App">
      <nav>
        <button id="category" className="users">
          <span>users</span>
        </button>
        <button id="category" className="posts">
          <span>posts</span>
        </button>
        <button id="category" className="comments">
          <span>comments</span>
        </button>
      </nav>
      <main>
        <Users />
        {/* <Posts />
        <Comments /> */}
      </main>
    </div>
  );
}

export default App;
