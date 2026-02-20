// app/layout.tsx
import type { Metadata } from "next";

import "./globals.css";
import Chatbot from "@/components/layout/Chatbot";
import { ppEditorialNew } from "./fonts";
import Navbar from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ThemeProvider } from "next-themes";
import ThemeToggle from "@/components/ThemeToggle";

export const metadata: Metadata = {
  title: "ORREL",
  description: "AI, Renewable Energy, Robotics, and Digital Solutions",
  icons: { icon: "/assets/Orrellogo2.svg" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${ppEditorialNew.variable}`}>
      <head />
      <body
        suppressHydrationWarning
        className={`${ppEditorialNew.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />

          <main
            className="flex-1 bg-[var(--background)] text-[var(--foreground)] 
                       transition-colors duration-300 font-[var(--font-satoshi)] 
                       overflow-auto w-screen max-w-screen min-h-screen
                       pt-[100px] sm:pt-[120px]"
          >
            <div className="px-4 sm:px-6 md:px-8 w-full max-w-full overflow-hidden">
              {children}
            </div>
          </main>

          <Footer />

          {/* Fixed ThemeToggle */}
          <div className="fixed bottom-4 right-4 z-50">
            <ThemeToggle />
          </div>

          {/* Fixed Chatbot */}
          <div className="fixed bottom-0 right-0 w-full sm:w-80 h-96 z-50">
            <Chatbot />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
