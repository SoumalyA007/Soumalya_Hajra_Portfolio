import { Button } from "@/components/ui/button";
import { useTheme } from "@/hooks/useTheme";
import type { NavLink, NavSection } from "@/types/portfolio";
import { Menu, Moon, ShieldCheck, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";

const NAV_LINKS: NavLink[] = [
  { id: "home", label: "Home", href: "#home" },
  { id: "about", label: "About", href: "#about" },
  { id: "skills", label: "Skills", href: "#skills" },
  { id: "projects", label: "Projects", href: "#projects" },
  { id: "experience", label: "Experience", href: "#experience" },
  { id: "blog", label: "Blog", href: "#blog" },
  { id: "contact", label: "Contact", href: "#contact" },
];

interface NavbarProps {
  activeSection: NavSection;
  setActiveSection: (section: NavSection) => void;
}

export function Navbar({ activeSection, setActiveSection }: NavbarProps) {
  const { theme, toggleTheme, isDark } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const id = href.replace("#", "") as NavSection;
    setActiveSection(id);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        data-ocid="navbar"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "nav-blur border-b border-border/60 shadow-elevated-dark"
            : "bg-transparent"
        }`}
      >
        <nav className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <button
            type="button"
            onClick={() => handleNavClick("#home")}
            data-ocid="navbar.logo.link"
            className="flex items-center gap-2 font-display font-bold text-lg transition-smooth hover:text-accent"
          >
            <span className="w-8 h-8 rounded-md bg-accent/20 border border-accent/40 flex items-center justify-center">
              <ShieldCheck className="w-4 h-4 text-accent" />
            </span>
            <span className="text-foreground">
              S<span className="text-accent">H</span>
            </span>
          </button>

          {/* Desktop Nav Links */}
          <ul className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.id}>
                <button
                  type="button"
                  data-ocid={`navbar.${link.id}.link`}
                  onClick={() => handleNavClick(link.href)}
                  className={`relative px-3 py-2 text-sm font-medium rounded-md transition-smooth ${
                    activeSection === link.id
                      ? "text-accent"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.label}
                  {activeSection === link.id && (
                    <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-accent rounded-full" />
                  )}
                </button>
              </li>
            ))}
          </ul>

          {/* Right Controls */}
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              data-ocid="navbar.theme.toggle"
              onClick={toggleTheme}
              aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
              className="w-9 h-9 text-muted-foreground hover:text-foreground transition-smooth"
              title={theme}
            >
              {isDark ? (
                <Sun className="w-4 h-4" />
              ) : (
                <Moon className="w-4 h-4" />
              )}
            </Button>

            {/* To enable downloads: replace src/frontend/public/resume.pdf with your actual resume PDF */}
            <a
              href="/resume.pdf"
              download
              data-ocid="navbar.resume.button"
              className="hidden md:flex items-center gap-1.5 px-4 py-1.5 text-sm font-medium rounded-md bg-accent/10 border border-accent/30 text-accent btn-glow transition-smooth hover:bg-accent/20"
            >
              Resume
            </a>

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="icon"
              data-ocid="navbar.mobile_menu.toggle"
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-label="Toggle mobile menu"
              aria-expanded={mobileOpen}
              className="md:hidden w-9 h-9 text-muted-foreground hover:text-foreground"
            >
              {mobileOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </Button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <button
          type="button"
          className="fixed inset-0 z-40 md:hidden w-full h-full cursor-default bg-transparent border-0 p-0"
          onClick={() => setMobileOpen(false)}
          aria-label="Close menu"
        />
      )}

      {/* Mobile Menu Drawer */}
      <div
        data-ocid="navbar.mobile_menu"
        className={`fixed top-16 left-0 right-0 z-50 md:hidden nav-blur border-b border-border/60 transition-all duration-300 overflow-hidden ${
          mobileOpen
            ? "max-h-screen opacity-100"
            : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <nav className="px-4 py-4 flex flex-col gap-1">
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              type="button"
              data-ocid={`navbar.mobile.${link.id}.link`}
              onClick={() => handleNavClick(link.href)}
              className={`px-4 py-3 rounded-md text-sm font-medium transition-smooth text-left ${
                activeSection === link.id
                  ? "bg-accent/10 text-accent border border-accent/20"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
              }`}
            >
              {link.label}
            </button>
          ))}
          {/* To enable downloads: replace src/frontend/public/resume.pdf with your actual resume PDF */}
          <a
            href="/resume.pdf"
            download
            data-ocid="navbar.mobile.resume.button"
            className="mt-2 px-4 py-3 rounded-md text-sm font-medium bg-accent/10 border border-accent/30 text-accent text-center btn-glow"
          >
            Download Resume
          </a>
        </nav>
      </div>
    </>
  );
}
