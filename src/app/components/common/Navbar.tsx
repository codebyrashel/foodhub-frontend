"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/meals", label: "Meals" },
  { href: "/providers", label: "Providers" },
  { href: "/login", label: "Login" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-slate-900 border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-emerald-400">
          FoodHub
        </Link>

        {/* Desktop menu */}
        <div className="hidden md:flex gap-4 text-sm">
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

        {/* Mobile menu button */}
        <button
          className="md:hidden inline-flex items-center justify-center rounded border border-slate-700 px-2 py-1 text-slate-200 text-xs"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {/* Mobile menu content */}
      {open && (
        <div className="md:hidden border-t border-slate-800 bg-slate-900">
          <div className="max-w-6xl mx-auto px-4 py-2 flex flex-col gap-2 text-sm">
            {navLinks.map((link) => {
              const isActive =
                pathname === link.href ||
                (link.href !== "/" && pathname.startsWith(link.href));

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`py-1 ${
                    isActive
                      ? "text-emerald-400 font-semibold"
                      : "text-slate-200"
                  }`}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}