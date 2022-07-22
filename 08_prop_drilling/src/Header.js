// bad case
/* 
const Header = (props) => {
  return (
    <header>
      <h1>{props.title} List</h1>
    </header>
  );
};

export default Header;
  */
// NOTE: When you write just "props" on parameter area, then it can cause ambiguous expression, which parameters are transfered in current component
// So, you should write specifically distructure parameters to make sure what is it!

// good case
const Header = ({ title }) => {
  return (
    <header>
      <h1>{title}</h1>
    </header>
  );
};

export default Header;
