import Link from "next/link";

const rides = [
  { id: "1", date: "SAT 7 JUN",  title: "Blue Valley Morning Blast",      distance: "65km",  pace: "A-Group", rsvp: 14, cap: 20, time: "06:00", meeting: "Blue Valley Spar" },
  { id: "2", date: "SAT 14 JUN", title: "Midrand Loop",                   distance: "45km",  pace: "B-Group", rsvp: 8,  cap: 15, time: "06:00", meeting: "Midrand Taxi Rank" },
  { id: "3", date: "SAT 21 JUN", title: "Hartebeespoort Dam Challenge",   distance: "95km",  pace: "A-Group", rsvp: 22, cap: 25, time: "05:30", meeting: "Hennops Crossing" },
  { id: "4", date: "SAT 28 JUN", title: "Social Ride — All Welcome",      distance: "30km",  pace: "C-Group", rsvp: 6,  cap: 20, time: "07:00", meeting: "Blue Valley Spar" },
];

export default function RidesPage() {
  return (
    <div>
      <div style={{ marginBottom: 40 }}>
        <span className="section-label">Ride Calendar</span>
        <h1 className="font-display" style={{ fontSize: "clamp(36px, 5vw, 56px)", margin: "12px 0 8px", lineHeight: 1 }}>
          UPCOMING<br /><span style={{ color: "var(--pbc-red)" }}>RIDES.</span>
        </h1>
        <div className="red-bar" style={{ marginTop: 16 }} />
      </div>

      {/* Filter strip */}
      <div style={{ display: "flex", gap: 8, marginBottom: 24 }}>
        {["All Groups", "A-Group", "B-Group", "C-Group"].map((f) => (
          <button key={f} style={{ padding: "7px 16px", fontFamily: "IBM Plex Mono, monospace", fontSize: 10, letterSpacing: "0.12em", border: "1px solid var(--pbc-mid)", background: f === "All Groups" ? "var(--pbc-red)" : "transparent", color: f === "All Groups" ? "#fff" : "var(--pbc-muted)", cursor: "pointer" }}>
            {f}
          </button>
        ))}
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
        {rides.map((ride) => {
          const full = ride.rsvp >= ride.cap;
          const pct  = Math.round((ride.rsvp / ride.cap) * 100);
          return (
            <div key={ride.id} className="card-dark" style={{ padding: "24px 28px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 24 }}>
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", gap: 16, alignItems: "center", marginBottom: 10 }}>
                    <span className="font-mono" style={{ fontSize: 10, color: "var(--pbc-red)" }}>{ride.date}</span>
                    <span className="font-mono" style={{ fontSize: 10, color: "var(--pbc-muted)" }}>{ride.time}</span>
                    <span className={`badge ${ride.pace === "A-Group" ? "badge-red" : "badge-grey"}`}>{ride.pace}</span>
                  </div>
                  <div style={{ fontSize: 18, fontWeight: 500, marginBottom: 6 }}>{ride.title}</div>
                  <div style={{ fontSize: 12, color: "var(--pbc-muted)" }}>📍 {ride.meeting} · 📏 {ride.distance}</div>
                  {/* Capacity bar */}
                  <div style={{ marginTop: 16, display: "flex", alignItems: "center", gap: 12 }}>
                    <div style={{ flex: 1, height: 3, background: "var(--pbc-mid)", borderRadius: 2 }}>
                      <div style={{ width: `${pct}%`, height: "100%", background: full ? "#660000" : "var(--pbc-red)", transition: "width 0.3s ease" }} />
                    </div>
                    <span className="font-mono" style={{ fontSize: 10, color: "var(--pbc-muted)", whiteSpace: "nowrap" }}>{ride.rsvp}/{ride.cap} riders</span>
                  </div>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 8, alignItems: "flex-end" }}>
                  <Link href={`/rides/${ride.id}`} className="btn-primary" style={{ padding: "10px 20px", fontSize: 11 }}>
                    {full ? "VIEW →" : "RSVP →"}
                  </Link>
                  {full && <span className="badge badge-red">FULL</span>}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
