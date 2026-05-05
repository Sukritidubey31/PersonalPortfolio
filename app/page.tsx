import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import HomeGrid from "@/components/HomeGrid";
import ContactStrip from "@/components/ContactStrip";

type HeroPhoto = { src: string; width: number; height: number };

const HERO_PHOTO: HeroPhoto = {
  src: "https://drive.google.com/uc?export=view&id=1hB9TioNOiT_V-Bi8oD00KxcABG2NfmXO",
  width: 1769,
  height: 2359,
};

export default function HomePage() {
  const heroPhoto = HERO_PHOTO;

  return (
    <div style={{ backgroundColor: "#FEFCFB", minHeight: "100vh" }}>
      <Nav />

      <main className="w-full max-w-site mx-auto px-5 sm:px-6 lg:px-8 pt-14 sm:pt-18 lg:pt-13 pb-6 sm:pb-8">
        {/* Hero */}
        <section className="grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-8 sm:gap-12 lg:gap-16 items-start mb-10 sm:mb-12">
          <div className="min-w-0 max-w-2xl lg:max-w-3xl">
            <h1
              className="font-playfair mb-2"
              style={{
                fontSize: "clamp(2rem, 4vw, 2.75rem)",
                color: "#2A1A18",
                lineHeight: 1.12,
              }}
            >
              Sukriti Dubey
            </h1>
            <p
              className="font-playfair mb-5 sm:mb-6"
              style={{
                fontSize: "clamp(1.05rem, 2vw, 1.35rem)",
                color: "#9A8480",
              }}
            >
              Product Manager & Engineer
            </p>
            <p
              className="font-lato mb-6 sm:mb-7 text-[15px] sm:text-base max-w-xl lg:max-w-2xl"
              style={{ color: "#9A8480", lineHeight: 1.75 }}
            >
              I live at the intersection of technology, data, and product. 
              With 3 years of experience across these domains, I find the problems here to be really interesting. 
              I get excited about building 0-to-1 products, AI prototyping, workflow automation, 
              and making data tell a story. 
              If you want to talk tech, build something quickly, or just exchange ideas, 
              I'm always up for it.
            </p>
            <div className="flex flex-wrap gap-2.5 sm:gap-3">
              {[
                "0-to-1 Product Builder",
                "AI-Native",
                "Open to Work",
              ].map((pill) => (
                <span
                  key={pill}
                  className="text-[11px] sm:text-xs px-3.5 py-1.5 sm:px-4 sm:py-2 font-lato"
                  style={{
                    backgroundColor: "#FAF3EF",
                    border: "0.5px solid #EDD4CC",
                    borderRadius: "20px",
                    color: "#9A8480",
                  }}
                >
                  {pill}
                </span>
              ))}
            </div>

            {/* Education: under intro, left of photo (side by side) */}
            <div className="mt-6 sm:mt-7 grid grid-cols-2 gap-2.5 sm:gap-3 w-full max-w-xl lg:max-w-2xl">
              {[
                {
                  initials: "C",
                  initialsStyle: { backgroundColor: "#EDE9F8", color: "#5C519A" },
                  school: "Cornell University",
                  degree: "M.Eng. · Engineering Management",
                  tags: ["May 2025", "GPA 3.9"],
                },
                {
                  initials: "V",
                  initialsStyle: { backgroundColor: "#F2E2DA", color: "#A06058" },
                  school: "VIT University",
                  degree: "B.Tech. · Computer Science",
                  tags: ["June 2022", "CGPA 9.07"],
                },
              ].map((edu) => (
                <div
                  key={edu.school}
                  className="rounded-lg p-3 sm:p-3.5 flex items-start gap-2.5 min-w-0"
                  style={{
                    border: "0.5px solid #F2E2DA",
                    backgroundColor: "#FEFCFB",
                    borderRadius: "10px",
                    boxShadow: "0 1px 0 rgba(42, 26, 24, 0.04)",
                  }}
                >
                  <div
                    className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center font-playfair font-medium text-[12px] sm:text-[13px]"
                    style={edu.initialsStyle}
                  >
                    {edu.initials}
                  </div>
                  <div className="min-w-0">
                    <p
                      className="font-playfair font-medium text-[12px] sm:text-[13px] leading-snug"
                      style={{ color: "#2A1A18" }}
                    >
                      {edu.school}
                    </p>
                    <p
                      className="font-lato mt-0.5 text-[10px] sm:text-[11px] leading-snug"
                      style={{ color: "#9A8480" }}
                    >
                      {edu.degree}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mt-1.5 sm:mt-2">
                      {edu.tags.map((t) => (
                        <span
                          key={t}
                          className="text-[8px] sm:text-[9px] px-1.5 sm:px-2 py-0.5 rounded-md font-lato"
                          style={{
                            backgroundColor: "#FAF3EF",
                            border: "0.5px solid #F2E2DA",
                            color: "#9A8480",
                          }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            className="shrink-0 w-[min(82vw,280px)] sm:w-[min(34vw,300px)] lg:w-[min(28vw,340px)] mx-auto sm:mx-0 rounded-xl overflow-hidden self-start"
            style={{ backgroundColor: "#FAF0EC" }}
          >
            {heroPhoto ? (
              <Image
                src={heroPhoto.src}
                alt="Sukriti Dubey"
                width={heroPhoto.width}
                height={heroPhoto.height}
                className="w-full h-auto align-bottom block rounded-xl"
                sizes="(max-width: 640px) min(82vw, 280px), (max-width: 1024px) min(34vw, 300px), min(28vw, 340px)"
                priority
              />
            ) : (
              <span
                className="text-xs text-center font-lato px-3 py-8 block"
                style={{ color: "#A4918D" }}
              >
                your photo
              </span>
            )}
          </div>
        </section>
        {/* AI chat entry point: full-width band below hero */}
        <section
          className="-mx-5 sm:-mx-6 lg:-mx-8 mb-12 sm:mb-14"
          style={{
            backgroundColor: "#FAF3EF",
            borderTop: "0.5px solid #F2E2DA",
            borderBottom: "0.5px solid #F2E2DA",
          }}
        >
          <div className="w-full max-w-site mx-auto px-5 sm:px-6 lg:px-8 py-6 sm:py-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 sm:gap-8">
            <div className="min-w-0 flex-1">
              <p
                className="text-[11px] sm:text-xs uppercase tracking-widest font-playfair font-medium mb-2"
                style={{ color: "#D4948A" }}
              >
                Portfolio AI
              </p>
              <h2
                className="font-playfair mb-2 text-lg sm:text-xl"
                style={{ color: "#2A1A18" }}
              >
                Not sure where to start? Scroll to explore, or just ask Sukriti&apos;s AI.
              </h2>
              <p
                className="font-lato text-[13px] sm:text-[14px] leading-relaxed max-w-xl"
                style={{ color: "#9A8480" }}
              >
                Ask anything about my experience, projects, or skills.
              </p>
            </div>
            <Link
              href="/ask"
              className="font-lato shrink-0 self-start sm:self-center text-center text-[13px] font-medium px-5 py-2.5 sm:px-6 sm:py-3"
              style={{
                backgroundColor: "#D4948A",
                color: "#fff",
                borderRadius: 20,
                textDecoration: "none",
              }}
            >
              Start a conversation →
            </Link>
          </div>
        </section>

        {/* Navigate: Experience, Projects, Extracurriculars, Blogs */}
        <HomeGrid />

        {/* Contact strip */}
        <ContactStrip />

      </main>

      <Footer />
    </div>
  );
}
