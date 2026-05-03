import Link from "next/link";

const members = [
  { id: "1", name: "Thabo Nkosi",    pace: "A", rides: 42, km: 2810, joined: "Jan 2022" },
  { id: "2", name: "Kefilwe Dlamini",pace: "B", rides: 28, km: 1260, joined: "Mar 2022" },
  { id: "3", name: "Sipho Radebe",   pace: "A", rides: 67, km: 4420, joined: "Aug 2021" },
  { id: "4", name: "Nomsa Khumalo",  pace: "C", rides: 11, km: 330,  joined: "Nov 2023" },
  { id: "5", name: "Bongani Zulu",   pace: "B", rides: 35, km: 1750, joined: "Feb 2023" },
  { id: "6", name: "Ayanda Mokoena", pace: "A", rides: 54, km: 3600, joined: "Jun 2021" },
];

export default function MembersPage() {
  return (
    <div>
      <div style={{ marginBottom: 40 }}>
        <span className="section-label">Club Directory</span>
        <h1 className="font-display" style={{ fontSize: "clamp(36px, 5vw, 56px)", margin: "12px 0 8px", lineHeight: 1 }}>
          THE<br /><span style={{ color: "var(--pbc-red)" }}>RIDERS.</span>
        </h1>
        <div className="red-bar" style={{ marginTop: 16 }} />
      </div>

      {/* Filter */}
      <div style={{ display: "flex", gap: 8, marginBottom: 24 }}>
        {["All", "A-Group", "B-Group", "C-Group"].map((f) => (
          <button key={f} style={{ padding: "7px 16px", fontFamily: "IBM Plex Mono, monospace", fontSize: 10, letterSpacing: "0.12em", border: "1px solid var(--pbc-mid)", background: f === "All" ? "var(--pbc-red)" : "transparent", color: f === "All" ? "#fff" : "var(--pbc-muted)", cursor: "pointer" }}>
            {f}
          </button>
        ))}
      </div>

      <div className="card-dark" style={{ overflow: "hidden" }}>
        <table className="table-dark">
          <thead>
            <tr>
              <th>MEMBER</th>
              <th>PACE</th>
              <th>RIDES</th>
              <th>TOTAL KM</th>
              <th>MEMBER SINCE</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {members.map((m) => (
              <tr key={m.id}>
                <td style={{ fontWeight: 500, color: "var(--pbc-white)" }}>{m.name}</td>
                <td><span className={`badge ${m.pace === "A" ? "badge-red" : "badge-grey"}`}>{m.pace}-Group</span></td>
                <td>{m.rides}</td>
                <td>{m.km.toLocaleString()}km</td>
                <td style={{ color: "var(--pbc-muted)" }}>{m.joined}</td>
                <td>
                  <Link href={`/members/${m.id}`} style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: 10, color: "var(--pbc-red)", textDecoration: "none", letterSpacing: "0.1em" }}>VIEW →</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
