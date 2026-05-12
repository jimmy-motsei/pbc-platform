import Link from "next/link";

const stats = [
  { num: "6",  label: "Active Members" },
  { num: "3",  label: "Upcoming Rides" },
  { num: "44", label: "Total RSVPs" },
  { num: "0",  label: "Waitlisted" },
];

const recentRides = [
  { id: "1", date: "SAT 7 JUN",  title: "Blue Valley Morning Blast", rsvp: 14, cap: 20, status: "upcoming" },
  { id: "2", date: "SAT 14 JUN", title: "Pretoria Loop",              rsvp: 8,  cap: 15, status: "upcoming" },
  { id: "3", date: "SAT 21 JUN", title: "Hartebeespoort Dam",        rsvp: 22, cap: 25, status: "upcoming" },
];

export default function AdminPage() {
  return (
    <div>
      <div style={{ marginBottom: 40 }}>
        <span className="section-label">Admin Dashboard</span>
        <h1 className="font-display" style={{ fontSize: "clamp(36px, 5vw, 56px)", margin: "12px 0 8px", lineHeight: 1 }}>
          COMMAND<br /><span style={{ color: "var(--pbc-red)" }}>CENTRE.</span>
        </h1>
        <div className="red-bar" style={{ marginTop: 16 }} />
      </div>

      {/* Stats */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 2, marginBottom: 40 }}>
        {stats.map((s) => (
          <div key={s.label} className="stat-card">
            <div className="stat-number">{s.num}</div>
            <div className="stat-label">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Quick actions */}
      <div style={{ display: "flex", gap: 8, marginBottom: 40 }}>
        <Link href="/admin/rides/new" className="btn-primary">+ CREATE RIDE</Link>
        <Link href="/admin/announcements" className="btn-ghost">📢 ANNOUNCEMENT</Link>
        <Link href="/admin/members" className="btn-ghost">👥 MANAGE MEMBERS</Link>
      </div>

      {/* Rides table */}
      <div style={{ marginBottom: 8 }}>
        <div className="font-mono" style={{ fontSize: 10, color: "var(--pbc-red)", letterSpacing: "0.2em", marginBottom: 12 }}>UPCOMING RIDES</div>
      </div>
      <div className="card-dark" style={{ overflow: "hidden" }}>
        <table className="table-dark">
          <thead>
            <tr>
              <th>DATE</th>
              <th>RIDE</th>
              <th>RSVP</th>
              <th>STATUS</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {recentRides.map((r) => (
              <tr key={r.id}>
                <td className="font-mono" style={{ fontSize: 11, color: "var(--pbc-red)" }}>{r.date}</td>
                <td style={{ fontWeight: 500, color: "var(--pbc-white)" }}>{r.title}</td>
                <td>{r.rsvp}/{r.cap}</td>
                <td><span className="badge badge-green">UPCOMING</span></td>
                <td>
                  <div style={{ display: "flex", gap: 12 }}>
                    <button style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: 10, color: "var(--pbc-muted)", background: "none", border: "none", cursor: "pointer", letterSpacing: "0.1em" }}>EDIT</button>
                    <button style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: 10, color: "#660000", background: "none", border: "none", cursor: "pointer", letterSpacing: "0.1em" }}>CANCEL</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
