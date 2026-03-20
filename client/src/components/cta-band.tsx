import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import CircuitBg from "./circuit-bg";

export default function CTABand() {
  return (
    <div
      className="relative overflow-hidden text-center"
      style={{
        background: "linear-gradient(135deg, rgba(12,36,58,0.9) 0%, rgba(15,23,42,0.95) 100%)",
        border: "1px solid rgba(56,189,248,0.15)",
        borderRadius: 20,
        padding: "60px 40px",
        margin: "80px 0 0",
      }}
    >
      <CircuitBg />
      <div className="relative z-10">
        <p className="font-mono text-xs font-bold tracking-[0.12em] uppercase mb-4" style={{ color: "#38bdf8" }}>
          Ready when you are
        </p>
        <h2
          className="font-sans font-[800] mb-4"
          style={{
            fontSize: "clamp(26px, 4vw, 42px)",
            color: "#f1f5f9",
          }}
        >
          Ready to Secure Your Organization?
        </h2>
        <p className="text-base mb-8 mx-auto" style={{ color: "#94a3b8", maxWidth: 520, lineHeight: 1.6 }}>
          Let's talk about your cybersecurity posture, compliance goals, and how we can help you get there.
        </p>
        <Link href="/contact" data-testid="link-cta-consultation">
          <span
            className="inline-flex items-center gap-2 font-sans text-sm font-bold cursor-pointer"
            style={{
              padding: "13px 28px",
              borderRadius: 8,
              background: "linear-gradient(135deg, #0ea5e9 0%, #38bdf8 100%)",
              color: "#0c1220",
              boxShadow: "0 0 32px rgba(56,189,248,0.25)",
              transition: "all 0.2s ease",
            }}
          >
            Request a Consultation
            <ArrowRight size={16} strokeWidth={2} />
          </span>
        </Link>
      </div>
    </div>
  );
}
