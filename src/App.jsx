export default function App() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", color: "#1f2937" }}>
      
      <header style={{ padding: "20px", borderBottom: "1px solid #e5e7eb" }}>
        <h1 style={{ color: "#065f46" }}>Farminex</h1>
      </header>

      <section style={{ padding: "60px 20px", background: "#065f46", color: "white" }}>
        <h2 style={{ fontSize: "36px", maxWidth: "700px" }}>
          Premium Agro & Food Exports from India
        </h2>
        <p style={{ fontSize: "18px", marginTop: "20px", maxWidth: "600px" }}>
          Structured export partner for mushrooms, foodstuffs, organic inputs and honey.
        </p>
      </section>

      <section style={{ padding: "40px 20px", maxWidth: "900px", margin: "auto" }}>
        <h3>Corporate Overview</h3>
        <p>
          Farminex is a professionally managed agri-export brand focused on
          consistency, compliance, and long-term B2B partnerships.
        </p>
      </section>

      <section style={{ padding: "40px 20px", background: "#f9fafb" }}>
        <h3 style={{ textAlign: "center" }}>Product Portfolio</h3>
        <ul style={{ maxWidth: "600px", margin: "20px auto" }}>
          <li>Mushrooms</li>
          <li>Foodstuffs (Iran focus)</li>
          <li>Natural Honey</li>
          <li>Organic Inputs</li>
        </ul>
      </section>

      <section style={{ padding: "40px 20px", maxWidth: "900px", margin: "auto" }}>
        <h3>Export Capabilities</h3>
        <ul>
          <li>FOB / CFR / CIF</li>
          <li>Private labeling</li>
          <li>Documentation-driven execution</li>
        </ul>
      </section>

      <footer style={{ padding: "20px", background: "#111827", color: "#9ca3af", textAlign: "center" }}>
        © {new Date().getFullYear()} Farminex — Freshness You Can Feel.
      </footer>

    </div>
  );
}
