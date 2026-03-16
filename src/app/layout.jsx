import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "NextShop | Modern E-Commerce Platform",
  description:
    "NextShop is a modern full-stack e-commerce platform built with Next.js, MongoDB, and Tailwind CSS. Explore products, secure authentication, and seamless shopping experience.",
  keywords: [
    "Next.js E-commerce",
    "Online Store",
    "Next.js Project",
    "Full Stack E-commerce",
    "MongoDB",
    "React",
  ],
  authors: [{ name: "Chetan Badgujar" }],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
