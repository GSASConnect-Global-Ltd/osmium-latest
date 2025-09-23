"use client";
import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Twitter, Linkedin, Youtube } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-[var(--footer-bg)] text-[var(--footer-text)] transition-colors duration-300 font-satoshi">
      <div className="px-[64px] py-[80px] mx-auto max-w-[1280px]">
        {/* Top section */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[752px_400px]">
          {/* Left side (logo, links, solutions, contact) */}
          <div className="grid grid-cols-2 gap-12 md:grid-cols-4">
            {/* Logo */}
            <div className="flex flex-col gap-4">
              <Link href="/">
                <Image
                  src="/assets/Orrellogo2.svg"
                  alt="ORREL Logo"
                  width={120}
                  height={80}
                  priority
                />
              </Link>
            </div>

            {/* Quick Links */}
            <div className="flex flex-col gap-4">
              <p className="text-[16px] font-bold leading-[24px]">Quick Links</p>
              <ul className="flex flex-col gap-2 text-[14px] font-normal leading-[21px] text-[var(--footer-link)]">
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
              <p className="text-[16px] font-bold leading-[24px]">Our Solutions</p>
              <ul className="flex flex-col gap-2 text-[14px] font-normal leading-[21px] text-[var(--footer-link)]">
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

            {/* Contact Us */}
            <div className="flex flex-col gap-4">
              <p className="text-[16px] font-bold leading-[24px]">Contact Us</p>
              <ul className="flex flex-col gap-2 text-[14px] font-normal leading-[21px] text-[var(--footer-link)]">
                <li><Link href="/contact" className="hover:text-[var(--footer-link-hover)]">Location</Link></li>
                <li><Link href="/contact" className="hover:text-[var(--footer-link-hover)]">Email address</Link></li>
                <li><Link href="/contact" className="hover:text-[var(--footer-link-hover)]">Phone number</Link></li>
              </ul>
            </div>
          </div>

          {/* Subscribe (fixed 400px) */}
          <div className="flex flex-col gap-6 max-w-[400px]">
            <p className="text-[16px] font-bold leading-[24px]">Subscribe</p>
            <p className="text-[14px] font-normal leading-[21px] text-[var(--footer-link)]">
              Join our newsletter to stay up to date on products and releases.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 text-black border border-gray-300 focus:outline-none"
              />
              <button className="px-6 py-3 text-[14px] font-bold leading-[21px] text-white transition-colors bg-green-600 hover:bg-green-700">
                Subscribe
              </button>
            </div>
            <p className="text-[14px] font-normal leading-[21px] text-gray-400">
              By subscribing you agree to our{" "}
              <Link href="/privacy-policy" className="underline">Privacy Policy</Link>{" "}
              and consent to receive updates from our company.
            </p>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-8 border-gray-300" />

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 h-[56px]">
          {/* Left side */}
          <div className="flex flex-wrap items-center justify-center gap-4 md:justify-start text-[14px] font-normal leading-[21px]">
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
