// app/fonts.ts
import localFont from "next/font/local";

export const ppEditorialNew = localFont({
  src: [
    {
      path: "../public/font/PPEditorialNew-Ultralight.otf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../public/font/PPEditorialNew-UltralightItalic.otf",
      weight: "200",
      style: "italic",
    },
  ],
  variable: "--font-pp-editorial", // CSS variable
  display: "swap",
});


export const satoshi = localFont({
  src: [
    {
      path: "../public/font/Satoshi-Variable.ttf",
      weight: "200",
      style: "normal",
    }
  ],
  variable: "--font-satoshi", // CSS variable
  display: "swap",
});
