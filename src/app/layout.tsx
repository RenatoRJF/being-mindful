import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";
import { MonogramLogo } from "@/components/MonogramLogo";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fraunces",
});

export const metadata: Metadata = {
  title: "Being Mindful",
  description: "A mindfulness application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${fraunces.variable} antialiased`}>
        <MonogramLogo />
        {children}
      </body>
    </html>
  );
}
