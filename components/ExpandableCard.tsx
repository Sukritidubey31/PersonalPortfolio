"use client";
import { useState } from "react";

interface ExpandableCardProps {
  title: string;
  org: string;
  description: string;
  badge: string | null;
  photoSlots: number;
}

export default function ExpandableCard({
  title,
  org,
  description,
  badge,
  photoSlots,
}: ExpandableCardProps) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="rounded-card overflow-hidden"
      style={{ border: "0.5px solid #F2E2DA", backgroundColor: "#FEFCFB" }}
    >
      <button
        className="w-full px-5 py-4 flex items-center justify-between text-left font-lato"
        onClick={() => setOpen((v) => !v)}
      >
        <div className="flex items-center gap-3">
          <div>
            <p
              className="font-playfair"
              style={{ fontSize: "14px", color: "#2A1A18" }}
            >
              {title}
            </p>
            <p
              className="font-lato mt-0.5"
              style={{ fontSize: "11px", color: "#9A8480" }}
            >
              {org}
            </p>
          </div>
          {badge && (
            <span
              className="text-[9px] px-2 py-0.5 rounded-pill font-lato font-medium shrink-0"
              style={{
                backgroundColor: "#EDE9F8",
                color: "#5C519A",
                border: "0.5px solid #CEC8EA",
              }}
            >
              {badge}
            </span>
          )}
        </div>
        <span
          className="text-[11px] font-lato shrink-0 ml-4"
          style={{ color: "#D4948A" }}
        >
          {open ? "−" : "+"}
        </span>
      </button>

      {open && (
        <div
          className="px-5 pb-5"
          style={{ borderTop: "0.5px solid #F2E2DA" }}
        >
          <p
            className="font-lato mt-4 mb-5 leading-relaxed"
            style={{ fontSize: "12px", color: "#9A8480" }}
          >
            {description}
          </p>

          <div className="flex flex-wrap gap-3">
            {Array.from({ length: photoSlots }).map((_, i) => (
              <div
                key={i}
                className="flex items-center justify-center"
                style={{
                  width: 120,
                  height: 90,
                  border: "1px dashed #EDD4CC",
                  borderRadius: 8,
                  backgroundColor: "#FAF3EF",
                }}
              >
                <span
                  className="text-[10px] font-lato"
                  style={{ color: "#A4918D" }}
                >
                  + add photo
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
