"use client";
import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Twitter, Linkedin, Youtube } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-[var(--footer-bg)] text-[var(--footer-text)] transition-colors duration-300 font-satoshi">
      <div className="px-6 py-16 sm:px-10 md:px-[64px] md:py-[80px] mx-auto max-w-[1280px]">
        
        {/* Top section */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[752px_400px]">

          {/* Left side */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-12">

            {/* Logo */}
            <div className="flex flex-col gap-4">
              <Link href="/">
                <Image
                  src="/assets/Orrellogo2.svg"
                  alt="ORREL Logo"
                  width={120}
                  height={80}
                  priority
                  className="w-[100px] sm:w-[120px] h-auto"
                />
              </Link>
            </div>

            {/* Quick Links */}
            <div className="flex flex-col gap-4">
              <p className="text-[15px] sm:text-[16px] font-bold">Quick Links</p>
              <ul className="flex flex-col gap-2 text-[13px] sm:text-[14px] text-[var(--footer-link)]">
                <li><Link href="/" className="hover:text-[var(--footer-link-hover)]">Home</Link></li>
                <li><Link href="/about" className="hover:text-[var(--footer-link-hover)]">About</Link></li>
                <li><Link href="/team" className="hover:text-[var(--footer-link-hover)]">Team</Link></li>
                <li><Link href="/services" className="hover:text-[var(--footer-link-hover)]">Services</Link></li>
                <li><Link href="/portfolio" className="hover:text-[var(--footer-link-hover)]">Portfolio</Link></li>
                <li><Link href="/blog" className="hover:text-[var(--footer-link-hover)]">Blog</Link></li>
                <li><Link href="/contact" className="hover:text-[var(--footer-link-hover)]">Contact</Link></li>
              </ul>
            </div>

            {/* Our Solutions */}
            <div className="flex flex-col gap-4">
              <p className="text-[15px] sm:text-[16px] font-bold">Our Solutions</p>
              <ul className="flex flex-col gap-2 text-[13px] sm:text-[14px] text-[var(--footer-link)]">
                <li><Link href="/ai" className="hover:text-[var(--footer-link-hover)]">AI & Robotics</Link></li>
                <li><Link href="/renewable" className="hover:text-[var(--footer-link-hover)]">Renewable Energy</Link></li>
                <li><Link href="/digital" className="hover:text-[var(--footer-link-hover)]">Digital Twin Technology</Link></li>
                <li><Link href="/xr" className="hover:text-[var(--footer-link-hover)]">Extended Reality</Link></li>
                <li><Link href="/game" className="hover:text-[var(--footer-link-hover)]">Game Development</Link></li>
                <li><Link href="/shc" className="hover:text-[var(--footer-link-hover)]">Smart Home Concept</Link></li>
                <li><Link href="/consultation" className="hover:text-[var(--footer-link-hover)]">Consultation</Link></li>
                <li><Link href="/modelling" className="hover:text-[var(--footer-link-hover)]">Modelling & Simulation</Link></li>
                <li><Link href="/block" className="hover:text-[var(--footer-link-hover)]">Blockchain Technology</Link></li>
                <li><Link href="/software" className="hover:text-[var(--footer-link-hover)]">Software Development</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div className="flex flex-col gap-4">
              <p className="text-[15px] sm:text-[16px] font-bold">Contact Us</p>
              <ul className="flex flex-col gap-2 text-[13px] sm:text-[14px] text-[var(--footer-link)]">
                <li><Link href="/contact" className="hover:text-[var(--footer-link-hover)]">Location</Link></li>
                <li><Link href="/contact" className="hover:text-[var(--footer-link-hover)]">Email address</Link></li>
                <li><Link href="/contact" className="hover:text-[var(--footer-link-hover)]">Phone number</Link></li>
              </ul>
            </div>
          </div>

          {/* Subscribe */}
          <div className="flex flex-col gap-6 w-full lg:max-w-[400px]">
            <p className="text-[15px] sm:text-[16px] font-bold">Subscribe</p>
            <p className="text-[13px] sm:text-[14px] text-[var(--footer-link)]">
              Join our newsletter to stay up to date on products and releases.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 text-black border border-gray-300 focus:outline-none"
              />
              <button className="w-full sm:w-auto px-6 py-3 text-[14px] font-bold text-white bg-green-600 hover:bg-green-700 transition-colors">
                Subscribe
              </button>
            </div>

            <p className="text-[12px] sm:text-[14px] text-gray-400">
              By subscribing you agree to our{" "}
              <Link href="/privacy-policy" className="underline">
                Privacy Policy
              </Link>{" "}
              and consent to receive updates.
            </p>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-8 border-gray-300" />

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="flex flex-wrap justify-center md:justify-start gap-4 text-[13px] sm:text-[14px]">
            <p>&copy; 2025 ORREL. All rights reserved.</p>
            <Link href="/privacy-policy" className="hover:underline">Privacy Policy</Link>
            <Link href="/terms" className="hover:underline">Terms of Service</Link>
            <Link href="/cookies" className="hover:underline">Cookies Settings</Link>
          </div>

          <div className="flex justify-center md:justify-end gap-4">
            <Link href="#"><Facebook size={20} /></Link>
            <Link href="#"><Instagram size={20} /></Link>
            <Link href="#"><Twitter size={20} /></Link>
            <Link href="#"><Linkedin size={20} /></Link>
            <Link href="#"><Youtube size={20} /></Link>
          </div>
        </div>

      </div>
    </footer>
  );
};
