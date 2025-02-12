import { useState } from "react";
const DarkMode = function () {
  const [darkMode, setDarkMode] = useState(true);

  const toggleTheme = () => {
    setDarkMode((prev) => !prev);
  };
  return (
    <div>
      <p>The current theme is {darkMode ? "Dark" : "Light"}</p>
      <button onClick={toggleTheme}>Change theme</button>
    </div>
  );
};

export default DarkMode;
