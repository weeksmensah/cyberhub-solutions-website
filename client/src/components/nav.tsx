import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Shield, Menu, X, ArrowRight } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-[1000] transition-colors duration-300"
      style={{
        background: scrolled ? "rgba(7,12,25,0.92)" : "rgba(7,12,25,0.7)",
        backdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(56,189,248,0.08)",
      }}
      data-testid="nav-main"
    >
      <div className="max-w-[1120px] mx-auto px-6 flex items-center h-16 justify-between">
        <Link href="/" data-testid="link-logo">
          <span className="flex items-center gap-2.5 cursor-pointer">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center"
              style={{ background: "linear-gradient(135deg, #0ea5e9, #6366f1)" }}
            >
              <Shield size={16} className="text-white" strokeWidth={2} />
            </div>
            <span className="text-[15px] font-[800] tracking-[-0.01em]" style={{ color: "#f1f5f9" }}>
              CyberHub <span style={{ color: "#38bdf8" }}>Solutions</span>
            </span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} data-testid={`link-nav-${link.label.toLowerCase()}`}>
              <span
                className="px-3.5 py-1.5 rounded-md text-sm font-semibold cursor-pointer transition-colors"
                style={{
                  color: location === link.href ? "#38bdf8" : "#94a3b8",
                  background: location === link.href ? "rgba(56,189,248,0.08)" : "transparent",
                }}
              >
                {link.label}
              </span>
            </Link>
          ))}
          <Link href="/contact" data-testid="link-nav-cta">
            <span
              className="inline-flex items-center gap-2 ml-3 text-[13px] font-bold cursor-pointer"
              style={{
                padding: "8px 18px",
                borderRadius: 8,
                background: "linear-gradient(135deg, #0ea5e9 0%, #38bdf8 100%)",
                color: "#0c1220",
                boxShadow: "0 0 32px rgba(56,189,248,0.25)",
              }}
            >
              Request Consultation
            </span>
          </Link>
        </div>

        <button
          className="md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{ background: "none", border: "none", color: "#94a3b8", cursor: "pointer" }}
          data-testid="button-mobile-menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div
          className="md:hidden"
          style={{
            background: "rgba(7,12,25,0.98)",
            borderTop: "1px solid rgba(56,189,248,0.08)",
            padding: "16px 24px 24px",
          }}
        >
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} data-testid={`link-mobile-${link.label.toLowerCase()}`}>
              <span
                className="block py-3 text-[15px] font-semibold cursor-pointer"
                style={{
                  color: location === link.href ? "#38bdf8" : "#94a3b8",
                  borderBottom: "1px solid rgba(56,189,248,0.06)",
                }}
              >
                {link.label}
              </span>
            </Link>
          ))}
          <Link href="/contact" data-testid="link-mobile-cta">
            <span
              className="inline-flex items-center gap-2 mt-4 text-sm font-bold cursor-pointer w-full justify-center"
              style={{
                padding: "12px 24px",
                borderRadius: 8,
                background: "linear-gradient(135deg, #0ea5e9 0%, #38bdf8 100%)",
                color: "#0c1220",
              }}
            >
              Request Consultation
              <ArrowRight size={16} strokeWidth={2} />
            </span>
          </Link>
        </div>
      )}
    </nav>
  );
}
