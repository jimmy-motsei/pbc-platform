import Link from "next/link";

export default function NewRidePage() {
  return (
    <div style={{ maxWidth: 680 }}>
      <Link href="/admin" style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: 11, color: "var(--pbc-muted)", textDecoration: "none", letterSpacing: "0.1em" }}>← BACK TO OVERVIEW</Link>

      <div style={{ margin: "24px 0 32px" }}>
        <span className="section-label">Admin · Rides</span>
        <h1 className="font-display" style={{ fontSize: "clamp(36px, 5vw, 56px)", margin: "12px 0", lineHeight: 1 }}>
          CREATE<br /><span style={{ color: "var(--pbc-red)" }}>NEW RIDE.</span>
        </h1>
        <div className="red-bar" />
      </div>

      <form style={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <div className="card-dark" style={{ padding: "32px 28px" }}>
          <div className="font-mono" style={{ fontSize: 10, color: "var(--pbc-red)", letterSpacing: "0.2em", marginBottom: 20 }}>RIDE DETAILS</div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            <div style={{ gridColumn: "span 2" }}>
              <label className="label-mono">Ride Title</label>
              <input className="input-dark" placeholder="e.g. Blue Valley Morning Blast" />
            </div>
            <div>
              <label className="label-mono">Date</label>
              <input className="input-dark" type="date" />
            </div>
            <div>
              <label className="label-mono">Start Time</label>
              <input className="input-dark" type="time" defaultValue="06:00" />
            </div>
            <div>
              <label className="label-mono">Distance (km)</label>
              <input className="input-dark" type="number" placeholder="65" />
            </div>
            <div>
              <label className="label-mono">Pace Group</label>
              <select className="input-dark">
                <option value="ALL">All Groups</option>
                <option value="A">A-Group (Fast)</option>
                <option value="B">B-Group (Intermediate)</option>
                <option value="C">C-Group (Social)</option>
              </select>
            </div>
            <div>
              <label className="label-mono">Capacity (max riders)</label>
              <input className="input-dark" type="number" placeholder="20" />
            </div>
            <div>
              <label className="label-mono">Meeting Point</label>
              <input className="input-dark" placeholder="e.g. Blue Valley Spar, Fourways" />
            </div>
            <div style={{ gridColumn: "span 2" }}>
              <label className="label-mono">Route Description</label>
              <textarea className="input-dark" rows={3} placeholder="Describe the route, key landmarks, climbs..." style={{ resize: "vertical" }} />
            </div>
            <div style={{ gridColumn: "span 2" }}>
              <label className="label-mono">Notes for Riders</label>
              <textarea className="input-dark" rows={2} placeholder="Any special instructions, gear requirements, weather notes..." style={{ resize: "vertical" }} />
            </div>
          </div>
        </div>

        <div style={{ display: "flex", gap: 8, paddingTop: 8 }}>
          <button type="submit" className="btn-primary">CREATE RIDE →</button>
          <Link href="/admin" className="btn-ghost">CANCEL</Link>
        </div>
      </form>
    </div>
  );
}
