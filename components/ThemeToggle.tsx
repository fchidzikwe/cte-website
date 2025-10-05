'use client';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(()=> setMounted(true), []);
  if(!mounted) return null;
  const isDark = resolvedTheme === 'dark';
  return (
    <button
      aria-label="Toggle theme"
      className="btn btn-ghost rounded-full px-3 py-2"
      onClick={()=> setTheme(isDark ? 'light' : 'dark')}
    >
      {isDark ? '☀️' : '🌙'}
    </button>
  );
}
