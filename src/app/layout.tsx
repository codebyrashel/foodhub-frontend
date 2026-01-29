// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/app/components/common/Navbar";
import { Footer } from "@/app/components/common/Footer";

export const metadata: Metadata = {
  title: "FoodHub | Discover & Order Delicious Meals",
  description:
    "FoodHub is a meal ordering platform where customers can order from providers, and admins manage the platform.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-slate-950 text-slate-100">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}