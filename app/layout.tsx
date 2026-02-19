export const metadata = {
  title: "Plyo Lab",
  description: "Test. Track. Improve."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ fontFamily: "Arial, sans-serif", margin: 0, background: "#0b0b0f", color: "#fff" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: 20 }}>
          <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
            <div style={{ fontWeight: 800, letterSpacing: 1 }}>PLYO LAB</div>
            <nav style={{ display: "flex", gap: 12, fontSize: 14, opacity: 0.9 }}>
              <a href="/" style={{ color: "#fff", textDecoration: "none" }}>Dashboard</a>
              <a href="/how-to-test" style={{ color: "#fff", textDecoration: "none" }}>How to Test</a>
            </nav>
          </header>

          {children}

          <footer style={{ marginTop: 24, fontSize: 12, opacity: 0.65 }}>
            Beta • Field-based benchmarks for development tracking (not talent selection).
          </footer>
        </div>
      </body>
    </html>
  );
}
