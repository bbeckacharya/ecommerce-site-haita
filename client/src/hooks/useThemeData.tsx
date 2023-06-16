import { useEffect, useState } from "react";

type Theme = "light" | "dark";

const useThemeData = () => {
  const [theme, setTheme] = useState<Theme>(() => {
    const savedTheme = localStorage.getItem("theme");
    return (savedTheme as Theme) || "light";
  });

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  });

  const saveThemeData = (selectedTheme: Theme) => {
    setTheme(selectedTheme);
    localStorage.setItem("theme", selectedTheme);
  };

  return { theme, saveThemeData };
};

export default useThemeData;
