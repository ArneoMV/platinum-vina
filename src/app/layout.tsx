import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

// PLACEHOLDER FONTS — refine from final design.
// Serif drives headings, sans drives body; exposed as CSS variables on <html>
// and mapped to --font-serif / --font-sans in globals.css @theme.
// latin-ext is included so Croatian diacritics (č, ć, đ, š, ž) render correctly.
const serif = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const sans = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Platinum vina — Ponuda 2026",
  description:
    "Pažljivo odabrana ponuda vrhunskih i atraktivnih vina za 2026. godinu.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hr" className={`${serif.variable} ${sans.variable}`}>
      <body className="bg-[var(--color-bg)] text-[var(--color-fg)]">
        {children}
      </body>
    </html>
  );
}
