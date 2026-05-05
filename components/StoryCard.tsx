"use client";

import { TRACK_BADGE_STYLES } from "@/components/FilterBar";

interface BadgeVariant {
  label: string;
  color: "green" | "blue" | "pink" | "rose";
}

interface StoryCardProps {
  company?: string;
  date?: string;
  badge?: BadgeVariant;
  headline: string;
  body: string;
  techTags: string[];
  impactTags: string[];
  tracks: string[];
}

const badgeStyles = {
  green: { bg: "#EDF5E8", text: "#3D6438", border: "#C4D4BE" },
  blue: { bg: "#EDE9F8", text: "#5C519A", border: "#CEC8EA" },
  pink: { bg: "#FDE8F2", text: "#8A2252", border: "#EAC0D4" },
  rose: { bg: "#FDE8F2", text: "#8A2252", border: "#EAC0D4" },
};

export default function StoryCard({
  company,
  date,
  badge,
  headline,
  body,
  techTags,
  impactTags,
  tracks,
}: StoryCardProps) {
  const bs = badge ? badgeStyles[badge.color] : null;

  return (
    <div
      className="rounded-card p-5 sm:p-6 flex flex-col gap-2.5 sm:gap-3 hover:cursor-default"
      style={{ border: "0.5px solid #F2E2DA", backgroundColor: "#FEFCFB" }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.borderColor = "#D4948A";
        (e.currentTarget as HTMLDivElement).style.backgroundColor = "#FDF9F8";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.borderColor = "#F2E2DA";
        (e.currentTarget as HTMLDivElement).style.backgroundColor = "#FEFCFB";
      }}
    >
      <div className="flex items-start justify-between gap-2">
        <div>
          {company && (
            <p
              className="text-[9px] sm:text-[10px] uppercase tracking-widest font-playfair font-medium"
              style={{ color: "#A4918D" }}
            >
              {company}
            </p>
          )}
          {date && (
            <p className="text-[9px] sm:text-[10px] font-lato mt-0.5" style={{ color: "#A4918D" }}>
              {date}
            </p>
          )}
        </div>
        {badge && bs && (
          <span
            className="shrink-0 text-[9px] sm:text-[10px] font-medium px-2 py-0.5 rounded-pill font-lato"
            style={{
              backgroundColor: bs.bg,
              color: bs.text,
              border: `0.5px solid ${bs.border}`,
            }}
          >
            {badge.label}
          </span>
        )}
      </div>

      <h3
        className="font-playfair leading-snug text-[15px] sm:text-[16px] lg:text-[1.05rem]"
        style={{ color: "#2A1A18" }}
      >
        {headline}
      </h3>

      <p
        className="font-lato leading-relaxed text-[12px] sm:text-[13px]"
        style={{ color: "#9A8480" }}
      >
        {body}
      </p>

      {/* Tech + impact tags in one row */}
      <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-auto">
        {techTags.map((tag) => (
          <span
            key={tag}
            className="text-[9px] sm:text-[10px] px-2 py-0.5 rounded-pill font-lato"
            style={{
              backgroundColor: "#FAF3EF",
              border: "0.5px solid #EDD4CC",
              color: "#A06058",
            }}
          >
            {tag}
          </span>
        ))}
        {impactTags.map((tag) => (
          <span
            key={tag}
            className="text-[9px] sm:text-[10px] px-2 py-0.5 rounded-pill font-lato"
            style={{
              backgroundColor: "#EDF5E8",
              border: "0.5px solid #C4D4BE",
              color: "#3D6438",
            }}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Track badges right-aligned */}
      <div className="flex flex-wrap gap-1 justify-end">
        {tracks.map((track) => {
          const ts = TRACK_BADGE_STYLES[track];
          if (!ts) return null;
          return (
            <span
              key={track}
              className="font-lato font-medium"
              style={{
                fontSize: "9px",
                padding: "2px 8px",
                borderRadius: "8px",
                backgroundColor: ts.bg,
                color: ts.text,
                border: `0.5px solid ${ts.border}`,
              }}
            >
              {track}
            </span>
          );
        })}
      </div>
    </div>
  );
}
