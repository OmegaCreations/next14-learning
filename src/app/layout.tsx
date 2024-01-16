import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// components
import "@/components/navbar/Navbar";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

// Font
const inter = Inter({ subsets: ["latin"] });

// TODO: later add title and description
export const metadata: Metadata = {
  title: "Title",
  description: "Website of musicotherapy foundation",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl">
      <body className={inter.className}>
        <div className="container m-auto px-12 min-h-screen flex flex-col justify-between">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
