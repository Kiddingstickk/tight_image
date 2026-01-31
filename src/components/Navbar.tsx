import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Phone, Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "Barbers", href: "#barbers" },
  { name: "Gallery", href: "#gallery" },
  { name: "Pricing", href: "#pricing" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [bookClicked, setBookClicked] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = document.getElementById("home")?.offsetHeight || 0;
      const scrollPosition = window.scrollY;
      if (scrollPosition > heroHeight * 0.8) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isVisible ? "bg-transparent backdrop-blur-sm" : "hidden"
      }`}
    >
      <div className="container mx-auto container-padding">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#home" className="text-red-600 font-bold text-2xl tracking-tight">
          BARBERSHOP
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-red-600 text-sm font-bold uppercase tracking-wider hover:text-blue-900 transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Phone & CTA */}
          <div className="hidden lg:flex items-center gap-6">
            <a
              href="tel:+13106941853"
              className="flex items-center gap-2 text-red-600 hover:text-blue-900 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="font-semibold">+13106941853</span>
            </a>
            <Button
              size="sm"
              className={`${
                bookClicked
                  ? "bg-blue-900 text-white"
                  : "bg-red-600 text-white hover:bg-blue-900"
              } font-bold`}
              onClick={() => setBookClicked(true)}
            >
              Book Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-red-600"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden pb-6 animate-fade-in">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-red-600 text-sm font-bold uppercase tracking-wider py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="tel:+13106941853"
                className="flex items-center gap-2 text-red-600 py-2"
              >
                <Phone className="w-4 h-4" />
                <span className="font-semibold">+13106941853</span>
              </a>
              <Button
                className="bg-red-600 text-white hover:bg-blue-950 w-full mt-2 font-bold"
              >
                Book Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;