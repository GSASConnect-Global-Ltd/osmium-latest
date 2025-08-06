// components/ThemeToggle.tsx
'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button
      className="fixed z-50 p-2 text-black transition-all bg-gray-200 rounded-full shadow-lg bottom-6 right-6 dark:bg-gray-800 dark:text-white hover:scale-105"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      aria-label="Toggle Dark Mode"
    >
      {theme === 'dark' ? '🌞' : '🌙'}
    </button>
  );
}
