export default function CircuitBg({ className = "" }: { className?: string }) {
  return (
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
      <div
        className="absolute rounded-full"
        style={{
          top: "20%",
          left: "10%",
          width: 400,
          height: 400,
          background: "radial-gradient(circle, rgba(56,189,248,0.07) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute rounded-full"
        style={{
          bottom: "10%",
          right: "5%",
          width: 600,
          height: 600,
          background: "radial-gradient(circle, rgba(99,102,241,0.06) 0%, transparent 70%)",
        }}
      />
    </div>
  );
}
