"use client";

import Link from "next/link";

export const Footer = () => {
  return (
    <footer
      className="py-16 bg-[var(--footer-bg)] text-[var(--footer-text)] transition-colors duration-300"
    >
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="col-span-2">
            <h3 className="mb-4 text-3xl font-bold">OSMIUM</h3>
            <p className="text-[var(--footer-link)] text-lg leading-relaxed max-w-md">
              Leading the technological revolution with cutting-edge solutions 
              across multiple industries and domains.
            </p>
          </div>

          {/* Technologies */}
          <div>
            <h4 className="mb-4 text-lg font-semibold">Technologies</h4>
            <ul className="space-y-2 text-[var(--footer-link)]">
              <li>
                <Link href="#ai-robotics" className="hover:text-[var(--footer-link-hover)] transition-colors duration-200">
                  AI & Robotics
                </Link>
              </li>
              <li>
                <Link href="#digital-twin" className="hover:text-[var(--footer-link-hover)] transition-colors duration-200">
                  Digital Twin
                </Link>
              </li>
              <li>
                <Link href="#game-dev" className="hover:text-[var(--footer-link-hover)] transition-colors duration-200">
                  Game Development
                </Link>
              </li>
              <li>
                <Link href="#software" className="hover:text-[var(--footer-link-hover)] transition-colors duration-200">
                  Software Engineering
                </Link>
              </li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="mb-4 text-lg font-semibold">Solutions</h4>
            <ul className="space-y-2 text-[var(--footer-link)]">
              <li>
                <Link href="#renewable" className="hover:text-[var(--footer-link-hover)] transition-colors duration-200">
                  Renewable Energy
                </Link>
              </li>
              <li>
                <Link href="#xr" className="hover:text-[var(--footer-link-hover)] transition-colors duration-200">
                  Extended Reality
                </Link>
              </li>
              <li>
                <Link href="#smart-homes" className="hover:text-[var(--footer-link-hover)] transition-colors duration-200">
                  Smart Homes
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-[var(--footer-link-hover)] transition-colors duration-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="border-t border-gray-300 dark:border-gray-700 mt-12 pt-8 text-center text-sm text-[var(--footer-link)]">
          <p>&copy; 2024 OSMIUM. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
