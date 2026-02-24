import { Link } from "react-router-dom";

function AdminHeader({ onLogout }) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-[0_2px_12px_rgba(0,0,0,0.08)]">
      <div className="max-w-6xl mx-auto px-4 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 h-full hover:opacity-80 transition-opacity">
          <img src="/logo.svg" alt="JC's Tire & Brakes" className="h-14 md:h-16 w-auto" />
          <h1 className="text-xl font-bold text-[var(--jc-black)]">Admin</h1>
        </Link>
        <button
          onClick={onLogout}
          className="px-4 py-2 text-sm font-bold text-[var(--jc-black)] border-2 border-[var(--jc-red-600)] rounded-lg hover:bg-[var(--jc-red-600)] hover:text-white transition"
        >
          Logout
        </button>
      </div>
    </header>
  );
}

export default AdminHeader;