export function Footer() {
  return (
    <footer className="w-full bg-slate-900 text-gray-300 px-4 py-4 mt-8">
      <div className="max-w-6xl mx-auto text-center text-sm">
        © {new Date().getFullYear()} FoodHub. All rights reserved.
      </div>
    </footer>
  );
}