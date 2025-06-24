import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUser, FaLock, FaEnvelope, FaIdCard } from "react-icons/fa";

const Signup = () => {
  const [form, setForm] = useState({
    username: "",
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (
      !form.username.trim() ||
      !form.name.trim() ||
      !form.email.trim() ||
      !form.password.trim()
    ) {
      setError("All fields are required");
      return;
    }
    if (!validateEmail(form.email)) {
      setError("Please enter a valid email address");
      return;
    }
    if (form.password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      // Save user details in localStorage
      localStorage.setItem(
        `user_details_${form.username}`,
        JSON.stringify({ ...form })
      );
      setError("");
      setLoading(false);
      navigate("/login");
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
          📝 Sign Up
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
        {/* Full Name */}
        <div className="relative mb-4">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            <FaIdCard />
          </span>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-10 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium bg-slate-50"
            autoComplete="name"
          />
        </div>
        {/* Email */}
        <div className="relative mb-4">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            <FaEnvelope />
          </span>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-10 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium bg-slate-50"
            autoComplete="email"
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
            autoComplete="new-password"
          />
        </div>
        {error && <div className="text-red-500 text-sm mb-4 mt-1">{error}</div>}
        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md w-full shadow transition mt-2 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {loading ? "Signing up..." : "Sign Up"}
        </button>
        <div className="mt-6 text-center text-sm">
          Already have an account?{" "}
          <a
            href="/login"
            className="text-blue-600 hover:underline font-medium"
          >
            Login
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

export default Signup;
