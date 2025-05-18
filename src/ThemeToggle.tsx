// ThemeToggle.tsx
import { useState } from 'react';
import "./index.css";
const ThemeToggle = () => {
  const [dark, setDark] = useState(false);

  const toggleTheme = () => {
    document.body.className = dark ? 'light-theme' : 'dark-theme';
    setDark(!dark);
  };

  return (
    <button onClick={toggleTheme}>
      {dark ? '🌞 Light Mode' : '🌙 Dark Mode'}
    </button>
  );
};

export default ThemeToggle;
