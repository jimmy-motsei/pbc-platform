import Link from "next/link";

export default function Home() {
  return (
    <main style={{ minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", padding: "40px", textAlign: "center", position: "relative", overflow: "hidden" }}>
      {/* Background grid */}
      <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(204,0,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(204,0,0,0.03) 1px, transparent 1px)", backgroundSize: "80px 80px", pointerEvents: "none" }} />
      {/* Top red bar */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: "linear-gradient(90deg, var(--pbc-red), transparent)" }} />

      <div style={{ position: "relative" }}>
        {/* Logo mark */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10, marginBottom: 48 }}>
          <div style={{ width: 8, height: 8, background: "var(--pbc-red)", borderRadius: "50%" }} />
          <span className="font-mono" style={{ fontSize: 12, letterSpacing: "0.25em", color: "var(--pbc-white)" }}>PBC PLATFORM</span>
        </div>

        <h1 className="font-display" style={{ fontSize: "clamp(64px, 12vw, 120px)", lineHeight: 0.88, marginBottom: 24 }}>
          PROUD<br />
          <span style={{ color: "var(--pbc-red)", WebkitTextStroke: "2px var(--pbc-red)", WebkitTextFillColor: "transparent" }}>BEGINNERS</span><br />
          CYCLING CLUB
        </h1>

        <div className="red-bar" style={{ margin: "32px auto 24px" }} />

        <p style={{ fontSize: 17, fontWeight: 300, color: "var(--pbc-muted)", maxWidth: 420, lineHeight: 1.7, marginBottom: 40, margin: "0 auto 40px" }}>
          Ride management, member community, and business connections —
          all in one place. Carrying the{" "}
          <strong style={{ color: "var(--pbc-white)", fontWeight: 500 }}>#Ahaa</strong>{" "}
          spirit forward.
        </p>

        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center" }}>
          <Link href="/sign-in" className="btn-primary">SIGN IN →</Link>
          <Link href="/sign-up" className="btn-ghost">JOIN THE CLUB</Link>
        </div>
      </div>

      <p className="font-mono" style={{ position: "absolute", bottom: 28, fontSize: 10, color: "#2a2a2a", letterSpacing: "0.1em" }}>
        © 2025 MARU ONLINE (PTY) LTD · BUILT FOR PBC
      </p>
    </main>
  );
}
