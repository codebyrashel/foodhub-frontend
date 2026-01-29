interface MealDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function MealDetailsPage({ params }: MealDetailsPageProps) {
  const { id } = await params;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-6">
      <header>
        <p className="text-xs text-slate-500 mb-1">Meal ID: {id}</p>
        <h1 className="text-2xl font-semibold mb-2">Meal Details</h1>
        <p className="text-slate-400 text-sm">
          Detailed information for this meal will be loaded from the backend.
        </p>
      </header>

      <section className="grid gap-6 md:grid-cols-[2fr,1fr]">
        <div>
          <div className="h-56 bg-slate-900 border border-slate-800 rounded-lg mb-4" />
          <h2 className="text-lg font-semibold mb-1">Sample Meal Name</h2>
          <p className="text-slate-300 text-sm mb-3">
            Full description of the meal will appear here.
          </p>
          <p className="text-emerald-400 text-lg font-semibold mb-4">
            ৳ 0.00
          </p>
        </div>
        <div className="bg-slate-900 border border-slate-800 rounded-lg p-4 text-sm space-y-3">
          <p className="font-semibold">Add to Cart</p>
          <p className="text-slate-400 text-xs">
            Quantity selector and Add to Cart button will be implemented later.
          </p>
        </div>
      </section>
    </div>
  );
}