"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/meals", label: "Meals" },
  { href: "/providers", label: "Providers" },
  { href: "/login", label: "Login" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="w-full bg-slate-900 border-b border-slate-800">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        <Link href="/" className="text-xl font-bold text-emerald-400">
          FoodHub
        </Link>
        <div className="flex gap-4 text-sm">
          {navLinks.map((link) => {
            const isActive =
              pathname === link.href ||
              (link.href !== "/" && pathname.startsWith(link.href));

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`hover:text-emerald-300 transition ${
                  isActive ? "text-emerald-400 font-semibold" : "text-slate-200"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}