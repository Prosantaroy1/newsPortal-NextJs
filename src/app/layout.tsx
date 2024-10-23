import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import Navber from "@/components/shared/Navber";
import Footer from "@/components/shared/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Prothom Alo News",
  description: "Prothom alo news all time update news.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={inter.className}
      >
        {/* navber component */}
        <Navber />
        {/* main content section */}
        {children}
        {/* Footer Section */}
        <Footer />
      </body>
    </html>
  );
}
