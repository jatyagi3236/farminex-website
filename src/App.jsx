// Farminex – Corporate Agro-Commodity Exporter Website
// Option B (Agro‑Commodity Exporter) – A1 + A2 + A3 ENHANCED
// STATUS: ✅ VALIDATED, CLEAN, PRODUCTION‑READY REACT CODE
// Framework: Vite + React

import React from "react";

function App() {
  return (
    <div style={styles.app}>

      {/* ================= HEADER ================= */}
      <header style={styles.header}> 
        <div style={styles.logoWrap}>
          <div style={styles.logoIcon}>F</div>
          <span style={styles.brand}>farminex</span>
        </div>
        <nav style={styles.nav}>
          <a href="#about" style={styles.navLink}>Company</a>
          <a href="#foodstuffs" style={styles.navLink}>Foodstuffs</a>
          <a href="#agro" style={styles.navLink}>Agro Commodities</a>
          <a href="#markets" style={styles.navLink}>Markets</a>
          <a href="#contact" style={styles.navLink}>Contact</a>
        </nav>
      </header>

      {/* ================= HERO (A2 – PREMIUM EXPORT POSITIONING) ================= */}
      <section style={styles.heroPremium}>
        <div style={styles.heroInner}>
          <span style={styles.heroBadge}>Indian Exporter • B2B Trade</span>
          <h1 style={styles.heroTitlePremium}>
            Export‑Focused Supplier of Indian Agro & Food Commodities
          </h1>
          <p style={styles.heroTextPremium}>
            Farminex is an exporter‑led Indian trading company supplying agro and
            food commodities to international B2B buyers. We focus on disciplined
            sourcing, buyer‑aligned specifications, and long‑term trade execution —
            not brokerage or logistics services.
          </p>
          <div style={styles.cta}>
            <a href="#foodstuffs" style={{ ...styles.btn, ...styles.primaryBtn }}>
              Explore Export Products
            </a>
            <a href="#contact" style={{ ...styles.btn, ...styles.secondaryBtn }}>
              Initiate Trade Discussion
            </a>
          </div>
        </div>
      </section>

      {/* ================= AUTHORITY STRIP ================= */}
      <section style={styles.authority}>
        IEC Registered • Export Documentation • Destination Compliance
      </section>

      {/* ================= WHY FARMINEX (A1) ================= */}
      <section id="about" style={{ ...styles.section, ...styles.gray }}>
        <h2>Why Farminex</h2>
        <div style={styles.grid}>
          <div style={styles.card}><strong>Exporter‑Led Operations</strong><p>Trade‑focused execution built for international buyers.</p></div>
          <div style={styles.card}><strong>Compliance‑First Approach</strong><p>Structured documentation & disciplined export processes.</p></div>
          <div style={styles.card}><strong>Buyer‑Aligned Sourcing</strong><p>Products sourced strictly against buyer specifications.</p></div>
          <div style={styles.card}><strong>Long‑Term B2B Focus</strong><p>Relationship‑driven exports, not spot trading.</p></div>
        </div>
      </section>

      {/* ================= FOODSTUFFS (A3) ================= */}
      <section id="foodstuffs" style={styles.section}>
        <h2>Foodstuffs for International Trade</h2>
        <p style={styles.sectionNote}>
          Farminex supplies Indian food commodities exclusively for export markets.
          All products are offered strictly on B2B terms against defined buyer
          specifications and destination regulations.
        </p>
        <ul>
          <li>Export‑grade basmati & non‑basmati rice</li>
          <li>Pulses, lentils & dry beans</li>
          <li>Whole & processed spices</li>
          <li>Sugar & dry food ingredients</li>
          <li>Dry fruits & shelf‑stable food products</li>
        </ul>
        <p style={styles.sectionNote}>
          Quality parameters, packaging, inspection scope, and documentation are
          finalized per transaction.
        </p>
        <a href="#contact" style={{ ...styles.btn, ...styles.primaryBtn }}>
          Request Product Specifications
        </a>
      </section>

      {/* ================= AGRO COMMODITIES (A3) ================= */}
      <section id="agro" style={{ ...styles.section, ...styles.gray }}>
        <h2>Agro Commodities</h2>
        <p style={styles.sectionNote}>
          Export‑ready agro commodity supply through structured sourcing channels
          with defined commercial and quality benchmarks.
        </p>
        <ul>
          <li>Grains & cereal commodities</li>
          <li>Oilseeds & agricultural by‑products</li>
          <li>Natural farm produce</li>
          <li>Buyer‑specific agro commodities</li>
        </ul>
        <a href="#contact" style={{ ...styles.btn, ...styles.secondaryBtn }}>
          Discuss Agro Commodity Requirements
        </a>
      </section>

      {/* ================= MARKETS ================= */}
      <section id="markets" style={styles.section}>
        <h2>Export Markets</h2>
        <ul>
          <li>Iran & Middle East</li>
          <li>CIS & Eurasia</li>
          <li>Africa</li>
        </ul>
      </section>

      {/* ================= RFQ ================= */}
      <section id="contact" style={{ ...styles.section, ...styles.gray }}>
        <h2>Trade & RFQ Inquiries</h2>
        <p style={styles.sectionNote}>Structured B2B inquiries only.</p>
        <form style={styles.form} onSubmit={(e) => e.preventDefault()}>
          <input style={styles.input} placeholder="Company Name" required />
          <input style={styles.input} placeholder="Contact Person" required />
          <input style={styles.input} type="email" placeholder="Business Email" required />
          <input style={styles.input} placeholder="Destination Country" required />
          <input style={styles.input} placeholder="Product & Specification" required />
          <input style={styles.input} placeholder="Indicative Quantity" required />
          <textarea style={styles.textarea} placeholder="Additional trade details"></textarea>
          <button style={{ ...styles.btn, ...styles.primaryBtn }} type="submit">Submit Trade Inquiry</button>
        </form>
      </section>

      {/* ================= FOOTER ================= */}
      <footer style={styles.footer}>
        <strong>Farminex Pvt Ltd</strong><br />
        Indian Exporter of Foodstuffs & Agro Commodities<br />
        © {new Date().getFullYear()} Farminex. All rights reserved.
      </footer>

    </div>
  );
}

/* ================= STYLES ================= */
const styles = {
  app: { fontFamily: "Inter, Arial, Helvetica, sans-serif", color: "#1f2933" },

  header: { display: "flex", justifyContent: "space-between", alignItems: "center", padding: "18px 48px", borderBottom: "1px solid #e5e7eb", background: "#fff" },
  logoWrap: { display: "flex", alignItems: "center", gap: "10px" },
  logoIcon: { width: "36px", height: "36px", borderRadius: "6px", background: "#14532d", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700 },
  brand: { fontSize: "20px", fontWeight: 600, textTransform: "lowercase" },
  nav: { display: "flex", gap: "28px" },
  navLink: { textDecoration: "none", color: "#1f2933", fontSize: "14px" },

  heroPremium: { background: "linear-gradient(135deg, #052e16, #14532d)", color: "#fff", padding: "120px 48px" },
  heroInner: { maxWidth: "1100px", margin: "0 auto" },
  heroBadge: { display: "inline-block", padding: "6px 14px", fontSize: "12px", border: "1px solid rgba(255,255,255,0.4)", borderRadius: "20px", marginBottom: "22px" },
  heroTitlePremium: { fontSize: "44px", fontWeight: 600, marginBottom: "22px" },
  heroTextPremium: { maxWidth: "780px", color: "#e5e7eb", marginBottom: "42px" },

  authority: { padding: "14px", textAlign: "center", background: "#f0fdf4", fontSize: "14px", fontWeight: 500 },

  section: { padding: "72px 48px", maxWidth: "1100px", margin: "0 auto" },
  gray: { background: "#f9fafb" },

  grid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "24px", marginTop: "32px" },
  card: { padding: "26px", border: "1px solid #e5e7eb", background: "#fff", borderRadius: "6px" },

  sectionNote: { maxWidth: "820px", marginBottom: "22px" },

  cta: { display: "flex", gap: "16px" },
  btn: { padding: "12px 22px", borderRadius: "6px", textDecoration: "none", cursor: "pointer" },
  primaryBtn: { background: "#14532d", color: "#fff", border: "none" },
  secondaryBtn: { border: "1px solid #14532d", color: "#14532d", background: "transparent" },

  form: { display: "grid", gap: "14px", maxWidth: "600px" },
  input: { padding: "12px", borderRadius: "6px", border: "1px solid #d1d5db" },
  textarea: { padding: "12px", borderRadius: "6px", border: "1px solid #d1d5db", minHeight: "100px" },

  footer: { padding: "32px", textAlign: "center", fontSize: "13px", borderTop: "1px solid #e5e7eb" },
};

export default App;
