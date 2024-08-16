'use client';

import { useState, useEffect } from 'react';
import { MoonStar, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

const ThemeSwitcher = () => {
  // Ref :: https://www.npmjs.com/package/next-themes#avoid-hydration-mismatch
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  useEffect(() => {
    setMounted(true);
  }, []);
  
  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);
  
  if (!mounted) {
    return (
      <button>
        <Sun />
      </button>
    );
  }

  return (
    <button onClick={toggleTheme}>
      {theme === 'dark' ? <Sun /> : <MoonStar />}
    </button>
  );
};

export default ThemeSwitcher;


