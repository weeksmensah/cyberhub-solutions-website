export default function CertBadge({ label }: { label: string }) {
  return (
    <span
      className="inline-flex items-center gap-1 font-mono text-[11px] font-bold tracking-wider"
      style={{
        padding: "3px 10px",
        borderRadius: 999,
        background: "rgba(56,189,248,0.12)",
        border: "1px solid rgba(56,189,248,0.3)",
        color: "#7dd3fc",
        letterSpacing: "0.08em",
      }}
    >
      {label}
    </span>
  );
}
