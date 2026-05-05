"use client";
import { useState } from "react";
import Image from "next/image";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const BADGE_STYLES: Record<string, { backgroundColor: string; color: string }> = {
  Cornell: { backgroundColor: "#EDE9F8", color: "#5C519A" },
  VIT: { backgroundColor: "#F2E2DA", color: "#A06058" },
};

interface RowItem {
  title: string;
  subtitle: string;
  description: string;
  badge?: string;
  imageSrc: string;
  imageAlt: string;
  imageLeft: boolean;
}

const ITEMS: RowItem[] = [
  {
    title: "DeveloperWeek — Volunteer",
    subtitle: "Industry Conference",
    description:
      "Volunteered at DeveloperWeek, one of the world's largest developer conferences. Helped with event operations, attendee support, and session coordination.",
    imageSrc: "https://drive.google.com/uc?export=view&id=1CZ10b-25bpd8G4P_sGPeBj8guhOMJVmR",
    imageAlt: "DeveloperWeek",
    imageLeft: true,
  },
  {
    title: "ProductCon — Volunteer",
    subtitle: "Product Management Conference",
    description:
      "Volunteered at ProductCon, one of the largest PM conferences globally. Supported event logistics and connected with the product community.",
    imageSrc: "https://drive.google.com/uc?export=view&id=11GR2bSB4A3o2Md8744BdwGabdhTvD45t",
    imageAlt: "ProductCon",
    imageLeft: false,
  },
  {
    title: "Slope Day — Volunteer Organizer",
    subtitle: "Cornell University",
    description:
      "Helped organize Slope Day, Cornell's beloved end-of-year celebration. Coordinated logistics, managed volunteer teams, and made sure thousands of students had a great last day of classes.",
    badge: "Cornell",
    imageSrc: "https://drive.google.com/uc?export=view&id=1RhisHMnmgDMu2CHJpQznZH3MBvMAzUH2",
    imageAlt: "Slope Day",
    imageLeft: true,
  },
  {
    title: "Code for Good Hackathon — Volunteer Organizer",
    subtitle: "J.P. Morgan Chase",
    description:
      "Organized J.P. Morgan's Code for Good hackathon, connecting technologists with nonprofits to build social impact solutions. Managed event coordination, participant experience, and day-of operations.",
    imageSrc: "https://drive.google.com/uc?export=view&id=1wXjRnP3saN4CE5rSZFooyssO9xC0Mcdk",
    imageAlt: "Code for Good",
    imageLeft: false,
  },
  {
    title: "VIT Film Society — Events Head, Member of Board",
    subtitle: "VIT University",
    description:
      "Served on the board as Events Head, planned and ran film screenings, panel discussions, and cultural events for the university community. Managed a team, handled sponsorships, and grew the society's presence on campus.",
    badge: "VIT",
    imageSrc: "https://drive.google.com/uc?export=view&id=1745cIeUJgwynaoWO4pMkB2DLUx4YeXq7",
    imageAlt: "VIT Film Society",
    imageLeft: true,
  },
  {
    title: "BIF Chapter — Teaching Volunteer",
    subtitle: "VIT University",
    description:
      "Volunteered to teach children at a public primary school as part of VIT's BIF chapter, a community outreach and education initiative. Ran sessions, prepared simple lesson plans, and worked with kids who didn't have access to quality education resources.",
    badge: "VIT",
    imageSrc: "https://drive.google.com/uc?export=view&id=1OvGrqIjMJsaIakyvrvAcQcbhOE1Pgicj",
    imageAlt: "BIF Chapter",
    imageLeft: false,
  },
];

function ImageColumn({ src, alt }: { src: string; alt: string }) {
  const [imgError, setImgError] = useState(false);

  return (
    <div
      className="w-full sm:w-[40%] shrink-0"
      style={{
        aspectRatio: "4/3",
        borderRadius: 12,
        overflow: "hidden",
        position: "relative",
        backgroundColor: "#FAF3EF",
        border: imgError ? "0.5px dashed #EDD4CC" : "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {!imgError ? (
        <Image
          src={src}
          alt={alt}
          fill
          style={{ objectFit: "cover" }}
          onError={() => setImgError(true)}
          sizes="(max-width: 640px) 100vw, 40vw"
        />
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 6,
          }}
        >
          <span style={{ fontSize: 20 }}>📷</span>
          <span className="font-lato" style={{ fontSize: 11, color: "#A4918D" }}>
            Photo coming soon
          </span>
        </div>
      )}
    </div>
  );
}

function TextColumn({
  title,
  subtitle,
  description,
  badge,
}: {
  title: string;
  subtitle: string;
  description: string;
  badge?: string;
}) {
  const badgeStyle = badge ? BADGE_STYLES[badge] : null;

  return (
    <div className="flex-1" style={{ padding: "1rem 1.5rem" }}>
      {badgeStyle && (
        <span
          className="font-lato"
          style={{
            ...badgeStyle,
            fontSize: 10,
            fontWeight: 500,
            padding: "3px 10px",
            borderRadius: 12,
            display: "inline-block",
            marginBottom: 8,
          }}
        >
          {badge}
        </span>
      )}
      <h2
        className="font-playfair"
        style={{ fontSize: 18, color: "#2A1A18", margin: 0, marginBottom: 6 }}
      >
        {title}
      </h2>
      <p
        className="font-lato"
        style={{ fontSize: 12, color: "#9A8480", margin: 0, marginBottom: 10 }}
      >
        {subtitle}
      </p>
      <p
        className="font-lato"
        style={{ fontSize: 13, color: "#6B5A58", margin: 0, lineHeight: 1.7 }}
      >
        {description}
      </p>
    </div>
  );
}

export default function ExtracurricularsPage() {
  return (
    <div style={{ backgroundColor: "#FEFCFB", minHeight: "100vh" }}>
      <Nav />
      <main className="w-full max-w-site mx-auto px-5 sm:px-6 lg:px-8 py-12 sm:py-14">
        <div className="mb-10">
          <p
            className="text-[10px] uppercase tracking-widest font-playfair font-medium mb-2"
            style={{ color: "#D4948A" }}
          >
            Beyond work
          </p>
          <h1
            className="font-playfair mb-2"
            style={{ fontSize: 30, color: "#2A1A18" }}
          >
            Extracurriculars
          </h1>
          <p className="font-lato" style={{ fontSize: 13, color: "#9A8480" }}>
            Community, volunteering, and events across three universities and companies.
          </p>
        </div>

        <div>
          {ITEMS.map((item, idx) => {
            const isLast = idx === ITEMS.length - 1;
            // On mobile: always column (image on top). On desktop: row or row-reverse.
            const rowClass = item.imageLeft
              ? "flex flex-col sm:flex-row items-center gap-8"
              : "flex flex-col sm:flex-row-reverse items-center gap-8";

            return (
              <div
                key={item.title}
                className={rowClass}
                style={{
                  padding: "2rem 0",
                  borderBottom: isLast ? "none" : "0.5px solid #F2E2DA",
                }}
              >
                <ImageColumn src={item.imageSrc} alt={item.imageAlt} />
                <TextColumn
                  title={item.title}
                  subtitle={item.subtitle}
                  description={item.description}
                  badge={item.badge}
                />
              </div>
            );
          })}
        </div>
      </main>
      <Footer />
    </div>
  );
}
