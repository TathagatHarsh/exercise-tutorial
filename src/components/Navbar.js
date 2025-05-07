import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Dumbbell } from "lucide-react";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", href: "/", scroll: false },
    { name: "Workouts", href: "workouts", scroll: true },
    { name: "About", href: "/about", scroll: false },
    { name: "Blog", href: "/blog", scroll: false },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-white shadow">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Dumbbell className="w-6 h-6 text-blue-600" />
            <span className="text-xl font-bold text-blue-600">FitGuide</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden space-x-8 md:flex">
            {navLinks.map((link) =>
              link.scroll ? (
                <ScrollLink
                  key={link.name}
                  to={link.href}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  className="text-sm font-medium text-gray-500 transition cursor-pointer hover:text-blue-600"
                >
                  {link.name}
                </ScrollLink>
              ) : (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`text-sm font-medium hover:text-blue-600 transition ${
                    isActive(link.href)
                      ? "text-blue-600 border-b-2 border-blue-600"
                      : "text-gray-500"
                  }`}
                >
                  {link.name}
                </Link>
              )
            )}
          </nav>

          {/* Desktop Buttons */}
          <div className="hidden space-x-4 md:flex">
            <button className="px-4 py-1 text-sm border border-gray-300 rounded hover:bg-gray-100">
              Sign In
            </button>
            <button className="px-4 py-1 text-sm text-white bg-blue-600 rounded hover:bg-blue-700">
              Sign Up
            </button>
          </div>

          {/* Mobile Menu*/}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="pt-4 mt-2 border-t md:hidden">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) =>
                link.scroll ? (
                  <ScrollLink
                    key={link.name}
                    to={link.href}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-sm font-medium text-gray-600 cursor-pointer hover:text-blue-600"
                  >
                    {link.name}
                  </ScrollLink>
                ) : (
                  <Link
                    key={link.name}
                    to={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                      isActive(link.href) ? "text-blue-600" : "text-gray-600"
                    }`}
                  >
                    {link.name}
                  </Link>
                )
              )}
              <div className="flex flex-col gap-2 pt-4">
                <button className="px-4 py-2 text-sm border border-gray-300 rounded hover:bg-gray-100">
                  Sign In
                </button>
                <button className="px-4 py-2 text-sm text-white bg-blue-600 rounded hover:bg-blue-700">
                  Sign Up
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
