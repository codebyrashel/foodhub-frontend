export function Footer() {
  return (
    <footer className="w-full bg-slate-950 border-t border-slate-800 mt-8">
      <div className="max-w-6xl mx-auto px-4 py-6 text-xs text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-2">
        <span>© {new Date().getFullYear()} FoodHub. All rights reserved.</span>
        <span>Educational project · Cash on Delivery only</span>
      </div>
    </footer>
  );
}