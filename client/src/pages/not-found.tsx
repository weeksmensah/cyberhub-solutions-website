import { Link } from "wouter";
import { Shield, ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-6">
      <div className="text-center">
        <div className="flex justify-center mb-6">
          <div
            className="w-16 h-16 rounded-2xl flex items-center justify-center"
            style={{
              background: "linear-gradient(135deg, rgba(56,189,248,0.1), rgba(99,102,241,0.1))",
              border: "1px solid rgba(56,189,248,0.2)",
              color: "#38bdf8",
            }}
          >
            <Shield size={32} strokeWidth={1.5} />
          </div>
        </div>
        <h1 className="text-5xl font-[900] mb-4" style={{ color: "#f1f5f9" }}>
          404
        </h1>
        <p className="text-lg mb-8" style={{ color: "#64748b" }}>
          This page doesn't exist or has been moved.
        </p>
        <Link href="/">
          <span
            className="inline-flex items-center gap-2 text-sm font-bold cursor-pointer"
            style={{
              padding: "13px 28px",
              borderRadius: 8,
              background: "linear-gradient(135deg, #0ea5e9 0%, #38bdf8 100%)",
              color: "#0c1220",
              boxShadow: "0 0 32px rgba(56,189,248,0.25)",
            }}
          >
            Back to Home
            <ArrowRight size={16} strokeWidth={2} />
          </span>
        </Link>
      </div>
    </div>
  );
}
