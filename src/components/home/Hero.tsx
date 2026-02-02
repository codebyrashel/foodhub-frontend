import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Hero() {
    return (
        <section className="relative flex min-h-[85vh] items-center justify-center overflow-hidden bg-black/50">
            {/* Background Image */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage:
                        "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop')",
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
            </div>

            <div className="container relative z-10 flex max-w-4xl flex-col items-center text-center">
                <span className="mb-4 inline-block rounded-full bg-primary/20 px-4 py-1.5 text-sm font-semibold text-primary backdrop-blur-sm border border-primary/30">
                    Hungry? We got you.
                </span>
                <h1 className="mb-6 text-5xl font-extrabold tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
                    Taste the <span className="text-primary">Best</span> <br />
                    Delivered Fast.
                </h1>
                <p className="mb-8 max-w-2xl text-lg text-zinc-200 sm:text-xl">
                    Explore delicious meals from top-rated local providers. From spicy burgers to sweet treats,
                    FoodHUB brings the joy of food directly to your door.
                </p>

                <div className="flex flex-col gap-4 sm:flex-row">
                    <Button size="lg" className="rounded-full px-8 text-base shadow-orange-500/25" asChild>
                        <Link href="/explore">
                            Order Now <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                    </Button>
                    <Button
                        size="lg"
                        variant="glass"
                        className="rounded-full px-8 text-base backdrop-blur-md"
                        asChild
                    >
                        <Link href="/providers">View Providers</Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
