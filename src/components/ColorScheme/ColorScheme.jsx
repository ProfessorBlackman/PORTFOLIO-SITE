import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

import "./ColorScheme.css";
import {useState} from "react";

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleDarkModeToggle = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark-mode");
  };

  return (
    <div className="ColorScheme">
      <FontAwesomeIcon
        icon={isDarkMode ? faSun : faMoon}
        color={isDarkMode ? "#ffffff" : "#000000"}
        className="anchor-icon1"
        onClick={handleDarkModeToggle}
      />
      <p className="Toggle-dark-mode" onClick={handleDarkModeToggle}>
        {isDarkMode ? "Light Mode" : "Dark Mode"}
      </p>
    </div>
  );
};

export default DarkModeToggle;
