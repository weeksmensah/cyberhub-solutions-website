import { useState } from "react";
import { MapPin, Mail, Phone, Clock, ExternalLink, Check, ArrowRight, Loader2 } from "lucide-react";
import CircuitBg from "@/components/circuit-bg";
import FadeIn from "@/components/fade-in";
import { apiRequest } from "@/lib/queryClient";

const contactInfo = [
  { icon: MapPin, label: "Location", value: "Wayne, NJ\nServing clients nationwide (remote)" },
  { icon: Mail, label: "Email", value: "info@cyberhubsolutionsllc.com" },
  { icon: Phone, label: "Phone", value: "+1 (XXX) XXX-XXXX" },
  { icon: Clock, label: "Hours", value: "Mon\u2013Fri, 9:00 AM \u2013 6:00 PM ET" },
];

const inputClasses = "w-full rounded-lg text-sm outline-none font-sans transition-colors duration-200";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", org: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");
    try {
      await apiRequest("POST", "/api/contact", form);
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      <section className="relative overflow-hidden" style={{ padding: "140px 0 80px" }}>
        <CircuitBg />
        <div className="max-w-[1120px] mx-auto px-6 relative z-10">
          <FadeIn>
            <p className="font-mono text-xs font-bold tracking-[0.12em] uppercase mb-4" style={{ color: "#38bdf8" }}>
              Get In Touch
            </p>
            <h1
              className="font-[900] tracking-[-0.02em] mb-5"
              style={{ fontSize: "clamp(32px, 5vw, 60px)", color: "#f1f5f9" }}
              data-testid="text-contact-title"
            >
              Contact
            </h1>
            <p className="text-[17px] leading-[1.7]" style={{ color: "#94a3b8", maxWidth: 540 }}>
              Discuss your cybersecurity, RMF, FedRAMP, or cloud security needs. We respond within one business day.
            </p>
          </FadeIn>
        </div>
      </section>

      <section style={{ padding: "20px 0 100px" }}>
        <div className="max-w-[1120px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-12 lg:gap-[60px] items-start">
            <FadeIn>
              <div>
                <h2 className="text-[22px] font-[800] mb-8" style={{ color: "#f1f5f9" }}>
                  Contact Information
                </h2>
                <div className="flex flex-col gap-6">
                  {contactInfo.map((c, i) => {
                    const IconComp = c.icon;
                    return (
                      <div key={i} className="flex gap-4">
                        <div
                          className="w-10 h-10 rounded-[10px] flex items-center justify-center flex-shrink-0"
                          style={{
                            background: "rgba(56,189,248,0.08)",
                            border: "1px solid rgba(56,189,248,0.15)",
                            color: "#38bdf8",
                          }}
                        >
                          <IconComp size={18} strokeWidth={1.5} />
                        </div>
                        <div>
                          <p className="font-mono text-xs font-bold uppercase tracking-[0.08em] mb-1" style={{ color: "#38bdf8" }}>
                            {c.label}
                          </p>
                          <p className="text-sm leading-[1.6] whitespace-pre-line" style={{ color: "#94a3b8" }}>
                            {c.value}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div
                  className="mt-12 rounded-2xl"
                  style={{
                    padding: 28,
                    background: "rgba(12,36,58,0.8)",
                    border: "1px solid rgba(56,189,248,0.2)",
                  }}
                >
                  <h3 className="text-base font-bold mb-2" style={{ color: "#e2e8f0" }}>
                    Book a Consultation
                  </h3>
                  <p className="text-sm leading-[1.6] mb-5" style={{ color: "#64748b" }}>
                    Schedule a 30-minute discovery call to discuss your security goals and how we can help.
                  </p>
                  <a
                    href="https://calendly.com/your-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[13px] font-bold no-underline"
                    style={{
                      padding: "10px 20px",
                      borderRadius: 8,
                      background: "linear-gradient(135deg, #0ea5e9 0%, #38bdf8 100%)",
                      color: "#0c1220",
                      boxShadow: "0 0 32px rgba(56,189,248,0.25)",
                    }}
                    data-testid="link-calendly"
                  >
                    Schedule a Call
                    <ExternalLink size={14} strokeWidth={2} />
                  </a>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div
                className="rounded-[20px]"
                style={{
                  background: "linear-gradient(135deg, rgba(12,36,58,0.8), rgba(15,23,42,0.9))",
                  border: "1px solid rgba(56,189,248,0.15)",
                  padding: 40,
                }}
              >
                {submitted ? (
                  <div className="text-center py-10 px-5">
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                      style={{
                        background: "rgba(56,189,248,0.12)",
                        border: "1px solid rgba(56,189,248,0.3)",
                        color: "#38bdf8",
                      }}
                    >
                      <Check size={28} strokeWidth={2.5} />
                    </div>
                    <h3 className="text-[22px] font-[800] mb-3" style={{ color: "#f1f5f9" }} data-testid="text-form-success">
                      Message Sent
                    </h3>
                    <p className="text-[15px] leading-[1.65]" style={{ color: "#94a3b8" }}>
                      Thank you for reaching out. We'll be in touch within one business day.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} data-testid="form-contact">
                    <h2 className="text-xl font-[800] mb-7" style={{ color: "#f1f5f9" }}>
                      Send a Message
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label className="block font-mono text-xs font-semibold uppercase tracking-[0.06em] mb-1.5" style={{ color: "#64748b" }}>
                          Full Name *
                        </label>
                        <input
                          name="name"
                          required
                          value={form.name}
                          onChange={handleChange}
                          placeholder="Jane Smith"
                          className={inputClasses}
                          style={{
                            padding: "12px 16px",
                            background: "rgba(15,23,42,0.7)",
                            border: "1px solid rgba(56,189,248,0.15)",
                            color: "#e2e8f0",
                          }}
                          data-testid="input-name"
                        />
                      </div>
                      <div>
                        <label className="block font-mono text-xs font-semibold uppercase tracking-[0.06em] mb-1.5" style={{ color: "#64748b" }}>
                          Email *
                        </label>
                        <input
                          name="email"
                          type="email"
                          required
                          value={form.email}
                          onChange={handleChange}
                          placeholder="jane@agency.gov"
                          className={inputClasses}
                          style={{
                            padding: "12px 16px",
                            background: "rgba(15,23,42,0.7)",
                            border: "1px solid rgba(56,189,248,0.15)",
                            color: "#e2e8f0",
                          }}
                          data-testid="input-email"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label className="block font-mono text-xs font-semibold uppercase tracking-[0.06em] mb-1.5" style={{ color: "#64748b" }}>
                          Organization *
                        </label>
                        <input
                          name="org"
                          required
                          value={form.org}
                          onChange={handleChange}
                          placeholder="Agency or Company"
                          className={inputClasses}
                          style={{
                            padding: "12px 16px",
                            background: "rgba(15,23,42,0.7)",
                            border: "1px solid rgba(56,189,248,0.15)",
                            color: "#e2e8f0",
                          }}
                          data-testid="input-org"
                        />
                      </div>
                      <div>
                        <label className="block font-mono text-xs font-semibold uppercase tracking-[0.06em] mb-1.5" style={{ color: "#64748b" }}>
                          Phone (optional)
                        </label>
                        <input
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="+1 (555) 000-0000"
                          className={inputClasses}
                          style={{
                            padding: "12px 16px",
                            background: "rgba(15,23,42,0.7)",
                            border: "1px solid rgba(56,189,248,0.15)",
                            color: "#e2e8f0",
                          }}
                          data-testid="input-phone"
                        />
                      </div>
                    </div>
                    <div className="mb-6">
                      <label className="block font-mono text-xs font-semibold uppercase tracking-[0.06em] mb-1.5" style={{ color: "#64748b" }}>
                        Message *
                      </label>
                      <textarea
                        name="message"
                        required
                        value={form.message}
                        onChange={handleChange}
                        rows={5}
                        placeholder="Tell us about your compliance goals, current security challenges, or specific services you're interested in..."
                        className={inputClasses}
                        style={{
                          padding: "12px 16px",
                          background: "rgba(15,23,42,0.7)",
                          border: "1px solid rgba(56,189,248,0.15)",
                          color: "#e2e8f0",
                          resize: "vertical",
                          minHeight: 120,
                        }}
                        data-testid="input-message"
                      />
                    </div>
                    {error && (
                      <p className="text-sm mb-4" style={{ color: "#ef4444" }} data-testid="text-form-error">
                        {error}
                      </p>
                    )}
                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full inline-flex items-center justify-center gap-2 text-sm font-bold transition-opacity"
                      style={{
                        padding: "13px 28px",
                        borderRadius: 8,
                        background: "linear-gradient(135deg, #0ea5e9 0%, #38bdf8 100%)",
                        color: "#0c1220",
                        border: "none",
                        cursor: submitting ? "not-allowed" : "pointer",
                        boxShadow: "0 0 32px rgba(56,189,248,0.25)",
                        opacity: submitting ? 0.7 : 1,
                      }}
                      data-testid="button-submit-contact"
                    >
                      {submitting ? (
                        <>
                          <Loader2 size={16} className="animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <ArrowRight size={16} strokeWidth={2} />
                        </>
                      )}
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
