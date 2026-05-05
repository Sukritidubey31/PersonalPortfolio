"use client";

import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Link from "next/link";

const POSTS = [
  {
    title: "More Blogs",
    meta: "Coming soon",
    description:
      "Stay Tuned for more blogs!",
    badge: { label: "Coming soon", color: "muted" as const },
    dashed: true,
  },
];

const badgeStyles = {
  muted: { bg: "#FAF3EF", text: "#9A8480", border: "#F2E2DA" },
};

export default function BlogsPage() {
  return (
    <div style={{ backgroundColor: "#FEFCFB", minHeight: "100vh" }}>
      <Nav />
      <main className="w-full max-w-site mx-auto px-5 sm:px-6 lg:px-8 py-12 sm:py-14">
        <div className="mb-10">
          <p className="text-[10px] uppercase tracking-widest font-playfair font-medium mb-2" style={{ color: "#D4948A" }}>
            Writing
          </p>
          <h1 className="font-playfair mb-2" style={{ fontSize: "30px", color: "#2A1A18" }}>
            Blogs
          </h1>
          <p className="font-lato" style={{ fontSize: "13px", color: "#9A8480" }}>
            Honest writing about the journey: job search, building, and everything in between.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <Link href="/blogs/job-search" style={{ textDecoration: "none" }}>
            <div
              style={{
                background: "#fff",
                border: "0.5px solid #F2E2DA",
                borderRadius: "12px",
                padding: "1.25rem 1.5rem",
                marginBottom: "10px",
                cursor: "pointer",
                transition: "border-color 0.12s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#D4948A")}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = "#F2E2DA")}
            >
              <div
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "17px",
                  color: "#2A1A18",
                  marginBottom: "4px",
                }}
              >
                I Treated My Job Search Like a Product to Build
              </div>
              <div style={{ fontSize: "11px", color: "#BBA8A4", marginBottom: "8px" }}>
                Job Search · Reflections · Ongoing
              </div>
              <div
                style={{
                  fontSize: "12px",
                  color: "#9A8480",
                  lineHeight: "1.6",
                  marginBottom: "10px",
                }}
              >
                An honest account of building tools, automating workflows, and
                out-thinking a difficult market. The chaos, what worked, what
                didn't, and what I'd do again.
              </div>
              <div style={{ display: "flex", gap: "5px", flexWrap: "wrap" }}>
                {["Job Search", "AI Tools", "Automation", "Building"].map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontSize: "10px",
                      padding: "2px 8px",
                      borderRadius: "8px",
                      background: "#FAF3EF",
                      color: "#A06058",
                      border: "0.5px solid #EDD4CC",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Link>

          {POSTS.map((post) => {
            const bs = badgeStyles[post.badge.color];
            return (
              <div
                key={post.title}
                className="rounded-card p-5"
                style={{
                  border: post.dashed ? "1px dashed #EDD4CC" : "0.5px solid #F2E2DA",
                  backgroundColor: "#FEFCFB",
                  opacity: post.dashed ? 0.7 : 1,
                }}
              >
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div>
                    <h2
                      className="font-playfair"
                      style={{ fontSize: "17px", color: "#2A1A18" }}
                    >
                      {post.title}
                    </h2>
                    <p
                      className="font-lato mt-0.5"
                      style={{ fontSize: "10px", color: "#A4918D" }}
                    >
                      {post.meta}
                    </p>
                  </div>
                  <span
                    className="shrink-0 text-[9px] font-medium px-2 py-0.5 rounded-pill font-lato"
                    style={{
                      backgroundColor: bs.bg,
                      color: bs.text,
                      border: `0.5px solid ${bs.border}`,
                    }}
                  >
                    {post.badge.label}
                  </span>
                </div>
                <p
                  className="font-lato leading-relaxed"
                  style={{ fontSize: "12px", color: "#9A8480" }}
                >
                  {post.description}
                </p>
              </div>
            );
          })}
        </div>
      </main>
      <Footer />
    </div>
  );
}
