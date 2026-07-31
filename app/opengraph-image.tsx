import { ImageResponse } from "next/og";
import { site } from "@/data/site";

// Auto-attached as og:image / twitter:image. Generated at build/runtime as a
// 1200×630 PNG — no binary asset to maintain, and it stays in sync with `site`.
export const alt = `${site.name} · AI & Automation Engineer · Full-Stack Developer`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const pills = ["RAG", "AI Agents", "LangChain", "Next.js", "Python", "FastAPI", "DevOps"];

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0a0a0c",
          padding: "72px 80px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div style={{ width: 18, height: 18, borderRadius: 9999, background: "#10b981" }} />
          <div style={{ color: "#a1a1aa", fontSize: 26 }}>
            Available for freelance projects · remote, worldwide
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ color: "white", fontSize: 72, fontWeight: 700, lineHeight: 1.05 }}>
            {site.name}
          </div>
          <div style={{ color: "#10b981", fontSize: 38, fontWeight: 600, marginTop: 14 }}>
            AI &amp; Automation Engineer · Full-Stack Developer
          </div>
          <div style={{ color: "#d4d4d8", fontSize: 30, marginTop: 26, maxWidth: 940, lineHeight: 1.3 }}>
            I turn manual, repetitive work into production-grade AI systems, from architecture to deployment.
          </div>
        </div>

        <div style={{ display: "flex", gap: "12px" }}>
          {pills.map((t) => (
            <div
              key={t}
              style={{
                display: "flex",
                color: "#a7f3d0",
                fontSize: 24,
                border: "1px solid rgba(16,185,129,0.35)",
                borderRadius: 9999,
                padding: "8px 22px",
              }}
            >
              {t}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size },
  );
}
