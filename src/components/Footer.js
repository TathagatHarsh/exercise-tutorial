import { Link } from "react-router-dom";
import {
  Dumbbell,
  Instagram,
  Twitter,
  Facebook,
  Youtube,
  Mail,
  Phone,
  MapPin,
  ArrowUp,
  Heart,
} from "lucide-react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <ScrollToTop />
      <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Newsletter Section */}
          <div className="mb-12 bg-gray-800 rounded-2xl p-8">
            <div className="md:flex items-center justify-between">
              <div className="mb-6 md:mb-0">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Stay Updated with FitGuide
                </h3>
                <p className="text-gray-400">
                  Get weekly workout tips, nutrition advice, and fitness
                  inspiration.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-2 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Brand Section */}
            <div className="space-y-6">
              <Link
                to="/"
                className="flex items-center space-x-2"
                onClick={handleLinkClick}
              >
                <Dumbbell className="w-8 h-8 text-blue-500" />
                <span className="text-2xl font-bold text-white">FitGuide</span>
              </Link>
              <p className="text-gray-400">
                Your ultimate guide to fitness, workouts, and healthy living.
                Join our community and transform your life through fitness
                excellence.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-400 transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-800 transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-red-600 transition-colors"
                >
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-6">
                Quick Links
              </h3>
              <ul className="space-y-4">
                <li>
                  <Link
                    to="/"
                    className="text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-2"
                    onClick={handleLinkClick}
                  >
                    <span className="w-1 h-1 bg-blue-500 rounded-full"></span>
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/exercises"
                    className="text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-2"
                    onClick={handleLinkClick}
                  >
                    <span className="w-1 h-1 bg-blue-500 rounded-full"></span>
                    Exercises
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-2"
                    onClick={handleLinkClick}
                  >
                    <span className="w-1 h-1 bg-blue-500 rounded-full"></span>
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/blog"
                    className="text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-2"
                    onClick={handleLinkClick}
                  >
                    <span className="w-1 h-1 bg-blue-500 rounded-full"></span>
                    Blog
                  </Link>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-6">
                Resources
              </h3>
              <ul className="space-y-4">
                <li>
                  <Link
                    to="/workout-plans"
                    className="text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-2"
                    onClick={handleLinkClick}
                  >
                    <span className="w-1 h-1 bg-blue-500 rounded-full"></span>
                    Workout Plans
                  </Link>
                </li>
                <li>
                  <Link
                    to="/nutrition"
                    className="text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-2"
                    onClick={handleLinkClick}
                  >
                    <span className="w-1 h-1 bg-blue-500 rounded-full"></span>
                    Nutrition Guide
                  </Link>
                </li>
                <li>
                  <Link
                    to="/trainers"
                    className="text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-2"
                    onClick={handleLinkClick}
                  >
                    <span className="w-1 h-1 bg-blue-500 rounded-full"></span>
                    Trainers
                  </Link>
                </li>
                <li>
                  <Link
                    to="/faq"
                    className="text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-2"
                    onClick={handleLinkClick}
                  >
                    <span className="w-1 h-1 bg-blue-500 rounded-full"></span>
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-6">
                Contact Us
              </h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-gray-400">
                  <Mail className="w-5 h-5 text-blue-500" />
                  <a
                    href="mailto:support@fitguide.com"
                    className="hover:text-blue-400 transition-colors"
                  >
                    support@fitguide.com
                  </a>
                </li>
                <li className="flex items-center gap-3 text-gray-400">
                  <Phone className="w-5 h-5 text-blue-500" />
                  <a
                    href="tel:+919999988888"
                    className="hover:text-blue-400 transition-colors"
                  >
                    +91 9999988888
                  </a>
                </li>
                <li className="flex items-start gap-3 text-gray-400">
                  <MapPin className="w-5 h-5 text-blue-500 mt-1" />
                  <span>
                    123 Fitness Street,
                    <br />
                    Workout City, WC 12345
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-gray-800">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-gray-400 text-sm">
                &copy; {new Date().getFullYear()} FitGuide. Made with{" "}
                <Heart className="w-4 h-4 inline text-red-500" /> in India
              </div>
              <div className="flex items-center gap-6 text-sm text-gray-400">
                <Link
                  to="/privacy"
                  className="hover:text-blue-400 transition-colors"
                >
                  Privacy Policy
                </Link>
                <Link
                  to="/terms"
                  className="hover:text-blue-400 transition-colors"
                >
                  Terms of Service
                </Link>
                <Link
                  to="/cookies"
                  className="hover:text-blue-400 transition-colors"
                >
                  Cookie Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed right-6 bottom-6 p-3 rounded-full bg-blue-600 text-white shadow-lg transition-all duration-300 hover:bg-blue-700 focus:outline-none ${
          showScrollTop
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10 pointer-events-none"
        }`}
      >
        <ArrowUp className="w-6 h-6" />
      </button>
    </>
  );
}
