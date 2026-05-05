"use client";
import Link from "next/link";

interface GridCell {
  eyebrow: string;
  title: string;
  preview: string;
  href: string;
}

const CELLS: GridCell[] = [
  {
    eyebrow: "Work history",
    title: "Experience",
    preview: "From enterprise engineering at J.P. Morgan to owning product at an early-stage startup, with an early promotion in between.",
    href: "/experience",
  },
  {
    eyebrow: "What I've built",
    title: "Projects & Hackathons",
    preview: "Full-stack AI agents, ML pipelines, product case studies, and hackathon builds with live demos.",
    href: "/projects",
  },
  {
    eyebrow: "Beyond work",
    title: "Extracurriculars",
    preview: "Volunteering, organizing, and showing up. The parts that don't fit on a resume but say a lot.",
    href: "/extracurriculars",
  },
  {
    eyebrow: "Writing",
    title: "Blogs",
    preview: "Thoughts, in progress.",
    href: "/blogs",
  },
];

export default function HomeGrid() {
  return (
    <div className="mb-12 sm:mb-14">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
        {CELLS.map((cell) => (
          <Link
            key={cell.href}
            href={cell.href}
            className="group relative rounded-card p-6 sm:p-8 lg:p-9 flex flex-col gap-3 sm:gap-3.5 min-h-[160px] sm:min-h-[172px] font-lato"
            style={{
              backgroundColor: "#FEFCFB",
              border: "0.5px solid #F2E2DA",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor = "#FDF6F4";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor = "#FEFCFB";
            }}
          >
            <p
              className="text-[10px] sm:text-[11px] uppercase tracking-widest font-playfair font-medium"
              style={{ color: "#A4918D" }}
            >
              {cell.eyebrow}
            </p>
            <h2
              className="font-playfair text-lg sm:text-xl lg:text-[1.35rem]"
              style={{ color: "#2A1A18" }}
            >
              {cell.title}
            </h2>
            <p
              className="font-lato text-[13px] sm:text-sm leading-relaxed w-full max-w-none pr-7 sm:pr-9 text-pretty"
              style={{ color: "#9A8480" }}
            >
              {cell.preview}
            </p>
            <span
              className="absolute bottom-5 right-5 sm:bottom-6 sm:right-6 text-base sm:text-lg opacity-0 group-hover:opacity-100 font-lato"
              style={{ color: "#D4948A" }}
            >
              →
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
