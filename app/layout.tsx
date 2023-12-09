import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Travel Web",
  description: "Simple travel web",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" style={{scrollBehavior:'smooth'}}>
      <body className={inter.className}>
        <Navbar />
        <main className="relative overflow-hidden">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
