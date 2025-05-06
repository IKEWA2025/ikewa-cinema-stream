
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Search,
  Bell,
  User,
} from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full px-4 py-3 md:px-10 flex items-center justify-between transition-all duration-300 ${
        isScrolled ? "bg-background shadow-md" : "bg-background/50 backdrop-blur-sm"
      }`}
    >
      <div className="flex items-center space-x-8">
        <Link to="/" className="flex items-center">
          <h1 className="text-2xl font-bold text-primary">IKEWA</h1>
        </Link>
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">
            Accueil
          </Link>
          <Link to="/series" className="text-sm font-medium hover:text-primary transition-colors">
            Séries
          </Link>
          <Link to="/films" className="text-sm font-medium hover:text-primary transition-colors">
            Films
          </Link>
          <Link to="/nouveautes" className="text-sm font-medium hover:text-primary transition-colors">
            Nouveautés
          </Link>
          <Link to="/ma-liste" className="text-sm font-medium hover:text-primary transition-colors">
            Ma Liste
          </Link>
        </nav>
      </div>

      <div className="flex items-center space-x-4">
        <div className={`relative transition-all duration-300 ${showSearch ? "w-64" : "w-10"}`}>
          {showSearch ? (
            <Input
              type="text"
              placeholder="Titres, personnes, genres..."
              className="bg-secondary/70 border-none h-9"
              autoFocus
              onBlur={() => setShowSearch(false)}
            />
          ) : (
            <Button
              variant="ghost"
              size="icon"
              className="h-10 w-10"
              onClick={() => setShowSearch(true)}
            >
              <Search className="h-5 w-5" />
            </Button>
          )}
        </div>
        <Button variant="ghost" size="icon" className="hidden md:flex">
          <Bell className="h-5 w-5" />
        </Button>
        <Link to="/login">
          <Button variant="ghost" size="icon">
            <User className="h-5 w-5" />
          </Button>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
