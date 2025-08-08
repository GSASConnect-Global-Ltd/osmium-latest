'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/#' },
    { label: 'Services', href: '/#' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/#' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const hero = document.getElementById('blogHero');
      const heroHeight = hero?.offsetHeight || 0;
      setScrolled(window.scrollY > heroHeight - 80);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b transition-all duration-300
      ${scrolled ? 'bg-[var(--navbar)]' : 'bg-[var(--navbar-transparent-bg)]'}`}
    >
      <div className={`container mx-auto px-6 ${open ? 'py-6 min-h-screen' : 'py-4'}`}>
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary">
              <span className="text-lg font-bold text-primary-foreground">L</span>
            </div>
            <span
              className="text-xl font-bold"
              style={{
                color: scrolled ? 'var(--foreground)' : 'rgba(var(--foreground-rgb), 0.9)',
              }}
            >
              Logo
            </span>
          </div>

          {/* Desktop Nav Links */}
          <div className="items-center hidden space-x-8 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="font-bold transition-colors"
                style={{
                  color: scrolled ? 'var(--foreground)' : 'rgba(var(--foreground-rgb), 0.8)',
                }}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="items-center hidden space-x-4 md:flex">
            <button className="px-4 py-2 rounded text-navbar-foreground hover:bg-primary/10">Sign In</button>
            <button className="px-4 py-2 rounded bg-primary text-primary-foreground hover:bg-primary/90">Get Started</button>
          </div>

          {/* Mobile Button */}
          <div className="md:hidden">
            <button
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
              className="p-2 text-navbar-foreground"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {open ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {open && (
          <div className="fixed inset-0 z-40 flex flex-col bg-[var(--background)] text-[var(--foreground)] md:hidden transition-opacity duration-300 ease-in-out">
            {/* Close Button */}
            <div className="flex items-center justify-end px-6 py-4">
              <button
                onClick={() => setOpen(false)}
                className="text-[var(--foreground)] hover:opacity-80 focus:outline-none"
                aria-label="Close menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Nav Links */}
            <div className="flex flex-col items-center justify-center flex-1 space-y-6">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-lg font-semibold transition hover:underline hover:opacity-90"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col items-center px-6 pb-10 space-y-3">
              <button className="w-full max-w-xs px-4 py-2 text-sm font-medium border rounded text-[var(--foreground)] border-[var(--foreground)] hover:bg-primary/10 transition">
                Sign In
              </button>
              <button className="w-full max-w-xs px-4 py-2 text-sm font-medium transition rounded bg-primary text-primary-foreground hover:bg-primary/90">
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
