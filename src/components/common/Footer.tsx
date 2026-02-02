import Link from "next/link";
import { Facebook, Twitter, Instagram } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

export function Footer() {
    return (
        <footer className="border-t bg-zinc-950 text-zinc-100 dark:bg-black dark:border-white/10">
            <div className="container py-12 md:py-16">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
                    {/* Brand */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold">
                            Food<span className="text-primary">HUB</span>
                        </h3>
                        <p className="text-sm text-zinc-400">
                            Delicious meals delivered to your doorstep. Supporting local restaurants and satisfying
                            cravings since 2026.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold">Quick Links</h4>
                        <ul className="space-y-2 text-sm text-zinc-400">
                            <li>
                                <Link href="/explore" className="hover:text-primary">
                                    Sitemap
                                </Link>
                            </li>
                            <li>
                                <Link href="/providers" className="hover:text-primary">
                                    For Restaurants
                                </Link>
                            </li>
                            <li>
                                <Link href="/support" className="hover:text-primary">
                                    Support Center
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold">Legal</h4>
                        <ul className="space-y-2 text-sm text-zinc-400">
                            <li>
                                <Link href="/terms" className="hover:text-primary">
                                    Terms of Service
                                </Link>
                            </li>
                            <li>
                                <Link href="/privacy" className="hover:text-primary">
                                    Privacy Policy
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold">Stay Updated</h4>
                        <p className="text-sm text-zinc-400">
                            Subscribe to get special offers and updates.
                        </p>
                        <div className="flex space-x-2">
                            <Input
                                placeholder="Enter your email"
                                className="bg-zinc-900 border-zinc-800 focus:ring-primary"
                            />
                            <Button>Join</Button>
                        </div>
                    </div>
                </div>

                <div className="mt-12 flex flex-col items-center justify-between border-t border-white/10 pt-8 sm:flex-row">
                    <p className="text-xs text-zinc-500">
                        &copy; {new Date().getFullYear()} FoodHUB. All rights reserved.
                    </p>
                    <div className="mt-4 flex space-x-4 sm:mt-0">
                        <Button variant="ghost" size="icon" className="text-zinc-400 hover:text-white">
                            <Facebook className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="text-zinc-400 hover:text-white">
                            <Twitter className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="text-zinc-400 hover:text-white">
                            <Instagram className="h-4 w-4" />
                        </Button>
                    </div>
                </div>
            </div>
        </footer>
    );
}
