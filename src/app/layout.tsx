"use client";

import "./globals.css";

import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import { EntityProvider } from "@/providers/EntityProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased text-white`}>
        <div className="stars" />
        <div className="twinkling" />
        <EntityProvider>
          <Header />
          {children}
          <Footer />
        </EntityProvider>
      </body>
    </html>
  );
}
