"use client";

import type { MouseEvent } from "react";

const CONTACT_TILES = [
  {
    icon: "✉",
    label: "Email",
    sublabel: "Send an email",
    detail: "sukriti.dubey31@gmail.com",
    href: "mailto:sukriti.dubey31@gmail.com",
  },
  {
    icon: "in",
    label: "LinkedIn",
    sublabel: "Message me directly",
    detail: "linkedin.com/in/sukriti-dubey/",
    href: "https://linkedin.com/in/sukriti-dubey/",
  },
  {
    icon: "📅",
    label: "Book a call",
    sublabel: "30 min via Cal.com",
    detail: "Pick a time that works for you.",
    href: "https://cal.com/sukriti-dubey-gm17b2",
  },
] as const;

/** PDFs in /public — filenames must match exactly (spaces encoded for stable links). */
const RESUME_VERSIONS = [
  {
    href: "https://drive.google.com/file/d/14a_15MErVwbiktnwvKa3Sb8DLJJ4Pgh_/view?usp=drive_link",
    title: "Data & analytics lens",
    description:
      "Highlights metrics, experimentation, and analytical depth — best for data / analytics roles.",
  },
  {
    href: "https://drive.google.com/file/d/19rrvdg6ejWuTClKszj6MRzjFhjP77Tev/view?usp=drive_link",
    title: "Product & strategy lens",
    description:
      "Highlights ownership, discovery, and outcomes — best for product management roles.",
  },
  {
    href: "https://drive.google.com/file/d/1xOaoMx2GLeANIJMXTwa9JT1WX6HjmE-0/view?usp=drive_link",
    title: "Engineering & systems lens",
    description:
      "Highlights shipping software and technical execution — best for engineering roles.",
  },
] as const;

const tileSurfaceStyle = {
  border: "0.5px solid #F2E2DA",
  backgroundColor: "#FEFCFB",
  textDecoration: "none" as const,
};

function applyTileHover(e: MouseEvent<HTMLElement>, active: boolean) {
  const el = e.currentTarget;
  el.style.borderColor = active ? "#D4948A" : "#F2E2DA";
  el.style.backgroundColor = active ? "#FDF9F8" : "#FEFCFB";
}

export default function ContactTiles() {
  return (
    <div className="flex flex-col gap-4 mb-8">
      <div className="grid grid-cols-3 gap-2 sm:gap-4">
        {CONTACT_TILES.map((tile) => (
          <a
            key={tile.label}
            href={tile.href}
            target={tile.href.startsWith("http") ? "_blank" : undefined}
            rel={tile.href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="rounded-card p-3 sm:p-4 flex flex-col items-center text-center sm:flex-row sm:items-start sm:text-left gap-2 sm:gap-3 font-lato min-w-0"
            style={tileSurfaceStyle}
            onMouseEnter={(e) => applyTileHover(e, true)}
            onMouseLeave={(e) => applyTileHover(e, false)}
          >
            <div
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center text-[13px] sm:text-[14px] shrink-0"
              style={{ backgroundColor: "#FDE8F2", color: "#D4948A" }}
            >
              {tile.icon}
            </div>
            <div className="min-w-0 w-full">
              <p
                className="font-playfair"
                style={{ fontSize: "14px", color: "#2A1A18" }}
              >
                {tile.label}
              </p>
              <p
                className="font-lato mt-0.5"
                style={{ fontSize: "12px", color: "#D4948A" }}
              >
                {tile.sublabel}
              </p>
              <p
                className="font-lato mt-0.5 break-words [overflow-wrap:anywhere] leading-snug"
                style={{ fontSize: "12px", color: "#9A8480" }}
              >
                {tile.detail}
              </p>
            </div>
          </a>
        ))}
      </div>

      <div
        className="rounded-card p-5 sm:p-6 font-lato"
        style={tileSurfaceStyle}
      >
        <div className="flex items-start gap-4 mb-4">
          <div
            className="w-9 h-9 rounded-full flex items-center justify-center text-[14px] shrink-0"
            style={{ backgroundColor: "#FDE8F2", color: "#D4948A" }}
          >
            ↓
          </div>
          <div>
            <p
              className="font-playfair"
              style={{ fontSize: "15px", color: "#2A1A18" }}
            >
              Resume
            </p>
            <p
              className="font-lato mt-0.5"
              style={{ fontSize: "12px", color: "#D4948A" }}
            >
              Three PDFs — pick the story that fits how you&apos;re hiring
            </p>
          </div>
        </div>

        <ul className="flex flex-col gap-2.5 list-none p-0 m-0">
          {RESUME_VERSIONS.map((v) => (
            <li key={v.href}>
              <a
                href={v.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-lg p-3.5 sm:p-4 transition-colors"
                style={{
                  ...tileSurfaceStyle,
                  border: "0.5px solid #F2E2DA",
                }}
                onMouseEnter={(e) => applyTileHover(e, true)}
                onMouseLeave={(e) => applyTileHover(e, false)}
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                  <div className="min-w-0">
                    <p
                      className="font-playfair"
                      style={{ fontSize: "15px", color: "#2A1A18" }}
                    >
                      {v.title}
                    </p>
                    <p
                      className="font-lato mt-1 text-[12px] leading-relaxed"
                      style={{ color: "#9A8480" }}
                    >
                      {v.description}
                    </p>
                  </div>
                  <span
                    className="font-lato shrink-0 text-[12px] font-medium sm:pt-0.5"
                    style={{ color: "#D4948A" }}
                  >
                    Download PDF
                  </span>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
