import React from "react";
import { useDarkMode } from "../../hooks/useDarkMode";
import { MdOutlineLightMode, MdDarkMode } from "react-icons/md";
import styles from "./Header.module.css";

export default function Header({ filters, filter, onFilterChange }) {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <header className={styles.header}>
      <button type="button" onClick={toggleDarkMode}>
        {darkMode ? <MdOutlineLightMode /> : <MdDarkMode />}
      </button>
      <ul className={styles.filters}>
        {filters.map((value, index) => (
          <li key={index}>
            <button
              className={`${styles.filter} ${filter === value && styles.selected}`}
              onClick={() => onFilterChange(value)}
            >
              {value}
            </button>
          </li>
        ))}
      </ul>
    </header>
  );
}
