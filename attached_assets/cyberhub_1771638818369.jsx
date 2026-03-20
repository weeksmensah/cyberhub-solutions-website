import { useState, useEffect, useRef } from "react";

// ── Icons (inline SVG to avoid import issues) ──────────────────────────────
const Icon = ({ d, size = 20, stroke = "currentColor", fill = "none", strokeWidth = 1.5, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d={d} />
  </svg>
);

const icons = {
  shield: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
  cloud: "M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z",
  cpu: "M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 0 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 0-2-2V9m0 0h18",
  lock: "M19 11H5a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2zM7 11V7a5 5 0 0 1 10 0v4",
  check: "M20 6 9 17l-5-5",
  arrow: "M5 12h14M12 5l7 7-7 7",
  menu: "M4 6h16M4 12h16M4 18h16",
  close: "M18 6 6 18M6 6l12 12",
  mail: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zM22 6l-10 7L2 6",
  phone: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 15a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.63 4h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 11.5a16 16 0 0 0 6.59 6.59l.98-.98a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z",
  map: "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0zM12 10m-3 0a3 3 0 1 0 6 0 3 3 0 0 0-6 0",
  clock: "M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20zM12 6v6l4 2",
  star: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z",
  brain: "M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2zM14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2z",
  external: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14 21 3",
  chevDown: "M6 9l6 6 6-6",
  chevUp: "M18 15l-6-6-6 6",
  user: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z",
  award: "M12 15 8.6 8A6 6 0 1 1 15.4 8L12 15zM8.21 13.89 7 23l5-3 5 3-1.21-9.12",
  zap: "M13 2 3 14h9l-1 8 10-12h-9l1-8z",
};

// ── Animated counter hook ────────────────────────────────────────────────
function useInView(ref) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.15 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return visible;
}

// ── Grid / circuit background ────────────────────────────────────────────
const CircuitBg = ({ className = "" }) => (
  <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" style={{ opacity: 0.04 }}>
      <defs>
        <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
          <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#38bdf8" strokeWidth="0.5" />
        </pattern>
        <pattern id="dots" width="60" height="60" patternUnits="userSpaceOnUse">
          <circle cx="30" cy="30" r="1" fill="#38bdf8" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" />
      <rect width="100%" height="100%" fill="url(#dots)" />
    </svg>
    {/* Glow orbs */}
    <div style={{ position: "absolute", top: "20%", left: "10%", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(56,189,248,0.07) 0%, transparent 70%)" }} />
    <div style={{ position: "absolute", bottom: "10%", right: "5%", width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(circle, rgba(99,102,241,0.06) 0%, transparent 70%)" }} />
  </div>
);

// ── Animated section wrapper ────────────────────────────────────────────
function FadeIn({ children, delay = 0, className = "" }) {
  const ref = useRef(null);
  const visible = useInView(ref);
  return (
    <div ref={ref} className={className} style={{
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(28px)",
      transition: `opacity 0.65s ease ${delay}s, transform 0.65s ease ${delay}s`,
    }}>
      {children}
    </div>
  );
}

// ── Cert Badge ──────────────────────────────────────────────────────────
const CertBadge = ({ label }) => (
  <span style={{
    display: "inline-flex", alignItems: "center", gap: 4,
    padding: "3px 10px", borderRadius: 999,
    background: "rgba(56,189,248,0.12)", border: "1px solid rgba(56,189,248,0.3)",
    color: "#7dd3fc", fontSize: 11, fontWeight: 700, letterSpacing: "0.08em",
    fontFamily: "'JetBrains Mono', monospace",
  }}>
    {label}
  </span>
);

// ── Service Card ────────────────────────────────────────────────────────
function ServiceCard({ iconKey, title, desc, bullets, delay = 0, large = false }) {
  const [hovered, setHovered] = useState(false);
  return (
    <FadeIn delay={delay}>
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          background: hovered
            ? "linear-gradient(135deg, rgba(15,23,42,0.95) 0%, rgba(12,36,58,0.95) 100%)"
            : "linear-gradient(135deg, rgba(15,23,42,0.8) 0%, rgba(15,23,42,0.6) 100%)",
          border: hovered ? "1px solid rgba(56,189,248,0.4)" : "1px solid rgba(56,189,248,0.12)",
          borderRadius: 16, padding: large ? "32px" : "28px",
          transition: "all 0.3s ease",
          transform: hovered ? "translateY(-4px)" : "translateY(0)",
          boxShadow: hovered ? "0 20px 60px rgba(56,189,248,0.08), 0 0 0 1px rgba(56,189,248,0.1)" : "none",
          cursor: "default",
        }}
      >
        <div style={{
          width: 48, height: 48, borderRadius: 12,
          background: "linear-gradient(135deg, rgba(56,189,248,0.15), rgba(99,102,241,0.1))",
          border: "1px solid rgba(56,189,248,0.2)",
          display: "flex", alignItems: "center", justifyContent: "center",
          marginBottom: 20, color: "#38bdf8",
        }}>
          <Icon d={icons[iconKey]} size={22} strokeWidth={1.5} />
        </div>
        <h3 style={{ fontSize: 17, fontWeight: 700, color: "#f1f5f9", marginBottom: 10, fontFamily: "'Sora', sans-serif" }}>{title}</h3>
        <p style={{ color: "#94a3b8", fontSize: 14, lineHeight: 1.65, marginBottom: bullets ? 16 : 0 }}>{desc}</p>
        {bullets && (
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 6 }}>
            {bullets.map((b, i) => (
              <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: 8, color: "#64748b", fontSize: 13 }}>
                <span style={{ color: "#38bdf8", marginTop: 2, flexShrink: 0 }}>
                  <Icon d={icons.check} size={13} strokeWidth={2.5} />
                </span>
                {b}
              </li>
            ))}
          </ul>
        )}
      </div>
    </FadeIn>
  );
}

// ── CTA Band ────────────────────────────────────────────────────────────
function CTABand({ onNav }) {
  return (
    <div style={{
      background: "linear-gradient(135deg, rgba(12,36,58,0.9) 0%, rgba(15,23,42,0.95) 100%)",
      border: "1px solid rgba(56,189,248,0.15)",
      borderRadius: 20, padding: "60px 40px",
      textAlign: "center", position: "relative", overflow: "hidden",
      margin: "80px 0 0",
    }}>
      <CircuitBg />
      <div style={{ position: "relative", zIndex: 1 }}>
        <p style={{ color: "#38bdf8", fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 16, fontFamily: "'JetBrains Mono', monospace" }}>
          Ready when you are
        </p>
        <h2 style={{ fontSize: "clamp(26px, 4vw, 42px)", fontWeight: 800, color: "#f1f5f9", marginBottom: 16, fontFamily: "'Sora', sans-serif" }}>
          Ready to Secure Your Organization?
        </h2>
        <p style={{ color: "#94a3b8", fontSize: 16, maxWidth: 520, margin: "0 auto 32px", lineHeight: 1.6 }}>
          Let's talk about your cybersecurity posture, compliance goals, and how we can help you get there.
        </p>
        <button onClick={() => onNav("contact")} style={btnPrimary}>
          Request a Consultation
          <Icon d={icons.arrow} size={16} strokeWidth={2} />
        </button>
      </div>
    </div>
  );
}

// ── Shared button styles ────────────────────────────────────────────────
const btnPrimary = {
  display: "inline-flex", alignItems: "center", gap: 8,
  padding: "13px 28px", borderRadius: 8,
  background: "linear-gradient(135deg, #0ea5e9 0%, #38bdf8 100%)",
  color: "#0c1220", fontSize: 14, fontWeight: 700,
  border: "none", cursor: "pointer",
  boxShadow: "0 0 32px rgba(56,189,248,0.25)",
  transition: "all 0.2s ease",
  fontFamily: "'Sora', sans-serif",
};

const btnSecondary = {
  display: "inline-flex", alignItems: "center", gap: 8,
  padding: "13px 28px", borderRadius: 8,
  background: "transparent",
  color: "#94a3b8", fontSize: 14, fontWeight: 600,
  border: "1px solid rgba(148,163,184,0.3)", cursor: "pointer",
  transition: "all 0.2s ease",
  fontFamily: "'Sora', sans-serif",
};

const container = { maxWidth: 1120, margin: "0 auto", padding: "0 24px" };

// ── PAGES ───────────────────────────────────────────────────────────────

// HOME
function Home({ onNav }) {
  return (
    <div>
      {/* Hero */}
      <section style={{ position: "relative", minHeight: "92vh", display: "flex", alignItems: "center", overflow: "hidden" }}>
        <CircuitBg />
        {/* Diagonal accent */}
        <div style={{
          position: "absolute", top: 0, right: 0, width: "50%", height: "100%",
          background: "linear-gradient(135deg, transparent 40%, rgba(56,189,248,0.03) 100%)",
          pointerEvents: "none",
        }} />
        <div style={{ ...container, position: "relative", zIndex: 1, paddingTop: 80, paddingBottom: 80 }}>
          <div style={{ maxWidth: 720 }}>
            <div style={{ marginBottom: 20 }}>
              <CertBadge label="CISA" /> <CertBadge label="CISM" /> <CertBadge label="PMP" />
              <span style={{ marginLeft: 12, color: "#64748b", fontSize: 12, fontFamily: "'JetBrains Mono', monospace" }}>// Veteran-Led. Audit-Ready.</span>
            </div>
            <h1 style={{
              fontSize: "clamp(34px, 5.5vw, 68px)", fontWeight: 900, lineHeight: 1.08,
              color: "#f1f5f9", marginBottom: 24, fontFamily: "'Sora', sans-serif",
              letterSpacing: "-0.02em",
            }}>
              Cybersecurity,<br />
              <span style={{ background: "linear-gradient(90deg, #38bdf8, #818cf8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Compliance &amp; Cloud
              </span>
              <br />Security Consulting
            </h1>
            <p style={{ fontSize: 18, color: "#94a3b8", lineHeight: 1.7, maxWidth: 580, marginBottom: 36 }}>
              Secure cloud and AI systems. Navigate RMF/FedRAMP with confidence. Ship compliant, resilient security programs—built for audit readiness and real-world execution.
            </p>
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              <button onClick={() => onNav("contact")} style={btnPrimary}>
                Request a Consultation
                <Icon d={icons.arrow} size={16} strokeWidth={2} />
              </button>
              <button onClick={() => onNav("services")} style={btnSecondary}>
                View Services
              </button>
            </div>
          </div>
        </div>
        {/* Floating stat card */}
        <div style={{
          position: "absolute", right: "5%", top: "50%", transform: "translateY(-50%)",
          display: "none", // hidden on small; show via media would require CSS
        }} />
      </section>

      {/* Trust strip */}
      <div style={{ borderTop: "1px solid rgba(56,189,248,0.1)", borderBottom: "1px solid rgba(56,189,248,0.1)", background: "rgba(15,23,42,0.6)", padding: "18px 0" }}>
        <div style={{ ...container, display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center", alignItems: "center" }}>
          {["DHS ISSO Experience", "Former AWS Security Controls PM", "US Navy Veteran", "CISA Certified", "CISM Certified", "PMP Certified"].map((t, i) => (
            <span key={i} style={{ display: "flex", alignItems: "center", gap: 8, color: "#64748b", fontSize: 13, fontFamily: "'JetBrains Mono', monospace" }}>
              {i > 0 && <span style={{ color: "#38bdf8", opacity: 0.4 }}>•</span>}
              <span style={{ color: "#94a3b8" }}>{t}</span>
            </span>
          ))}
        </div>
      </div>

      {/* Core Services */}
      <section style={{ padding: "100px 0 60px" }}>
        <div style={container}>
          <FadeIn>
            <div style={{ textAlign: "center", marginBottom: 64 }}>
              <p style={{ color: "#38bdf8", fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 12, fontFamily: "'JetBrains Mono', monospace" }}>What We Do</p>
              <h2 style={{ fontSize: "clamp(26px, 4vw, 44px)", fontWeight: 800, color: "#f1f5f9", marginBottom: 16, fontFamily: "'Sora', sans-serif" }}>Our Core Services</h2>
              <p style={{ color: "#64748b", fontSize: 16, maxWidth: 480, margin: "0 auto" }}>
                Hands-on expertise across the full compliance and cloud security lifecycle.
              </p>
            </div>
          </FadeIn>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 24 }}>
            <ServiceCard delay={0} iconKey="shield" title="Cybersecurity Risk Assessments" desc="Identify vulnerabilities before adversaries do. We deliver structured risk registers, findings, and actionable remediation roadmaps." bullets={["Risk register & threat analysis", "Executive summary report", "Remediation roadmap"]} />
            <ServiceCard delay={0.08} iconKey="lock" title="RMF / NIST 800-53 Implementation" desc="End-to-end RMF lifecycle support—from initial scoping to ATO package delivery—grounded in DHS-level rigor." bullets={["SSP authoring & control tailoring", "Evidence collection & RAR/SAR", "POA&M guidance"]} />
            <ServiceCard delay={0.16} iconKey="star" title="FedRAMP & Compliance Support" desc="Navigate FedRAMP authorization with an advisor who has lived the process from the inside at a federal agency." bullets={["Readiness & gap analysis", "Continuous monitoring approach", "Audit liaison support"]} />
            <ServiceCard delay={0.24} iconKey="cloud" title="Cloud Security (AWS, Azure, GCP)" desc="Harden your cloud footprint with purpose-built security controls, IAM governance, and automated guardrails." bullets={["IAM hardening & access reviews", "Logging, monitoring & alerting", "Security automation & vuln mgmt"]} />
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section style={{ padding: "80px 0" }}>
        <div style={container}>
          <FadeIn>
            <div style={{ textAlign: "center", marginBottom: 60 }}>
              <p style={{ color: "#38bdf8", fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 12, fontFamily: "'JetBrains Mono', monospace" }}>Our Process</p>
              <h2 style={{ fontSize: "clamp(24px, 3.5vw, 38px)", fontWeight: 800, color: "#f1f5f9", fontFamily: "'Sora', sans-serif" }}>How We Work</h2>
            </div>
          </FadeIn>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 24 }}>
            {[
              { step: "01", label: "Discover", desc: "Understand your environment, goals, risk tolerance, and compliance obligations." },
              { step: "02", label: "Assess", desc: "Conduct a structured evaluation of controls, gaps, and threat exposure." },
              { step: "03", label: "Implement", desc: "Deploy controls, draft documentation, and execute remediation in a practical sequence." },
              { step: "04", label: "Validate & Monitor", desc: "Test effectiveness, support audits, and build a continuous monitoring mindset." },
            ].map((s, i) => (
              <FadeIn key={i} delay={i * 0.09}>
                <div style={{ textAlign: "center", padding: "32px 20px", position: "relative" }}>
                  <div style={{ fontSize: 48, fontWeight: 900, color: "rgba(56,189,248,0.08)", fontFamily: "'Sora', sans-serif", lineHeight: 1, marginBottom: 12 }}>{s.step}</div>
                  <div style={{ width: 40, height: 2, background: "linear-gradient(90deg, #38bdf8, #818cf8)", margin: "0 auto 16px", borderRadius: 2 }} />
                  <h3 style={{ fontSize: 17, fontWeight: 700, color: "#e2e8f0", marginBottom: 10, fontFamily: "'Sora', sans-serif" }}>{s.label}</h3>
                  <p style={{ color: "#64748b", fontSize: 14, lineHeight: 1.6 }}>{s.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <div style={container}><CTABand onNav={onNav} /></div>
      <div style={{ height: 80 }} />
    </div>
  );
}

// ABOUT
function About({ onNav }) {
  return (
    <div>
      {/* Hero */}
      <section style={{ position: "relative", padding: "140px 0 80px", overflow: "hidden" }}>
        <CircuitBg />
        <div style={{ ...container, position: "relative", zIndex: 1 }}>
          <FadeIn>
            <p style={{ color: "#38bdf8", fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 16, fontFamily: "'JetBrains Mono', monospace" }}>Our Story</p>
            <h1 style={{ fontSize: "clamp(32px, 5vw, 60px)", fontWeight: 900, color: "#f1f5f9", marginBottom: 20, fontFamily: "'Sora', sans-serif", letterSpacing: "-0.02em", maxWidth: 700 }}>
              About CyberHub<br />Solutions LLC
            </h1>
            <p style={{ color: "#94a3b8", fontSize: 17, maxWidth: 560, lineHeight: 1.7 }}>
              Veteran-led cybersecurity and compliance support for cloud and AI environments—built for audit readiness and real-world execution.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Founder section */}
      <section style={{ padding: "60px 0 80px" }}>
        <div style={container}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 60, alignItems: "start", flexWrap: "wrap" }}>
            {/* Left: narrative */}
            <FadeIn>
              <div>
                <h2 style={{ fontSize: 28, fontWeight: 800, color: "#f1f5f9", marginBottom: 20, fontFamily: "'Sora', sans-serif" }}>Our Mission & Approach</h2>
                <p style={{ color: "#94a3b8", fontSize: 15, lineHeight: 1.75, marginBottom: 20 }}>
                  CyberHub Solutions was founded to bridge a persistent gap in the cybersecurity industry: the distance between documentation and execution. Many organizations invest in compliance frameworks but struggle to translate policy into hardened, audit-ready systems.
                </p>
                <p style={{ color: "#94a3b8", fontSize: 15, lineHeight: 1.75, marginBottom: 20 }}>
                  Our founder brings rare, direct experience from two of the most demanding cybersecurity environments in the world—the U.S. Department of Homeland Security and Amazon Web Services. That combination means you get federal-grade rigor applied with commercial-grade agility.
                </p>
                <p style={{ color: "#94a3b8", fontSize: 15, lineHeight: 1.75, marginBottom: 32 }}>
                  We specialize in practical outcomes: ATOs that move forward, cloud environments that pass scrutiny, and security programs that your engineers can actually maintain.
                </p>

                <h3 style={{ fontSize: 17, fontWeight: 700, color: "#e2e8f0", marginBottom: 16, fontFamily: "'Sora', sans-serif" }}>What We Help You Achieve</h3>
                <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                  {[
                    "Strengthen your cybersecurity posture across cloud and on-prem",
                    "Navigate RMF, FedRAMP, NIST 800-53, ISO 27001, and SOC 2 compliance",
                    "Reduce risk and protect sensitive government and commercial data",
                    "Build secure-by-design cloud and AI systems that pass audits",
                  ].map((b, i) => (
                    <li key={i} style={{ display: "flex", gap: 10, color: "#94a3b8", fontSize: 14, lineHeight: 1.5 }}>
                      <span style={{ color: "#38bdf8", marginTop: 2, flexShrink: 0 }}><Icon d={icons.check} size={14} strokeWidth={2.5} /></span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>

            {/* Right: founder card */}
            <FadeIn delay={0.12}>
              <div style={{
                background: "linear-gradient(135deg, rgba(12,36,58,0.9), rgba(15,23,42,0.95))",
                border: "1px solid rgba(56,189,248,0.2)", borderRadius: 20,
                padding: "32px", minWidth: 280, maxWidth: 320,
              }}>
                {/* Avatar placeholder */}
                <div style={{
                  width: "100%", aspectRatio: "1", borderRadius: 12, marginBottom: 24,
                  background: "linear-gradient(135deg, rgba(56,189,248,0.1), rgba(99,102,241,0.1))",
                  border: "1px solid rgba(56,189,248,0.15)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  overflow: "hidden",
                }}>
                  <div style={{ textAlign: "center" }}>
                    <Icon d={icons.user} size={56} stroke="rgba(56,189,248,0.3)" strokeWidth={1} />
                    <p style={{ color: "#334155", fontSize: 11, marginTop: 8, fontFamily: "'JetBrains Mono', monospace" }}>founder.jpg</p>
                  </div>
                </div>
                <h3 style={{ fontSize: 18, fontWeight: 800, color: "#f1f5f9", marginBottom: 4, fontFamily: "'Sora', sans-serif" }}>Yaw Afuakwah</h3>
                <p style={{ color: "#38bdf8", fontSize: 13, marginBottom: 4, fontFamily: "'JetBrains Mono', monospace" }}>M.Sc, PMP</p>
                <p style={{ color: "#64748b", fontSize: 13, marginBottom: 20, lineHeight: 1.5 }}>
                  Cybersecurity &amp; Cloud Security Leader<br />
                  ISSO, U.S. Dept. of Homeland Security
                </p>
                <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 20 }}>
                  <CertBadge label="CISA" />
                  <CertBadge label="CISM" />
                  <CertBadge label="PMP" />
                </div>
                <div style={{ borderTop: "1px solid rgba(56,189,248,0.1)", paddingTop: 16 }}>
                  <p style={{ color: "#64748b", fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 10, fontFamily: "'JetBrains Mono', monospace" }}>Focus Areas</p>
                  {["RMF / FedRAMP / ATO Lifecycle", "AWS Security Controls & IAM", "NIST 800-53, ISO 27001, SOC 2", "Cloud Security & AI/ML Risk"].map((f, i) => (
                    <div key={i} style={{ color: "#94a3b8", fontSize: 13, padding: "4px 0", borderBottom: i < 3 ? "1px solid rgba(30,41,59,0.8)" : "none" }}>{f}</div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Career timeline */}
          <FadeIn delay={0.1}>
            <div style={{ marginTop: 80 }}>
              <h2 style={{ fontSize: 26, fontWeight: 800, color: "#f1f5f9", marginBottom: 40, fontFamily: "'Sora', sans-serif" }}>Career Milestones</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
                {[
                  { period: "Sep 2023 – Present", role: "Information System Security Officer (ISSO)", org: "U.S. Department of Homeland Security", desc: "Leading RMF and ATO workflows, managing security controls, and overseeing continuous monitoring programs for federal information systems.", icon: "shield" },
                  { period: "Oct 2019 – Sep 2023", role: "AWS Security Controls Program Manager", org: "Amazon Web Services", desc: "Built and managed security controls programs across AWS infrastructure, translating complex compliance requirements into engineering realities at cloud scale.", icon: "cloud" },
                  { period: "Feb 2013 – Aug 2019", role: "Information Technology Specialist", org: "U.S. Navy", desc: "Served in IT and cybersecurity roles across naval operations, developing the discipline and mission-first mindset that underpins our consulting approach.", icon: "lock" },
                ].map((item, i) => (
                  <div key={i} style={{ display: "grid", gridTemplateColumns: "180px 1px 1fr", gap: "0 24px", paddingBottom: 40 }}>
                    <div style={{ textAlign: "right", paddingTop: 4 }}>
                      <span style={{ color: "#38bdf8", fontSize: 12, fontFamily: "'JetBrains Mono', monospace", lineHeight: 1.4 }}>{item.period}</span>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                      <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#38bdf8", flexShrink: 0, marginTop: 4 }} />
                      {i < 2 && <div style={{ flex: 1, width: 1, background: "rgba(56,189,248,0.2)", marginTop: 6 }} />}
                    </div>
                    <div style={{ paddingBottom: 8 }}>
                      <h4 style={{ fontSize: 15, fontWeight: 700, color: "#e2e8f0", marginBottom: 4, fontFamily: "'Sora', sans-serif" }}>{item.role}</h4>
                      <p style={{ color: "#38bdf8", fontSize: 13, marginBottom: 8, fontFamily: "'JetBrains Mono', monospace" }}>{item.org}</p>
                      <p style={{ color: "#64748b", fontSize: 14, lineHeight: 1.6 }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Why Choose Us */}
          <FadeIn delay={0.1}>
            <div style={{ marginTop: 40 }}>
              <h2 style={{ fontSize: 26, fontWeight: 800, color: "#f1f5f9", marginBottom: 24, fontFamily: "'Sora', sans-serif" }}>Why Choose Us</h2>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 20 }}>
                {[
                  { title: "Hands-on RMF Expertise", desc: "Direct ATO lifecycle experience from inside a major federal agency—not just theoretical knowledge." },
                  { title: "AWS Security Pedigree", desc: "Built security controls programs at AWS scale, with real engineering execution behind every recommendation." },
                  { title: "Clear Documentation", desc: "Deliverables that auditors can verify and engineers can implement—no vague boilerplate." },
                  { title: "Audit-Ready Mindset", desc: "Evidence packages, POA&M tracking, and continuous monitoring baked in from day one." },
                ].map((w, i) => (
                  <div key={i} style={{ background: "rgba(15,23,42,0.6)", border: "1px solid rgba(56,189,248,0.1)", borderRadius: 12, padding: "24px" }}>
                    <div style={{ width: 32, height: 2, background: "#38bdf8", marginBottom: 16, borderRadius: 2 }} />
                    <h4 style={{ fontSize: 15, fontWeight: 700, color: "#e2e8f0", marginBottom: 8, fontFamily: "'Sora', sans-serif" }}>{w.title}</h4>
                    <p style={{ color: "#64748b", fontSize: 14, lineHeight: 1.6 }}>{w.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <div style={container}><CTABand onNav={onNav} /></div>
      <div style={{ height: 80 }} />
    </div>
  );
}

// SERVICES
function Services({ onNav }) {
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    { q: "What is the RMF, and do I need it?", a: "The Risk Management Framework (RMF) is a NIST-developed process used primarily by federal agencies to authorize information systems. If you operate systems that process federal data, connect to federal networks, or seek a FedRAMP authorization, you very likely need RMF compliance. We help organizations scope the effort and navigate each phase efficiently." },
    { q: "How long does a FedRAMP authorization take?", a: "FedRAMP Ready can take 2–4 months of focused preparation. Full FedRAMP Authorization (Moderate or High) typically ranges from 12–24 months depending on system complexity, existing controls maturity, and whether you pursue Agency ATO or JAB P-ATO paths. We help you sequence the work to make progress as efficiently as possible." },
    { q: "What do I need to provide to get started?", a: "At minimum: a system inventory or architecture diagram, any existing security documentation (policies, SSP drafts, previous audits), and clarity on your compliance target (FedRAMP level, NIST baseline, etc.). We'll conduct an initial discovery call to scope the engagement before any paperwork is required." },
    { q: "Do you only serve federal clients?", a: "No. While our roots are in federal cybersecurity, our expertise applies directly to commercial organizations pursuing SOC 2, ISO 27001, or cloud security hardening. Many commercial firms also partner with federal agencies and benefit from RMF/FedRAMP readiness." },
    { q: "What's your approach to AI and agentic system security?", a: "AI/ML systems introduce unique risks—prompt injection, adversarial inputs, supply chain vulnerabilities, and opaque decision boundaries. We conduct threat modeling specific to AI workflows, assess model deployment configurations, and recommend guardrails and monitoring strategies aligned with emerging NIST AI Risk Management Framework (AI RMF) guidance." },
    { q: "Do you provide ongoing support or just point-in-time assessments?", a: "Both. We offer structured project engagements (assessments, ATO packages) as well as ongoing advisory retainers for continuous monitoring, POA&M management, and security program evolution. Engagements are scoped to your needs." },
    { q: "Are engagements remote or on-site?", a: "We are based in Wayne, NJ and serve clients nationwide. Most engagements are conducted remotely. On-site work is available for clients requiring it and can be scoped accordingly." },
  ];

  const services = [
    {
      iconKey: "shield", title: "Cybersecurity Risk Assessments",
      overview: "A structured, evidence-based risk assessment that gives your leadership and technical teams a clear picture of your threat exposure, control gaps, and prioritized remediation path.",
      deliverables: ["Risk register with threat-likelihood-impact ratings", "Detailed findings report", "Prioritized remediation roadmap", "Executive summary for leadership"],
      engagement: "Typically 2–6 weeks depending on system scope. Begins with discovery interviews and artifact review.",
    },
    {
      iconKey: "lock", title: "RMF / NIST 800-53 Implementation",
      overview: "End-to-end support for NIST 800-53 control implementation and the full RMF lifecycle—from initial categorization through ATO package submission and continuous monitoring setup.",
      deliverables: ["System Security Plan (SSP) authoring & review", "Control tailoring and baseline scoping", "Evidence collection and control testing support", "RAR/SAR support", "POA&M development and tracking guidance"],
      engagement: "Project-based or retainer. Scoped after initial discovery.",
    },
    {
      iconKey: "star", title: "FedRAMP & Compliance Support",
      overview: "FedRAMP authorization requires meticulous documentation, technical depth, and the ability to work effectively with 3PAOs, agencies, and PMO reviewers. We've navigated this from the inside.",
      deliverables: ["FedRAMP readiness assessment", "Gap analysis against selected baseline", "Control documentation and evidence support", "Continuous monitoring strategy", "Audit liaison and 3PAO coordination support"],
      engagement: "Structured project phases aligned to FedRAMP milestones.",
    },
    {
      iconKey: "cloud", title: "Cloud Security (AWS, Azure, GCP)",
      overview: "Cloud platforms introduce powerful capabilities and unique risks. We harden your cloud environment with purpose-built controls, governance frameworks, and automation that keeps pace with your engineering teams.",
      deliverables: ["IAM hardening and least-privilege access reviews", "Logging, monitoring, and alerting architecture", "Cloud security guardrails and SCPs/policies", "Security automation (IaC scanning, CSPM tuning)", "Vulnerability management alignment"],
      engagement: "Assessment phase + implementation support. Duration varies by environment complexity.",
    },
    {
      iconKey: "brain", title: "AI/ML & Agentic AI Security",
      overview: "AI systems—especially agentic workflows—introduce a new class of security risks including prompt injection, adversarial manipulation, data poisoning, and novel supply chain vulnerabilities. We bring structured threat modeling to your AI stack.",
      deliverables: ["AI-specific threat model for your deployment architecture", "Prompt injection and adversarial input mitigation strategies", "AI governance policy recommendations", "Secure deployment pattern guidance", "Alignment with NIST AI RMF"],
      engagement: "Assessment-driven. Suitable for organizations deploying LLMs, agentic systems, or ML-powered decision tools.",
      premium: true,
    },
  ];

  return (
    <div>
      <section style={{ position: "relative", padding: "140px 0 80px", overflow: "hidden" }}>
        <CircuitBg />
        <div style={{ ...container, position: "relative", zIndex: 1 }}>
          <FadeIn>
            <p style={{ color: "#38bdf8", fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 16, fontFamily: "'JetBrains Mono', monospace" }}>What We Offer</p>
            <h1 style={{ fontSize: "clamp(32px, 5vw, 60px)", fontWeight: 900, color: "#f1f5f9", marginBottom: 20, fontFamily: "'Sora', sans-serif", letterSpacing: "-0.02em" }}>Services</h1>
            <p style={{ color: "#94a3b8", fontSize: 17, maxWidth: 540, lineHeight: 1.7 }}>
              Expert cybersecurity and compliance solutions tailored for federal and commercial teams.
            </p>
          </FadeIn>
        </div>
      </section>

      <section style={{ padding: "20px 0 80px" }}>
        <div style={container}>
          <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
            {services.map((s, i) => (
              <FadeIn key={i} delay={0.05 * i}>
                <div style={{
                  background: "linear-gradient(135deg, rgba(12,36,58,0.7) 0%, rgba(15,23,42,0.8) 100%)",
                  border: s.premium ? "1px solid rgba(129,140,248,0.3)" : "1px solid rgba(56,189,248,0.12)",
                  borderRadius: 16, padding: "40px",
                  position: "relative", overflow: "hidden",
                }}>
                  {s.premium && (
                    <div style={{ position: "absolute", top: 20, right: 20 }}>
                      <span style={{ background: "linear-gradient(135deg, #6366f1, #818cf8)", color: "#fff", fontSize: 11, fontWeight: 700, padding: "4px 12px", borderRadius: 999, fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.08em" }}>PREMIUM</span>
                    </div>
                  )}
                  <div style={{ display: "flex", gap: 16, marginBottom: 24 }}>
                    <div style={{ width: 48, height: 48, borderRadius: 12, background: s.premium ? "rgba(99,102,241,0.12)" : "rgba(56,189,248,0.1)", border: `1px solid ${s.premium ? "rgba(129,140,248,0.25)" : "rgba(56,189,248,0.2)"}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, color: s.premium ? "#818cf8" : "#38bdf8" }}>
                      <Icon d={icons[s.iconKey]} size={22} strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 style={{ fontSize: 20, fontWeight: 800, color: "#f1f5f9", fontFamily: "'Sora', sans-serif", marginBottom: 6 }}>{s.title}</h3>
                      <p style={{ color: "#94a3b8", fontSize: 14, lineHeight: 1.65 }}>{s.overview}</p>
                    </div>
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32, marginTop: 8 }}>
                    <div>
                      <p style={{ color: "#38bdf8", fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 12, fontFamily: "'JetBrains Mono', monospace" }}>Deliverables</p>
                      <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: 8 }}>
                        {s.deliverables.map((d, j) => (
                          <li key={j} style={{ display: "flex", gap: 8, color: "#94a3b8", fontSize: 14 }}>
                            <span style={{ color: s.premium ? "#818cf8" : "#38bdf8", flexShrink: 0, marginTop: 2 }}><Icon d={icons.check} size={13} strokeWidth={2.5} /></span>
                            {d}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p style={{ color: "#38bdf8", fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 12, fontFamily: "'JetBrains Mono', monospace" }}>Typical Engagement</p>
                      <p style={{ color: "#64748b", fontSize: 14, lineHeight: 1.65 }}>{s.engagement}</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* FAQ */}
          <FadeIn delay={0.1}>
            <div style={{ marginTop: 80 }}>
              <h2 style={{ fontSize: 28, fontWeight: 800, color: "#f1f5f9", marginBottom: 40, fontFamily: "'Sora', sans-serif" }}>Frequently Asked Questions</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {faqs.map((f, i) => (
                  <div key={i} style={{
                    background: openFaq === i ? "rgba(12,36,58,0.8)" : "rgba(15,23,42,0.5)",
                    border: openFaq === i ? "1px solid rgba(56,189,248,0.25)" : "1px solid rgba(56,189,248,0.1)",
                    borderRadius: 12, overflow: "hidden", transition: "all 0.2s ease",
                  }}>
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      style={{ width: "100%", textAlign: "left", padding: "20px 24px", background: "none", border: "none", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16 }}
                    >
                      <span style={{ color: "#e2e8f0", fontSize: 15, fontWeight: 600, fontFamily: "'Sora', sans-serif" }}>{f.q}</span>
                      <span style={{ color: "#38bdf8", flexShrink: 0, transition: "transform 0.2s", transform: openFaq === i ? "rotate(180deg)" : "none" }}>
                        <Icon d={icons.chevDown} size={18} strokeWidth={2} />
                      </span>
                    </button>
                    {openFaq === i && (
                      <div style={{ padding: "0 24px 24px" }}>
                        <p style={{ color: "#64748b", fontSize: 14, lineHeight: 1.75 }}>{f.a}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <div style={container}><CTABand onNav={onNav} /></div>
      <div style={{ height: 80 }} />
    </div>
  );
}

// CONTACT
function Contact() {
  const [form, setForm] = useState({ name: "", email: "", org: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = e => setForm(p => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    await new Promise(r => setTimeout(r, 1200));
    setSubmitted(true);
    setSubmitting(false);
  };

  const inputStyle = {
    width: "100%", padding: "12px 16px", borderRadius: 8,
    background: "rgba(15,23,42,0.7)", border: "1px solid rgba(56,189,248,0.15)",
    color: "#e2e8f0", fontSize: 14, outline: "none",
    fontFamily: "'Sora', sans-serif",
    boxSizing: "border-box",
  };

  return (
    <div>
      <section style={{ position: "relative", padding: "140px 0 80px", overflow: "hidden" }}>
        <CircuitBg />
        <div style={{ ...container, position: "relative", zIndex: 1 }}>
          <FadeIn>
            <p style={{ color: "#38bdf8", fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 16, fontFamily: "'JetBrains Mono', monospace" }}>Get In Touch</p>
            <h1 style={{ fontSize: "clamp(32px, 5vw, 60px)", fontWeight: 900, color: "#f1f5f9", marginBottom: 20, fontFamily: "'Sora', sans-serif", letterSpacing: "-0.02em" }}>Contact</h1>
            <p style={{ color: "#94a3b8", fontSize: 17, maxWidth: 540, lineHeight: 1.7 }}>
              Discuss your cybersecurity, RMF, FedRAMP, or cloud security needs. We respond within one business day.
            </p>
          </FadeIn>
        </div>
      </section>

      <section style={{ padding: "20px 0 100px" }}>
        <div style={container}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: 60, alignItems: "start" }}>
            {/* Left: contact info */}
            <FadeIn>
              <div>
                <h2 style={{ fontSize: 22, fontWeight: 800, color: "#f1f5f9", marginBottom: 32, fontFamily: "'Sora', sans-serif" }}>Contact Information</h2>
                <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                  {[
                    { icon: "map", label: "Location", value: "Wayne, NJ\nServing clients nationwide (remote)" },
                    { icon: "mail", label: "Email", value: "info@cyberhubsolutionsllc.com" },
                    { icon: "phone", label: "Phone", value: "+1 (XXX) XXX-XXXX" },
                    { icon: "clock", label: "Hours", value: "Mon–Fri, 9:00 AM – 6:00 PM ET" },
                  ].map((c, i) => (
                    <div key={i} style={{ display: "flex", gap: 16 }}>
                      <div style={{ width: 40, height: 40, borderRadius: 10, background: "rgba(56,189,248,0.08)", border: "1px solid rgba(56,189,248,0.15)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, color: "#38bdf8" }}>
                        <Icon d={icons[c.icon]} size={18} strokeWidth={1.5} />
                      </div>
                      <div>
                        <p style={{ color: "#38bdf8", fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 4, fontFamily: "'JetBrains Mono', monospace" }}>{c.label}</p>
                        <p style={{ color: "#94a3b8", fontSize: 14, lineHeight: 1.6, whiteSpace: "pre-line" }}>{c.value}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Book consultation */}
                <div style={{ marginTop: 48, padding: "28px", background: "rgba(12,36,58,0.8)", border: "1px solid rgba(56,189,248,0.2)", borderRadius: 16 }}>
                  <h3 style={{ fontSize: 16, fontWeight: 700, color: "#e2e8f0", marginBottom: 8, fontFamily: "'Sora', sans-serif" }}>Book a Consultation</h3>
                  <p style={{ color: "#64748b", fontSize: 14, lineHeight: 1.6, marginBottom: 20 }}>
                    Schedule a 30-minute discovery call to discuss your security goals and how we can help.
                  </p>
                  <a href="https://calendly.com/your-link" target="_blank" rel="noopener noreferrer" style={{
                    ...btnPrimary, textDecoration: "none", fontSize: 13,
                  }}>
                    Schedule a Call
                    <Icon d={icons.external} size={14} strokeWidth={2} />
                  </a>
                </div>
              </div>
            </FadeIn>

            {/* Right: form */}
            <FadeIn delay={0.1}>
              <div style={{ background: "linear-gradient(135deg, rgba(12,36,58,0.8), rgba(15,23,42,0.9))", border: "1px solid rgba(56,189,248,0.15)", borderRadius: 20, padding: "40px" }}>
                {submitted ? (
                  <div style={{ textAlign: "center", padding: "40px 20px" }}>
                    <div style={{ width: 64, height: 64, borderRadius: "50%", background: "rgba(56,189,248,0.12)", border: "1px solid rgba(56,189,248,0.3)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 24px", color: "#38bdf8" }}>
                      <Icon d={icons.check} size={28} strokeWidth={2.5} />
                    </div>
                    <h3 style={{ fontSize: 22, fontWeight: 800, color: "#f1f5f9", marginBottom: 12, fontFamily: "'Sora', sans-serif" }}>Message Sent</h3>
                    <p style={{ color: "#94a3b8", fontSize: 15, lineHeight: 1.65 }}>
                      Thank you for reaching out. We'll be in touch within one business day.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <h2 style={{ fontSize: 20, fontWeight: 800, color: "#f1f5f9", marginBottom: 28, fontFamily: "'Sora', sans-serif" }}>Send a Message</h2>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
                      <div>
                        <label style={{ display: "block", color: "#64748b", fontSize: 12, fontWeight: 600, marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.06em", fontFamily: "'JetBrains Mono', monospace" }}>Full Name *</label>
                        <input name="name" required value={form.name} onChange={handleChange} placeholder="Jane Smith" style={inputStyle} />
                      </div>
                      <div>
                        <label style={{ display: "block", color: "#64748b", fontSize: 12, fontWeight: 600, marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.06em", fontFamily: "'JetBrains Mono', monospace" }}>Email *</label>
                        <input name="email" type="email" required value={form.email} onChange={handleChange} placeholder="jane@agency.gov" style={inputStyle} />
                      </div>
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
                      <div>
                        <label style={{ display: "block", color: "#64748b", fontSize: 12, fontWeight: 600, marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.06em", fontFamily: "'JetBrains Mono', monospace" }}>Organization *</label>
                        <input name="org" required value={form.org} onChange={handleChange} placeholder="Agency or Company" style={inputStyle} />
                      </div>
                      <div>
                        <label style={{ display: "block", color: "#64748b", fontSize: 12, fontWeight: 600, marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.06em", fontFamily: "'JetBrains Mono', monospace" }}>Phone (optional)</label>
                        <input name="phone" value={form.phone} onChange={handleChange} placeholder="+1 (555) 000-0000" style={inputStyle} />
                      </div>
                    </div>
                    <div style={{ marginBottom: 24 }}>
                      <label style={{ display: "block", color: "#64748b", fontSize: 12, fontWeight: 600, marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.06em", fontFamily: "'JetBrains Mono', monospace" }}>Message *</label>
                      <textarea name="message" required value={form.message} onChange={handleChange} rows={5} placeholder="Tell us about your compliance goals, current security challenges, or specific services you're interested in..." style={{ ...inputStyle, resize: "vertical", minHeight: 120 }} />
                    </div>
                    <button type="submit" disabled={submitting} style={{ ...btnPrimary, width: "100%", justifyContent: "center", opacity: submitting ? 0.7 : 1 }}>
                      {submitting ? "Sending..." : "Send Message"}
                      {!submitting && <Icon d={icons.arrow} size={16} strokeWidth={2} />}
                    </button>
                  </form>
                )}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}

// ── NAV ─────────────────────────────────────────────────────────────────
function Nav({ page, onNav }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const links = ["home", "about", "services", "contact"];

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
      background: scrolled ? "rgba(7,12,25,0.92)" : "rgba(7,12,25,0.7)",
      backdropFilter: "blur(20px)", borderBottom: "1px solid rgba(56,189,248,0.08)",
      transition: "background 0.3s ease",
    }}>
      <div style={{ ...container, display: "flex", alignItems: "center", height: 64, justifyContent: "space-between" }}>
        {/* Logo */}
        <button onClick={() => onNav("home")} style={{ background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 32, height: 32, borderRadius: 8, background: "linear-gradient(135deg, #0ea5e9, #6366f1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Icon d={icons.shield} size={16} stroke="#fff" strokeWidth={2} />
          </div>
          <span style={{ color: "#f1f5f9", fontSize: 15, fontWeight: 800, fontFamily: "'Sora', sans-serif", letterSpacing: "-0.01em" }}>CyberHub <span style={{ color: "#38bdf8" }}>Solutions</span></span>
        </button>

        {/* Desktop links */}
        <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
          {links.map(l => (
            <button key={l} onClick={() => { onNav(l); setMobileOpen(false); }} style={{
              background: "none", border: "none", cursor: "pointer",
              padding: "6px 14px", borderRadius: 6,
              color: page === l ? "#38bdf8" : "#94a3b8",
              fontSize: 14, fontWeight: 600, fontFamily: "'Sora', sans-serif",
              textTransform: "capitalize",
              background: page === l ? "rgba(56,189,248,0.08)" : "none",
            }}>
              {l === "home" ? "Home" : l.charAt(0).toUpperCase() + l.slice(1)}
            </button>
          ))}
          <button onClick={() => onNav("contact")} style={{ ...btnPrimary, padding: "8px 18px", fontSize: 13, marginLeft: 12 }}>
            Request Consultation
          </button>
        </div>
      </div>
    </nav>
  );
}

// ── FOOTER ───────────────────────────────────────────────────────────────
function Footer({ onNav }) {
  return (
    <footer style={{ background: "rgba(5,10,20,0.95)", borderTop: "1px solid rgba(56,189,248,0.08)", padding: "60px 0 32px" }}>
      <div style={container}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr", gap: 48, marginBottom: 48 }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
              <div style={{ width: 28, height: 28, borderRadius: 7, background: "linear-gradient(135deg, #0ea5e9, #6366f1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Icon d={icons.shield} size={14} stroke="#fff" strokeWidth={2} />
              </div>
              <span style={{ color: "#f1f5f9", fontSize: 14, fontWeight: 800, fontFamily: "'Sora', sans-serif" }}>CyberHub Solutions LLC</span>
            </div>
            <p style={{ color: "#475569", fontSize: 13, lineHeight: 1.7, maxWidth: 320 }}>
              Veteran-led cybersecurity and compliance support for cloud and AI environments. Serving organizations nationwide from Wayne, NJ.
            </p>
            <p style={{ color: "#334155", fontSize: 12, marginTop: 16, lineHeight: 1.6 }}>
              CyberHub Solutions LLC provides cybersecurity consulting and does not provide legal advice.
            </p>
          </div>
          <div>
            <p style={{ color: "#475569", fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 16, fontFamily: "'JetBrains Mono', monospace" }}>Navigation</p>
            {["home", "about", "services", "contact"].map(l => (
              <button key={l} onClick={() => onNav(l)} style={{ display: "block", background: "none", border: "none", cursor: "pointer", color: "#475569", fontSize: 14, padding: "4px 0", textTransform: "capitalize", fontFamily: "'Sora', sans-serif" }}>
                {l === "home" ? "Home" : l.charAt(0).toUpperCase() + l.slice(1)}
              </button>
            ))}
          </div>
          <div>
            <p style={{ color: "#475569", fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 16, fontFamily: "'JetBrains Mono', monospace" }}>Expertise</p>
            {["RMF / NIST 800-53", "FedRAMP", "Cloud Security", "AI/ML Security", "CISA • CISM • PMP"].map((s, i) => (
              <p key={i} style={{ color: "#475569", fontSize: 13, padding: "3px 0" }}>{s}</p>
            ))}
          </div>
        </div>
        <div style={{ borderTop: "1px solid rgba(56,189,248,0.08)", paddingTop: 24, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <p style={{ color: "#334155", fontSize: 13 }}>© 2025 CyberHub Solutions LLC. All rights reserved.</p>
          <p style={{ color: "#334155", fontSize: 13, fontFamily: "'JetBrains Mono', monospace" }}>Wayne, NJ · Nationwide</p>
        </div>
      </div>
    </footer>
  );
}

// ── APP ──────────────────────────────────────────────────────────────────
export default function App() {
  const [page, setPage] = useState("home");

  const navigate = useCallback((p) => {
    setPage(p);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(180deg, #070c19 0%, #080e1e 50%, #050a14 100%)",
      fontFamily: "'Sora', sans-serif",
      color: "#f1f5f9",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800;900&family=JetBrains+Mono:wght@400;700&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        button { font-family: inherit; }
        input, textarea { font-family: inherit; }
        input::placeholder, textarea::placeholder { color: #334155; }
        input:focus, textarea:focus { border-color: rgba(56,189,248,0.4) !important; box-shadow: 0 0 0 3px rgba(56,189,248,0.08); }
        ::-webkit-scrollbar { width: 6px; } ::-webkit-scrollbar-track { background: #050a14; } ::-webkit-scrollbar-thumb { background: rgba(56,189,248,0.2); border-radius: 3px; }
        a:hover { opacity: 0.85; }
      `}</style>

      <Nav page={page} onNav={navigate} />

      <main style={{ paddingTop: 64 }}>
        {page === "home" && <Home onNav={navigate} />}
        {page === "about" && <About onNav={navigate} />}
        {page === "services" && <Services onNav={navigate} />}
        {page === "contact" && <Contact />}
      </main>

      <Footer onNav={navigate} />
    </div>
  );
}
