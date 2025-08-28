"use client";

import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import Image from "next/image";

const Navbar = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationItems = [
    { name: "About", href: "about" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Blog", href: "blog" },
    { name: "Contact", href: "contact" },
  ];

  const serviceItems = [
    { name: "AI & Robotics", href: "#ai-robotics" },
    { name: "Renewable Energy", href: "#renewable-energy" },
    { name: "Digital Twin Technology", href: "#digital-twin" },
    { name: "Extended Reality", href: "#extended-reality" },
    { name: "Game Development", href: "#game-dev" },
    { name: "Smart Home Concept", href: "#smart-home" },
  ];

  return (
    <nav className="fixed z-50 top-4 left-4 right-4">
      <div className="px-6 py-4 border border-gray-200 shadow-lg bg-white/70 backdrop-blur-sm rounded-2xl lg:px-8">
        <div className="flex items-center justify-between">
          {/* Left Side - Logo */}
          <div className="flex items-center space-x-8">
            <Image
              src="/assets/Orrellogo2.svg"
              alt="ORREL Logo"
              width={120}
              height={40}
              priority
            />
          </div>

          {/* Desktop Navigation */}
          <div className="items-center hidden space-x-6 md:flex">
            {navigationItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="px-3 py-2 text-sm font-medium text-gray-800 transition-all duration-200 rounded-lg hover:bg-gray-100"
              >
                {item.name}
              </a>
            ))}

            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="flex items-center px-3 py-2 space-x-1 text-sm font-medium text-gray-800 transition-all duration-200 rounded-lg hover:bg-gray-100"
              >
                <span>Services</span>
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-200 ${
                    isServicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isServicesOpen && (
                <div className="absolute w-56 mt-2 bg-white border border-gray-200 shadow-lg rounded-xl">
                  {serviceItems.map((service) => (
                    <a
                      key={service.name}
                      href={service.href}
                      className="block px-4 py-3 text-sm text-gray-700 transition-colors rounded-lg hover:bg-gray-100"
                    >
                      {service.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Right Side */}
          <div className="flex items-center space-x-4">
            {/* Desktop CTA */}
            <button className="hidden px-6 py-2 font-medium text-white transition-all duration-200 bg-black shadow-sm hover:bg-blue-700 rounded-xl md:block">
              Partner with us
            </button>

            {/* Mobile Hamburger */}
            <button
              className="p-2 text-gray-700 rounded-lg md:hidden hover:bg-gray-100"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="mt-4 space-y-3 md:hidden">
            {navigationItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-4 py-2 text-sm font-medium text-gray-800 rounded-lg hover:bg-gray-100"
              >
                {item.name}
              </a>
            ))}

            {/* Mobile Services Dropdown */}
            <div>
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="flex items-center justify-between w-full px-4 py-2 text-sm font-medium text-gray-800 rounded-lg hover:bg-gray-100"
              >
                <span>Services</span>
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-200 ${
                    isServicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {isServicesOpen && (
                <div className="pl-4 mt-2 space-y-2">
                  {serviceItems.map((service) => (
                    <a
                      key={service.name}
                      href={service.href}
                      className="block px-4 py-2 text-sm text-gray-700 rounded-lg hover:bg-gray-100"
                    >
                      {service.name}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile CTA */}
            <button className="w-full px-4 py-2 font-medium text-white transition-all duration-200 bg-black rounded-lg hover:bg-blue-700">
              Partner with us
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
