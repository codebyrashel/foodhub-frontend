import { Search, ShoppingBag, Truck } from "lucide-react";

const steps = [
    {
        icon: Search,
        title: "1. Find Your Food",
        description: "Browse menus from top rated local restaurants and providers in your area.",
    },
    {
        icon: ShoppingBag,
        title: "2. Place Order",
        description: "Customize your meal, add to cart, and checkout securely in seconds.",
    },
    {
        icon: Truck,
        title: "3. Fast Delivery",
        description: "Track your order in real-time and enjoy fresh food delivered to your door.",
    },
];

export function HowItWorks() {
    return (
        <section className="py-16 md:py-24 bg-background" id="how-it-works">
            <div className="container">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                        How FoodHUB Works
                    </h2>
                    <p className="mt-4 text-muted-foreground">Order your favorite meals in 3 simple steps.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 text-center relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-0.5 bg-border -z-10" />

                    {steps.map((step, index) => (
                        <div key={index} className="flex flex-col items-center space-y-4 relative bg-background p-4 rounded-xl">
                            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 text-primary mb-2 shadow-sm border border-primary/20">
                                <step.icon className="h-10 w-10" />
                            </div>
                            <h3 className="text-xl font-bold">{step.title}</h3>
                            <p className="text-muted-foreground leading-relaxed max-w-xs">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
