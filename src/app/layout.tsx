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
        <link
          rel="shortcut icon"
          href="./favicon.png"
          type="image/x-icon"
        ></link>
        <title>Star Wars Guide</title>
      </head>
      <body className="text-white antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only *:focus:top-0 focus:left-0 focus:absolute focus:bg-black focus:p-2 focus:text-white"
        >
          Skip to main content
        </a>
        <div className="stars" />
        <div className="twinkling" />
        <EntityProvider>
          <div className="mx-auto container">
            <Header />
            <main role="main" id="main-content">
              {children}
            </main>
            <Footer />
          </div>
        </EntityProvider>
      </body>
    </html>
  );
}
