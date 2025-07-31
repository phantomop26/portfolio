import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sahil Kumar Singh - Portfolio",
  description: "Computer Science student at NYU passionate about software engineering, data science, and building innovative solutions",
  keywords: ["computer science", "software engineering", "data science", "portfolio", "react", "python", "swift", "nyu"],
  authors: [{ name: "Sahil Kumar Singh" }],
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}