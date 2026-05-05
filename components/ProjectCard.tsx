"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Modal from "./Modal";
import { TRACK_BADGE_STYLES } from "@/components/FilterBar";

export interface ProjectLink {
  label: string;
  url: string;
}

export interface BadgeVariant {
  label: string;
  color: "green" | "blue" | "pink" | "rose";
}

export interface ProjectCardProps {
  track: string;
  badge: BadgeVariant;
  title: string;
  description: string;
  techTags: string[];
  impactTags: string[];
  tracks: string[];
  links: ProjectLink[];
  popupContent?: React.ReactNode;
  detailHref?: string;
  readMoreLabel?: string;
}

const badgeStyles = {
  green: { bg: "#EDF5E8", text: "#3D6438", border: "#C4D4BE" },
  blue: { bg: "#EDE9F8", text: "#5C519A", border: "#CEC8EA" },
  pink: { bg: "#FDE8F2", text: "#8A2252", border: "#EAC0D4" },
  rose: { bg: "#FDE8F2", text: "#8A2252", border: "#EAC0D4" },
};

function CardInner({
  track,
  badge,
  title,
  description,
  techTags,
  impactTags,
  tracks,
  links,
  readMoreLabel,
}: {
  track: string;
  badge: BadgeVariant;
  title: string;
  description: string;
  techTags: string[];
  impactTags: string[];
  tracks: string[];
  links: ProjectLink[];
  readMoreLabel: string;
}) {
  const bs = badgeStyles[badge.color];
  return (
    <>
      <div className="flex items-start justify-between gap-2">
        <span
          className="text-[10px] sm:text-[11px] uppercase tracking-widest font-playfair font-medium"
          style={{ color: "#A4918D" }}
        >
          {track}
        </span>
        <span
          className="shrink-0 text-[10px] sm:text-[11px] font-medium px-2.5 py-1 rounded-pill font-lato"
          style={{
            backgroundColor: bs.bg,
            color: bs.text,
            border: `0.5px solid ${bs.border}`,
          }}
        >
          {badge.label}
        </span>
      </div>

      <h3
        className="font-playfair leading-snug text-[17px] sm:text-lg lg:text-[1.15rem]"
        style={{ color: "#2A1A18" }}
      >
        {title}
      </h3>

      <p
        className="font-lato leading-relaxed text-[13px] sm:text-sm"
        style={{ color: "#9A8480" }}
      >
        {description}
      </p>

      {/* Tech + impact tags in one row */}
      <div className="flex flex-wrap gap-2 sm:gap-2.5">
        {techTags.map((tag) => (
          <span
            key={tag}
            className="text-[10px] sm:text-[11px] px-2.5 py-1 rounded-pill font-lato"
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
            className="text-[10px] sm:text-[11px] px-2.5 py-1 rounded-pill font-lato"
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
        {tracks.map((t) => {
          const ts = TRACK_BADGE_STYLES[t];
          if (!ts) return null;
          return (
            <span
              key={t}
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
              {t}
            </span>
          );
        })}
      </div>

      <div
        className="flex items-center justify-between mt-auto pt-4 gap-2"
        style={{ borderTop: "0.5px solid #F2E2DA" }}
      >
        <div className="flex flex-wrap gap-3 sm:gap-4">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] sm:text-xs font-lato"
              style={{ color: "#D4948A" }}
              onClick={(e) => e.stopPropagation()}
            >
              {link.label}
            </a>
          ))}
        </div>
        <span
          className="text-[11px] sm:text-xs font-lato shrink-0"
          style={{ color: "#D4948A" }}
        >
          {readMoreLabel}
        </span>
      </div>
    </>
  );
}

export default function ProjectCard({
  track,
  badge,
  title,
  description,
  techTags,
  impactTags,
  tracks,
  links,
  popupContent,
  detailHref,
  readMoreLabel: readMoreLabelProp,
}: ProjectCardProps) {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const hoverOn = (el: HTMLElement) => {
    el.style.borderColor = "#D4948A";
    el.style.backgroundColor = "#FDF9F8";
  };
  const hoverOff = (el: HTMLElement) => {
    el.style.borderColor = "#F2E2DA";
    el.style.backgroundColor = "#FEFCFB";
  };

  const sharedStyle = {
    border: "0.5px solid #F2E2DA",
    backgroundColor: "#FEFCFB",
  };

  if (detailHref) {
    return (
      <div
        role="link"
        tabIndex={0}
        aria-label={`${title}: open case study`}
        className="rounded-card p-6 sm:p-7 lg:p-8 flex flex-col gap-3.5 sm:gap-4 cursor-pointer min-h-[200px] sm:min-h-[220px]"
        style={sharedStyle}
        onClick={() => router.push(detailHref)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            router.push(detailHref);
          }
        }}
        onMouseEnter={(e) => hoverOn(e.currentTarget as HTMLElement)}
        onMouseLeave={(e) => hoverOff(e.currentTarget as HTMLElement)}
      >
        <CardInner
          track={track}
          badge={badge}
          title={title}
          description={description}
          techTags={techTags}
          impactTags={impactTags}
          tracks={tracks}
          links={links}
          readMoreLabel={readMoreLabelProp ?? "Full case study →"}
        />
      </div>
    );
  }

  return (
    <>
      <div
        className="rounded-card p-6 sm:p-7 lg:p-8 flex flex-col gap-3.5 sm:gap-4 cursor-pointer min-h-[200px] sm:min-h-[220px]"
        style={sharedStyle}
        onClick={() => popupContent && setOpen(true)}
        onMouseEnter={(e) => hoverOn(e.currentTarget as HTMLDivElement)}
        onMouseLeave={(e) => hoverOff(e.currentTarget as HTMLDivElement)}
      >
        <CardInner
          track={track}
          badge={badge}
          title={title}
          description={description}
          techTags={techTags}
          impactTags={impactTags}
          tracks={tracks}
          links={links}
          readMoreLabel={readMoreLabelProp ?? "Read more →"}
        />
      </div>

      {popupContent && (
        <Modal open={open} onClose={() => setOpen(false)}>
          {popupContent}
        </Modal>
      )}
    </>
  );
}
