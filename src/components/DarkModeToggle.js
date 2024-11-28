import React from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

const DarkModeToggle = ({ toggleDarkMode, darkMode }) => (
  <div className="dark-mode-toggle" onClick={toggleDarkMode}>
    {darkMode ? <FaSun className="toggle-icon" /> : <FaMoon className="toggle-icon" />}
    <span>{darkMode ? 'Light Mode' : 'Dark Mode'}</span>
  </div>
);

export default DarkModeToggle;
