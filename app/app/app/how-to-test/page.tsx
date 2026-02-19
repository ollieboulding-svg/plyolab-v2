"use client";

import { useState } from "react";

function isIOS(): boolean {
  if (typeof navigator === "undefined") return false;
  return /iPad|iPhone|iPod/.test(navigator.userAgent);
}

async function exportPDF(targetId: string) {
  const el = document.getElementById(targetId);
  if (!el) return alert("Nothing to export.");

  try {
    const [{ default: html2canvas }, { jsPDF }] = await Promise.all([
      import("html2canvas"),
      import("jspdf")
    ]);

    // wait for layout
    // @ts-ignore
    if (document.fonts?.ready) await (document as any).fonts.ready;
    await new Promise((r) => setTimeout(r, 150));

    const canvas = await html2canvas(el, {
      scale: 2,
      backgroundColor: "#ffffff",
      useCORS: true,
      allowTaint: false,
      logging: false,
      scrollY: -window.scrollY,
      windowWidth: 1200
    });

    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "mm", "a4");

    const pageWidth = 210;
    const pageHeight = 297;
    const margin = 6;

    const imgWidth = pageWidth - margin * 2;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    let remaining = imgHeight;

    pdf.addImage(imgData, "PNG", margin, margin, imgWidth, imgHeight);
    remaining -= pageHeight - margin * 2;

    while (remaining > 0) {
      pdf.addPage();
      const offsetY = margin - (imgHeight - remaining);
      pdf.addImage(imgData, "PNG", margin, offsetY, imgWidth, imgHeight);
      remaining -= pageHeight - margin * 2;
    }

    if (isIOS()) {
      const blob = pdf.output("blob");
      const url = URL.createObjectURL(blob);
      window.open(url, "_blank");
      setTimeout(() => URL.revokeObjectURL(url), 30000);
    } else {
      pdf.save("PlyoLab_Report.pdf");
    }
  } catch (e: any) {
    console.error(e);
    alert("PDF export failed: " + (e?.message || String(e)));
  }
}

export default function Page() {
  const [count, setCount] = useState(0);

  return (
    <main style={{ display: "grid", gap: 14 }}>
      <section style={{ background: "#111118", border: "1px solid #222", borderRadius: 14, padding: 18 }}>
        <h1 style={{ marginTop: 0 }}>Dashboard (v2)</h1>
        <p style={{ opacity: 0.85 }}>
          This is the clean restart. Once deployed, we’ll paste your full Plyo Lab calculator + charts + retest + history here.
        </p>

        <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
          <button
            onClick={() => setCount((c) => c + 1)}
            style={{ padding: "10px 12px", borderRadius: 12, border: "1px solid #333", background: "#1a1a22", color: "#fff", cursor: "pointer" }}
          >
            Test State: {count}
          </button>

          <button
            onClick={() => exportPDF("pdfContent")}
            style={{ padding: "10px 12px", borderRadius: 12, border: "1px solid #333", background: "#1a1a22", color: "#fff", cursor: "pointer" }}
          >
            Download PDF (test)
          </button>
        </div>
      </section>

      <section id="pdfContent" style={{ background: "#fff", color: "#000", borderRadius: 14, padding: 18 }}>
        <h2 style={{ marginTop: 0 }}>PDF Capture Test Area</h2>
        <p>If this exports successfully, your deployment + PDF pipeline is working. Then we add the full Plyo Lab report.</p>
        <ul>
          <li>Baseline / Retest (coming next)</li>
          <li>Charts (coming next)</li>
          <li>Traffic lights (coming next)</li>
        </ul>
      </section>
    </main>
  );
}
