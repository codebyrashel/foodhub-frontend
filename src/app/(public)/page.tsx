export default function HomePage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8 space-y-16">
      {/* 1. Hero Section */}
      <section className="grid gap-6 md:grid-cols-2 items-center">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Discover & Order{" "}
            <span className="text-emerald-400">Delicious Meals</span>
          </h1>
          <p className="text-slate-300 mb-6">
            FoodHub connects hungry customers with local food providers. Browse
            menus, place orders, and track your delivery — all in one place.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="/meals"
              className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-md text-sm font-medium"
            >
              Browse Meals
            </a>
            <a
              href="/register"
              className="border border-slate-600 hover:border-emerald-400 text-slate-100 px-4 py-2 rounded-md text-sm font-medium"
            >
              Join as Customer or Provider
            </a>
          </div>
        </div>
        <div className="h-48 md:h-64 bg-linear-to-br from-emerald-500/10 to-emerald-400/10 border border-emerald-500/30 rounded-xl flex items-center justify-center text-slate-300 text-sm">
          Hero Illustration Placeholder
        </div>
      </section>

      {/* 2. Popular Categories Section */}
      <section>
        <h2 className="text-xl font-semibold mb-3">Popular Categories</h2>
        <p className="text-slate-400 mb-4 text-sm">
          Explore meals across different cuisines and dietary preferences.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
          {["Bengali", "Fast Food", "Healthy", "Desserts"].map((category) => (
            <div
              key={category}
              className="bg-slate-900 border border-slate-800 rounded-lg p-3 hover:border-emerald-400/60 transition"
            >
              <div className="font-medium mb-1">{category}</div>
              <div className="text-xs text-slate-400">Sample category</div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. How It Works Section */}
      <section>
        <h2 className="text-xl font-semibold mb-3">How FoodHub Works</h2>
        <div className="grid gap-4 md:grid-cols-3 text-sm">
          <div className="bg-slate-900 border border-slate-800 rounded-lg p-4">
            <h3 className="font-semibold mb-1">For Customers</h3>
            <p className="text-slate-400">
              Register as a customer, browse meals, add items to your cart, and
              place orders with your delivery address. Track your order from
              placed to delivered.
            </p>
          </div>
          <div className="bg-slate-900 border border-slate-800 rounded-lg p-4">
            <h3 className="font-semibold mb-1">For Providers</h3>
            <p className="text-slate-400">
              Register as a provider, create your menu, receive orders, and
              update order statuses as you prepare and deliver meals.
            </p>
          </div>
          <div className="bg-slate-900 border border-slate-800 rounded-lg p-4">
            <h3 className="font-semibold mb-1">For Admins</h3>
            <p className="text-slate-400">
              Admins oversee all users, orders, and categories to keep the
              FoodHub platform safe and running smoothly.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Call to Action Section */}
      <section className="bg-slate-900 border border-slate-800 rounded-xl p-6 text-center">
        <h2 className="text-xl font-semibold mb-2">
          Ready to experience FoodHub?
        </h2>
        <p className="text-slate-400 text-sm mb-4">
          Create an account as a customer or provider and start using the
          platform. Admin accounts are pre-configured in the system.
        </p>
        <a
          href="/register"
          className="inline-block bg-emerald-500 hover:bg-emerald-600 text-white px-5 py-2 rounded-md text-sm font-medium"
        >
          Get Started
        </a>
      </section>
    </div>
  );
}