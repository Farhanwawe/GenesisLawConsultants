import { useState } from "react";
import { Link, useLocation } from "wouter";
import useSmoothScroll from "@/hooks/use-smooth-scroll";

interface HeaderProps {
  isScrolled: boolean;
}

const Header = ({ isScrolled }: HeaderProps) => {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollToAnchor } = useSmoothScroll();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const isActive = (path: string) => {
    return location === path;
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "nav-scrolled" : ""}`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <div className="text-navy mr-2">
            <i className="fas fa-balance-scale text-gold text-2xl"></i>
          </div>
          <div>
            <h1 className="font-display text-xl md:text-2xl font-bold text-navy">
            <span className={`${isScrolled ? "text-white" : "text-navy"}`}>Genesis</span> <span className="text-gold">Law</span></h1>
            <p className="text-xs text-midgray">
            <span className={`${isScrolled ? "text-white" : "text-navy"}`}>Consultants</span></p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex">
          <ul className={`flex space-x-8 ${isScrolled ? "text-white" : "text-navy"}`}>
            <li>
              <Link href="/" className={`font-medium transition-colors ${isActive("/") ? "text-gold" : "hover:text-gold"}`}>
                Home
              </Link>
            </li>
            <li>
              <a 
                href="/#about" 
                className="font-medium transition-colors hover:text-gold"
                onClick={scrollToAnchor}
              >
                About
              </a>
            </li>
            <li>
              <a 
                href="/#services" 
                className="font-medium transition-colors hover:text-gold"
                onClick={scrollToAnchor}
              >
                Services
              </a>
            </li>
            <li>
              <Link href="/team" className={`font-medium transition-colors ${isActive("/team") ? "text-gold" : "hover:text-gold"}`}>
                Our Team
              </Link>
            </li>
            <li>
              <a 
                href="/#contact" 
                className="bg-gold text-white px-4 py-2 rounded hover:bg-opacity-90 transition-all"
                onClick={scrollToAnchor}
              >
                Contact Us
              </a>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden text-navy focus:outline-none" 
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <i className="fas fa-bars text-xl"></i>
        </button>
      </div>

      {/* Mobile Navigation */}
      <nav className={`lg:hidden ${isMobileMenuOpen ? "" : "hidden"} bg-white shadow-lg absolute w-full`}>
        <ul className="container mx-auto px-4 py-4 space-y-4">
          <li>
            <Link 
              href="/" 
              className={`block py-2 transition-colors ${isActive("/") ? "text-gold" : "hover:text-gold"}`}
              onClick={closeMobileMenu}
            >
              Home
            </Link>
          </li>
          <li>
            <a 
              href="/#about" 
              className="block py-2 transition-colors hover:text-gold"
              onClick={(e) => {
                scrollToAnchor(e);
                closeMobileMenu();
              }}
            >
              About
            </a>
          </li>
          <li>
            <a 
              href="/#services" 
              className="block py-2 transition-colors hover:text-gold"
              onClick={(e) => {
                scrollToAnchor(e);
                closeMobileMenu();
              }}
            >
              Services
            </a>
          </li>
          <li>
            <Link 
              href="/team" 
              className={`block py-2 transition-colors ${isActive("/team") ? "text-gold" : "hover:text-gold"}`}
              onClick={closeMobileMenu}
            >
              Our Team
            </Link>
          </li>
          <li>
            <a 
              href="/#contact" 
              className="block py-2 text-gold font-medium hover:text-opacity-90 transition-colors"
              onClick={(e) => {
                scrollToAnchor(e);
                closeMobileMenu();
              }}
            >
              Contact Us
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
