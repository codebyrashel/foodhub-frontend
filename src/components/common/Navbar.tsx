"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ShoppingBag, User } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Menu", href: "/explore" },
        { name: "Providers", href: "/providers" },
        { name: "How it Works", href: "/#how-it-works" },
    ];

    return (
        <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-white/80 backdrop-blur-md dark:bg-black/80 dark:border-white/5">
            <div className="container flex h-16 items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center space-x-2">
                    <span className="text-2xl font-bold tracking-tight text-foreground">
                        Food<span className="text-primary">HUB</span>
                    </span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex md:items-center md:space-x-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* Desktop Actions */}
                <div className="hidden md:flex md:items-center md:space-x-4">
                    <Button variant="ghost" size="icon" aria-label="Cart">
                        <ShoppingBag className="h-5 w-5" />
                    </Button>
                    <Button variant="default" size="sm" asChild>
                        <Link href="/auth/signin">
                            <User className="mr-2 h-4 w-4" />
                            Login
                        </Link>
                    </Button>
                </div>

                {/* Mobile Menu Toggle */}
                <div className="flex md:hidden">
                    <button
                        type="button"
                        className="text-muted-foreground hover:text-foreground"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="border-t border-border bg-background md:hidden">
                    <div className="container flex flex-col space-y-4 py-6">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-base font-medium text-foreground hover:text-primary"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <div className="flex flex-col space-y-2 pt-4 border-t border-border">
                            <Button variant="outline" className="w-full justify-start">
                                <ShoppingBag className="mr-2 h-4 w-4" />
                                Cart (0)
                            </Button>
                            <Button className="w-full justify-start" asChild>
                                <Link href="/auth/signin">
                                    <User className="mr-2 h-4 w-4" />
                                    Sign In
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}
