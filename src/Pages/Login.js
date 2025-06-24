import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { FaUser, FaLock } from "react-icons/fa";

const Login = () => {
  const [form, setForm] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (!form.username.trim() || !form.password.trim()) {
      setError("Both fields are required");
      return;
    }
    setLoading(true);
    // Simulate async login
    setTimeout(() => {
      // Check if user exists and password matches
      const details = JSON.parse(
        localStorage.getItem(`user_details_${form.username}`)
      );
      if (!details || details.password !== form.password) {
        setError("Invalid username or password");
        setLoading(false);
        return;
      }
      login(form.username);
      setLoading(false);
      navigate("/");
    }, 900);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 font-inter px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-lg max-w-md w-full animate-fade-in"
        style={{ animation: "fadeInUp 0.6s" }}
      >
        <h2 className="text-2xl font-bold mb-8 text-center tracking-tight">
          🔒 Login
        </h2>
        {/* Username */}
        <div className="relative mb-4">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            <FaUser />
          </span>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={form.username}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-10 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium bg-slate-50"
            autoComplete="username"
          />
        </div>
        {/* Password */}
        <div className="relative mb-2">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            <FaLock />
          </span>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-10 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium bg-slate-50"
            autoComplete="current-password"
          />
        </div>
        {error && <div className="text-red-500 text-sm mb-4 mt-1">{error}</div>}
        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md w-full shadow transition mt-2 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {loading ? "Logging in..." : "Login"}
        </button>
        <div className="mt-6 text-center text-sm text-gray-600">
          Don't have an account?{" "}
          <a
            href="/signup"
            className="text-blue-600 hover:underline font-medium"
          >
            Sign up
          </a>
        </div>
      </form>
      {/* Fade-in animation */}
      <style>{`
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(40px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in { animation: fadeInUp 0.6s; }
      `}</style>
    </div>
  );
};

export default Login;
