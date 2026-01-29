export default function MealsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8 space-y-4">
      <header className="flex items-center justify-between mb-4">
        <div>
          <h1 className="text-2xl font-semibold">Browse Meals</h1>
          <p className="text-slate-400 text-sm">
            Explore meals from different providers. Filters and data will be
            loaded from the backend.
          </p>
        </div>
      </header>

      {/* Filters placeholder */}
      <section className="bg-slate-900 border border-slate-800 rounded-lg p-4 mb-4">
        <p className="text-sm text-slate-300">
          Filters (cuisine, dietary, price range) will go here.
        </p>
      </section>

      {/* Meals list placeholder */}
      <section className="grid gap-4 md:grid-cols-3">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="bg-slate-900 border border-slate-800 rounded-lg p-4 text-sm"
          >
            <div className="h-24 bg-slate-800 rounded mb-3" />
            <h2 className="font-semibold mb-1">Sample Meal {i}</h2>
            <p className="text-slate-400 text-xs mb-2">
              Description preview here.
            </p>
            <p className="text-emerald-400 text-sm font-medium">৳ 0.00</p>
          </div>
        ))}
      </section>
    </div>
  );
}