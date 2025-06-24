import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, Dumbbell } from "lucide-react";
import { Link as ScrollLink } from "react-scroll";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Programs", path: "/programs" },
    { name: "Nutrition", path: "/nutrition" },
    { name: "Blog", path: "/blog" },
    { name: "About", path: "/about" },
  ];

  const isActivePath = (path) => {
    return location.pathname === path;
  };

  const handleNavClick = (path) => {
    if (path === "/" && location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate(path);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-md py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center space-x-2"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              FitGuide
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => handleNavClick(link.path)}
                className={`text-base font-medium transition-all duration-200 relative group ${
                  isActivePath(link.path)
                    ? "text-blue-600"
                    : "text-gray-700 hover:text-blue-600"
                }`}
              >
                {link.name}
                <span
                  className={`absolute -bottom-2 left-0 w-full h-0.5 bg-blue-600 transform origin-left transition-transform duration-200 ${
                    isActivePath(link.path) ? "scale-x-100" : "scale-x-0"
                  } group-hover:scale-x-100`}
                ></span>
              </Link>
            ))}
            {user ? (
              <>
                <Link
                  to="/favorites"
                  className="text-base font-medium text-gray-700 hover:text-blue-600 transition-all duration-200"
                >
                  Favorites
                </Link>
                <Link
                  to="/profile"
                  className="text-base font-medium text-gray-700 hover:text-blue-600 transition-all duration-200"
                >
                  Profile
                </Link>
                <button
                  onClick={() => {
                    logout();
                    navigate("/login");
                  }}
                  className="ml-4 px-4 py-2 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-colors"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="text-base font-medium text-gray-700 hover:text-blue-600 transition-all duration-200"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="text-base font-medium text-gray-700 hover:text-blue-600 transition-all duration-200"
                >
                  Signup
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 relative">
              <span
                className={`absolute h-0.5 w-full bg-gray-800 transform transition-all duration-300 ${
                  isMenuOpen ? "rotate-45 top-3" : "top-1"
                }`}
              ></span>
              <span
                className={`absolute h-0.5 w-full bg-gray-800 top-3 transition-all duration-200 ${
                  isMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              ></span>
              <span
                className={`absolute h-0.5 w-full bg-gray-800 transform transition-all duration-300 ${
                  isMenuOpen ? "-rotate-45 top-3" : "top-5"
                }`}
              ></span>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen
              ? "max-h-96 opacity-100 mt-4"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="pt-2 pb-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => handleNavClick(link.path)}
                className={`block px-4 py-2 text-base font-medium rounded-lg transition-colors ${
                  isActivePath(link.path)
                    ? "bg-blue-50 text-blue-600"
                    : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                {link.name}
              </Link>
            ))}
            {user ? (
              <>
                <Link
                  to="/favorites"
                  className="block px-4 py-2 text-base font-medium rounded-lg transition-colors bg-blue-50 text-blue-600"
                >
                  Favorites
                </Link>
                <Link
                  to="/profile"
                  className="block px-4 py-2 text-base font-medium rounded-lg transition-colors bg-blue-50 text-blue-600"
                >
                  Profile
                </Link>
                <button
                  onClick={() => {
                    logout();
                    navigate("/login");
                  }}
                  className="block px-4 py-2 text-base font-medium rounded-lg transition-colors bg-blue-50 text-blue-600 hover:bg-blue-100"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="block px-4 py-2 text-base font-medium rounded-lg transition-colors bg-blue-50 text-blue-600 hover:bg-blue-100"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="block px-4 py-2 text-base font-medium rounded-lg transition-colors bg-blue-50 text-blue-600 hover:bg-blue-100"
                >
                  Signup
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
