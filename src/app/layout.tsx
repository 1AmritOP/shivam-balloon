import type { Metadata } from "next";

import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Shivam Balloon Decoration",
    template: "%s | Shivam Balloon Decoration",
  },

  description:
    "Shivam Balloon Decoration provides beautiful balloon decorations for birthdays, anniversaries, weddings, baby showers and special events.",

  keywords: [
    "Shivam Balloon Decoration",
    "balloon decoration",
    "birthday balloon decoration",
    "anniversary decoration",
    "wedding decoration",
    "baby shower decoration",
    "event decoration",
  ],

  authors: [
    {
      name: "Shivam Balloon Decoration",
    },
  ],

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />

        {children}

        <Footer />
      </body>
    </html>
  );
}