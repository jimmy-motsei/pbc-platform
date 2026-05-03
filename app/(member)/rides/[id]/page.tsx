import Link from "next/link";

// Mock — replaced with DB query in Phase 1
const ride = {
  id: "1", date: "Saturday, 7 June 2025", time: "06:00", title: "Blue Valley Morning Blast",
  distance: "65km", pace: "A-Group", cap: 20, rsvp: 14, meeting: "Blue Valley Spar, Fourways",
  route: "Blue Valley → Diepsloot → Fourways → Blue Valley. Rolling terrain, one climb at km 45.",
  notes: "Bring sufficient water and snacks. Helmet mandatory. No drop policy applies.",
};

export default function RideDetailPage() {
  const full = ride.rsvp >= ride.cap;

  return (
    <div style={{ maxWidth: 720 }}>
      <Link href="/rides" style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: 11, color: "var(--pbc-muted)", textDecoration: "none", letterSpacing: "0.1em" }}>← BACK TO RIDES</Link>

      <div style={{ margin: "24px 0 32px" }}>
        <span className="section-label">Ride Detail</span>
        <h1 className="font-display" style={{ fontSize: "clamp(36px, 5vw, 60px)", margin: "12px 0", lineHeight: 1 }}>{ride.title.toUpperCase()}</h1>
        <div className="red-bar" />
      </div>

      {/* Meta grid */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: 2, marginBottom: 32 }}>
        {[
          { label: "Date", value: ride.date },
          { label: "Start Time", value: ride.time },
          { label: "Distance", value: ride.distance },
          { label: "Pace Group", value: ride.pace },
          { label: "Meeting Point", value: ride.meeting },
          { label: "Capacity", value: `${ride.rsvp} / ${ride.cap} riders` },
        ].map((m) => (
          <div key={m.label} className="stat-card" style={{ padding: "20px" }}>
            <div className="stat-label">{m.label.toUpperCase()}</div>
            <div style={{ fontSize: 14, color: "var(--pbc-white)", marginTop: 6, fontWeight: 500 }}>{m.value}</div>
          </div>
        ))}
      </div>

      {/* Route + Notes */}
      <div style={{ display: "flex", flexDirection: "column", gap: 2, marginBottom: 32 }}>
        <div className="card-dark" style={{ padding: "24px 28px" }}>
          <div className="font-mono" style={{ fontSize: 10, color: "var(--pbc-red)", letterSpacing: "0.2em", marginBottom: 12 }}>ROUTE</div>
          <p style={{ fontSize: 14, color: "#bbb", lineHeight: 1.7, margin: 0 }}>{ride.route}</p>
        </div>
        <div className="card-dark" style={{ padding: "24px 28px" }}>
          <div className="font-mono" style={{ fontSize: 10, color: "var(--pbc-red)", letterSpacing: "0.2em", marginBottom: 12 }}>NOTES</div>
          <p style={{ fontSize: 14, color: "#bbb", lineHeight: 1.7, margin: 0 }}>{ride.notes}</p>
        </div>
      </div>

      {/* RSVP action */}
      <div className="card-dark" style={{ padding: "32px 28px", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 24, flexWrap: "wrap" }}>
        <div>
          <div style={{ fontSize: 15, fontWeight: 500, marginBottom: 4 }}>
            {full ? "This ride is full" : `${ride.cap - ride.rsvp} spots remaining`}
          </div>
          <div style={{ fontSize: 13, color: "var(--pbc-muted)" }}>
            {full ? "You can join the waitlist and we'll notify you if a spot opens." : "Confirm your spot — RSVP closes 24h before the ride."}
          </div>
        </div>
        <button className="btn-primary" style={{ whiteSpace: "nowrap" }}>
          {full ? "JOIN WAITLIST →" : "CONFIRM RSVP →"}
        </button>
      </div>
    </div>
  );
}
