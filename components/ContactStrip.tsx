"use client";
import Link from "next/link";

export default function ContactStrip() {
  return (
    <Link href="/connect" className="block mb-2 sm:mb-3">
      <section
        className="rounded-card px-6 py-6 sm:px-8 sm:py-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 sm:gap-6 cursor-pointer"
        style={{ border: "0.5px solid #F2E2DA", backgroundColor: "#FEFCFB" }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.borderColor = "#D4948A";
          (e.currentTarget as HTMLElement).style.backgroundColor = "#FDF9F8";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.borderColor = "#F2E2DA";
          (e.currentTarget as HTMLElement).style.backgroundColor = "#FEFCFB";
        }}
      >
        <div className="min-w-0 max-w-xl">
          <p
            className="text-[10px] sm:text-[11px] uppercase tracking-widest font-playfair font-medium"
            style={{ color: "#A4918D" }}
          >
            Say hello
          </p>
          <p
            className="font-playfair mt-1 text-lg sm:text-xl"
            style={{ color: "#2A1A18" }}
          >
            Let&apos;s connect!
          </p>
        </div>
        <div className="flex flex-wrap gap-2.5 sm:gap-3 shrink-0">
          {[
            { label: "LinkedIn", primary: false },
            { label: "Book a call", primary: false },
            { label: "Resume ↓", primary: false },
            { label: "Email me →", primary: true },
          ].map((btn) => (
            <span
              key={btn.label}
              className="text-[11px] sm:text-xs px-3.5 py-2 sm:px-4 sm:py-2.5 font-lato font-medium"
              style={{
                backgroundColor: btn.primary ? "#D4948A" : "#FAF3EF",
                color: btn.primary ? "#fff" : "#9A8480",
                border: `0.5px solid ${btn.primary ? "#D4948A" : "#F2E2DA"}`,
                borderRadius: "20px",
              }}
            >
              {btn.label}
            </span>
          ))}
        </div>
      </section>
    </Link>
  );
}
