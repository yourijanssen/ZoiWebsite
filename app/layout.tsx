import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Zoi Pantou | Systemic Psychotherapist & Psychologist",
  description:
    "Licensed Systemic Psychotherapist and Psychologist based in Greece. Available for online sessions worldwide in English and Greek.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} greek-background antialiased`}
      >
        <div className="greek-main-container">{children}</div>
      </body>
    </html>
  );
}