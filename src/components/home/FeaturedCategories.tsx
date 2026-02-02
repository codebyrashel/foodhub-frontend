import { Card, CardContent } from "@/components/ui/Card";
import Link from "next/link";

const categories = [
    {
        name: "Burgers",
        image:
            "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=600&auto=format&fit=crop",
        href: "/explore?category=burgers",
    },
    {
        name: "Pizza",
        image:
            "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=600&auto=format&fit=crop",
        href: "/explore?category=pizza",
    },
    {
        name: "Sushi",
        image:
            "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=600&auto=format&fit=crop",
        href: "/explore?category=sushi",
    },
    {
        name: "Desserts",
        image:
            "https://images.unsplash.com/photo-1563729768-74915bd6c2f6?q=80&w=600&auto=format&fit=crop",
        href: "/explore?category=desserts",
    },
    {
        name: "Healthy",
        image:
            "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=600&auto=format&fit=crop",
        href: "/explore?category=healthy",
    },
    {
        name: "Drinks",
        image:
            "https://images.unsplash.com/photo-1544145945-f90425340c7e?q=80&w=600&auto=format&fit=crop",
        href: "/explore?category=drinks",
    },
];

export function FeaturedCategories() {
    return (
        <section className="py-16 md:py-24 bg-background">
            <div className="container">
                <div className="mb-12 text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                        Explore Categories
                    </h2>
                    <p className="mt-4 text-muted-foreground">
                        What are you craving today? Browse our most popular categories.
                    </p>
                </div>

                <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
                    {categories.map((category) => (
                        <Link key={category.name} href={category.href} className="group">
                            <Card className="overflow-hidden border-none shadow-none bg-transparent hover:shadow-lg transition-all duration-300">
                                <CardContent className="p-0 relative aspect-square rounded-2xl overflow-hidden">
                                    <div
                                        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                                        style={{ backgroundImage: `url(${category.image})` }}
                                    />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                                    <div className="absolute pt-20 inset-0 flex items-center justify-center">
                                        <span className="text-lg font-bold text-white tracking-wide border-b-2 border-transparent group-hover:border-primary transition-all">
                                            {category.name}
                                        </span>
                                    </div>
                                </CardContent>
                            </Card>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
