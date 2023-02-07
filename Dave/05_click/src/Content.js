const Content = () => {
  const handleNameChange = () => {
    const names = ['Bob', 'Kevin', 'Carl', 'Jibro'];
    const int = Math.floor(Math.random() * 4);
    return names[int];
  };

  const handleClick = () => {
    console.log('You clicked it');
  };

  const handleClick2 = (name) => {
    console.log(`${name} was clicked`);
  };

  const handleClick3 = (e) => {
    console.log(e.target.innerText);
  };

  return (
    <main>
      <p onDoubleClick={handleClick}>Hello {handleNameChange()}!</p>
      <button onClick={handleClick}>Click It</button>
      <button onClick={() => handleClick2('Tom')}>Click It</button>
      <button onClick={(e) => handleClick3(e)}>Click It</button>
    </main>
  );
};

export default Content;
