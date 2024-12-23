import React, { useContext, useState, useEffect } from "react";

const ThemeContext = React.createContext();

export function useTheme() {
  return useContext(ThemeContext);
}

export function ThemeProvider({ children }) {
  // Initialize the theme state
  const [theme, setTheme] = useState(() => {
    // Check for saved theme in localStorage or default to system preference
    return localStorage.getItem("color-theme") || "dark";
  });

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("color-theme", theme); // Save theme in localStorage
  }, [theme]); // Dependency array is now empty

  // Toggle theme when button is clicked
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  const value = {
    theme,
    toggleTheme
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}
