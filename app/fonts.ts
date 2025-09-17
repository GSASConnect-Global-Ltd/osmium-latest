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
    {
      path: "../public/font/PP_Editorial_New_Light.ttf",
      weight: "300",     // or "100" depending on how light it is
      style: "normal",
    },



  ],
  variable: "--font-pp-editorial", // CSS variable
  display: "swap",
});



export const satoshi = localFont({
  src: [
    {
      path: "../public/font/Satoshi-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/font/Satoshi-LightItalic.otf",
      weight: "300",
      style: "italic",
    },
    {
      path: "../public/font/Satoshi-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/font/Satoshi-Italic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/font/Satoshi-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/font/Satoshi-MediumItalic.otf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../public/font/Satoshi-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/font/Satoshi-BoldItalic.otf",
      weight: "700",
      style: "italic",
    },
    {
      path: "../public/font/Satoshi-Black.otf",
      weight: "900",
      style: "normal",
    },
    {
      path: "../public/font/Satoshi-BlackItalic.otf",
      weight: "900",
      style: "italic",
    },
  ],
  variable: "--font-satoshi",
  display: "swap",
});

