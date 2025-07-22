import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, LogOut, Settings, User, Star } from "lucide-react";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [profileDropdown, setProfileDropdown] = useState(false);
  const profileRef = useRef(null);
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

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setProfileDropdown(false);
      }
    }
    if (profileDropdown) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [profileDropdown]);

  useEffect(() => {
    setIsMenuOpen(false);
    setProfileDropdown(false);
  }, [location]);

  // Get initials for avatar fallback
  const getInitials = () => {
    if (user?.name) {
      return user.name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase();
    }
    return user?.username ? user.username[0].toUpperCase() : "";
  };

  return (
    <nav className="sticky top-0 z-50 w-full shadow-sm bg-gradient-to-r from-white to-slate-50">
      <div className="container flex items-center justify-between px-6 py-4 mx-auto">
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
        <div className="items-center hidden gap-6 md:flex">
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
              {/* Profile Avatar Dropdown */}
              <div className="relative" ref={profileRef}>
                <button
                  className="flex items-center justify-center w-8 h-8 ml-2 font-semibold text-white transition-all duration-200 bg-blue-600 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                  aria-haspopup="true"
                  aria-expanded={profileDropdown}
                  onClick={() => setProfileDropdown((open) => !open)}
                  tabIndex={0}
                >
                  {/* If you want to use an image, replace below with <img src={user.avatarUrl} ... /> */}
                  {getInitials()}
                </button>
                {profileDropdown && (
                  <div className="absolute right-0 z-50 w-48 py-2 mt-2 origin-top-right bg-white rounded-lg shadow-lg animate-profile-dropdown">
                    <Link
                      to="/profile"
                      className="flex items-center block gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setProfileDropdown(false)}
                    >
                      <User className="w-4 h-4" /> View Profile
                    </Link>
                    <Link
                      to="/favorites"
                      className="flex items-center block gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setProfileDropdown(false)}
                    >
                      <Star className="w-4 h-4" /> Favorites
                    </Link>

                    <button
                      onClick={() => {
                        logout();
                        navigate("/login");
                        setProfileDropdown(false);
                      }}
                      className="flex items-center block w-full gap-2 px-4 py-2 text-sm text-left text-red-600 hover:bg-gray-100"
                    >
                      <LogOut className="w-4 h-4" /> Logout
                    </button>
                  </div>
                )}
                {/* Dropdown animation */}
                <style>{`
                  .animate-profile-dropdown {
                    animation: profileDropdown 0.18s cubic-bezier(.4,0,.2,1);
                  }
                  @keyframes profileDropdown {
                    0% { opacity: 0; transform: scale(0.95) translateY(-8px); }
                    100% { opacity: 1; transform: scale(1) translateY(0); }
                  }
                `}</style>
              </div>
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
          className="p-2 rounded md:hidden focus:outline-none focus:ring-2 focus:ring-blue-400"
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
          <div className="absolute left-0 w-full bg-white shadow-md top-full md:hidden animate-fade-in">
            <div className="flex flex-col gap-2 px-6 py-4">
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
                  {/* Profile Dropdown for Mobile */}
                  <div className="flex items-center gap-2 mt-2">
                    <button
                      className="flex items-center justify-center w-8 h-8 font-semibold text-white transition-all duration-200 bg-blue-600 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                      aria-haspopup="true"
                      aria-expanded={profileDropdown}
                      onClick={() => setProfileDropdown((open) => !open)}
                      tabIndex={0}
                    >
                      {getInitials()}
                    </button>
                    <span className="font-medium text-gray-700">
                      {user.name || user.username}
                    </span>
                  </div>
                  {profileDropdown && (
                    <div className="z-50 w-full py-2 mt-2 bg-white rounded-lg shadow-lg animate-profile-dropdown">
                      <Link
                        to="/profile"
                        className="flex items-center block gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => setProfileDropdown(false)}
                      >
                        <User className="w-4 h-4" /> View Profile
                      </Link>
                      <Link
                        to="/favorites"
                        className="flex items-center block gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => setProfileDropdown(false)}
                      >
                        <Star className="w-4 h-4" /> Favorites
                      </Link>
                      <Link
                        to="/settings"
                        className="flex items-center block gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => setProfileDropdown(false)}
                      >
                        <Settings className="w-4 h-4" /> Settings
                      </Link>
                      <button
                        onClick={() => {
                          logout();
                          navigate("/login");
                          setProfileDropdown(false);
                        }}
                        className="flex items-center block w-full gap-2 px-4 py-2 text-sm text-left text-red-600 hover:bg-gray-100"
                      >
                        <LogOut className="w-4 h-4" /> Logout
                      </button>
                    </div>
                  )}
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
        .animate-profile-dropdown {
          animation: profileDropdown 0.18s cubic-bezier(.4,0,.2,1);
        }
        @keyframes profileDropdown {
          0% { opacity: 0; transform: scale(0.95) translateY(-8px); }
          100% { opacity: 1; transform: scale(1) translateY(0); }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
