"use client";
import { useEffect, useRef, useState } from "react";

// ── Minimal animation hook ──────────────────────────────────────────────────
function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const { ref, visible } = useInView();
  return (
    <div ref={ref} className={className} style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(28px)", transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms` }}>
      {children}
    </div>
  );
}

// ── Nav ─────────────────────────────────────────────────────────────────────
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => { const h = () => setScrolled(window.scrollY > 40); window.addEventListener("scroll", h); return () => window.removeEventListener("scroll", h); }, []);
  return (
    <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, padding: "20px 40px", display: "flex", justifyContent: "space-between", alignItems: "center", background: scrolled ? "rgba(8,8,8,0.95)" : "transparent", backdropFilter: scrolled ? "blur(12px)" : "none", borderBottom: scrolled ? "1px solid #1a1a1a" : "none", transition: "all 0.4s ease" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <div style={{ width: 8, height: 8, background: "var(--pbc-red)", borderRadius: "50%" }} />
        <span className="font-mono" style={{ fontSize: 12, letterSpacing: "0.2em", color: "var(--pbc-white)" }}>PBC PLATFORM</span>
      </div>
      <span className="font-mono" style={{ fontSize: 11, color: "var(--pbc-muted)", letterSpacing: "0.15em" }}>CONFIDENTIAL PROPOSAL</span>
    </nav>
  );
}

// ── Hero ────────────────────────────────────────────────────────────────────
function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setTimeout(() => setMounted(true), 100); }, []);
  return (
    <section style={{ minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", padding: "120px 40px 80px", position: "relative", overflow: "hidden" }}>
      {/* Background grid */}
      <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(204,0,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(204,0,0,0.04) 1px, transparent 1px)", backgroundSize: "80px 80px", pointerEvents: "none" }} />
      {/* Red accent line */}
      <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "3px", background: "linear-gradient(90deg, var(--pbc-red), transparent)" }} />

      <div style={{ maxWidth: 1100, margin: "0 auto", width: "100%" }}>
        <div style={{ opacity: mounted ? 1 : 0, transform: mounted ? "none" : "translateY(16px)", transition: "all 0.6s ease 0.1s" }}>
          <span className="section-label">Presented exclusively to</span>
        </div>

        <div style={{ opacity: mounted ? 1 : 0, transform: mounted ? "none" : "translateY(20px)", transition: "all 0.8s ease 0.2s" }}>
          <h1 className="font-display" style={{ fontSize: "clamp(56px, 10vw, 140px)", lineHeight: 0.9, margin: "20px 0", color: "var(--pbc-white)" }}>
            PROUD<br />
            <span style={{ color: "var(--pbc-red)", WebkitTextStroke: "2px var(--pbc-red)", WebkitTextFillColor: "transparent" }}>BEGINNERS</span><br />
            CYCLING CLUB
          </h1>
        </div>

        <div style={{ opacity: mounted ? 1 : 0, transform: mounted ? "none" : "translateY(16px)", transition: "all 0.8s ease 0.4s", maxWidth: 560 }}>
          <div className="red-bar" style={{ margin: "32px 0 24px" }} />
          <p style={{ fontSize: 20, fontWeight: 300, lineHeight: 1.6, color: "#aaa" }}>
            A purpose-built digital platform for your club — ride management, member community, and business connections. All in one place. Carrying the <strong style={{ color: "var(--pbc-white)", fontWeight: 500 }}>#Ahaa</strong> spirit into the next decade.
          </p>
        </div>

        <div style={{ opacity: mounted ? 1 : 0, transition: "all 0.8s ease 0.6s", marginTop: 48, display: "flex", gap: 16, flexWrap: "wrap" }}>
          <a href="#solution" style={{ background: "var(--pbc-red)", color: "#fff", padding: "14px 32px", fontFamily: "'IBM Plex Mono', monospace", fontSize: 13, letterSpacing: "0.15em", textDecoration: "none", display: "inline-block" }}>
            SEE THE PLATFORM →
          </a>
          <a href="#partnership" style={{ border: "1px solid #333", color: "var(--pbc-white)", padding: "14px 32px", fontFamily: "'IBM Plex Mono', monospace", fontSize: 13, letterSpacing: "0.15em", textDecoration: "none", display: "inline-block" }}>
            THE DEAL
          </a>
        </div>

        {/* Stats strip */}
        <div style={{ marginTop: 80, display: "flex", gap: 48, flexWrap: "wrap" }}>
          {[["10+", "Years of PBC legacy"], ["#Ahaa", "The spirit that rides on"], ["1st", "Club in SA with this platform"]].map(([num, label]) => (
            <div key={num} style={{ opacity: mounted ? 1 : 0, transition: "all 0.8s ease 0.7s" }}>
              <div className="font-display" style={{ fontSize: 36, color: "var(--pbc-red)" }}>{num}</div>
              <div style={{ fontSize: 12, color: "var(--pbc-muted)", marginTop: 4, letterSpacing: "0.05em" }}>{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Problem ─────────────────────────────────────────────────────────────────
function Problem() {
  const pains = [
    { icon: "📱", title: "WhatsApp Chaos", body: "Ride info buried in 200 messages. Members miss RSVPs. The admin carries the burden alone." },
    { icon: "📅", title: "No Single Calendar", body: "No structured view of upcoming rides, routes, or pace groups. Everything is scattered." },
    { icon: "🤝", title: "Untapped Network", body: "Your members are business professionals. That value never surfaces beyond the saddle." },
    { icon: "🌐", title: "No Digital Home", body: "A club with 10 years of legacy deserves more than a basic website and a Facebook page." },
  ];
  return (
    <section style={{ padding: "100px 40px", background: "var(--pbc-black)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <Reveal>
          <span className="section-label">The challenge</span>
          <h2 className="font-display" style={{ fontSize: "clamp(36px, 5vw, 64px)", margin: "16px 0 48px", lineHeight: 1 }}>
            YOUR CLUB HAS OUTGROWN<br />
            <span style={{ color: "var(--pbc-red)" }}>ITS TOOLS.</span>
          </h2>
        </Reveal>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 2 }}>
          {pains.map((p, i) => (
            <Reveal key={p.title} delay={i * 80}>
              <div className="card-dark" style={{ padding: 32, height: "100%" }}>
                <div style={{ fontSize: 28, marginBottom: 16 }}>{p.icon}</div>
                <div style={{ fontWeight: 600, fontSize: 16, marginBottom: 10, color: "var(--pbc-white)" }}>{p.title}</div>
                <div style={{ fontSize: 14, color: "var(--pbc-muted)", lineHeight: 1.7 }}>{p.body}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Solution ─────────────────────────────────────────────────────────────────
function Solution() {
  return (
    <section id="solution" style={{ padding: "100px 40px", background: "var(--pbc-grey)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <Reveal>
          <span className="section-label">The platform</span>
          <h2 className="font-display" style={{ fontSize: "clamp(36px, 5vw, 64px)", margin: "16px 0 24px", lineHeight: 1 }}>
            BUILT FOR PBC.<br />
            <span style={{ color: "var(--pbc-red)" }}>OWNED BY PBC.</span>
          </h2>
          <p style={{ fontSize: 17, color: "#888", maxWidth: 540, lineHeight: 1.7, marginBottom: 64 }}>
            Not a generic club app. A platform designed specifically for how PBC rides, connects, and grows — with your branding, your domain, your community.
          </p>
        </Reveal>

        {/* Platform preview mockup */}
        <Reveal delay={100}>
          <div style={{ background: "var(--pbc-black)", border: "1px solid var(--pbc-mid)", borderRadius: 4, overflow: "hidden", marginBottom: 80 }}>
            {/* Browser bar */}
            <div style={{ background: "#0f0f0f", padding: "12px 20px", display: "flex", alignItems: "center", gap: 8, borderBottom: "1px solid var(--pbc-mid)" }}>
              <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#CC0000" }} />
              <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#333" }} />
              <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#333" }} />
              <div style={{ flex: 1, background: "#1a1a1a", borderRadius: 3, padding: "4px 12px", marginLeft: 12 }}>
                <span className="font-mono" style={{ fontSize: 11, color: "var(--pbc-muted)" }}>app.proudbeginners.co.za</span>
              </div>
            </div>
            {/* Dashboard mockup */}
            <div style={{ display: "grid", gridTemplateColumns: "220px 1fr", minHeight: 400 }}>
              {/* Sidebar */}
              <div style={{ background: "#0d0d0d", borderRight: "1px solid var(--pbc-mid)", padding: 24 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 32 }}>
                  <div style={{ width: 32, height: 32, background: "var(--pbc-red)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <span style={{ fontSize: 14 }}>🚴</span>
                  </div>
                  <div>
                    <div style={{ fontSize: 11, fontWeight: 600, color: "var(--pbc-white)" }}>PBC</div>
                    <div style={{ fontSize: 10, color: "var(--pbc-muted)" }}>Dashboard</div>
                  </div>
                </div>
                {["🏠  Home", "📅  Rides", "👥  Members", "📊  My Stats", "💼  Network", "⚙️  Admin"].map((item) => (
                  <div key={item} style={{ padding: "8px 12px", marginBottom: 4, borderRadius: 3, fontSize: 12, color: item.includes("Rides") ? "var(--pbc-white)" : "var(--pbc-muted)", background: item.includes("Rides") ? "var(--pbc-mid)" : "transparent" }}>{item}</div>
                ))}
              </div>
              {/* Main content */}
              <div style={{ padding: 28 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
                  <div>
                    <div style={{ fontSize: 11, color: "var(--pbc-muted)", marginBottom: 4 }} className="font-mono">UPCOMING RIDES</div>
                    <div style={{ fontSize: 18, fontWeight: 600 }}>June Schedule</div>
                  </div>
                  <div style={{ background: "var(--pbc-red)", color: "#fff", padding: "8px 16px", fontSize: 11, fontFamily: "monospace" }}>+ NEW RIDE</div>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {[
                    { date: "SAT 7 JUN", name: "Blue Valley Morning Blast", distance: "65km", pace: "A-Group", rsvp: 14, cap: 20 },
                    { date: "SAT 14 JUN", name: "Midrand Loop", distance: "45km", pace: "B-Group", rsvp: 8, cap: 15 },
                    { date: "SAT 21 JUN", name: "Hartebeespoort Dam Challenge", distance: "95km", pace: "A-Group", rsvp: 22, cap: 25 },
                  ].map((ride) => (
                    <div key={ride.name} style={{ background: "var(--pbc-grey)", border: "1px solid var(--pbc-mid)", padding: "14px 18px", display: "flex", justifyContent: "space-between", alignItems: "center", borderRadius: 2 }}>
                      <div style={{ display: "flex", gap: 20, alignItems: "center" }}>
                        <span className="font-mono" style={{ fontSize: 10, color: "var(--pbc-red)", minWidth: 80 }}>{ride.date}</span>
                        <div>
                          <div style={{ fontSize: 13, fontWeight: 500 }}>{ride.name}</div>
                          <div style={{ fontSize: 11, color: "var(--pbc-muted)", marginTop: 2 }}>{ride.distance} · {ride.pace}</div>
                        </div>
                      </div>
                      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                        <div style={{ fontSize: 11, color: "var(--pbc-muted)" }}>{ride.rsvp}/{ride.cap}</div>
                        <div style={{ background: ride.rsvp >= ride.cap ? "#1a0000" : "var(--pbc-red)", color: ride.rsvp >= ride.cap ? "#cc0000" : "#fff", padding: "5px 12px", fontSize: 10, fontFamily: "monospace" }}>
                          {ride.rsvp >= ride.cap ? "FULL" : "RSVP"}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// ── Features ─────────────────────────────────────────────────────────────────
function Features() {
  const features = [
    {
      tag: "01 / RIDES",
      title: "Ride Management, Simplified",
      body: "Admin creates rides with route details, pace groups, and capacity. Members RSVP in one tap. Automated WhatsApp reminders go out automatically. No more chasing people in group chats.",
      items: ["Ride calendar & scheduling", "RSVP + waitlist management", "Pace group organisation", "WhatsApp reminder integration", "Post-ride attendance log"],
    },
    {
      tag: "02 / MEMBERS",
      title: "A Home for Every Rider",
      body: "Every member gets a profile that shows their cycling journey — rides attended, distances covered, pace history. The club finally has a record of its own community.",
      items: ["Member profiles & stats", "Attendance history", "Photo gallery per ride", "Ride leaderboards", "Achievement badges"],
    },
    {
      tag: "03 / NETWORK",
      title: "The Business Layer",
      body: "PBC members are business professionals. The platform surfaces this naturally — each profile includes a business card. Introductions happen within the community, not outside it.",
      items: ["Business profile per member", "Member business directory", "Referral & intro threads", "Private messaging", "Industry tagging"],
    },
    {
      tag: "04 / ADMIN",
      title: "The Admin's Command Centre",
      body: "Your paid administrator gets a powerful dashboard. Member management, ride creation, announcements, and club finances — all without a spreadsheet in sight.",
      items: ["Full member management", "Ride creation & editing", "Announcement broadcasts", "Subscription & dues tracking", "Event management"],
    },
  ];

  return (
    <section style={{ padding: "100px 40px", background: "var(--pbc-black)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <Reveal>
          <span className="section-label">Platform features</span>
          <h2 className="font-display" style={{ fontSize: "clamp(36px, 5vw, 64px)", margin: "16px 0 80px", lineHeight: 1 }}>
            EVERYTHING YOUR<br />
            <span style={{ color: "var(--pbc-red)" }}>CLUB NEEDS.</span>
          </h2>
        </Reveal>
        <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
          {features.map((f, i) => (
            <Reveal key={f.tag} delay={i * 60}>
              <div className="card-dark" style={{ padding: "48px 40px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "start" }}>
                <div>
                  <span className="font-mono" style={{ fontSize: 11, color: "var(--pbc-red)", letterSpacing: "0.2em" }}>{f.tag}</span>
                  <h3 className="font-display" style={{ fontSize: 36, margin: "12px 0 20px", lineHeight: 1.1 }}>{f.title}</h3>
                  <p style={{ fontSize: 15, color: "var(--pbc-muted)", lineHeight: 1.8 }}>{f.body}</p>
                </div>
                <div style={{ paddingTop: 8 }}>
                  {f.items.map((item) => (
                    <div key={item} style={{ display: "flex", alignItems: "center", gap: 12, padding: "10px 0", borderBottom: "1px solid var(--pbc-mid)" }}>
                      <div style={{ width: 6, height: 6, background: "var(--pbc-red)", borderRadius: "50%", flexShrink: 0 }} />
                      <span style={{ fontSize: 14, color: "#ccc" }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Partnership ───────────────────────────────────────────────────────────────
function Partnership() {
  return (
    <section id="partnership" style={{ padding: "100px 40px", background: "var(--pbc-grey)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <Reveal>
          <span className="section-label">The co-creation deal</span>
          <h2 className="font-display" style={{ fontSize: "clamp(36px, 5vw, 64px)", margin: "16px 0 24px", lineHeight: 1 }}>
            NOT A CLIENT.<br />
            <span style={{ color: "var(--pbc-red)" }}>A FOUNDING PARTNER.</span>
          </h2>
          <p style={{ fontSize: 17, color: "#888", maxWidth: 580, lineHeight: 1.7, marginBottom: 64 }}>
            PBC becomes the founding club that shapes this platform. In exchange, you get permanent founding-partner privileges and a seat at the table.
          </p>
        </Reveal>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2, marginBottom: 2 }}>
          <Reveal delay={0}>
            <div style={{ background: "var(--pbc-red)", padding: "48px 40px", height: "100%" }}>
              <div className="font-display" style={{ fontSize: 28, marginBottom: 24, letterSpacing: "0.05em" }}>WHAT PBC GETS</div>
              {[
                "Your own branded platform (app.proudbeginners.co.za)",
                "Founding partner pricing — locked in forever",
                "First access to every new feature",
                "Direct input into the product roadmap",
                "No other Gauteng club gets access while you're exclusive",
                "A 10-year legacy, elevated into the digital era",
              ].map((item) => (
                <div key={item} style={{ display: "flex", gap: 12, marginBottom: 16, alignItems: "flex-start" }}>
                  <span style={{ fontSize: 16, marginTop: 2 }}>✓</span>
                  <span style={{ fontSize: 14, lineHeight: 1.6 }}>{item}</span>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={80}>
            <div className="card-dark" style={{ padding: "48px 40px", height: "100%" }}>
              <div className="font-display" style={{ fontSize: 28, marginBottom: 8, letterSpacing: "0.05em", color: "var(--pbc-white)" }}>WHAT THIS MEANS</div>
              <p style={{ fontSize: 13, color: "var(--pbc-muted)", marginBottom: 28, lineHeight: 1.6 }}>We believe in being transparent. Here's exactly how this partnership works.</p>
              {[
                ["You fund the build", "Your investment covers the MVP development — the platform you receive is worth 3× what a standard website would cost you."],
                ["We retain the IP", "Maru Online owns the underlying platform. PBC owns their branded instance and data — always."],
                ["You shape v1", "Your real feedback from real rides drives the first 6 months of product development."],
                ["You get founder pricing", "As the club grows, so does the platform. Your rate stays fixed — forever."],
              ].map(([title, desc]) => (
                <div key={title as string} style={{ marginBottom: 20 }}>
                  <div style={{ fontSize: 13, fontWeight: 600, color: "var(--pbc-white)", marginBottom: 4 }}>{title}</div>
                  <div style={{ fontSize: 13, color: "var(--pbc-muted)", lineHeight: 1.7 }}>{desc}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Timeline */}
        <Reveal delay={120}>
          <div className="card-dark" style={{ padding: "48px 40px", marginTop: 2 }}>
            <div className="font-display" style={{ fontSize: 24, marginBottom: 32, color: "var(--pbc-white)" }}>BUILD TIMELINE</div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 0 }}>
              {[
                ["Week 1–2", "Discovery & Design", "Brand setup, member interviews, UI design"],
                ["Week 3–5", "Core Platform", "Ride management, RSVP, member profiles"],
                ["Week 6–7", "Admin & Comms", "Dashboard, WhatsApp integration, notifications"],
                ["Week 8", "Launch", "Club goes live — first ride booked on the platform"],
              ].map(([week, phase, desc], i) => (
                <div key={week as string} style={{ padding: "0 24px 0 0", borderRight: i < 3 ? "1px solid var(--pbc-mid)" : "none" }}>
                  <div className="font-mono" style={{ fontSize: 10, color: "var(--pbc-red)", marginBottom: 8 }}>{week}</div>
                  <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 6 }}>{phase}</div>
                  <div style={{ fontSize: 12, color: "var(--pbc-muted)", lineHeight: 1.6 }}>{desc}</div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// ── CTA ───────────────────────────────────────────────────────────────────────
function CTA() {
  return (
    <section style={{ padding: "120px 40px", background: "var(--pbc-black)", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at center, rgba(204,0,0,0.08) 0%, transparent 70%)", pointerEvents: "none" }} />
      <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative" }}>
        <Reveal>
          <div style={{ textAlign: "center" }}>
            <span className="section-label">Ready to ride forward?</span>
            <h2 className="font-display" style={{ fontSize: "clamp(48px, 8vw, 100px)", margin: "20px 0", lineHeight: 0.95 }}>
              LET'S BUILD THIS<br />
              <span style={{ color: "var(--pbc-red)" }}>TOGETHER.</span>
            </h2>
            <p style={{ fontSize: 17, color: "var(--pbc-muted)", maxWidth: 480, margin: "0 auto 48px", lineHeight: 1.7 }}>
              PBC has 10 years of legacy. This platform carries it into the next decade — and gives your members something worth talking about beyond the finish line.
            </p>
            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
              <a href="mailto:hello@maruonline.com?subject=PBC Platform - Let's Talk" style={{ background: "var(--pbc-red)", color: "#fff", padding: "16px 40px", fontFamily: "'IBM Plex Mono', monospace", fontSize: 13, letterSpacing: "0.15em", textDecoration: "none", display: "inline-block" }}>
                START THE CONVERSATION →
              </a>
              <a href="tel:+27" style={{ border: "1px solid #333", color: "var(--pbc-white)", padding: "16px 40px", fontFamily: "'IBM Plex Mono', monospace", fontSize: 13, letterSpacing: "0.15em", textDecoration: "none", display: "inline-block" }}>
                CALL US
              </a>
            </div>
            <div style={{ marginTop: 64, display: "flex", gap: 40, justifyContent: "center", flexWrap: "wrap" }}>
              {[["Maru Online", "The AI integration consultancy behind this platform"], ["Midrand-based", "We understand your market, your roads, your context"], ["hello@maruonline.com", "Reach us directly"]].map(([title, sub]) => (
                <div key={title as string} style={{ textAlign: "center" }}>
                  <div style={{ fontSize: 13, fontWeight: 500, color: "var(--pbc-white)" }}>{title}</div>
                  <div style={{ fontSize: 12, color: "var(--pbc-muted)", marginTop: 4 }}>{sub}</div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// ── Footer ────────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer style={{ padding: "24px 40px", borderTop: "1px solid var(--pbc-mid)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
      <span className="font-mono" style={{ fontSize: 11, color: "var(--pbc-muted)" }}>© 2025 MARU ONLINE (PTY) LTD — CONFIDENTIAL</span>
      <span className="font-mono" style={{ fontSize: 11, color: "var(--pbc-muted)" }}>PROUD BEGINNERS CYCLING CLUB — PLATFORM PROPOSAL</span>
    </footer>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default function Page() {
  return (
    <>
      <Nav />
      <Hero />
      <Problem />
      <Solution />
      <Features />
      <Partnership />
      <CTA />
      <Footer />
    </>
  );
}
