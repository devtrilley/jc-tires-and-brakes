import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="text-center">
        <img
          src="/logo.png"
          alt="JC's Tire & Brakes"
          className="w-60 h-60 mx-auto mb-4 object-contain"
        />
        <h1 className="text-6xl font-bold text-[var(--jc-red-600)] mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-8">Page not found</p>
        <Link
          to="/"
          className="inline-block px-8 py-4 bg-[var(--jc-red-600)] hover:bg-[var(--jc-red-700)] text-white font-bold rounded-lg transition-all"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}

export default NotFoundPage;