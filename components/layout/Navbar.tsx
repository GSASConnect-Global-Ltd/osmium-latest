"use client";

import { useState } from "react";
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
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const navigationItems = [
    { name: "About", href: "about" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Blog", href: "blog" },
    { name: "Contact", href: "contact" },
  ];

  const serviceItems = [
    {
      name: "Renewable Energy",
      desc: "Clean power solutions for a sustainable future.",
      icon: Zap,
      href: "#renewable-energy",
    },
    {
      name: "Artificial Intelligence & Robotics",
      desc: "Smart automation to drive innovation.",
      icon: Cpu,
      href: "#ai-robotics",
    },
    {
      name: "Extended Reality (XR)",
      desc: "Immersive experiences beyond reality.",
      icon: Headphones,
      href: "#extended-reality",
    },
    {
      name: "Digital Twin Technology",
      desc: "Real-time virtual models for simulations.",
      icon: Layers,
      href: "#digital-twin",
    },
    {
      name: "Game Development",
      desc: "Custom games with immersive storytelling.",
      icon: Gamepad2,
      href: "#game-dev",
    },
    {
      name: "Software Engineering",
      desc: "Enterprise-grade apps, systems, and platforms.",
      icon: CodeXml,
      href: "#software-eng",
    },
    {
      name: "Smart Home Concepts",
      desc: "IoT-powered automation for modern living.",
      icon: Home,
      href: "#smart-home",
    },
    {
      name: "Modelling & Simulation",
      desc: "Advanced computational models for system analysis.",
      icon: BarChart3,
      href: "#modelling-simulation",
    },
  ];

  return (
    <nav className="fixed z-50 top-4 left-4 right-4 font-[Satoshi]">
      <div className="px-6 py-4 border border-gray-200 shadow-lg bg-white/70 backdrop-blur-sm rounded-2xl lg:px-8">
        <div className="relative flex items-center justify-between h-14">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/assets/Orrellogo2.svg"
              alt="ORREL Logo"
              width={120}
              height={80}
              className="w-auto h-10 cursor-pointer"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center absolute left-[180px] top-1/2 -translate-y-1/2 space-x-1">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-3 py-1 font-medium text-gray-800 transition-all duration-200 rounded-lg hover:bg-gray-100 
                           text-[16px] leading-[24px] tracking-[0]"
              >
                {item.name}
              </Link>
            ))}

            {/* Services Dropdown */}
            <div className="relative mx-2">
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="flex items-center px-3 py-1 font-medium text-gray-800 transition-all duration-200 rounded-lg hover:bg-gray-100 
                           text-[16px] leading-[24px] tracking-[0]"
              >
                <span>Services</span>
                <ChevronDown
                  className={`h-4 w-4 ml-1 transition-transform duration-200 ${
                    isServicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isServicesOpen && (
                  <div className="absolute left-0 top-full mt-7 w-[700px] bg-white border border-gray-200 shadow-lg rounded-2xl p-6">
                    <h4 className="mb-4 text-xs font-semibold text-gray-500 uppercase">
                      See our services
                    </h4>
                    <div className="grid grid-cols-2 gap-6">
                      {serviceItems.map((service) => (
                        <Link
                          key={service.name}
                          href={service.href}
                          className="flex items-start p-2 space-x-3 transition-colors rounded-lg hover:bg-gray-50"
                        >
                          <service.icon className="w-5 h-5 mt-1 text-gray-700" />
                          <div>
                            {/* Service name → now paragraph with 16px */}
                            <p className="text-[16px] font-medium text-gray-900">
                              {service.name}
                            </p>
                            {/* Service description → now 14px */}
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

          {/* Right Side CTA */}
          <div className="flex items-center space-x-4">
            <button
              className="w-[163px] h-[56px] px-6 py-4 
                        bg-black text-white font-[Satoshi] font-bold 
                        text-[16px] leading-[24px] tracking-[0.01em] 
                        rounded-[12px] border-2 border-black 
                        shadow-sm transition-all duration-200 
                        hover:bg-blue-700"
            >
              Partner with us
            </button>

          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
