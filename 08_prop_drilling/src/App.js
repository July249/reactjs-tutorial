import Header from './Header';
import Content from './Content';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      {/* defaultProps Test */}
      {/* <Header /> */}
      {/* put the props back in Header component */}
      <Header title="Grocery List" />
      {/* then no longer defaultProps works */}
      <Content />
      <Footer />
    </div>
  );
}

export default App;
