import logo from "../assets/Avatar.png";

function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-slate-900 text-white border-b border-slate-700">
      {/* Brand */}
      <div className="flex items-center gap-2">
        <img
          src={logo}
          alt="Expert Mama Logo"
          className="h-6 w-6 object-contain"
        />
        <h1 className="text-xl font-bold text-white">
          Expert Mama
        </h1>
      </div>

      {/* Actions */}
      <div className="space-x-6 text-sm">
        <button className="hover:text-orange-400">Dashboard</button>
        <button className="hover:text-orange-400">Login</button>
      </div>
    </nav>
  );
}

export default Navbar;