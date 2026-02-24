import { useState } from "react";
import { Link } from "react-router-dom";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

function Login({ onLoginSuccess }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const response = await fetch(`${API_URL}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (data.success) {
        localStorage.setItem("doonga_token", data.token);
        onLoginSuccess(data.token);
      } else {
        setError(data.message || "Invalid credentials");
      }
    } catch (error) {
      setError("Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200 shadow-[0_2px_12px_rgba(0,0,0,0.08)]">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center">
          <Link
            to="/"
            className="flex items-center gap-2 h-full hover:opacity-80 transition-opacity"
          >
            <img
              src="/logo.svg"
              alt="JC's Tire & Brakes"
              className="h-14 md:h-16 w-auto"
            />
            <span className="text-xl font-bold text-[var(--jc-black)]">
              Admin
            </span>
          </Link>
        </div>
      </header>

      <div className="flex items-center justify-center px-4 py-12">
        <div className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full border border-gray-200">
          <h2 className="text-3xl font-bold text-[var(--jc-black)] mb-6 text-center">
            Admin Login
          </h2>

          {error && (
            <div className="mb-4 p-3 bg-red-100 border border-red-300 text-red-700 rounded">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[var(--jc-red-600)] focus:ring-2 focus:ring-[var(--jc-red-600)]/20"
                placeholder="admin@example.com"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[var(--jc-red-600)] focus:ring-2 focus:ring-[var(--jc-red-600)]/20"
                placeholder="Enter password"
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full px-6 py-3 jc-form-btn-primary font-bold rounded-lg transition-all disabled:opacity-50"
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
