// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins, Noto_Sans } from "next/font/google"; 
import "./globals.css";
import {ppEditorialNew} from "./fonts" 
import Navbar from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ThemeProvider } from "next-themes";
import ThemeToggle from "@/components/ThemeToggle";

// Google Fonts
const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });



// ✅ Noto Sans as Satoshi replacement
const satoshi = Noto_Sans({
  weight: ["200", "400", "700"],
  subsets: ["latin"],
  variable: "--font-satoshi",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ORREL",
  description: "AI, Renewable Energy, Robotics, and Digital Solutions",
  icons: { icon: "/assets/Orrellogo2.svg" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${ppEditorialNew.variable} ${satoshi.variable}`}>
      <head />
     <body className={`${geistSans.variable} ${geistMono.variable} ${ppEditorialNew.variable} antialiased`}>
  <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
    <Navbar />
    <main className="bg-[var(--background)] text-[var(--foreground)] transition-colors duration-300 font-[var(--font-satoshi)]">
      {children}
    </main>
    <Footer />
    <ThemeToggle />
  </ThemeProvider>
</body>
    </html>
  );
}
