import type { Metadata } from "next";
import "./globals.css";
import Footer from "./Footer";

export const metadata: Metadata = {
  title: "Devneto - Cloves Neto",
  description: "Portifólio de Cloves Neto",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className='bg-[#1a1625] antialiased'>
        <div className="container max-w-screen-2xl">
            {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
