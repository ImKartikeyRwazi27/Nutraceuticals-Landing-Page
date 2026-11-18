import localFont from "next/font/local";

// Self-hosted (latin subset, woff2, from Google Fonts). next/font/google
// downloads from fonts.gstatic.com at build time, and that download failed on
// Vercel builds ("Can't resolve .../internal/font/google/font"). Local files
// can't fail that way. Export names and CSS variables are unchanged.

export const plusJakartaSans = localFont({
  src: "./files/PlusJakartaSans-300-800.woff2",
  weight: "300 800",
  style: "normal",
  display: "swap",
  variable: "--font-plus-jakarta-sans",
});

export const poppins = localFont({
  src: [
    { path: "./files/Poppins-400.woff2", weight: "400", style: "normal" },
    { path: "./files/Poppins-500.woff2", weight: "500", style: "normal" },
    { path: "./files/Poppins-600.woff2", weight: "600", style: "normal" },
    { path: "./files/Poppins-700.woff2", weight: "700", style: "normal" },
  ],
  display: "swap",
  variable: "--font-poppins",
});

export const bricolageGrotesque = localFont({
  src: "./files/BricolageGrotesque-400-700.woff2",
  weight: "400 700",
  style: "normal",
  display: "swap",
  variable: "--font-bricolage-grotesque",
});

export const hankenGrotesk = localFont({
  src: "./files/HankenGrotesk-400-700.woff2",
  weight: "400 700",
  style: "normal",
  display: "swap",
  variable: "--font-hanken-grotesk",
});

export const inter = localFont({
  src: "./files/Inter-300-700.woff2",
  weight: "300 700",
  style: "normal",
  display: "swap",
  variable: "--font-inter",
});

export const geist = localFont({
  src: "./files/Geist-400-700.woff2",
  weight: "400 700",
  style: "normal",
  display: "swap",
  variable: "--font-geist",
});
