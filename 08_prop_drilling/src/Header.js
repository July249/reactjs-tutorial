const Header = ({ title }) => {
  return (
    <header>
      <h1>{title}</h1>
    </header>
  );
};

// defaultProps
// defaultProps allow us to set values for the props expected in the component
// and if those are not provided then the default values will take over instead of receiving an error
// In other words, when you're first designing the component and maybe you're not receiving the date from an api or even a local storage like we have
Header.defaultProps = {
  title: 'Default Title',
};

export default Header;
