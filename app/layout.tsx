import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dani",
  description: "A Master of Science in Marketing Management student at the University of Hawaii",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
