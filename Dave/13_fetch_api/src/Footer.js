const Footer = ({ length }) => {
  return (
    <footer>
      <p>
        {length} List {length < 2 ? 'item' : 'items'}
      </p>
    </footer>
  );
};

export default Footer;
