import React, { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    const className = "dark";
    const bodyClass = window.document.body.classList;
    darkMode ? bodyClass.add(className) : bodyClass.remove(className);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <button
      className={` p-2 rounded-full ${
        darkMode ? "bg-gray-200 text-black" : "bg-gray-800 text-white"
      }`}
      onClick={() => setDarkMode(!darkMode)}
    >
      {darkMode ? "☀️ Light" : "🌙 Dark"}
    </button>
  );
};

export default ThemeToggle;
