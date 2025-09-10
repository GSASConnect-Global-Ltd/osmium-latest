"use client";

import { useState, useEffect } from "react";
import {
  ChevronDown,
  Zap,
  Cpu,
  Headphones,
  Layers,
  Gamepad2,
  CodeXml,
  Home,
  BarChart3,
  Users,
  Blocks,
  Menu,
  X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  // ✅ Hide navbar after scrolling past viewport height
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ Static pages that exist in `app/`
  const navigationItems = [
    { name: "About", href: "/about" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  // ✅ Services pages that exist in `app/`
  const serviceItems = [
    {
      name: "Renewable Energy",
      desc: "Clean power solutions for a sustainable future.",
      icon: Zap,
      href: "/renewable",
    },
    {
      name: "Artificial Intelligence & Robotics",
      desc: "Smart automation to drive innovation.",
      icon: Cpu,
      href: "/ai",
    },
    {
      name: "Extended Reality (XR)",
      desc: "Immersive experiences beyond reality.",
      icon: Headphones,
      href: "/xr",
    },
    {
      name: "Digital Twin Technology",
      desc: "Real-time virtual models for simulations.",
      icon: Layers,
      href: "/digital",
    },
    {
      name: "Game Development",
      desc: "Custom games with immersive storytelling.",
      icon: Gamepad2,
      href: "/game",
    },
    {
      name: "Software Engineering",
      desc: "Enterprise-grade apps, systems, and platforms.",
      icon: CodeXml,
      href: "/software",
    },
    {
      name: "Smart Home Concepts",
      desc: "IoT-powered automation for modern living.",
      icon: Home,
      href: "/shc",
    },
    {
      name: "Modelling and Simulation",
      desc: "Advanced computational models for system analysis.",
      icon: BarChart3,
      href: "/modelling",
    },
    {
      name: "Consultation",
      desc: "Expert guidance to grow and optimize your business.",
      icon: Users,
      href: "/consultation",
    },
    {
      name: "Blockchain Technology",
      desc: "Decentralized solutions for security and transparency.",
      icon: Blocks,
      href: "/block",
    },
  ];

  return (
    <nav
      className={`fixed z-50 top-0 left-0 right-0 font-[Satoshi] transition-all duration-500 ${
        isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      }`}
    >
      <div
        className="
          bg-white border border-gray-200 backdrop-blur-sm rounded-none md:rounded-[20px] 
          flex items-center
          h-[100px] px-4 md:px-6
          md:mt-8 md:mx-[100px]
          mt-0 mx-0
        "
      >
        {/* Left side: Logo + Navlinks */}
        <div className="flex items-center gap-[36px]">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/assets/Orrellogo2.svg"
              alt="ORREL Logo"
              width={72}
              height={72}
              className="cursor-pointer"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-[36px]">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-3 py-1 font-medium text-gray-800 transition-all duration-200 rounded-lg hover:bg-gray-100 
                          text-[16px] leading-[24px]"
              >
                {item.name}
              </Link>
            ))}

            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="flex items-center px-3 py-1 font-medium text-gray-800 transition-all duration-200 rounded-lg hover:bg-gray-100 
                          text-[16px] leading-[24px]"
              >
                <span>Services</span>
                <ChevronDown
                  className={`h-4 w-4 ml-1 transition-transform duration-200 ${
                    isServicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isServicesOpen && (
                <div className="absolute left-0 top-full mt-7 w-[700px] bg-white border border-gray-200 rounded-2xl p-6">
                  <p className="mb-4 text-xs font-semibold text-gray-500 uppercase">
                    See our services
                  </p>
                  <div className="grid grid-cols-2 gap-6">
                    {serviceItems.map((service) => (
                      <Link
                        key={service.name}
                        href={service.href}
                        className="flex items-start p-2 space-x-3 transition-colors rounded-lg hover:bg-gray-50"
                      >
                        <service.icon className="w-5 h-5 mt-1 text-gray-700" />
                        <div>
                          <p className="text-[16px] font-medium text-gray-900">
                            {service.name}
                          </p>
                          <p className="text-[14px] text-gray-500">
                            {service.desc}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right Side CTA (Desktop) */}
        <div className="items-center hidden ml-auto md:flex">
          <button
            className="
              inline-flex items-center justify-center gap-2
              px-6 py-4
              font-satoshi font-bold text-[16px] leading-[20px] tracking-wide
              text-white
              rounded-[12px] border-2
              border-[var(--Foundation-Primary-Shade-Light,#EAECE9)]
              bg-[var(--Foundation-Primary-Shade-Darker,#10150C)]
              shadow-[inset_6px_6px_12px_rgba(94,23,235,0.10)]
              transition-all duration-300
              hover:brightness-90 focus:outline-none focus:ring-2 focus:ring-black
            "
          >
            Partner with us
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="flex items-center justify-center p-2 ml-auto text-gray-800 rounded-md md:hidden hover:bg-gray-100"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
        >
          {isMobileOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 p-6 space-y-4 
                  max-h-[80vh] overflow-y-auto">
          {navigationItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="block text-gray-800 text-[16px] font-medium hover:text-blue-600"
              onClick={() => setIsMobileOpen(false)}
            >
              {item.name}
            </Link>
          ))}

          {/* Mobile Services Dropdown */}
          <div>
            <button
              onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
              className="flex items-center justify-between w-full text-gray-800 text-[16px] font-medium hover:text-blue-600"
            >
              <span>Services</span>
              <ChevronDown
                className={`h-4 w-4 ml-2 transition-transform ${
                  isMobileServicesOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {isMobileServicesOpen && (
              <div className="mt-4 space-y-3">
                {serviceItems.map((service) => (
                  <Link
                    key={service.name}
                    href={service.href}
                    className="flex items-start p-2 space-x-3 rounded-lg hover:bg-gray-50"
                    onClick={() => setIsMobileOpen(false)}
                  >
                    <service.icon className="w-5 h-5 mt-1 text-gray-700" />
                    <div>
                      <p className="text-[16px] font-medium text-gray-900">
                        {service.name}
                      </p>
                      <p className="text-[14px] text-gray-500">
                        {service.desc}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* CTA Button (Mobile) */}
          <div className="flex justify-center mt-6">
            <button
              className="
                inline-flex items-center justify-center gap-2
                px-6 py-4
                font-satoshi font-bold text-[16px] leading-[20px] tracking-wide
                text-white
                rounded-[12px] border-2
                border-[var(--Foundation-Primary-Shade-Light,#EAECE9)]
                bg-[var(--Foundation-Primary-Shade-Darker,#10150C)]
                shadow-[inset_6px_6px_12px_rgba(94,23,235,0.10)]
                w-full max-w-[320px]
                transition-all duration-300
                hover:brightness-90 focus:outline-none focus:ring-2 focus:ring-black
              "
            >
              Partner with us
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
