// app/layout.tsx
import type { Metadata } from "next";
 
import "./globals.css";
import Chatbot from "@/components/layout/Chatbot"; // 👈 Add this import
import {ppEditorialNew} from "./fonts" 
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
    <html lang="en" suppressHydrationWarning className={`${ppEditorialNew.variable} `}>
      <head />
    <body
  suppressHydrationWarning
  className={`${ppEditorialNew.variable} antialiased`}
>

  <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
    <Navbar />
    <main className="bg-[var(--background)] text-[var(--foreground)] transition-colors duration-300 font-[var(--font-satoshi)]">
      {children}
    </main>
    <Footer />
    <ThemeToggle />
    <Chatbot /> 
  </ThemeProvider>
</body>
    </html>
  );
}
