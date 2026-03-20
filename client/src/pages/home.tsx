import { Link } from "wouter";
import {
  Shield,
  Lock,
  Star,
  Cloud,
  Check,
  ArrowRight,
} from "lucide-react";
import CircuitBg from "@/components/circuit-bg";
import FadeIn from "@/components/fade-in";
import CertBadge from "@/components/cert-badge";
import CTABand from "@/components/cta-band";

const services = [
  {
    icon: Shield,
    title: "Cybersecurity Risk Assessments",
    desc: "Identify vulnerabilities before adversaries do. We deliver structured risk registers, findings, and actionable remediation roadmaps.",
    bullets: ["Risk register & threat analysis", "Executive summary report", "Remediation roadmap"],
  },
  {
    icon: Lock,
    title: "RMF / NIST 800-53 Implementation",
    desc: "End-to-end RMF lifecycle support—from initial scoping to ATO package delivery—grounded in DHS-level rigor.",
    bullets: ["SSP authoring & control tailoring", "Evidence collection & RAR/SAR", "POA&M guidance"],
  },
  {
    icon: Star,
    title: "FedRAMP & Compliance Support",
    desc: "Navigate FedRAMP authorization with an advisor who has lived the process from the inside at a federal agency.",
    bullets: ["Readiness & gap analysis", "Continuous monitoring approach", "Audit liaison support"],
  },
  {
    icon: Cloud,
    title: "Cloud Security (AWS, Azure, GCP)",
    desc: "Harden your cloud footprint with purpose-built security controls, IAM governance, and automated guardrails.",
    bullets: ["IAM hardening & access reviews", "Logging, monitoring & alerting", "Security automation & vuln mgmt"],
  },
];

const steps = [
  { step: "01", label: "Discover", desc: "Understand your environment, goals, risk tolerance, and compliance obligations." },
  { step: "02", label: "Assess", desc: "Conduct a structured evaluation of controls, gaps, and threat exposure." },
  { step: "03", label: "Implement", desc: "Deploy controls, draft documentation, and execute remediation in a practical sequence." },
  { step: "04", label: "Validate & Monitor", desc: "Test effectiveness, support audits, and build a continuous monitoring mindset." },
];

function ServiceCard({
  icon: Icon,
  title,
  desc,
  bullets,
  delay,
}: {
  icon: typeof Shield;
  title: string;
  desc: string;
  bullets: string[];
  delay: number;
}) {
  return (
    <FadeIn delay={delay}>
      <div
        className="group cursor-default transition-all duration-300"
        style={{
          background: "linear-gradient(135deg, rgba(15,23,42,0.8) 0%, rgba(15,23,42,0.6) 100%)",
          border: "1px solid rgba(56,189,248,0.12)",
          borderRadius: 16,
          padding: 28,
        }}
        onMouseEnter={(e) => {
          const el = e.currentTarget;
          el.style.background = "linear-gradient(135deg, rgba(15,23,42,0.95) 0%, rgba(12,36,58,0.95) 100%)";
          el.style.borderColor = "rgba(56,189,248,0.4)";
          el.style.transform = "translateY(-4px)";
          el.style.boxShadow = "0 20px 60px rgba(56,189,248,0.08), 0 0 0 1px rgba(56,189,248,0.1)";
        }}
        onMouseLeave={(e) => {
          const el = e.currentTarget;
          el.style.background = "linear-gradient(135deg, rgba(15,23,42,0.8) 0%, rgba(15,23,42,0.6) 100%)";
          el.style.borderColor = "rgba(56,189,248,0.12)";
          el.style.transform = "translateY(0)";
          el.style.boxShadow = "none";
        }}
      >
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
          style={{
            background: "linear-gradient(135deg, rgba(56,189,248,0.15), rgba(99,102,241,0.1))",
            border: "1px solid rgba(56,189,248,0.2)",
            color: "#38bdf8",
          }}
        >
          <Icon size={22} strokeWidth={1.5} />
        </div>
        <h3 className="text-[17px] font-bold mb-2.5" style={{ color: "#f1f5f9" }}>
          {title}
        </h3>
        <p className="text-sm leading-[1.65] mb-4" style={{ color: "#94a3b8" }}>
          {desc}
        </p>
        <ul className="flex flex-col gap-1.5 list-none p-0 m-0">
          {bullets.map((b, i) => (
            <li key={i} className="flex items-start gap-2 text-[13px]" style={{ color: "#64748b" }}>
              <span className="mt-0.5 flex-shrink-0" style={{ color: "#38bdf8" }}>
                <Check size={13} strokeWidth={2.5} />
              </span>
              {b}
            </li>
          ))}
        </ul>
      </div>
    </FadeIn>
  );
}

export default function Home() {
  return (
    <div>
      <section className="relative min-h-[92vh] flex items-center overflow-hidden">
        <CircuitBg />
        <div
          className="absolute top-0 right-0 w-1/2 h-full pointer-events-none"
          style={{ background: "linear-gradient(135deg, transparent 40%, rgba(56,189,248,0.03) 100%)" }}
        />
        <div className="max-w-[1120px] mx-auto px-6 relative z-10 py-20">
          <div className="max-w-[720px]">
            <div className="mb-5 flex flex-wrap items-center gap-2">
              <CertBadge label="CISA" />
              <CertBadge label="CISM" />
              <CertBadge label="PMP" />
              <span className="ml-2 font-mono text-xs" style={{ color: "#64748b" }}>
                // Veteran-Led. Audit-Ready.
              </span>
            </div>
            <h1
              className="font-[900] tracking-[-0.02em] mb-6"
              style={{
                fontSize: "clamp(34px, 5.5vw, 68px)",
                lineHeight: 1.08,
                color: "#f1f5f9",
              }}
              data-testid="text-hero-title"
            >
              Cybersecurity,
              <br />
              <span
                style={{
                  background: "linear-gradient(90deg, #38bdf8, #818cf8)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Compliance &amp; Cloud
              </span>
              <br />
              Security Consulting
            </h1>
            <p className="text-lg leading-[1.7] mb-9" style={{ color: "#94a3b8", maxWidth: 580 }}>
              Secure cloud and AI systems. Navigate RMF/FedRAMP with confidence. Ship compliant, resilient security programs—built for audit readiness and real-world execution.
            </p>
            <div className="flex gap-4 flex-wrap">
              <Link href="/contact" data-testid="link-hero-consultation">
                <span
                  className="inline-flex items-center gap-2 text-sm font-bold cursor-pointer"
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
              <Link href="/services" data-testid="link-hero-services">
                <span
                  className="inline-flex items-center gap-2 text-sm font-semibold cursor-pointer"
                  style={{
                    padding: "13px 28px",
                    borderRadius: 8,
                    color: "#94a3b8",
                    border: "1px solid rgba(148,163,184,0.3)",
                    transition: "all 0.2s ease",
                  }}
                >
                  View Services
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div
        style={{
          borderTop: "1px solid rgba(56,189,248,0.1)",
          borderBottom: "1px solid rgba(56,189,248,0.1)",
          background: "rgba(15,23,42,0.6)",
          padding: "18px 0",
        }}
      >
        <div className="max-w-[1120px] mx-auto px-6 flex flex-wrap gap-3 justify-center items-center">
          {[
            "DHS ISSO Experience",
            "Former AWS Security Controls PM",
            "US Navy Veteran",
            "CISA Certified",
            "CISM Certified",
            "PMP Certified",
          ].map((t, i) => (
            <span key={i} className="flex items-center gap-2 font-mono text-[13px]" style={{ color: "#64748b" }}>
              {i > 0 && <span style={{ color: "#38bdf8", opacity: 0.4 }}>&bull;</span>}
              <span style={{ color: "#94a3b8" }}>{t}</span>
            </span>
          ))}
        </div>
      </div>

      <section className="py-[100px] pb-[60px]">
        <div className="max-w-[1120px] mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-16">
              <p className="font-mono text-xs font-bold tracking-[0.12em] uppercase mb-3" style={{ color: "#38bdf8" }}>
                What We Do
              </p>
              <h2
                className="font-[800] mb-4"
                style={{ fontSize: "clamp(26px, 4vw, 44px)", color: "#f1f5f9" }}
              >
                Our Core Services
              </h2>
              <p className="text-base mx-auto" style={{ color: "#64748b", maxWidth: 480 }}>
                Hands-on expertise across the full compliance and cloud security lifecycle.
              </p>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, i) => (
              <ServiceCard key={i} delay={i * 0.08} {...s} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-[1120px] mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-[60px]">
              <p className="font-mono text-xs font-bold tracking-[0.12em] uppercase mb-3" style={{ color: "#38bdf8" }}>
                Our Process
              </p>
              <h2
                className="font-[800]"
                style={{ fontSize: "clamp(24px, 3.5vw, 38px)", color: "#f1f5f9" }}
              >
                How We Work
              </h2>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <FadeIn key={i} delay={i * 0.09}>
                <div className="text-center relative" style={{ padding: "32px 20px" }}>
                  <div
                    className="font-[900] leading-none mb-3"
                    style={{ fontSize: 48, color: "rgba(56,189,248,0.08)" }}
                  >
                    {s.step}
                  </div>
                  <div
                    className="mx-auto mb-4 rounded-sm"
                    style={{
                      width: 40,
                      height: 2,
                      background: "linear-gradient(90deg, #38bdf8, #818cf8)",
                    }}
                  />
                  <h3 className="text-[17px] font-bold mb-2.5" style={{ color: "#e2e8f0" }}>
                    {s.label}
                  </h3>
                  <p className="text-sm leading-[1.6]" style={{ color: "#64748b" }}>
                    {s.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-[1120px] mx-auto px-6">
        <CTABand />
      </div>
      <div className="h-20" />
    </div>
  );
}
