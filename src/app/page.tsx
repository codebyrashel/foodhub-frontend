import { Hero } from "@/components/home/Hero";
import { FeaturedCategories } from "@/components/home/FeaturedCategories";
import { PopularMeals } from "@/components/home/PopularMeals";
import { HowItWorks } from "@/components/home/HowItWorks";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <FeaturedCategories />
      <PopularMeals />
      <HowItWorks />
    </div>
  );
}
