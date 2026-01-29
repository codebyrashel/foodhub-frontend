export default function RegisterPage() {
  return (
    <div className="min-h-[calc(100vh-120px)] flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-lg p-6 space-y-4">
        <header className="space-y-1">
          <h1 className="text-xl font-semibold">Register</h1>
          <p className="text-slate-400 text-sm">
            Create a FoodHub account as a customer or provider.
          </p>
        </header>

        <form className="space-y-4">
          <div className="space-y-1 text-sm">
            <label className="block text-slate-300" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              className="w-full bg-slate-950 border border-slate-700 rounded px-3 py-2 text-sm outline-none focus:border-emerald-400"
              placeholder="Your Name"
            />
          </div>

          <div className="space-y-1 text-sm">
            <label className="block text-slate-300" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="w-full bg-slate-950 border border-slate-700 rounded px-3 py-2 text-sm outline-none focus:border-emerald-400"
              placeholder="you@example.com"
            />
          </div>

          <div className="space-y-1 text-sm">
            <label className="block text-slate-300" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              className="w-full bg-slate-950 border border-slate-700 rounded px-3 py-2 text-sm outline-none focus:border-emerald-400"
              placeholder="••••••••"
            />
          </div>

          <div className="space-y-1 text-sm">
            <span className="block text-slate-300">Role</span>
            <select
              className="w-full bg-slate-950 border border-slate-700 rounded px-3 py-2 text-sm outline-none focus:border-emerald-400"
              defaultValue="customer"
            >
              <option value="customer">Customer</option>
              <option value="provider">Provider</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-2 rounded-md text-sm font-medium"
          >
            Register
          </button>
        </form>

        <p className="text-xs text-slate-500 text-center">
          Already have an account?{" "}
          <a href="/login" className="text-emerald-400 hover:text-emerald-300">
            Login
          </a>
        </p>
      </div>
    </div>
  );
}