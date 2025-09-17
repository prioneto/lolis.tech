"use client";

import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-background/80 backdrop-blur-md border-b border-border" : "bg-transparent"}`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-primary cursor-pointer hover:wiggle transition-all duration-300 hover:scale-110">{"<prioneto />"}</div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("about")}
              className="text-foreground hover:text-primary transition-all duration-300 relative group playful-hover px-3 py-2 rounded-lg hover:bg-primary/10"
            >
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="text-foreground hover:text-primary transition-all duration-300 relative group playful-hover px-3 py-2 rounded-lg hover:bg-primary/10"
            >
              Skills
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection("experience")}
              className="text-foreground hover:text-primary transition-all duration-300 relative group playful-hover px-3 py-2 rounded-lg hover:bg-primary/10"
            >
              Experience
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection("certifications")}
              className="text-foreground hover:text-primary transition-all duration-300 relative group playful-hover px-3 py-2 rounded-lg hover:bg-primary/10"
            >
              Certifications
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-foreground hover:text-primary transition-all duration-300 relative group playful-hover px-3 py-2 rounded-lg hover:bg-primary/10"
            >
              Projects
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-foreground hover:text-primary transition-all duration-300 relative group playful-hover px-3 py-2 rounded-lg hover:bg-primary/10"
            >
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="md:hidden transition-all duration-300 hover:scale-110 hover:rotate-90 playful-hover" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div
            className="md:hidden mt-4 pb-4 border-t animate-in slide-in-from-top-2 duration-300"
            style={{
              borderColor: "oklch(0.92 0 0 / 0.5)",
              backdropFilter: "blur(10px)",
            }}
          >
            <div className="flex flex-col space-y-4 pt-4">
              <button
                onClick={() => scrollToSection("about")}
                className="text-left text-foreground hover:text-primary transition-all duration-300 playful-hover px-3 py-2 rounded-lg hover:bg-primary/10 animate-in slide-in-from-left-2"
                style={{ animationDelay: "0.1s" }}
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className="text-left text-foreground hover:text-primary transition-all duration-300 playful-hover px-3 py-2 rounded-lg hover:bg-primary/10 animate-in slide-in-from-left-2"
                style={{ animationDelay: "0.2s" }}
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection("experience")}
                className="text-left text-foreground hover:text-primary transition-all duration-300 playful-hover px-3 py-2 rounded-lg hover:bg-primary/10 animate-in slide-in-from-left-2"
                style={{ animationDelay: "0.3s" }}
              >
                Experience
              </button>
              <button
                onClick={() => scrollToSection("certifications")}
                className="text-left text-foreground hover:text-primary transition-all duration-300 playful-hover px-3 py-2 rounded-lg hover:bg-primary/10 animate-in slide-in-from-left-2"
                style={{ animationDelay: "0.4s" }}
              >
                Certifications
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="text-left text-foreground hover:text-primary transition-all duration-300 playful-hover px-3 py-2 rounded-lg hover:bg-primary/10 animate-in slide-in-from-left-2"
                style={{ animationDelay: "0.5s" }}
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-left text-foreground hover:text-primary transition-all duration-300 playful-hover px-3 py-2 rounded-lg hover:bg-primary/10 animate-in slide-in-from-left-2"
                style={{ animationDelay: "0.6s" }}
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
