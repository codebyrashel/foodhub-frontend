import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Star, Clock, ShoppingCart } from "lucide-react";
import Image from "next/image";

const meals = [
    {
        id: 1,
        name: "Spicy Chicken Burger",
        provider: "Burger King",
        image:
            "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=600&auto=format&fit=crop",
        price: 12.99,
        rating: 4.8,
        time: "20-30 min",
        category: "Burgers",
    },
    {
        id: 2,
        name: "Margherita Pizza",
        provider: "Pizza Hut",
        image:
            "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=600&auto=format&fit=crop",
        price: 14.5,
        rating: 4.5,
        time: "30-45 min",
        category: "Pizza",
    },
    {
        id: 3,
        name: "Salmon Sushi Set",
        provider: "Sushi Master",
        image:
            "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=600&auto=format&fit=crop",
        price: 22.0,
        rating: 4.9,
        time: "40-50 min",
        category: "Sushi",
    },
    {
        id: 4,
        name: "Caesar Salad",
        provider: "Fresh Greens",
        image:
            "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=600&auto=format&fit=crop",
        price: 10.99,
        rating: 4.6,
        time: "15-25 min",
        category: "Healthy",
    },
];

export function PopularMeals() {
    return (
        <section className="py-16 md:py-24 bg-secondary/30">
            <div className="container">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
                    <div className="space-y-4">
                        <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                            Popular Local Meals
                        </h2>
                        <p className="text-muted-foreground max-w-2xl">
                            Discover the top-rated dishes in your area, curated just for you.
                        </p>
                    </div>
                    <Button variant="link" className="text-primary mt-4 md:mt-0">
                        View All Meals &rarr;
                    </Button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {meals.map((meal) => (
                        <Card key={meal.id} className="group overflow-hidden border-border/50 bg-card hover:border-primary/50 transition-all duration-300">
                            <div className="relative h-48 w-full overflow-hidden">
                                <img
                                    src={meal.image}
                                    alt={meal.name}
                                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <Badge className="absolute top-3 left-3 bg-white/90 text-black backdrop-blur-sm hover:bg-white">
                                    {meal.category}
                                </Badge>
                            </div>

                            <CardContent className="p-4">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="font-bold text-lg leading-tight group-hover:text-primary transition-colors line-clamp-1">{meal.name}</h3>
                                    <div className="flex items-center text-yellow-500 text-sm font-medium">
                                        <Star className="w-4 h-4 mr-1 fill-current" />
                                        {meal.rating}
                                    </div>
                                </div>
                                <p className="text-sm text-muted-foreground mb-4">{meal.provider}</p>

                                <div className="flex items-center text-xs text-muted-foreground space-x-4">
                                    <div className="flex items-center">
                                        <Clock className="w-4 h-4 mr-1" />
                                        {meal.time}
                                    </div>
                                    <div className="font-semibold text-foreground">
                                        ${meal.price.toFixed(2)}
                                    </div>
                                </div>
                            </CardContent>

                            <CardFooter className="p-4 pt-0">
                                <Button className="w-full rounded-full" size="sm">
                                    <ShoppingCart className="w-4 h-4 mr-2" />
                                    Add to Cart
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
