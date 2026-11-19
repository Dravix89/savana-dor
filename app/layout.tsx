import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ScrollUp from "@/components/ScrollUp";
import "./globals.css";

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "700"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});
const sans = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Savana D’Or | Safaris sur mesure en Afrique",
    template: "%s | Savana D’Or",
  },
  description:
    "Safaris sur mesure, du Serengeti aux chutes Victoria. Des guides locaux, des camps intimes et des itinéraires construits à la main.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#0b1b33",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="fr"
      data-scroll-behavior="smooth"
      className={`${serif.variable} ${sans.variable}`}
    >
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <ScrollUp />
      </body>
    </html>
  );
}
