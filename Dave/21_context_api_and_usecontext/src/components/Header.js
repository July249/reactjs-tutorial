import { Link } from "react-router-dom";
import { FaLaptop, FaTabletAlt, FaMobileAlt } from "react-icons/fa";
import { useContext } from "react";
import { DataContext } from "../context/DataContext";

const Header = ({ title }) => {
  const { width } = useContext(DataContext);

  return (
    <header className="Header">
      <Link to="/" style={{ textDecoration: "none" }}>
        <h1>{title}</h1>
        {width < 768 ? (
          <FaMobileAlt />
        ) : width < 992 ? (
          <FaTabletAlt />
        ) : (
          <FaLaptop />
        )}
      </Link>
    </header>
  );
};

export default Header;
