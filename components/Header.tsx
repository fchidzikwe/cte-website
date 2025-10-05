'use client';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { brand } from '@/data/site';
import ThemeToggle from './ThemeToggle';

export default function Header() {
  const [mounted, setMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled
        ? 'bg-white/95 dark:bg-cte-cardDark/95 backdrop-blur-xl shadow-lg border-b border-cte-mist/20 dark:border-white/10'
        : 'bg-white/60 dark:bg-cte-cardDark/40 backdrop-blur-md'
    }`}>
      <div className="container-p flex items-center justify-between h-18 py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative">
            {/* Show main green logo in light mode, white logo in dark mode */}
            <img
              src="/logo-main.svg"
              alt="Cliff & Tony Energy"
              className="h-12 w-auto dark:hidden transition-all duration-300 group-hover:scale-105"
            />
            <img
              src="/logo-white.svg"
              alt="Cliff & Tony Energy"
              className="h-12 w-auto hidden dark:block transition-all duration-300 group-hover:scale-105"
            />
            <div className="absolute -inset-1 bg-gradient-to-br from-cte-primary/20 to-cte-secondary/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity -z-10 blur-sm"></div>
          </div>
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-1">
          {brand.nav.map(n => (
            <Link
              key={n.href}
              href={n.href}
              className="px-4 py-2 text-sm font-medium text-cte-slate dark:text-cte-mist/80 hover:text-cte-primary dark:hover:text-cte-accent transition-colors rounded-lg hover:bg-cte-mist/50 dark:hover:bg-white/5"
            >
              {n.label}
            </Link>
          ))}

          {/* CTA Button */}
          <a
            href="#contact"
            className="ml-4 bg-cte-primary hover:bg-cte-primary/90 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 hover:shadow-lg hover:scale-[1.02] hidden md:block"
          >
            Get Quote
          </a>

          {mounted && (
            <div className="ml-2 p-1">
              <ThemeToggle />
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}
