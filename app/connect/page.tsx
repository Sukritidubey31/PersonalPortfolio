import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import AiSearch from "@/components/AiSearch";
import ContactForm from "@/components/ContactForm";
import ContactTiles from "@/components/ContactTiles";

export default function ConnectPage() {
  return (
    <div style={{ backgroundColor: "#FEFCFB", minHeight: "100vh" }}>
      <Nav />
      <main className="w-full max-w-site mx-auto px-5 sm:px-6 lg:px-8 py-12 sm:py-14">
        {/* Header */}
        <div className="mb-8">
          <p
            className="text-[11px] uppercase tracking-widest font-playfair font-medium mb-2"
            style={{ color: "#D4948A" }}
          >
            Say hello
          </p>
          <h1
            className="font-playfair mb-2"
            style={{ fontSize: "32px", color: "#2A1A18" }}
          >
            Let&apos;s connect!
          </h1>
          <p className="font-lato" style={{ fontSize: "14px", color: "#9A8480" }}>
            Always happy to chat.
          </p>
        </div>

        <p
          className="font-lato mb-6 leading-relaxed"
          style={{ fontSize: "14px", color: "#9A8480" }}
        >
          Whether you want to discuss a role, a project idea, or just want to
          say hi. Reach out through any of these. Excited to chat!
        </p>

        {/* 2x2 contact grid (client) */}
        <ContactTiles />

        {/* Contact form */}
        <section
          className="rounded-card p-5 mb-8"
          style={{ border: "0.5px solid #F2E2DA", backgroundColor: "#FEFCFB" }}
        >
          <h2
            className="font-playfair mb-4"
            style={{ fontSize: "18px", color: "#2A1A18" }}
          >
            Send a message
          </h2>
          <ContactForm />
        </section>
      </main>
      <Footer />
    </div>
  );
}
