"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { UserButton } from "@clerk/nextjs";

const memberNav = [
  { href: "/dashboard", label: "Dashboard",  icon: "🏠" },
  { href: "/rides",     label: "Rides",      icon: "📅" },
  { href: "/members",   label: "Members",    icon: "👥" },
  { href: "/profile",   label: "My Profile", icon: "📊" },
];

const adminNav = [
  { href: "/admin",                  label: "Overview",       icon: "⚡" },
  { href: "/admin/rides/new",        label: "Create Ride",    icon: "➕" },
  { href: "/admin/members",          label: "Members",        icon: "👥" },
  { href: "/admin/announcements",    label: "Announcements",  icon: "📢" },
];

export function Sidebar({ isAdmin = false }: { isAdmin?: boolean }) {
  const pathname = usePathname();
  const nav = isAdmin ? [...memberNav, ...adminNav] : memberNav;

  return (
    <aside className="sidebar">
      {/* Club mark */}
      <div style={{ padding: "0 20px 24px", borderBottom: "1px solid var(--pbc-mid)", marginBottom: 16 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 32, height: 32, background: "var(--pbc-red)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16 }}>🚴</div>
          <div>
            <div style={{ fontSize: 12, fontWeight: 600, color: "var(--pbc-white)", fontFamily: "IBM Plex Mono, monospace", letterSpacing: "0.1em" }}>PBC</div>
            <div style={{ fontSize: 10, color: "var(--pbc-muted)" }}>Member Platform</div>
          </div>
        </div>
      </div>

      {/* Member nav */}
      <div style={{ flex: 1 }}>
        <div style={{ padding: "0 20px 8px" }}>
          <span className="font-mono" style={{ fontSize: 9, color: "#333", letterSpacing: "0.2em" }}>MEMBER</span>
        </div>
        {memberNav.map((item) => (
          <Link key={item.href} href={item.href} className={`nav-item ${pathname === item.href ? "active" : ""}`}>
            <span style={{ fontSize: 14 }}>{item.icon}</span>
            <span>{item.label}</span>
          </Link>
        ))}

        {/* Admin nav — only shown to admins */}
        {isAdmin && (
          <>
            <div style={{ padding: "16px 20px 8px", marginTop: 8, borderTop: "1px solid var(--pbc-mid)" }}>
              <span className="font-mono" style={{ fontSize: 9, color: "#333", letterSpacing: "0.2em" }}>ADMIN</span>
            </div>
            {adminNav.map((item) => (
              <Link key={item.href} href={item.href} className={`nav-item ${pathname === item.href ? "active" : ""}`}>
                <span style={{ fontSize: 14 }}>{item.icon}</span>
                <span>{item.label}</span>
              </Link>
            ))}
          </>
        )}
      </div>

      {/* User button */}
      <div style={{ padding: "16px 20px", borderTop: "1px solid var(--pbc-mid)", marginTop: "auto", display: "flex", alignItems: "center", gap: 10 }}>
        <UserButton />
        <span style={{ fontSize: 12, color: "var(--pbc-muted)" }}>Account</span>
      </div>
    </aside>
  );
}
