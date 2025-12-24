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
  title: "Roshan Lal Kalluri - Portfolio",
  description: "Professional portfolio of Roshan Lal Kalluri - Software Engineering Intern & ECE Student",
  keywords: "portfolio, developer, software engineering, machine learning, IIIT Hyderabad",
  authors: [{ name: "Roshan Lal Kalluri" }],
  icons: {
    shortcut: "C:\\Users\\ASUS\\Desktop\\portfolio\\public\\Krl.png",
  },
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
