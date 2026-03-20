import { useState } from "react";
import { Shield, Lock, Star, Cloud, Brain, Eye, Users, Check, ChevronDown } from "lucide-react";
import CircuitBg from "@/components/circuit-bg";
import FadeIn from "@/components/fade-in";
import CTABand from "@/components/cta-band";

const faqs = [
  {
    q: "What is the RMF, and do I need it?",
    a: "The Risk Management Framework (RMF) is a NIST-developed process used primarily by federal agencies to authorize information systems. If you operate systems that process federal data, connect to federal networks, or seek a FedRAMP authorization, you very likely need RMF compliance. We help organizations scope the effort and navigate each phase efficiently.",
  },
  {
    q: "How long does a FedRAMP authorization take?",
    a: "FedRAMP Ready can take 2\u20134 months of focused preparation. Full FedRAMP Authorization (Moderate or High) typically ranges from 12\u201324 months depending on system complexity, existing controls maturity, and whether you pursue Agency ATO or JAB P-ATO paths. We help you sequence the work to make progress as efficiently as possible.",
  },
  {
    q: "What do I need to provide to get started?",
    a: "At minimum: a system inventory or architecture diagram, any existing security documentation (policies, SSP drafts, previous audits), and clarity on your compliance target (FedRAMP level, NIST baseline, etc.). We\u2019ll conduct an initial discovery call to scope the engagement before any paperwork is required.",
  },
  {
    q: "Do you only serve federal clients?",
    a: "No. While our roots are in federal cybersecurity, our expertise applies directly to commercial organizations pursuing SOC 2, ISO 27001, or cloud security hardening. Many commercial firms also partner with federal agencies and benefit from RMF/FedRAMP readiness.",
  },
  {
    q: "What\u2019s your approach to AI and agentic system security?",
    a: "AI/ML systems introduce unique risks\u2014prompt injection, adversarial inputs, supply chain vulnerabilities, and opaque decision boundaries. We conduct threat modeling specific to AI workflows, assess model deployment configurations, and recommend guardrails and monitoring strategies aligned with emerging NIST AI Risk Management Framework (AI RMF) guidance.",
  },
  {
    q: "Do you provide ongoing support or just point-in-time assessments?",
    a: "Both. We offer structured project engagements (assessments, ATO packages) as well as ongoing advisory retainers for continuous monitoring, POA&M management, and security program evolution. Engagements are scoped to your needs.",
  },
  {
    q: "What does a cyber threat intelligence engagement look like?",
    a: "We begin by understanding your industry, threat profile, and existing security tools. From there, we deliver regular threat briefings, analyze indicators of compromise relevant to your environment, and provide actionable recommendations. Engagements can be structured as periodic reports or integrated into your security operations workflow.",
  },
  {
    q: "Do you offer training for non-technical staff?",
    a: "Absolutely. Our training programs are role-based—we offer executive and board-level awareness sessions, general staff security awareness training, and deep-dive technical workshops for security and IT teams. We also run phishing simulations and tabletop exercises to test and reinforce learning in realistic scenarios.",
  },
  {
    q: "Are engagements remote or on-site?",
    a: "We are based in Wayne, NJ and serve clients nationwide. Most engagements are conducted remotely. On-site work is available for clients requiring it and can be scoped accordingly.",
  },
];

const iconMap = {
  shield: Shield,
  lock: Lock,
  star: Star,
  cloud: Cloud,
  brain: Brain,
  eye: Eye,
  users: Users,
};

const services = [
  {
    iconKey: "shield" as keyof typeof iconMap,
    title: "Cybersecurity Risk Assessments",
    overview: "A structured, evidence-based risk assessment that gives your leadership and technical teams a clear picture of your threat exposure, control gaps, and prioritized remediation path.",
    deliverables: ["Risk register with threat-likelihood-impact ratings", "Detailed findings report", "Prioritized remediation roadmap", "Executive summary for leadership"],
    engagement: "Typically 2\u20136 weeks depending on system scope. Begins with discovery interviews and artifact review.",
  },
  {
    iconKey: "lock" as keyof typeof iconMap,
    title: "RMF / NIST 800-53 Implementation",
    overview: "End-to-end support for NIST 800-53 control implementation and the full RMF lifecycle\u2014from initial categorization through ATO package submission and continuous monitoring setup.",
    deliverables: ["System Security Plan (SSP) authoring & review", "Control tailoring and baseline scoping", "Evidence collection and control testing support", "RAR/SAR support", "POA&M development and tracking guidance"],
    engagement: "Project-based or retainer. Scoped after initial discovery.",
  },
  {
    iconKey: "star" as keyof typeof iconMap,
    title: "FedRAMP & Compliance Support",
    overview: "FedRAMP authorization requires meticulous documentation, technical depth, and the ability to work effectively with 3PAOs, agencies, and PMO reviewers. We\u2019ve navigated this from the inside.",
    deliverables: ["FedRAMP readiness assessment", "Gap analysis against selected baseline", "Control documentation and evidence support", "Continuous monitoring strategy", "Audit liaison and 3PAO coordination support"],
    engagement: "Structured project phases aligned to FedRAMP milestones.",
  },
  {
    iconKey: "cloud" as keyof typeof iconMap,
    title: "Cloud Security (AWS, Azure, GCP)",
    overview: "Cloud platforms introduce powerful capabilities and unique risks. We harden your cloud environment with purpose-built controls, governance frameworks, and automation that keeps pace with your engineering teams.",
    deliverables: ["IAM hardening and least-privilege access reviews", "Logging, monitoring, and alerting architecture", "Cloud security guardrails and SCPs/policies", "Security automation (IaC scanning, CSPM tuning)", "Vulnerability management alignment"],
    engagement: "Assessment phase + implementation support. Duration varies by environment complexity.",
  },
  {
    iconKey: "brain" as keyof typeof iconMap,
    title: "AI/ML & Agentic AI Security",
    overview: "AI systems\u2014especially agentic workflows\u2014introduce a new class of security risks including prompt injection, adversarial manipulation, data poisoning, and novel supply chain vulnerabilities. We bring structured threat modeling to your AI stack.",
    deliverables: ["AI-specific threat model for your deployment architecture", "Prompt injection and adversarial input mitigation strategies", "AI governance policy recommendations", "Secure deployment pattern guidance", "Alignment with NIST AI RMF"],
    engagement: "Assessment-driven. Suitable for organizations deploying LLMs, agentic systems, or ML-powered decision tools.",
    premium: true,
  },
  {
    iconKey: "eye" as keyof typeof iconMap,
    title: "Cyber Threat Intelligence",
    overview: "Proactive threat intelligence that goes beyond generic feeds. We deliver contextualized intelligence briefings, indicator-of-compromise (IOC) analysis, and strategic threat assessments tailored to your sector and threat profile.",
    deliverables: ["Periodic threat landscape briefings", "IOC collection, analysis, and dissemination", "Threat actor profiling relevant to your sector", "Intelligence-driven defense recommendations", "Integration guidance for threat intel platforms (TIPs)"],
    engagement: "Retainer-based or project-scoped. Ideal for organizations seeking continuous situational awareness.",
  },
  {
    iconKey: "users" as keyof typeof iconMap,
    title: "Cybersecurity Teams Training",
    overview: "Your technology is only as strong as the people operating it. We design and deliver cybersecurity training programs tailored to your organization—from board-level awareness to hands-on tabletop exercises and phishing simulations for technical teams.",
    deliverables: ["Custom security awareness training programs", "Tabletop exercises and incident response simulations", "Phishing simulation campaigns and analysis", "Role-based training for technical and non-technical staff", "Training effectiveness metrics and reporting"],
    engagement: "Flexible delivery—single workshops, multi-session programs, or ongoing quarterly training retainers.",
  },
];

export default function Services() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div>
      <section className="relative overflow-hidden" style={{ padding: "140px 0 80px" }}>
        <CircuitBg />
        <div className="max-w-[1120px] mx-auto px-6 relative z-10">
          <FadeIn>
            <p className="font-mono text-xs font-bold tracking-[0.12em] uppercase mb-4" style={{ color: "#38bdf8" }}>
              What We Offer
            </p>
            <h1
              className="font-[900] tracking-[-0.02em] mb-5"
              style={{ fontSize: "clamp(32px, 5vw, 60px)", color: "#f1f5f9" }}
              data-testid="text-services-title"
            >
              Services
            </h1>
            <p className="text-[17px] leading-[1.7]" style={{ color: "#94a3b8", maxWidth: 540 }}>
              Expert cybersecurity and compliance solutions tailored for federal and commercial teams.
            </p>
          </FadeIn>
        </div>
      </section>

      <section style={{ padding: "20px 0 80px" }}>
        <div className="max-w-[1120px] mx-auto px-6">
          <div className="flex flex-col gap-8">
            {services.map((s, i) => {
              const IconComp = iconMap[s.iconKey];
              return (
                <FadeIn key={i} delay={0.05 * i}>
                  <div
                    className="relative overflow-hidden"
                    style={{
                      background: "linear-gradient(135deg, rgba(12,36,58,0.7) 0%, rgba(15,23,42,0.8) 100%)",
                      border: s.premium ? "1px solid rgba(129,140,248,0.3)" : "1px solid rgba(56,189,248,0.12)",
                      borderRadius: 16,
                      padding: "40px",
                    }}
                  >
                    {s.premium && (
                      <div className="absolute top-5 right-5">
                        <span
                          className="font-mono text-[11px] font-bold tracking-[0.08em]"
                          style={{
                            background: "linear-gradient(135deg, #6366f1, #818cf8)",
                            color: "#fff",
                            padding: "4px 12px",
                            borderRadius: 999,
                          }}
                        >
                          PREMIUM
                        </span>
                      </div>
                    )}
                    <div className="flex gap-4 mb-6">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{
                          background: s.premium ? "rgba(99,102,241,0.12)" : "rgba(56,189,248,0.1)",
                          border: `1px solid ${s.premium ? "rgba(129,140,248,0.25)" : "rgba(56,189,248,0.2)"}`,
                          color: s.premium ? "#818cf8" : "#38bdf8",
                        }}
                      >
                        <IconComp size={22} strokeWidth={1.5} />
                      </div>
                      <div>
                        <h3 className="text-xl font-[800] mb-1.5" style={{ color: "#f1f5f9" }}>
                          {s.title}
                        </h3>
                        <p className="text-sm leading-[1.65]" style={{ color: "#94a3b8" }}>
                          {s.overview}
                        </p>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-2">
                      <div>
                        <p className="font-mono text-[11px] font-bold uppercase tracking-[0.1em] mb-3" style={{ color: "#38bdf8" }}>
                          Deliverables
                        </p>
                        <ul className="flex flex-col gap-2 list-none p-0">
                          {s.deliverables.map((d, j) => (
                            <li key={j} className="flex gap-2 text-sm" style={{ color: "#94a3b8" }}>
                              <span className="flex-shrink-0 mt-0.5" style={{ color: s.premium ? "#818cf8" : "#38bdf8" }}>
                                <Check size={13} strokeWidth={2.5} />
                              </span>
                              {d}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="font-mono text-[11px] font-bold uppercase tracking-[0.1em] mb-3" style={{ color: "#38bdf8" }}>
                          Typical Engagement
                        </p>
                        <p className="text-sm leading-[1.65]" style={{ color: "#64748b" }}>
                          {s.engagement}
                        </p>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>

          <FadeIn delay={0.1}>
            <div className="mt-20">
              <h2 className="text-[28px] font-[800] mb-10" style={{ color: "#f1f5f9" }}>
                Frequently Asked Questions
              </h2>
              <div className="flex flex-col gap-3">
                {faqs.map((f, i) => (
                  <div
                    key={i}
                    className="transition-all duration-200 overflow-hidden"
                    style={{
                      background: openFaq === i ? "rgba(12,36,58,0.8)" : "rgba(15,23,42,0.5)",
                      border: openFaq === i ? "1px solid rgba(56,189,248,0.25)" : "1px solid rgba(56,189,248,0.1)",
                      borderRadius: 12,
                    }}
                    data-testid={`faq-item-${i}`}
                  >
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="w-full text-left flex justify-between items-center gap-4"
                      style={{
                        padding: "20px 24px",
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                      }}
                      data-testid={`button-faq-${i}`}
                    >
                      <span className="text-[15px] font-semibold" style={{ color: "#e2e8f0" }}>
                        {f.q}
                      </span>
                      <span
                        className="flex-shrink-0 transition-transform duration-200"
                        style={{
                          color: "#38bdf8",
                          transform: openFaq === i ? "rotate(180deg)" : "none",
                        }}
                      >
                        <ChevronDown size={18} strokeWidth={2} />
                      </span>
                    </button>
                    <div
                      className="transition-all duration-300"
                      style={{
                        maxHeight: openFaq === i ? "500px" : "0px",
                        opacity: openFaq === i ? 1 : 0,
                        overflow: "hidden",
                      }}
                    >
                      <div style={{ padding: "0 24px 24px" }}>
                        <p className="text-sm leading-[1.75]" style={{ color: "#64748b" }}>
                          {f.a}
                        </p>
                      </div>
                    </div>
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
