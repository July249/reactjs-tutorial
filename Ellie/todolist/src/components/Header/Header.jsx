import Button from "../Button/Button";
import { MdOutlineLightMode, MdDarkMode } from "react-icons/md";
import { useState } from "react";

const Header = ({ darkMode }) => {
  const [isActive, setIsActive] = useState(true);

  return (
    <header>
      {darkMode ? (
        <Button type="button" btnFor="darkmode">
          <MdOutlineLightMode />
        </Button>
      ) : (
        <Button type="button" btnFor="lightmode">
          <MdDarkMode />
        </Button>
      )}
      <Button isActive={isActive} btnFor="header">
        All
      </Button>
      <Button isActive={!isActive} btnFor="header">
        Active
      </Button>
      <Button isActive={!isActive} btnFor="header">
        Completed
      </Button>
    </header>
  );
};

export default Header;
