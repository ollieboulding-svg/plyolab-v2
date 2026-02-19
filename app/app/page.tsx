export default function HowToTestPage() {
  return (
    <main style={{ background: "#111118", border: "1px solid #222", borderRadius: 14, padding: 18 }}>
      <h1 style={{ marginTop: 0 }}>How to Test</h1>
      <p style={{ opacity: 0.85 }}>
        Keep testing consistent: same surface, same warm-up, same technique. Take 2–3 attempts for jumps/sprint and record the best.
      </p>

      <div style={{ display: "grid", gap: 14 }}>
        <section>
          <h3>20m Sprint</h3>
          <ul style={{ opacity: 0.85 }}>
            <li>Flat surface (track best)</li>
            <li>Standing start, time from first movement</li>
            <li>2–3 attempts, full rest (1–2 min), record best</li>
          </ul>
          <p style={{ fontSize: 12, opacity: 0.7 }}>Video: paste your YouTube embed link here later.</p>
        </section>

        <section>
          <h3>Vertical Jump</h3>
          <ul style={{ opacity: 0.85 }}>
            <li>Wall + chalk or jump device</li>
            <li>Two-foot takeoff, controlled landing</li>
            <li>2–3 attempts, record best</li>
          </ul>
        </section>

        <section>
          <h3>Broad Jump</h3>
          <ul style={{ opacity: 0.85 }}>
            <li>Two-foot takeoff, “stick” landing</li>
            <li>Measure to back of heel</li>
            <li>2–3 attempts, record best</li>
          </ul>
        </section>

        <section>
          <h3>Push-Ups</h3>
          <ul style={{ opacity: 0.85 }}>
            <li>Full lockout at top</li>
            <li>Chest to consistent depth</li>
            <li>Stop when form breaks</li>
          </ul>
        </section>

        <section>
          <h3>1km Run</h3>
          <ul style={{ opacity: 0.85 }}>
            <li>Track or flat route</li>
            <li>Continuous run, no stops</li>
            <li>Enter as mm.ss (3.56 = 3m56s)</li>
          </ul>
        </section>
      </div>
    </main>
  );
}
