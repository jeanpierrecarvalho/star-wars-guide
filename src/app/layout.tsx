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
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Star Wars Guide</title>
      </head>
      <body className="text-white antialiased">
        <div className="stars" />
        <div className="twinkling" />
        <EntityProvider>
          <div className="mx-auto container">
            <Header />
            <main role="main">{children}</main>
            <Footer />
          </div>
        </EntityProvider>
      </body>
    </html>
  );
}
