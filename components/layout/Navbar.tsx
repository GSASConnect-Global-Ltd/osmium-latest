"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

const Navbar = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const navigationItems = [
    { name: "About", href: "#about" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Blog", href: "#blog" },
    { name: "Contact", href: "#contact" },
  ];

  const serviceItems = [
    { name: "Web Development", href: "#web-dev" },
    { name: "Mobile Apps", href: "#mobile" },
    { name: "Digital Marketing", href: "#marketing" },
    { name: "Consulting", href: "#consulting" },
  ];

  return (
    <nav className="fixed z-50 top-4 left-4 right-4">
      <div className="px-6 py-4 border border-gray-200 shadow-lg bg-white/70 backdrop-blur-sm rounded-2xl lg:px-8">
        <div className="flex items-center justify-between">
          {/* Left Side - Logo and Navigation */}
          <div className="flex items-center space-x-8">
            {/* Logo */}
            <div className="flex items-center">
              <Image
                src="/assets/Orrellogo2.svg"
                alt="ORREL Logo"
                width={120}
                height={40}
                priority
              />

            </div>

            {/* Navigation Links - Hidden on mobile */}
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
                  <div className="absolute w-48 mt-2 bg-white border border-gray-200 shadow-lg rounded-xl">
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
          </div>

          {/* Right Side - CTA Button */}
          <div className="flex items-center">
            <button className="px-6 py-2 font-medium text-white transition-all duration-200 bg-black shadow-sm hover:bg-blue-700 rounded-xl">
              Partner with us
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
