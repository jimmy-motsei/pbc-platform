import { currentUser } from "@clerk/nextjs/server";

// Mock data — replaced with DB queries in Phase 1
const upcomingRides = [
  { id: "1", date: "SAT 7 JUN", title: "Blue Valley Morning Blast", distance: "65km", pace: "A-Group", rsvp: 14, cap: 20 },
  { id: "2", date: "SAT 14 JUN", title: "Midrand Loop", distance: "45km", pace: "B-Group", rsvp: 8, cap: 15 },
  { id: "3", date: "SAT 21 JUN", title: "Hartebeespoort Dam Challenge", distance: "95km", pace: "A-Group", rsvp: 22, cap: 25 },
];

const announcements = [
  { id: "1", title: "June ride schedule is live", body: "All June rides have been added to the calendar. RSVP early — A-Group spots fill fast.", date: "2 Jun" },
  { id: "2", title: "New member welcome", body: "Welcome to the three new members who joined this week. See you on the road! #Ahaa", date: "28 May" },
];

export default async function DashboardPage() {
  const user = await currentUser();
  const firstName = user?.firstName ?? "Rider";

  return (
    <div>
      {/* Header */}
      <div style={{ marginBottom: 40 }}>
        <span className="section-label">Member Dashboard</span>
        <h1 className="font-display" style={{ fontSize: "clamp(36px, 5vw, 56px)", margin: "12px 0 8px", lineHeight: 1 }}>
          WELCOME BACK,<br />
          <span style={{ color: "var(--pbc-red)" }}>{firstName.toUpperCase()}.</span>
        </h1>
        <div className="red-bar" style={{ marginTop: 16 }} />
      </div>

      {/* Stats strip */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: 2, marginBottom: 40 }}>
        {[
          { num: "0",   label: "Rides Attended" },
          { num: "0km", label: "Total Distance" },
          { num: "—",   label: "Pace Group" },
          { num: "0",   label: "This Month" },
        ].map((s) => (
          <div key={s.label} className="stat-card">
            <div className="stat-number">{s.num}</div>
            <div className="stat-label">{s.label}</div>
          </div>
        ))}
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 340px", gap: 2, alignItems: "start" }}>
        {/* Upcoming rides */}
        <div>
          <div className="font-mono" style={{ fontSize: 10, color: "var(--pbc-red)", letterSpacing: "0.2em", marginBottom: 16 }}>UPCOMING RIDES</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {upcomingRides.map((ride) => {
              const full = ride.rsvp >= ride.cap;
              return (
                <div key={ride.id} className="card-dark" style={{ padding: "18px 20px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div style={{ display: "flex", gap: 20, alignItems: "center" }}>
                    <span className="font-mono" style={{ fontSize: 10, color: "var(--pbc-red)", minWidth: 80 }}>{ride.date}</span>
                    <div>
                      <div style={{ fontSize: 14, fontWeight: 500 }}>{ride.title}</div>
                      <div style={{ fontSize: 11, color: "var(--pbc-muted)", marginTop: 3 }}>{ride.distance} · {ride.pace}</div>
                    </div>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <div style={{ fontSize: 11, color: "var(--pbc-muted)" }}>{ride.rsvp}/{ride.cap}</div>
                    <button
                      style={{ background: full ? "#1a0000" : "var(--pbc-red)", color: full ? "var(--pbc-red)" : "#fff", padding: "6px 14px", fontFamily: "IBM Plex Mono, monospace", fontSize: 10, letterSpacing: "0.1em", border: "none", cursor: full ? "default" : "pointer" }}
                    >
                      {full ? "FULL" : "RSVP"}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Announcements */}
        <div>
          <div className="font-mono" style={{ fontSize: 10, color: "var(--pbc-red)", letterSpacing: "0.2em", marginBottom: 16 }}>ANNOUNCEMENTS</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {announcements.map((a) => (
              <div key={a.id} className="card-dark" style={{ padding: "18px 20px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 8 }}>
                  <div style={{ fontSize: 13, fontWeight: 500, color: "var(--pbc-white)" }}>{a.title}</div>
                  <span className="font-mono" style={{ fontSize: 10, color: "var(--pbc-muted)", whiteSpace: "nowrap", marginLeft: 12 }}>{a.date}</span>
                </div>
                <div style={{ fontSize: 12, color: "var(--pbc-muted)", lineHeight: 1.6 }}>{a.body}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
