import { Link } from "wouter";
import { Shield } from "lucide-react";

export default function Footer() {
  return (
    <footer
      style={{
        background: "rgba(5,10,20,0.95)",
        borderTop: "1px solid rgba(56,189,248,0.08)",
        padding: "60px 0 32px",
      }}
    >
      <div className="max-w-[1120px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div
                className="w-7 h-7 rounded-[7px] flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, #0ea5e9, #6366f1)" }}
              >
                <Shield size={14} className="text-white" strokeWidth={2} />
              </div>
              <span className="text-sm font-[800]" style={{ color: "#f1f5f9" }}>
                CyberHub Solutions LLC
              </span>
            </div>
            <p className="text-[13px] leading-[1.7] max-w-[320px]" style={{ color: "#475569" }}>
              Veteran-led cybersecurity and compliance support for cloud and AI environments. Serving organizations nationwide from Wayne, NJ.
            </p>
            <p className="text-xs mt-4 leading-[1.6]" style={{ color: "#334155" }}>
              CyberHub Solutions LLC provides cybersecurity consulting and does not provide legal advice.
            </p>
          </div>

          <div>
            <p className="font-mono text-[11px] font-bold uppercase tracking-[0.1em] mb-4" style={{ color: "#475569" }}>
              Navigation
            </p>
            {[
              { label: "Home", href: "/" },
              { label: "About", href: "/about" },
              { label: "Services", href: "/services" },
              { label: "Contact", href: "/contact" },
            ].map((link) => (
              <Link key={link.href} href={link.href} data-testid={`link-footer-${link.label.toLowerCase()}`}>
                <span className="block text-sm py-1 cursor-pointer" style={{ color: "#475569" }}>
                  {link.label}
                </span>
              </Link>
            ))}
          </div>

          <div>
            <p className="font-mono text-[11px] font-bold uppercase tracking-[0.1em] mb-4" style={{ color: "#475569" }}>
              Expertise
            </p>
            {["RMF / NIST 800-53", "FedRAMP", "Cloud Security", "AI/ML Security", "CISA  ·  CISM  ·  PMP"].map((s) => (
              <p key={s} className="text-[13px] py-[3px]" style={{ color: "#475569" }}>
                {s}
              </p>
            ))}
          </div>
        </div>

        <div
          className="flex flex-col sm:flex-row justify-between items-center gap-2 pt-6"
          style={{ borderTop: "1px solid rgba(56,189,248,0.08)" }}
        >
          <p className="text-[13px]" style={{ color: "#334155" }}>
            &copy; {new Date().getFullYear()} CyberHub Solutions LLC. All rights reserved.
          </p>
          <p className="font-mono text-[13px]" style={{ color: "#334155" }}>
            Wayne, NJ &middot; Nationwide
          </p>
        </div>
      </div>
    </footer>
  );
}
