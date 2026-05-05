"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const backLabels: Record<string, string> = {
  "/experience": "← Back",
  "/projects": "← Back",
  "/extracurriculars": "← Back",
  "/blogs": "← Back",
  "/connect": "← Back",
  "/ask": "← Back",
};

const NAV_LINKS = [
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/extracurriculars", label: "Extracurriculars" },
  { href: "/blogs", label: "Blogs" },
  { href: "/connect", label: "Let's connect" },
  { href: "/ask", label: "Ask AI" },
] as const;

function linkActive(pathname: string, href: string) {
  if (pathname === href) return true;
  return pathname.startsWith(`${href}/`);
}

export default function Nav() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const backLabel = backLabels[pathname];

  return (
    <nav
      style={{
        borderBottom: "0.5px solid #F2E2DA",
        backgroundColor: "#FEFCFB",
      }}
      className="sticky top-0 z-40 py-3.5 sm:py-4 font-lato"
    >
      <div className="w-full max-w-site mx-auto px-5 sm:px-6 lg:px-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
        <div className="flex items-center justify-between gap-3 sm:justify-start sm:min-w-0">
          <Link
            href="/"
            className="font-playfair text-[17px] sm:text-lg font-medium shrink-0"
            style={{ color: "#2A1A18" }}
          >
            Sukriti Dubey
          </Link>
          {!isHome && backLabel && (
            <Link
              href="/"
              className="text-xs sm:text-[13px] px-3 py-1.5 font-lato sm:hidden"
              style={{
                color: "#9A8480",
                border: "0.5px solid #F2E2DA",
                borderRadius: "16px",
              }}
            >
              {backLabel}
            </Link>
          )}
        </div>

        <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 sm:justify-end">
          {NAV_LINKS.map(({ href, label }) => {
            const active = linkActive(pathname, href);
            const isAsk = href === "/ask";
            const askCta = {
              backgroundColor: "#D4948A" as const,
              color: "#fff" as const,
              border: "0.5px solid #D4948A" as const,
            };
            const defaultStyle = active
              ? {
                  color: "#2A1A18" as const,
                  backgroundColor: "#FAF0EC" as const,
                  border: "0.5px solid #D4948A" as const,
                }
              : {
                  color: "#9A8480" as const,
                  backgroundColor: "#FEFCFB" as const,
                  border: "0.5px solid #F2E2DA" as const,
                };
            return (
              <Link
                key={href}
                href={href}
                className={`text-[11px] sm:text-xs font-medium px-3 py-1.5 sm:px-3.5 sm:py-2 transition-colors ${
                  isAsk ? "rounded-[20px]" : "rounded-pill"
                }`}
                style={isAsk ? askCta : defaultStyle}
              >
                {label}
              </Link>
            );
          })}
          {!isHome && backLabel && (
            <Link
              href="/"
              className="hidden sm:inline-block text-xs sm:text-[13px] px-3.5 py-2 font-lato"
              style={{
                color: "#9A8480",
                border: "0.5px solid #F2E2DA",
                borderRadius: "16px",
              }}
            >
              {backLabel}
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
