import { useEffect, useState } from "react";


const currentTheme = localStorage.getItem('theme')
export default function ThemeSwitcher() {
  const [theme, setTheme] = useState(currentTheme ?? 'light');
  function toggleTheme() {
    setTheme((old) => (old === "light" ? "dark" : "light"));
  }

  useEffect(() => {
    const rootElement = document.documentElement;

    rootElement.classList.remove('light', 'dark');
    rootElement.classList.add(theme);

    localStorage.setItem('theme', theme);

  }, [theme])

  return (
    <button
      className="p-2 rounded-lg bg-bg-secondary hover:bg-bg-tertiary transition-colors text-text-primary"
      onClick={toggleTheme}
    >
      {theme === "light" ? "🌙" : "☀️"}
    </button>
  );
}
