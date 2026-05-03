export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
      <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(204,0,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(204,0,0,0.03) 1px, transparent 1px)", backgroundSize: "80px 80px", pointerEvents: "none" }} />
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: "linear-gradient(90deg, var(--pbc-red), transparent)" }} />
      <div style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center", gap: 32 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 8, height: 8, background: "var(--pbc-red)", borderRadius: "50%" }} />
          <span className="font-mono" style={{ fontSize: 11, letterSpacing: "0.25em", color: "var(--pbc-muted)" }}>PBC PLATFORM</span>
        </div>
        {children}
      </div>
    </div>
  );
}
