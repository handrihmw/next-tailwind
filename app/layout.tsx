import type { Metadata } from "next";
import { Source_Sans_3 } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const SourceSans3 = Source_Sans_3({
  subsets: ["latin"],
  style: "normal",
  weight: ["200", "300", "400", "600", "700"],
});

export const metadata: Metadata = {
  title: "SobatBangun",
  description: "SobatBangun by Handri",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Navbar />
      <body className={`bg-white ${SourceSans3.className}`}>{children}</body>
      <Footer />
    </html>
  );
}
