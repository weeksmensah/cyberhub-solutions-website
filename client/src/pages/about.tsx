import { Shield, Cloud, Lock, Check } from "lucide-react";
import founderPhoto from "@assets/508733349_4196918787231117_8062523325325351650_n_1771639373223.jpg";
import CircuitBg from "@/components/circuit-bg";
import FadeIn from "@/components/fade-in";
import CertBadge from "@/components/cert-badge";
import CTABand from "@/components/cta-band";

const timeline = [
  {
    period: "Sep 2023 – Present",
    role: "Information System Security Officer (ISSO)",
    org: "U.S. Department of Homeland Security",
    desc: "Leading RMF and ATO workflows, managing security controls, and overseeing continuous monitoring programs for federal information systems.",
    icon: Shield,
  },
  {
    period: "Oct 2019 – Sep 2023",
    role: "AWS Security Controls Program Manager",
    org: "Amazon Web Services",
    desc: "Built and managed security controls programs across AWS infrastructure, translating complex compliance requirements into engineering realities at cloud scale.",
    icon: Cloud,
  },
  {
    period: "Feb 2013 – Aug 2019",
    role: "Information Technology Specialist",
    org: "U.S. Navy",
    desc: "Served in IT and cybersecurity roles across naval operations, developing the discipline and mission-first mindset that underpins our consulting approach.",
    icon: Lock,
  },
];

const whyChoose = [
  { title: "Hands-on RMF Expertise", desc: "Direct ATO lifecycle experience from inside a major federal agency—not just theoretical knowledge." },
  { title: "AWS Security Pedigree", desc: "Built security controls programs at AWS scale, with real engineering execution behind every recommendation." },
  { title: "Clear Documentation", desc: "Deliverables that auditors can verify and engineers can implement—no vague boilerplate." },
  { title: "Audit-Ready Mindset", desc: "Evidence packages, POA&M tracking, and continuous monitoring baked in from day one." },
];

const achievements = [
  "Strengthen your cybersecurity posture across cloud and on-prem",
  "Navigate RMF, FedRAMP, NIST 800-53, ISO 27001, and SOC 2 compliance",
  "Reduce risk and protect sensitive government and commercial data",
  "Build secure-by-design cloud and AI systems that pass audits",
];

export default function About() {
  return (
    <div>
      <section className="relative overflow-hidden" style={{ padding: "140px 0 80px" }}>
        <CircuitBg />
        <div className="max-w-[1120px] mx-auto px-6 relative z-10">
          <FadeIn>
            <p className="font-mono text-xs font-bold tracking-[0.12em] uppercase mb-4" style={{ color: "#38bdf8" }}>
              Our Story
            </p>
            <h1
              className="font-[900] tracking-[-0.02em] mb-5"
              style={{ fontSize: "clamp(32px, 5vw, 60px)", color: "#f1f5f9", maxWidth: 700 }}
              data-testid="text-about-title"
            >
              About CyberHub
              <br />
              Solutions LLC
            </h1>
            <p className="text-[17px] leading-[1.7]" style={{ color: "#94a3b8", maxWidth: 560 }}>
              Veteran-led cybersecurity and compliance support for cloud and AI environments—built for audit readiness and real-world execution.
            </p>
          </FadeIn>
        </div>
      </section>

      <section style={{ padding: "60px 0 80px" }}>
        <div className="max-w-[1120px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 lg:gap-[60px] items-start">
            <FadeIn>
              <div>
                <h2 className="text-[28px] font-[800] mb-5" style={{ color: "#f1f5f9" }}>
                  Our Mission &amp; Approach
                </h2>
                <p className="text-[15px] leading-[1.75] mb-5" style={{ color: "#94a3b8" }}>
                  CyberHub Solutions was founded to bridge a persistent gap in the cybersecurity industry: the distance between documentation and execution. Many organizations invest in compliance frameworks but struggle to translate policy into hardened, audit-ready systems.
                </p>
                <p className="text-[15px] leading-[1.75] mb-5" style={{ color: "#94a3b8" }}>
                  Our founder brings rare, direct experience from two of the most demanding cybersecurity environments in the world—the U.S. Department of Homeland Security and Amazon Web Services. That combination means you get federal-grade rigor applied with commercial-grade agility.
                </p>
                <p className="text-[15px] leading-[1.75] mb-8" style={{ color: "#94a3b8" }}>
                  We specialize in practical outcomes: ATOs that move forward, cloud environments that pass scrutiny, and security programs that your engineers can actually maintain.
                </p>

                <h3 className="text-[17px] font-bold mb-4" style={{ color: "#e2e8f0" }}>
                  What We Help You Achieve
                </h3>
                <ul className="flex flex-col gap-2.5 list-none p-0">
                  {achievements.map((b, i) => (
                    <li key={i} className="flex gap-2.5 text-sm leading-[1.5]" style={{ color: "#94a3b8" }}>
                      <span className="mt-0.5 flex-shrink-0" style={{ color: "#38bdf8" }}>
                        <Check size={14} strokeWidth={2.5} />
                      </span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>

            <FadeIn delay={0.12}>
              <div
                className="min-w-[280px] max-w-[320px] w-full lg:w-auto"
                style={{
                  background: "linear-gradient(135deg, rgba(12,36,58,0.9), rgba(15,23,42,0.95))",
                  border: "1px solid rgba(56,189,248,0.2)",
                  borderRadius: 20,
                  padding: 32,
                }}
              >
                <div
                  className="w-full rounded-xl mb-6 overflow-hidden"
                  style={{
                    aspectRatio: "1",
                    border: "1px solid rgba(56,189,248,0.15)",
                  }}
                >
                  <img
                    src={founderPhoto}
                    alt="Yaw Afuakwah - Founder of CyberHub Solutions"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <h3 className="text-lg font-[800] mb-1" style={{ color: "#f1f5f9" }}>
                  Yaw Afuakwah
                </h3>
                <p className="font-mono text-[13px] mb-1" style={{ color: "#38bdf8" }}>
                  M.Sc, PMP
                </p>
                <p className="text-[13px] leading-[1.5] mb-5" style={{ color: "#64748b" }}>
                  Cybersecurity &amp; Cloud Security Leader
                  <br />
                  ISSO, U.S. Dept. of Homeland Security
                </p>
                <div className="flex gap-1.5 flex-wrap mb-5">
                  <CertBadge label="DVOSB" />
                  <CertBadge label="CISA" />
                  <CertBadge label="CISM" />
                  <CertBadge label="PMP" />
                </div>
                <div style={{ borderTop: "1px solid rgba(56,189,248,0.1)", paddingTop: 16 }}>
                  <p className="font-mono text-xs font-bold uppercase tracking-[0.08em] mb-2.5" style={{ color: "#64748b" }}>
                    Focus Areas
                  </p>
                  {["RMF / FedRAMP / ATO Lifecycle", "AWS Security Controls & IAM", "NIST 800-53, ISO 27001, SOC 2", "Cloud Security & AI/ML Risk", "SBA-Certified Disabled Veteran-Owned Small Business"].map(
                    (f, i) => (
                      <div
                        key={i}
                        className="text-[13px] py-1"
                        style={{
                          color: "#94a3b8",
                          borderBottom: i < 4 ? "1px solid rgba(30,41,59,0.8)" : "none",
                        }}
                      >
                        {f}
                      </div>
                    )
                  )}
                </div>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.1}>
            <div className="mt-20">
              <h2 className="text-[26px] font-[800] mb-10" style={{ color: "#f1f5f9" }}>
                Career Milestones
              </h2>
              <div className="flex flex-col">
                {timeline.map((item, i) => (
                  <div
                    key={i}
                    className="grid gap-x-6 pb-10"
                    style={{ gridTemplateColumns: "clamp(100px, 20vw, 180px) 1px 1fr" }}
                  >
                    <div className="text-right pt-1">
                      <span className="font-mono text-xs leading-[1.4]" style={{ color: "#38bdf8" }}>
                        {item.period}
                      </span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-2.5 h-2.5 rounded-full flex-shrink-0 mt-1" style={{ background: "#38bdf8" }} />
                      {i < timeline.length - 1 && (
                        <div className="flex-1 mt-1.5" style={{ width: 1, background: "rgba(56,189,248,0.2)" }} />
                      )}
                    </div>
                    <div className="pb-2">
                      <h4 className="text-[15px] font-bold mb-1" style={{ color: "#e2e8f0" }}>
                        {item.role}
                      </h4>
                      <p className="font-mono text-[13px] mb-2" style={{ color: "#38bdf8" }}>
                        {item.org}
                      </p>
                      <p className="text-sm leading-[1.6]" style={{ color: "#64748b" }}>
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="mt-10">
              <h2 className="text-[26px] font-[800] mb-6" style={{ color: "#f1f5f9" }}>
                Why Choose Us
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {whyChoose.map((w, i) => (
                  <div
                    key={i}
                    className="rounded-xl"
                    style={{
                      background: "rgba(15,23,42,0.6)",
                      border: "1px solid rgba(56,189,248,0.1)",
                      padding: 24,
                    }}
                  >
                    <div className="mb-4 rounded-sm" style={{ width: 32, height: 2, background: "#38bdf8" }} />
                    <h4 className="text-[15px] font-bold mb-2" style={{ color: "#e2e8f0" }}>
                      {w.title}
                    </h4>
                    <p className="text-sm leading-[1.6]" style={{ color: "#64748b" }}>
                      {w.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <div className="max-w-[1120px] mx-auto px-6">
        <CTABand />
      </div>
      <div className="h-20" />
    </div>
  );
}
