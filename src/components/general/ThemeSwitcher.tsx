'use client';

import { useState, useEffect } from 'react';
import { MoonStar, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { twMerge } from 'tailwind-merge';

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
    
    const wapperBackground = document.getElementById('body-background');
    if (wapperBackground) {
      const classes = twMerge(
        theme === 'dark' && 'bg-[url(/images/background.png)] bg-cover bg-center h-full w-full fixed top-0 left-0 -z-30'
      );
      wapperBackground.className = classes;
    }
    
    const wapperBody = document.getElementById('body-wapper');
    if (wapperBody) {
      const classes = twMerge(
        theme === 'dark' && 'star-field  overflow-x-hidden'
      );
      wapperBody.className = classes;
    }
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


