import { Link, useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();
  const onAboutClick = () => {
    // navigate can be used to redirect to a different route page
    // such in case unauthorized user tries to access a page
    navigate('/about');
  };
  return (
    <header>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <button onClick={onAboutClick}>About</button>
        </li>
      </ul>
    </header>
  );
}

export default Header;
