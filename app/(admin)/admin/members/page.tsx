const members = [
  { id: "1", name: "Thabo Nkosi",    email: "thabo@example.com",    pace: "A", rides: 42, role: "member",  active: true  },
  { id: "2", name: "Kefilwe Dlamini",email: "kefilwe@example.com",  pace: "B", rides: 28, role: "member",  active: true  },
  { id: "3", name: "Sipho Radebe",   email: "sipho@example.com",    pace: "A", rides: 67, role: "admin",   active: true  },
  { id: "4", name: "Nomsa Khumalo",  email: "nomsa@example.com",    pace: "C", rides: 11, role: "member",  active: true  },
  { id: "5", name: "Bongani Zulu",   email: "bongani@example.com",  pace: "B", rides: 35, role: "member",  active: false },
];

export default function AdminMembersPage() {
  return (
    <div>
      <div style={{ marginBottom: 40 }}>
        <span className="section-label">Admin · Members</span>
        <h1 className="font-display" style={{ fontSize: "clamp(36px, 5vw, 56px)", margin: "12px 0 8px", lineHeight: 1 }}>
          MANAGE<br /><span style={{ color: "var(--pbc-red)" }}>MEMBERS.</span>
        </h1>
        <div className="red-bar" style={{ marginTop: 16 }} />
      </div>

      <div className="card-dark" style={{ overflow: "hidden" }}>
        <table className="table-dark">
          <thead>
            <tr>
              <th>MEMBER</th>
              <th>EMAIL</th>
              <th>PACE</th>
              <th>RIDES</th>
              <th>ROLE</th>
              <th>STATUS</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {members.map((m) => (
              <tr key={m.id}>
                <td style={{ fontWeight: 500, color: "var(--pbc-white)" }}>{m.name}</td>
                <td style={{ color: "var(--pbc-muted)", fontSize: 12 }}>{m.email}</td>
                <td><span className={`badge ${m.pace === "A" ? "badge-red" : "badge-grey"}`}>{m.pace}</span></td>
                <td>{m.rides}</td>
                <td>
                  <span className={`badge ${m.role === "admin" ? "badge-red" : "badge-grey"}`}>
                    {m.role.toUpperCase()}
                  </span>
                </td>
                <td>
                  <span className={`badge ${m.active ? "badge-green" : "badge-grey"}`}>
                    {m.active ? "ACTIVE" : "INACTIVE"}
                  </span>
                </td>
                <td>
                  <div style={{ display: "flex", gap: 12 }}>
                    <button style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: 10, color: "var(--pbc-muted)", background: "none", border: "none", cursor: "pointer", letterSpacing: "0.1em" }}>
                      {m.active ? "DEACTIVATE" : "ACTIVATE"}
                    </button>
                    {m.role !== "admin" && (
                      <button style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: 10, color: "var(--pbc-red)", background: "none", border: "none", cursor: "pointer", letterSpacing: "0.1em" }}>
                        MAKE ADMIN
                      </button>
                    )}
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
