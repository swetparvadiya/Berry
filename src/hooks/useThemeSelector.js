import { useState, useEffect } from "react";
import { lightTheme, darkTheme } from "../assets/style/theme";

const useThemeSelector = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("mode") === "dark" ? darkTheme : lightTheme
  );
  const {
    palette: { mode },
  } = theme;

  useEffect(() => {
    if (mode === "dark") {
      document.body.style.backgroundColor = "#1b2531";
    } else {
      document.body.style.backgroundColor = "rgb(250, 250, 251)";
    }
  }, [mode]);

  const toggleTheme = () => {
    if (mode === "light") {
      localStorage.setItem("mode", "dark");
      setTheme(darkTheme);
    } else {
      localStorage.setItem("mode", "light");
      setTheme(lightTheme);
    }
  };

  return [theme, toggleTheme];
};

export default useThemeSelector;
