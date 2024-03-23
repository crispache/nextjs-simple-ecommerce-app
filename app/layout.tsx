import type { Metadata } from "next";
import "./globals.css";
import { open_sans } from "./_core";

export const metadata: Metadata = {
  title: "Simple ecommerce app",
  description: "A simple ecommerce app using Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={open_sans.className}>{children}</body>
    </html>
  );
}
