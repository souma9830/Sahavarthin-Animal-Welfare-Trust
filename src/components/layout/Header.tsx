import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";
import MegaMenu from "./MegaMenu";
import MobileMenu from "./MobileMenu";
import { useIsMobile } from "@/hooks/use-mobile";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);
  const isMobile = useIsMobile();

  useEffect(() => {
    if (!isMobile) { setVisible(true); return; }
    const onScroll = () => {
      const currentY = window.scrollY;
      setVisible(currentY < lastScrollY.current || currentY < 10);
      lastScrollY.current = currentY;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isMobile]);

  return (
    <header
      className="sticky top-0 z-50 transition-transform duration-300"
      style={{
        backgroundColor: "#FBF8F2",
        borderBottom: "1px solid #E6DFCF",
        transform: !visible && isMobile ? "translateY(-100%)" : "translateY(0)",
      }}
    >
      <div className="container-page flex items-center justify-between px-4 lg:px-8" style={{ height: "58px" }}>
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Sahavarthin Animal Welfare Trust" className="h-12 w-12 object-contain" />
          <div className="hidden sm:block">
            <span className="font-heading text-lg text-foreground leading-tight block">Sahavarthin</span>
            <span className="text-xs text-muted-foreground tracking-wide">Protect & Coexist</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:block">
          <MegaMenu />
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <Button
            asChild
            className="hidden sm:inline-flex text-white hover:brightness-90"
            style={{ backgroundColor: "#3E7A5E", borderRadius: "8px" }}
          >
            <Link to="/donate">
              Donate
            </Link>
          </Button>
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && <MobileMenu onClose={() => setMobileOpen(false)} />}
    </header>
  );
};

export default Header;
