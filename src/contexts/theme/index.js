import { createContext, useState, useContext, useMemo } from 'react';

export const ThemeContext = createContext({});

export const useThemeContext = () => {
  return useContext(ThemeContext);
};

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  return (
    <ThemeContext.Provider value={{theme,toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  );
}
