import Link from "next/link";
import Footer from "./Footer";

interface Props {
  title: string;
  children: React.ReactNode;
}

export default function ProjectDetailLayout({ title, children }: Props) {
  return (
    <div style={{ backgroundColor: "#FEFCFB", minHeight: "100vh" }}>
      {/* Sticky header */}
      <div
        className="sticky top-0 z-40 py-3.5 sm:py-4"
        style={{ backgroundColor: "#FEFCFB", borderBottom: "0.5px solid #F2E2DA" }}
      >
        <div className="w-full max-w-3xl mx-auto px-5 sm:px-6 flex items-center justify-between gap-4">
          <Link
            href="/projects"
            className="shrink-0 text-[11px] sm:text-xs font-lato px-3 py-1.5"
            style={{
              color: "#9A8480",
              border: "0.5px solid #F2E2DA",
              borderRadius: "16px",
            }}
          >
            ← Back to Projects
          </Link>
          <span
            className="font-playfair text-[13px] sm:text-[14px] truncate text-right"
            style={{ color: "#2A1A18" }}
          >
            {title}
          </span>
        </div>
      </div>

      <main className="w-full max-w-3xl mx-auto px-5 sm:px-6 py-10 sm:py-12 font-lato">
        {children}
      </main>

      <Footer />
    </div>
  );
}
