interface ProviderPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ProviderPage({ params }: ProviderPageProps) {
  const { id } = await params;

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 space-y-6">
      <header>
        <p className="text-xs text-slate-500 mb-1">Provider ID: {id}</p>
        <h1 className="text-2xl font-semibold mb-1">Provider Profile</h1>
        <p className="text-slate-400 text-sm">
          Provider information and menu will be loaded from the backend.
        </p>
      </header>

      <section className="bg-slate-900 border border-slate-800 rounded-lg p-4">
        <h2 className="text-lg font-semibold mb-1">Restaurant Name</h2>
        <p className="text-slate-400 text-sm mb-2">Cuisine type · Address</p>
        <p className="text-slate-500 text-xs">
          Provider additional details will be shown here.
        </p>
      </section>

      <section>
        <h3 className="text-lg font-semibold mb-3">Menu</h3>
        <div className="grid gap-4 md:grid-cols-3 text-sm">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="bg-slate-900 border border-slate-800 rounded-lg p-4"
            >
              <div className="h-20 bg-slate-800 rounded mb-3" />
              <h4 className="font-semibold mb-1">Sample Meal {i}</h4>
              <p className="text-slate-400 text-xs mb-2">
                Short description here.
              </p>
              <p className="text-emerald-400 text-sm font-medium">৳ 0.00</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}