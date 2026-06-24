import type { Metadata } from "next";
import { PT_Serif, Open_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/organisms/Header";
import { Footer } from "@/components/organisms/Footer";
import { Container } from "@/components/atoms/Container";

// Platinum Vina design system fonts, exposed as CSS variables on <html> and
// mapped to --font-serif / --font-sans in globals.css @theme.
// latin-ext is included so Croatian diacritics (č, ć, đ, š, ž) render correctly.
//
// PT Serif drives headlines (display serif); Open Sans drives headings + body.
const serif = PT_Serif({
  variable: "--font-pt-serif",
  subsets: ["latin", "latin-ext"],
  weight: "400",
  style: "normal",
  display: "swap",
});

const sans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
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
      <body className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          {/* 64px top above the first section (Hero) and bottom before the
              footer; the 64px BETWEEN sections is owned by page.tsx (space-y-16). */}
          <Container className="py-16">{children}</Container>
        </main>
        <Footer />
      </body>
    </html>
  );
}
