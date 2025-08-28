"use client";
import Image from "next/image";

import Link from "next/link";
import { Facebook, Instagram, Twitter, Linkedin, Youtube } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-[var(--footer-bg)] text-[var(--footer-text)] transition-colors duration-300">
      <div className="px-6 py-16 mx-auto max-w-7xl">
        {/* Top section - 4 columns */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          {/* Logo */}
          <div>
             <Link href="/">
              <Image
                src="/assets/Orrellogo2.svg"
                alt="ORREL Logo"
                width={150}
                height={50}
                priority
              />
            </Link>
            <p className="text-sm text-gray-400">
              Connecting innovation with renewable technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-[var(--footer-link)]">
              <li><Link href="/" className="hover:text-[var(--footer-link-hover)]">Home</Link></li>
              <li><Link href="#about" className="hover:text-[var(--footer-link-hover)]">About</Link></li>
              <li><Link href="#services" className="hover:text-[var(--footer-link-hover)]">Services</Link></li>
              <li><Link href="#portfolio" className="hover:text-[var(--footer-link-hover)]">Portfolio</Link></li>
              <li><Link href="#insights" className="hover:text-[var(--footer-link-hover)]">Insights</Link></li>
            </ul>
          </div>

          {/* Our Solutions */}
          <div>
            <h4 className="mb-4 text-lg font-semibold">Our Solutions</h4>
            <ul className="space-y-2 text-[var(--footer-link)]">
              <li>AI & Robotics</li>
              <li>Renewable Energy</li>
              <li>Digital Twin Technology</li>
              <li>Extended Reality</li>
              <li>Game Development</li>
              <li>Smart Home Concept</li>
            </ul>
          </div>

          {/* Subscribe */}
          <div>
            <h4 className="mb-4 text-lg font-semibold">Subscribe</h4>
            <p className="mb-4 text-[var(--footer-link)]">
              Join our newsletter to stay up to date on products and releases.
            </p>
            <div className="flex items-center gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 text-black rounded-lg focus:outline-none"
              />
              <button className="px-6 py-3 font-semibold text-white transition-colors bg-green-600 rounded-lg hover:bg-green-700">
                Subscribe
              </button>
            </div>
            <p className="mt-4 text-xs text-gray-400">
              By subscribing you agree to our{" "}
              <Link href="/privacy-policy" className="underline">
                Privacy Policy
              </Link>{" "}
              and provide consent to receive updates from our company.
            </p>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-8 border-gray-300 dark:border-gray-700" />

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row items-center justify-between text-sm text-[var(--footer-link)] gap-4">
          {/* Left side */}
          <div className="flex flex-wrap items-center justify-center gap-4 md:justify-start">
            <p>&copy; 2025 ORREL. All rights reserved.</p>
            <Link href="/privacy-policy" className="hover:underline">Privacy Policy</Link>
            <Link href="/terms" className="hover:underline">Terms of Service</Link>
            <Link href="/cookies" className="hover:underline">Cookies Settings</Link>
          </div>

          {/* Right side: Socials */}
          <div className="flex justify-center gap-4 text-xl md:justify-end">
            <Link href="#" className="hover:text-blue-600"><Facebook size={20} /></Link>
            <Link href="#" className="hover:text-pink-500"><Instagram size={20} /></Link>
            <Link href="#" className="hover:text-black"><Twitter size={20} /></Link>
            <Link href="#" className="hover:text-blue-700"><Linkedin size={20} /></Link>
            <Link href="#" className="hover:text-red-600"><Youtube size={20} /></Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
