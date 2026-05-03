const past = [
  { id: "1", title: "June ride schedule is live", body: "All June rides have been added to the calendar. RSVP early — A-Group spots fill fast.", date: "2 Jun 2025", sent: 6 },
  { id: "2", title: "New member welcome",          body: "Welcome to the three new members who joined this week. See you on the road! #Ahaa",  date: "28 May 2025", sent: 6 },
];

export default function AnnouncementsPage() {
  return (
    <div style={{ maxWidth: 720 }}>
      <div style={{ marginBottom: 40 }}>
        <span className="section-label">Admin · Announcements</span>
        <h1 className="font-display" style={{ fontSize: "clamp(36px, 5vw, 56px)", margin: "12px 0 8px", lineHeight: 1 }}>
          BROADCAST<br /><span style={{ color: "var(--pbc-red)" }}>MESSAGE.</span>
        </h1>
        <div className="red-bar" style={{ marginTop: 16 }} />
      </div>

      {/* Compose */}
      <div className="card-dark" style={{ padding: "32px 28px", marginBottom: 2 }}>
        <div className="font-mono" style={{ fontSize: 10, color: "var(--pbc-red)", letterSpacing: "0.2em", marginBottom: 20 }}>NEW ANNOUNCEMENT</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div>
            <label className="label-mono">Subject</label>
            <input className="input-dark" placeholder="e.g. Ride schedule update — June" />
          </div>
          <div>
            <label className="label-mono">Message</label>
            <textarea className="input-dark" rows={4} placeholder="Write your message to all club members..." style={{ resize: "vertical" }} />
          </div>
          <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
            <button className="btn-primary">SEND TO ALL MEMBERS →</button>
            <span style={{ fontSize: 12, color: "var(--pbc-muted)" }}>Sends email to all 6 active members</span>
          </div>
        </div>
      </div>

      {/* Past announcements */}
      <div style={{ marginTop: 32 }}>
        <div className="font-mono" style={{ fontSize: 10, color: "var(--pbc-red)", letterSpacing: "0.2em", marginBottom: 12 }}>SENT ANNOUNCEMENTS</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
          {past.map((a) => (
            <div key={a.id} className="card-dark" style={{ padding: "20px 24px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 8 }}>
                <div style={{ fontSize: 14, fontWeight: 500 }}>{a.title}</div>
                <div style={{ display: "flex", gap: 16, alignItems: "center", flexShrink: 0, marginLeft: 16 }}>
                  <span className="font-mono" style={{ fontSize: 10, color: "var(--pbc-muted)" }}>Sent to {a.sent}</span>
                  <span className="font-mono" style={{ fontSize: 10, color: "var(--pbc-muted)" }}>{a.date}</span>
                </div>
              </div>
              <p style={{ fontSize: 12, color: "var(--pbc-muted)", margin: 0, lineHeight: 1.6 }}>{a.body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
