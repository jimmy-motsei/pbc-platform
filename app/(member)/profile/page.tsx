import { currentUser } from "@clerk/nextjs/server";

export default async function ProfilePage() {
  const user = await currentUser();

  return (
    <div style={{ maxWidth: 640 }}>
      <div style={{ marginBottom: 40 }}>
        <span className="section-label">My Profile</span>
        <h1 className="font-display" style={{ fontSize: "clamp(36px, 5vw, 56px)", margin: "12px 0 8px", lineHeight: 1 }}>
          MY<br /><span style={{ color: "var(--pbc-red)" }}>PROFILE.</span>
        </h1>
        <div className="red-bar" style={{ marginTop: 16 }} />
      </div>

      {/* Avatar + Name */}
      <div className="card-dark" style={{ padding: "32px 28px", marginBottom: 2 }}>
        <div style={{ display: "flex", gap: 20, alignItems: "center", marginBottom: 24 }}>
          <div style={{ width: 64, height: 64, background: "var(--pbc-red)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span className="font-display" style={{ fontSize: 24, color: "#fff" }}>
              {user?.firstName?.[0] ?? "?"}
            </span>
          </div>
          <div>
            <div style={{ fontSize: 18, fontWeight: 500 }}>{user?.firstName} {user?.lastName}</div>
            <div style={{ fontSize: 13, color: "var(--pbc-muted)", marginTop: 4 }}>{user?.emailAddresses[0]?.emailAddress}</div>
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
          <div>
            <label className="label-mono">Pace Group</label>
            <select className="input-dark">
              <option value="">Select group</option>
              <option>A-Group (Fast)</option>
              <option>B-Group (Intermediate)</option>
              <option>C-Group (Social)</option>
            </select>
          </div>
          <div>
            <label className="label-mono">WhatsApp Number</label>
            <input className="input-dark" placeholder="+27 82 000 0000" />
          </div>
          <div style={{ gridColumn: "span 2" }}>
            <label className="label-mono">Bio</label>
            <textarea className="input-dark" rows={3} placeholder="Tell the club about yourself..." style={{ resize: "vertical" }} />
          </div>
          <div style={{ gridColumn: "span 2" }}>
            <label className="label-mono">Business / Profession</label>
            <input className="input-dark" placeholder="e.g. Director at XYZ Company" />
          </div>
        </div>
        <div style={{ marginTop: 24 }}>
          <button className="btn-primary">SAVE PROFILE →</button>
        </div>
      </div>

      {/* Stats */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 2 }}>
        {[
          { num: "0",   label: "Rides Attended" },
          { num: "0km", label: "Total Distance" },
          { num: "0%",  label: "Attendance Rate" },
        ].map((s) => (
          <div key={s.label} className="stat-card">
            <div className="stat-number" style={{ fontSize: 36 }}>{s.num}</div>
            <div className="stat-label">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
