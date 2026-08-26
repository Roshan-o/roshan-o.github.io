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
  title: "K Roshan Lal — Software Engineer & Undergrad at IIIT Hyderabad",
  description: "Portfolio of K Roshan Lal - Software Engineer, Ex-Uber Intern & ECE Student at IIIT Hyderabad.",
  keywords: "Roshan Lal, portfolio, software engineer, machine learning, data engineering, IIIT Hyderabad, Uber intern",
  authors: [{ name: "K Roshan Lal" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
