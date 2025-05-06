import { Link } from "react-router-dom";
import { Dumbbell, Instagram, Twitter, Facebook, Youtube } from "lucide-react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function Footer() {
  const handleLinkClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <ScrollToTop />
      <footer className="py-12 bg-muted">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            <div className="space-y-4">
              <Link
                to="/"
                className="flex items-center space-x-2"
                onClick={handleLinkClick}
              >
                <Dumbbell className="w-6 h-6 text-primary" />
                <span className="text-xl font-bold">FitGuide</span>
              </Link>
              <p className="text-sm text-muted-foreground">
                Your ultimate guide to fitness, workouts, and healthy living.
              </p>
              <div className="flex space-x-4">
                <Link
                  to="#"
                  className="text-muted-foreground hover:text-primary"
                  onClick={handleLinkClick}
                >
                  <Instagram className="w-5 h-5" />
                  <span className="sr-only">Instagram</span>
                </Link>
                <Link
                  to="#"
                  className="text-muted-foreground hover:text-primary"
                  onClick={handleLinkClick}
                >
                  <Twitter className="w-5 h-5" />
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link
                  to="#"
                  className="text-muted-foreground hover:text-primary"
                  onClick={handleLinkClick}
                >
                  <Facebook className="w-5 h-5" />
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link
                  to="#"
                  className="text-muted-foreground hover:text-primary"
                  onClick={handleLinkClick}
                >
                  <Youtube className="w-5 h-5" />
                  <span className="sr-only">YouTube</span>
                </Link>
              </div>
            </div>

            <div>
              <h3 className="mb-4 font-semibold">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/"
                    className="text-sm text-muted-foreground hover:text-primary"
                    onClick={handleLinkClick}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/workouts"
                    className="text-sm text-muted-foreground hover:text-primary"
                    onClick={handleLinkClick}
                  >
                    Workouts
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="text-sm text-muted-foreground hover:text-primary"
                    onClick={handleLinkClick}
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/blog"
                    className="text-sm text-muted-foreground hover:text-primary"
                    onClick={handleLinkClick}
                  >
                    Blog
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4 font-semibold">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/exercises"
                    className="text-sm text-muted-foreground hover:text-primary"
                    onClick={handleLinkClick}
                  >
                    Exercise Library
                  </Link>
                </li>
                <li>
                  <Link
                    to="/plans"
                    className="text-sm text-muted-foreground hover:text-primary"
                    onClick={handleLinkClick}
                  >
                    Workout Plans
                  </Link>
                </li>
                <li>
                  <Link
                    to="/nutrition"
                    className="text-sm text-muted-foreground hover:text-primary"
                    onClick={handleLinkClick}
                  >
                    Nutrition Guides
                  </Link>
                </li>
                <li>
                  <Link
                    to="/recovery"
                    className="text-sm text-muted-foreground hover:text-primary"
                    onClick={handleLinkClick}
                  >
                    Recovery Tips
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4 font-semibold">Contact</h3>
              <ul className="space-y-2">
                <li className="text-sm text-muted-foreground">
                  Email: support@fitguide.com
                </li>
                <li className="text-sm text-muted-foreground">
                  Phone: +91 9999988888
                </li>
                <li className="text-sm text-muted-foreground">
                  Address: Fitness St, Workout City
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 mt-8 text-sm text-center border-t text-muted-foreground">
            <p>
              &copy; {new Date().getFullYear()} FitGuide. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
