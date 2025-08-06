"use client"

import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-navbar/50 backdrop-blur-md border-b border-navbar-border/20 shadow-[var(--shadow-navbar)]">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">L</span>
            </div>
            <span className="text-navbar-foreground font-semibold text-xl">Logo</span>
          </div>

          {/* Navigation Links (desktop) */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-navbar-foreground hover:text-primary transition-[var(--transition-smooth)] font-medium">Home</a>
            <a href="#about" className="text-navbar-foreground hover:text-primary transition-[var(--transition-smooth)] font-medium">About</a>
            <a href="#services" className="text-navbar-foreground hover:text-primary transition-[var(--transition-smooth)] font-medium">Services</a>
            <a href="#contact" className="text-navbar-foreground hover:text-primary transition-[var(--transition-smooth)] font-medium">Contact</a>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-navbar-foreground hover:bg-primary/10 px-4 py-2 rounded">Sign In</button>
            <button className="bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded">Get Started</button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
              className="text-navbar-foreground p-2"
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

        {/* Mobile dropdown */}
        {open && (
          <div className="md:hidden mt-3 space-y-3">
            <a href="#home" className="block text-navbar-foreground px-2 py-1">Home</a>
            <a href="#about" className="block text-navbar-foreground px-2 py-1">About</a>
            <a href="#services" className="block text-navbar-foreground px-2 py-1">Services</a>
            <a href="#contact" className="block text-navbar-foreground px-2 py-1">Contact</a>
            <div className="flex items-center gap-3 px-2 pt-2">
              <button className="text-navbar-foreground hover:bg-primary/10 px-3 py-2 rounded">Sign In</button>
              <button className="bg-primary text-primary-foreground px-3 py-2 rounded">Get Started</button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
