import { Link } from 'react-router-dom';

const Header = ({ title }) => {
  return (
    <header className="Header">
      <Link to="/" style={{ textDecoration: 'none' }}>
        <h1>{title}</h1>
      </Link>
    </header>
  );
};

export default Header;
