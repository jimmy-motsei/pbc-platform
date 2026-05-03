import Link from "next/link";

const member = {
  id: "1", name: "Thabo Nkosi", pace: "A", rides: 42, km: 2810,
  joined: "January 2022", bio: "Passionate cyclist and entrepreneur. Love the early morning rides and the brotherhood of PBC. #Ahaa",
  business: "Director at TN Capital Advisory",
};

export default function MemberProfilePage() {
  return (
    <div style={{ maxWidth: 680 }}>
      <Link href="/members" style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: 11, color: "var(--pbc-muted)", textDecoration: "none", letterSpacing: "0.1em" }}>← BACK TO MEMBERS</Link>

      <div style={{ margin: "24px 0 32px", display: "flex", gap: 24, alignItems: "flex-end", flexWrap: "wrap" }}>
        <div style={{ width: 72, height: 72, background: "var(--pbc-red)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <span className="font-display" style={{ fontSize: 28, color: "#fff" }}>{member.name[0]}</span>
        </div>
        <div>
          <span className="section-label">Member Profile</span>
          <h1 className="font-display" style={{ fontSize: "clamp(32px, 5vw, 52px)", margin: "8px 0 0", lineHeight: 1 }}>{member.name.toUpperCase()}</h1>
        </div>
      </div>

      <div className="red-bar" style={{ marginBottom: 32 }} />

      {/* Stats */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 2, marginBottom: 24 }}>
        {[
          { num: member.rides, label: "Rides Attended" },
          { num: `${member.km.toLocaleString()}km`, label: "Total Distance" },
          { num: `${member.pace}-Group`, label: "Pace Group" },
        ].map((s) => (
          <div key={s.label} className="stat-card">
            <div className="stat-number" style={{ fontSize: 36 }}>{s.num}</div>
            <div className="stat-label">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Bio + Business */}
      <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <div className="card-dark" style={{ padding: "24px 28px" }}>
          <div className="font-mono" style={{ fontSize: 10, color: "var(--pbc-red)", letterSpacing: "0.2em", marginBottom: 12 }}>ABOUT</div>
          <p style={{ fontSize: 14, color: "#bbb", lineHeight: 1.7, margin: 0 }}>{member.bio}</p>
          <p style={{ fontSize: 12, color: "var(--pbc-muted)", marginTop: 12 }}>Member since {member.joined}</p>
        </div>
        <div className="card-dark" style={{ padding: "24px 28px" }}>
          <div className="font-mono" style={{ fontSize: 10, color: "var(--pbc-red)", letterSpacing: "0.2em", marginBottom: 12 }}>PROFESSIONAL</div>
          <p style={{ fontSize: 14, color: "#bbb", margin: 0 }}>{member.business}</p>
        </div>
      </div>
    </div>
  );
}
