import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Programs", path: "/programs" },
    { name: "Nutrition", path: "/nutrition" },
    { name: "Blog", path: "/blog" },
    { name: "About", path: "/about" },
  ];

  const isActivePath = (path) => location.pathname === path;

  const handleNavClick = (path) => {
    if (path === "/" && location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate(path);
    }
    setIsMenuOpen(false);
  };

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <nav className="sticky top-0 z-50 w-full bg-gradient-to-r from-white to-slate-50 shadow-sm">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-1 select-none"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <span className="text-2xl font-extrabold tracking-tight">
            <span className="text-black">Fit</span>
            <span className="text-blue-600">Guide</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-6 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => handleNavClick(link.path)}
              className={`text-gray-700 hover:text-blue-600 transition-all duration-200 font-medium ${
                isActivePath(link.path) ? "border-b-2 border-blue-600 pb-1" : ""
              }`}
            >
              {link.name}
            </Link>
          ))}
          {user ? (
            <>
              <Link
                to="/favorites"
                className={`text-gray-700 hover:text-blue-600 transition-all duration-200 font-medium ${
                  isActivePath("/favorites")
                    ? "border-b-2 border-blue-600 pb-1"
                    : ""
                }`}
              >
                Favorites
              </Link>
              <Link
                to="/profile"
                className={`text-gray-700 hover:text-blue-600 transition-all duration-200 font-medium ${
                  isActivePath("/profile")
                    ? "border-b-2 border-blue-600 pb-1"
                    : ""
                }`}
              >
                Profile
              </Link>
              <button
                onClick={() => {
                  logout();
                  navigate("/login");
                }}
                className="bg-blue-600 text-white font-semibold px-4 py-2 rounded-full shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition ml-2"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className={`text-gray-700 hover:text-blue-600 transition-all duration-200 font-medium ${
                  isActivePath("/login")
                    ? "border-b-2 border-blue-600 pb-1"
                    : ""
                }`}
              >
                Login
              </Link>
              <Link
                to="/signup"
                className={`text-gray-700 hover:text-blue-600 transition-all duration-200 font-medium ${
                  isActivePath("/signup")
                    ? "border-b-2 border-blue-600 pb-1"
                    : ""
                }`}
              >
                Signup
              </Link>
            </>
          )}
        </div>

        {/* Hamburger Menu (Mobile) */}
        <button
          className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>

        {/* Mobile Dropdown */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-md md:hidden animate-fade-in">
            <div className="flex flex-col gap-2 py-4 px-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => handleNavClick(link.path)}
                  className={`text-gray-700 hover:text-blue-600 transition-all duration-200 font-medium ${
                    isActivePath(link.path)
                      ? "border-b-2 border-blue-600 pb-1"
                      : ""
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              {user ? (
                <>
                  <Link
                    to="/favorites"
                    className={`text-gray-700 hover:text-blue-600 transition-all duration-200 font-medium ${
                      isActivePath("/favorites")
                        ? "border-b-2 border-blue-600 pb-1"
                        : ""
                    }`}
                  >
                    Favorites
                  </Link>
                  <Link
                    to="/profile"
                    className={`text-gray-700 hover:text-blue-600 transition-all duration-200 font-medium ${
                      isActivePath("/profile")
                        ? "border-b-2 border-blue-600 pb-1"
                        : ""
                    }`}
                  >
                    Profile
                  </Link>
                  <button
                    onClick={() => {
                      logout();
                      navigate("/login");
                    }}
                    className="bg-blue-600 text-white font-semibold px-4 py-2 rounded-full shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition mt-2"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link
                    to="/login"
                    className={`text-gray-700 hover:text-blue-600 transition-all duration-200 font-medium ${
                      isActivePath("/login")
                        ? "border-b-2 border-blue-600 pb-1"
                        : ""
                    }`}
                  >
                    Login
                  </Link>
                  <Link
                    to="/signup"
                    className={`text-gray-700 hover:text-blue-600 transition-all duration-200 font-medium ${
                      isActivePath("/signup")
                        ? "border-b-2 border-blue-600 pb-1"
                        : ""
                    }`}
                  >
                    Signup
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </div>
      {/* Fade-in animation for mobile dropdown */}
      <style>{`
        .animate-fade-in { animation: fadeInUp 0.3s; }
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(-10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
