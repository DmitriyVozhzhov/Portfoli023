import React from "react";
import { useState, useEffect } from "react";
import "./style.css";
import sun from "./sun.svg";
import moon from "./moon.svg";

const ButtonDarkMode = () => {
  const [darkMode, setDarkMode] = useState("light");
  //const buttonRef = useRef(null);
  useEffect(() => {
    if (darkMode === "dark") {
      document.body.classList.add("dark");
      //buttonRef.current.classList.add("dark-mode-btn--active");
    } else {
      document.body.classList.remove("dark");
      //buttonRef.current.classList.remove("dark-mode-btn--active");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((currentValue) => {
      return currentValue === "light" ? "dark" : "light";
    });
  };
const buttonNormal = 'dark-mode-btn'
const buttonActive = 'dark-mode-btn dark-mode-btn--active'

  return (
    <button  className={darkMode === 'dark' ? buttonActive : buttonNormal} onClick={toggleDarkMode}>
      <img src={sun} alt="Light mode" className="dark-mode-btn__icon" />
      <img src={moon} alt="Dark mode" className="dark-mode-btn__icon" />
    </button>
  );
};

export default ButtonDarkMode;
