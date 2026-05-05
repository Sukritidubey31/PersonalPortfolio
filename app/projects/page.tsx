"use client";
import { useState } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import FilterBar from "@/components/FilterBar";
import FilterTrackHint from "@/components/FilterTrackHint";
import { ChurnLensContent } from "@/components/ChurnLensContent";
import { PerplexityContent } from "@/components/PerplexityContent";
import { TalentHackathonContent } from "@/components/TalentHackathonContent";
import { AnimalHackathonContent } from "@/components/AnimalHackathonContent";
import { ZerveHackathonContent } from "@/components/ZerveHackathonContent";
import { ConsumerBehaviourContent } from "@/components/ConsumerBehaviourContent";

function PopupSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-5 sm:mb-6">
      <p
        className="text-[10px] sm:text-[11px] uppercase tracking-widest font-playfair font-medium mb-2"
        style={{ color: "#A4918D" }}
      >
        {title}
      </p>
      <div
        className="font-lato text-[13px] sm:text-sm leading-relaxed"
        style={{ color: "#9A8480" }}
      >
        {children}
      </div>
    </div>
  );
}

/* ── Popup content for projects WITHOUT dedicated detail pages ── */

const warmlinePopup = (
  <div>
    <h2
      className="font-playfair mb-1 text-xl sm:text-2xl"
      style={{ color: "#2A1A18" }}
    >
      Warmline
    </h2>
    <p
      className="text-[10px] uppercase tracking-widest font-playfair font-medium mb-5"
      style={{ color: "#D4948A" }}
    >
      Networking · RAG · AI · Solo Build
    </p>

    <PopupSection title="The tension">
      <p>
        Networking advice always says be genuine, not transactional, but no
        tool actually helps you do that. Most people let connections go cold
        not because they do not care, but because they do not know what to say
        or when to say it.
      </p>
    </PopupSection>

    <PopupSection title="What Warmline is">
      <p>
        Warmline is an AI powered relationship assistant that helps
        professionals keep connections warm. It turns the awkward moment of
        “I should reach out but have no idea what to say” into a thoughtful,
        contextual message in seconds.
      </p>
    </PopupSection>

    <div className="mb-5 sm:mb-6">
      <p
        className="text-[10px] sm:text-[11px] uppercase tracking-widest font-playfair font-medium mb-3"
        style={{ color: "#A4918D" }}
      >
        User groups, pain, and what Warmline addresses
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {[
          {
            who: "Job seekers",
            pain: "Follow ups feel generic or forced after a long gap.",
            fix: "Warmline recalls your last thread and drafts a message that sounds like you remembered the relationship.",
          },
          {
            who: "Early career professionals",
            pain: "High volume from conferences and recruiting pipelines, easy to lose track of people you genuinely liked.",
            fix: "Semantic memory plus nudges when a relationship is going cold, with options like check in, share something relevant, intro, or custom.",
          },
          {
            who: "Active networkers at scale",
            pain: "Staying in touch at scale often feels robotic or like spam.",
            fix: "Action layer on what to say, when, and why, grounded in your own notes instead of empty templates.",
          },
        ].map((row) => (
          <div
            key={row.who}
            className="rounded-card px-4 py-3"
            style={{ border: "0.5px solid #F2E2DA", backgroundColor: "#FEFCFB" }}
          >
            <p className="font-playfair font-medium mb-1" style={{ fontSize: "12px", color: "#2A1A18" }}>
              {row.who}
            </p>
            <p className="font-lato mb-2" style={{ fontSize: "11px", color: "#A06058" }}>
              Pain: {row.pain}
            </p>
            <p className="font-lato" style={{ fontSize: "11px", color: "#9A8480" }}>
              Warmline: {row.fix}
            </p>
          </div>
        ))}
      </div>
    </div>

    <PopupSection title="Core problem vs contact tools">
      <p>
        Existing tools like Clay and Dex focus on storing contact data. They
        assume you already know what to do with it. Warmline focuses on the
        action layer: what to say, when, and why. That is where people actually
        get stuck.
      </p>
    </PopupSection>

    {/* Gap table */}
    <div className="mb-5 sm:mb-6">
      <p
        className="text-[10px] sm:text-[11px] uppercase tracking-widest font-playfair font-medium mb-3"
        style={{ color: "#A4918D" }}
      >
        How Warmline differs
      </p>
      <div style={{ overflowX: "auto" }}>
        <table
          className="font-lato"
          style={{ width: "100%", borderCollapse: "collapse", fontSize: "12px" }}
        >
          <thead>
            <tr style={{ backgroundColor: "#FAF3EF" }}>
              {["", "Clay", "Dex", "Warmline"].map((h) => (
                <th
                  key={h}
                  style={{
                    padding: "8px 12px",
                    textAlign: "left",
                    color: "#9A8480",
                    fontWeight: 500,
                    borderBottom: "0.5px solid #F2E2DA",
                    whiteSpace: "nowrap",
                  }}
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {[
              ["Built for", "Sales teams / enterprise", "Individual contact mgmt", "Individual relationship mgmt"],
              ["Semantic search", "No", "No", "Yes, via pgvector"],
              ["AI outreach", "Template-based", "None", "Context-aware via Claude"],
              ["Price", "$$$", "Free / freemium", "Open source"],
            ].map((row, i) => (
              <tr key={i} style={{ backgroundColor: i % 2 === 0 ? "#FEFCFB" : "#FAF3EF" }}>
                {row.map((cell, j) => (
                  <td
                    key={j}
                    style={{
                      padding: "8px 12px",
                      color: j === 0 ? "#2A1A18" : "#9A8480",
                      fontWeight: j === 0 ? 500 : 400,
                      borderBottom: "0.5px solid #F2E2DA",
                    }}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>

    <PopupSection title="How it works">
      <div className="space-y-3 mt-1">
        {[
          {
            n: "01",
            text: "When you add a connection, Warmline captures context: who they are, what you talked about, and your goal for the relationship.",
          },
          {
            n: "02",
            text: "It generates a personalized follow up message and a relevant article to share right away.",
          },
          {
            n: "03",
            text: "Over time it tracks who is going cold and generates nudges when you have not reached out in a while. Users pick the nudge type: casual check in, something relevant to share, a network introduction, or a custom message.",
          },
          {
            n: "04",
            text: "Every contact is embedded with Google Gemini and stored as a vector in Supabase pgvector.",
          },
          {
            n: "05",
            text: "For each nudge, two parallel queries run: one pulls your past interaction history with that person, another finds semantically similar conversations across your network. Both contexts go to Claude so the nudge feels remembered, not templated.",
          },
        ].map((s) => (
          <div key={s.n} className="flex gap-3">
            <span
              className="shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-medium font-lato"
              style={{ backgroundColor: "#FAF0EC", color: "#D4948A" }}
            >
              {s.n}
            </span>
            <p className="font-lato text-[12px] sm:text-[13px] leading-relaxed" style={{ color: "#9A8480" }}>
              {s.text}
            </p>
          </div>
        ))}
      </div>
    </PopupSection>

    {/* RAG callout */}
    <div
      className="mb-5 sm:mb-6"
      style={{
        borderLeft: "3px solid #D4948A",
        backgroundColor: "#FAF3EF",
        borderRadius: "8px",
        padding: "12px 16px",
      }}
    >
      <p
        className="font-playfair font-medium mb-1"
        style={{ fontSize: "12px", color: "#2A1A18" }}
      >
        RAG pipeline
      </p>
      <p className="font-lato" style={{ fontSize: "12px", color: "#9A8480" }}>
        The technically interesting part is the RAG pipeline. Every contact is
        embedded using Google Gemini and stored as a vector in Supabase
        pgvector. When generating a nudge, two parallel queries run: one
        retrieves your past interaction history with that specific person, and
        another finds semantically similar conversations across your entire
        network. Both contexts are passed to Claude, which produces a nudge that
        feels like it comes from someone who actually remembers the relationship
        rather than a template.
      </p>
    </div>

    <PopupSection title="Tech stack and why">
      <ul className="list-disc pl-5 space-y-2 marker:text-[#D4948A]">
        <li>
          Next.js with TypeScript for full stack development in one repo, fast to
          ship and easy to deploy.
        </li>
        <li>
          Supabase with pgvector for relational data and vector search in one
          place, avoiding a separate vector database at this scale.
        </li>
        <li>
          Anthropic Claude API for message generation and web search to surface
          relevant articles in a single API call.
        </li>
        <li>
          Google Gemini for embeddings with a generous free tier, outputting
          3072 dimension vectors.
        </li>
        <li>Vercel for zero config deployment with environment based secrets.</li>
      </ul>
    </PopupSection>

    <PopupSection title="What I would do differently at scale">
      <ul className="list-disc pl-5 space-y-2 marker:text-[#D4948A]">
        <li>
          Move embeddings to a background job queue so contact saves never block
          on embedding calls.
        </li>
        <li>Add rate limiting on AI routes.</li>
        <li>
          Migrate to a dedicated vector database once the embedding count
          justifies it.
        </li>
        <li>Add a browser extension to auto capture LinkedIn interactions as contact notes.</li>
        <li>
          Build a relationship health score from recency, interaction depth, and
          mutual engagement.
        </li>
        <li>Integrate email open and reply signals to refine the recency model.</li>
      </ul>
    </PopupSection>

    <div className="flex flex-wrap gap-3 mt-5 sm:mt-6">
      <a
        href="https://warmline-inky.vercel.app"
        target="_blank"
        rel="noopener noreferrer"
        className="text-xs sm:text-[13px] px-3.5 py-2 sm:px-4 font-lato"
        style={{ backgroundColor: "#D4948A", color: "#fff", borderRadius: "20px" }}
      >
        Live ↗
      </a>
      <a
        href="https://github.com/Sukritidubey31/Warmline"
        target="_blank"
        rel="noopener noreferrer"
        className="text-xs sm:text-[13px] px-3.5 py-2 sm:px-4 font-lato"
        style={{ border: "0.5px solid #F2E2DA", color: "#9A8480", borderRadius: "20px" }}
      >
        GitHub ↗
      </a>
    </div>
  </div>
);

const riderDelayPopup = (
  <div>
    <h2
      className="font-playfair mb-1 text-xl sm:text-2xl"
      style={{ color: "#2A1A18" }}
    >
      Rider Delay AI Agent
    </h2>
    <p
      className="text-[10px] uppercase tracking-widest font-playfair font-medium mb-5"
      style={{ color: "#D4948A" }}
    >
      AI Agent · FastAPI · Full stack · Operations
    </p>

    <div className="mb-5 sm:mb-6">
      <p
        className="text-[10px] sm:text-[11px] uppercase tracking-widest font-playfair font-medium mb-3"
        style={{ color: "#A4918D" }}
      >
        User groups, pain, and what the agent addresses
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {[
          {
            who: "Customers waiting on delivery",
            pain: "Opaque delays erode trust. Policy SMS does not explain what is happening.",
            fix: "Plain English SMS with delay reason and next steps, including credit rules when relevant.",
          },
          {
            who: "Riders",
            pain: "They get blamed silently when traffic or routing causes the delay.",
            fix: "Messages explain context so customers understand it is not rider neglect.",
          },
          {
            who: "Ops and platform teams",
            pain: "Manual comms, weak audit trail, hard to tune tone by severity.",
            fix: "Logged events, Twilio pipeline, and Claude tone that adapts to delay severity and history.",
          },
        ].map((row) => (
          <div
            key={row.who}
            className="rounded-card px-4 py-3"
            style={{ border: "0.5px solid #F2E2DA", backgroundColor: "#FEFCFB" }}
          >
            <p className="font-playfair font-medium mb-1" style={{ fontSize: "12px", color: "#2A1A18" }}>
              {row.who}
            </p>
            <p className="font-lato mb-2" style={{ fontSize: "11px", color: "#A06058" }}>
              Pain: {row.pain}
            </p>
            <p className="font-lato" style={{ fontSize: "11px", color: "#9A8480" }}>
              Product: {row.fix}
            </p>
          </div>
        ))}
      </div>
    </div>

    <PopupSection title="The problem">
      <p>
        Delivery platforms lose customer trust when riders go dark during delays.
        A customer waiting for food does not need a policy update. They need to
        know what is happening, in plain English, right now. The rule based SMS
        most platforms send tells them nothing actionable.
      </p>
    </PopupSection>

    {/* Rule-based vs Claude callout */}
    <div
      className="mb-5 sm:mb-6"
      style={{
        borderLeft: "3px solid #D4948A",
        backgroundColor: "#FAF3EF",
        borderRadius: "8px",
        padding: "12px 16px",
      }}
    >
      <p
        className="font-playfair font-medium mb-2"
        style={{ fontSize: "12px", color: "#2A1A18" }}
      >
        Rule-based vs. Claude
      </p>
      <div className="space-y-2">
        <div>
          <p className="font-playfair font-medium" style={{ fontSize: "11px", color: "#A4918D" }}>
            BEFORE: Rule based
          </p>
          <p className="font-lato" style={{ fontSize: "12px", color: "#9A8480", fontStyle: "italic" }}>
            &quot;Your order is delayed. New ETA: 45 minutes.&quot;
          </p>
        </div>
        <div>
          <p className="font-playfair font-medium" style={{ fontSize: "11px", color: "#D4948A" }}>
            AFTER: Claude
          </p>
          <p className="font-lato" style={{ fontSize: "12px", color: "#9A8480", fontStyle: "italic" }}>
            &quot;Hey, your rider hit unexpected traffic. They&apos;re about 15
            minutes out. We&apos;ve flagged this for a credit if the delay
            exceeds 20 minutes.&quot;
          </p>
        </div>
      </div>
    </div>

    <PopupSection title="The goal">
      <p>
        Turn delay detection from a reactive alert into a conversational,
        context aware customer experience, one that explains the situation
        rather than just updating an ETA.
      </p>
    </PopupSection>

    <PopupSection title="How it works">
      <div className="space-y-3 mt-1">
        {[
          { n: "01", text: "APScheduler polls Supabase every 2 minutes for orders where actual delivery time is diverging from the estimate." },
          { n: "02", text: "When a delay threshold is crossed, FastAPI triggers the delay detection logic and pulls order context." },
          { n: "03", text: "Order context (rider location, delay duration, order contents) is passed to Claude API." },
          { n: "04", text: "Claude generates a natural-language SMS that explains the delay with context, not just a timestamp update." },
          { n: "05", text: "SMS is dispatched via Twilio to the customer's registered number." },
          { n: "06", text: "The delay event and message are logged to Supabase for ops review and refund eligibility tracking." },
        ].map((s) => (
          <div key={s.n} className="flex gap-3">
            <span
              className="shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-medium font-lato"
              style={{ backgroundColor: "#FAF0EC", color: "#D4948A" }}
            >
              {s.n}
            </span>
            <p className="font-lato text-[12px] sm:text-[13px] leading-relaxed" style={{ color: "#9A8480" }}>
              {s.text}
            </p>
          </div>
        ))}
      </div>
    </PopupSection>

    {/* Technical callout */}
    <div
      className="mb-5 sm:mb-6"
      style={{
        borderLeft: "3px solid #D4948A",
        backgroundColor: "#FAF3EF",
        borderRadius: "8px",
        padding: "12px 16px",
      }}
    >
      <p
        className="font-playfair font-medium mb-1"
        style={{ fontSize: "12px", color: "#2A1A18" }}
      >
        What makes it technically interesting
      </p>
      <p className="font-lato" style={{ fontSize: "12px", color: "#9A8480" }}>
        The LLM is not just composing text. It is making a judgment
        call. Given the same inputs, Claude varies tone based on delay severity,
        prior customer interactions, and order history. A first-time customer
        5 minutes late gets a different message than a loyal customer 25 minutes
        late.
      </p>
    </div>

    {/* Stack table */}
    <div className="mb-5 sm:mb-6">
      <p
        className="text-[10px] sm:text-[11px] uppercase tracking-widest font-playfair font-medium mb-3"
        style={{ color: "#A4918D" }}
      >
        Stack
      </p>
      <div style={{ overflowX: "auto" }}>
        <table
          className="font-lato"
          style={{ width: "100%", borderCollapse: "collapse", fontSize: "12px" }}
        >
          <thead>
            <tr style={{ backgroundColor: "#FAF3EF" }}>
              {["Tool", "Role"].map((h) => (
                <th
                  key={h}
                  style={{
                    padding: "8px 12px",
                    textAlign: "left",
                    color: "#9A8480",
                    fontWeight: 500,
                    borderBottom: "0.5px solid #F2E2DA",
                  }}
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {[
              ["FastAPI", "Backend: delay detection logic and API routing"],
              ["Claude API", "Natural language SMS generation"],
              ["Supabase / PostgreSQL", "Order, rider, and customer data"],
              ["APScheduler", "Polling for delay threshold events"],
              ["Twilio", "SMS delivery to customers"],
              ["React / TypeScript / Vite", "Frontend ops monitoring dashboard"],
              ["Railway + Vercel", "Backend on Railway, frontend on Vercel"],
            ].map((row, i) => (
              <tr key={i} style={{ backgroundColor: i % 2 === 0 ? "#FEFCFB" : "#FAF3EF" }}>
                {row.map((cell, j) => (
                  <td
                    key={j}
                    style={{
                      padding: "8px 12px",
                      color: j === 0 ? "#2A1A18" : "#9A8480",
                      fontWeight: j === 0 ? 500 : 400,
                      borderBottom: "0.5px solid #F2E2DA",
                    }}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>

    {/* 3-column "what this demonstrates" grid */}
    <div className="mb-5 sm:mb-6">
      <p
        className="text-[10px] sm:text-[11px] uppercase tracking-widest font-playfair font-medium mb-3"
        style={{ color: "#A4918D" }}
      >
        What this demonstrates
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {[
          {
            label: "Product thinking",
            text: "Identified that the real problem was not delay detection. It was the quality of customer communication that followed.",
          },
          {
            label: "Engineering depth",
            text: "Full async pipeline: scheduled jobs to FastAPI to LLM to SMS, wired together with real data.",
          },
          {
            label: "Operational design",
            text: "Every event logged, every message auditable, refund eligibility tracked from the start.",
          },
        ].map((col) => (
          <div
            key={col.label}
            className="rounded-card px-4 py-3"
            style={{ border: "0.5px solid #F2E2DA", backgroundColor: "#FEFCFB" }}
          >
            <p
              className="font-playfair font-medium mb-1"
              style={{ fontSize: "11px", color: "#2A1A18" }}
            >
              {col.label}
            </p>
            <p className="font-lato" style={{ fontSize: "11px", color: "#9A8480" }}>
              {col.text}
            </p>
          </div>
        ))}
      </div>
    </div>

    <div className="flex flex-wrap gap-3 mt-5 sm:mt-6">
      <a
        href="https://frontend-peach-seven-32.vercel.app"
        target="_blank"
        rel="noopener noreferrer"
        className="text-xs sm:text-[13px] px-3.5 py-2 sm:px-4 font-lato"
        style={{ backgroundColor: "#D4948A", color: "#fff", borderRadius: "20px" }}
      >
        Live ↗
      </a>
      <a
        href="https://github.com/Sukritidubey31/rider-delay-agent"
        target="_blank"
        rel="noopener noreferrer"
        className="text-xs sm:text-[13px] px-3.5 py-2 sm:px-4 font-lato"
        style={{ border: "0.5px solid #F2E2DA", color: "#9A8480", borderRadius: "20px" }}
      >
        GitHub ↗
      </a>
    </div>
  </div>
);

const seventySevenCentsPopup = (
  <div>
    <h2
      className="font-playfair mb-1 text-xl sm:text-2xl"
      style={{ color: "#2A1A18" }}
    >
      77 Cents
    </h2>
    <p
      className="text-[10px] uppercase tracking-widest font-playfair font-medium mb-5"
      style={{ color: "#D4948A" }}
    >
      Product · AI Coaching · WIP Hackathon · Finalist
    </p>

    <PopupSection title="The problem">
      <p>
        Women in PM roles face a compounded challenge: salary data is
        fragmented, negotiation feels risky, and most tools weren&apos;t
        designed with gender dynamics in mind. The result is that women
        consistently leave money on the table, not because they don&apos;t
        know their worth, but because they don&apos;t have the right tools to
        act on it.
      </p>
    </PopupSection>

    <div className="mb-5 sm:mb-6">
      <p
        className="text-[10px] sm:text-[11px] uppercase tracking-widest font-playfair font-medium mb-3"
        style={{ color: "#A4918D" }}
      >
        User groups, pain, and what 77 Cents addresses
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {[
          {
            who: "Early career women in PM",
            pain: "Little trusted benchmarking for PM leveling and offer context.",
            fix: "Profile based ranges and percentile views, not only averages.",
          },
          {
            who: "Women negotiating promotion or internal move",
            pain: "High stakes conversations with unclear internal comp logic.",
            fix: "Coaching on framing, counters, and practice with simulated manager replies.",
          },
          {
            who: "Women comparing multiple offers",
            pain: "Hard to translate total comp, level, and risk into a confident ask.",
            fix: "Structured inputs plus negotiation scripts tuned to PM realities.",
          },
        ].map((row) => (
          <div
            key={row.who}
            className="rounded-card px-4 py-3"
            style={{ border: "0.5px solid #F2E2DA", backgroundColor: "#FEFCFB" }}
          >
            <p className="font-playfair font-medium mb-1" style={{ fontSize: "12px", color: "#2A1A18" }}>
              {row.who}
            </p>
            <p className="font-lato mb-2" style={{ fontSize: "11px", color: "#A06058" }}>
              Pain: {row.pain}
            </p>
            <p className="font-lato" style={{ fontSize: "11px", color: "#9A8480" }}>
              77 Cents: {row.fix}
            </p>
          </div>
        ))}
      </div>
    </div>

    {/* 3-column problem grid */}
    <div className="mb-5 sm:mb-6">
      <p
        className="text-[10px] sm:text-[11px] uppercase tracking-widest font-playfair font-medium mb-3"
        style={{ color: "#A4918D" }}
      >
        Three compounding gaps
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {[
          {
            label: "Compensation is opaque",
            text: "Salary ranges aren't published. Benchmark data is scattered. Levels.fyi skews toward engineering roles.",
          },
          {
            label: "Negotiation feels risky",
            text: "Women who negotiate face social penalties men don't. The scripts online ignore this reality.",
          },
          {
            label: "Existing tools fall short",
            text: "Generic coaches don't understand PM leveling. LinkedIn Salary doesn't break down by company stage or negotiation outcome.",
          },
        ].map((col) => (
          <div
            key={col.label}
            className="rounded-card px-4 py-3"
            style={{ border: "0.5px solid #F2E2DA", backgroundColor: "#FEFCFB" }}
          >
            <p
              className="font-playfair font-medium mb-1"
              style={{ fontSize: "11px", color: "#2A1A18" }}
            >
              {col.label}
            </p>
            <p className="font-lato" style={{ fontSize: "11px", color: "#9A8480" }}>
              {col.text}
            </p>
          </div>
        ))}
      </div>
    </div>

    {/* Mission */}
    <div
      className="mb-5 sm:mb-6"
      style={{
        borderLeft: "3px solid #D4948A",
        backgroundColor: "#FAF3EF",
        borderRadius: "8px",
        padding: "12px 16px",
      }}
    >
      <p
        className="font-playfair font-medium mb-1"
        style={{ fontSize: "12px", color: "#2A1A18" }}
      >
        Mission
      </p>
      <p className="font-lato" style={{ fontSize: "12px", color: "#9A8480" }}>
        Give women in PM the benchmarking data and negotiation language they
        need to close the gap, grounded in real comp data, aware of the social
        dynamics, and built to practice with.
      </p>
    </div>

    <PopupSection title="How it works">
      <div className="space-y-3 mt-1">
        {[
          { n: "01", text: "Enter your current role, level, company stage, and location." },
          { n: "02", text: "See benchmark ranges for your exact profile, broken down by percentile, not just averages." },
          { n: "03", text: "Input the offer you received and get coaching on counter-offer language and framing strategies." },
          { n: "04", text: "Practice the conversation. The AI coach role plays likely hiring manager responses so you can rehearse before the real thing." },
        ].map((s) => (
          <div key={s.n} className="flex gap-3">
            <span
              className="shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-medium font-lato"
              style={{ backgroundColor: "#FAF0EC", color: "#D4948A" }}
            >
              {s.n}
            </span>
            <p className="font-lato text-[12px] sm:text-[13px] leading-relaxed" style={{ color: "#9A8480" }}>
              {s.text}
            </p>
          </div>
        ))}
      </div>
    </PopupSection>

    <PopupSection title="My role">
      <p>
        Built the full product strategy and PM layer as part of Team Grace
        Hopper at the WIP Hackathon. Defined the user persona, pain point
        framing, and feature prioritization. Collaborated on the Lovable
        implementation. The product thinking and strategy were mine to own.
        This was a team effort to ship.
      </p>
    </PopupSection>

    <div className="mb-5 sm:mb-6">
      <p
        className="text-[10px] sm:text-[11px] uppercase tracking-widest font-playfair font-medium mb-2"
        style={{ color: "#A4918D" }}
      >
        Built with
      </p>
      <div className="flex flex-wrap gap-2">
        {["Lovable", "AI coaching layer", "Product strategy", "Rapid prototyping"].map((tag) => (
          <span
            key={tag}
            className="text-[10px] sm:text-[11px] px-2.5 py-1 rounded-pill font-lato"
            style={{
              backgroundColor: "#FAF3EF",
              border: "0.5px solid #F2E2DA",
              color: "#9A8480",
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>

    <div className="flex flex-wrap gap-3 mt-5 sm:mt-6">
      <a
        href="https://seventysevencents.lovable.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-xs sm:text-[13px] px-3.5 py-2 sm:px-4 font-lato"
        style={{ backgroundColor: "#D4948A", color: "#fff", borderRadius: "20px" }}
      >
        Live ↗
      </a>
    </div>
  </div>
);

export default function ProjectsPage() {
  const [activeFilters, setActiveFilters] = useState<Set<string>>(
    new Set(["Product", "Data", "Engineering"])
  );

  const toggle = (track: string) => {
    setActiveFilters((prev) => {
      const next = new Set(prev);
      if (next.has(track)) next.delete(track);
      else next.add(track);
      return next;
    });
  };

  const show = (tracks: string[]) =>
    activeFilters.size === 0 || tracks.some((t) => activeFilters.has(t));

  return (
    <div style={{ backgroundColor: "#FEFCFB", minHeight: "100vh" }}>
      <Nav />
      <main className="w-full max-w-site mx-auto px-5 sm:px-6 lg:px-8 py-12 sm:py-14">
        {/* Header */}
        <div className="mb-8 sm:mb-10">
          <p
            className="text-[11px] sm:text-xs uppercase tracking-widest font-playfair font-medium mb-3"
            style={{ color: "#D4948A" }}
          >
            What I&apos;ve built
          </p>
          <h1
            className="font-playfair mb-2 sm:mb-3"
            style={{
              fontSize: "clamp(1.75rem, 3.2vw, 2.25rem)",
              color: "#2A1A18",
              lineHeight: 1.12,
            }}
          >
            Projects &amp; Hackathons
          </h1>
          <p
            className="font-lato max-w-2xl text-[15px] sm:text-base"
            style={{ color: "#9A8480", lineHeight: 1.7 }}
          >
            End-to-end builds, AI experiments, case studies, and hackathon
            experiments.
          </p>
        </div>

        <FilterTrackHint />
        <FilterBar active={activeFilters} onToggle={toggle} />

        {/* Projects section */}
        <section className="mb-12 sm:mb-14">
          <h2
            className="font-playfair pb-2.5 mb-5 sm:mb-6 text-xl sm:text-2xl"
            style={{
              color: "#2A1A18",
              borderBottom: "0.5px solid #F2E2DA",
            }}
          >
            Projects
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
            {show(["Engineering", "Product"]) && (
              <ProjectCard
                track="Engineering · AI"
                badge={{ label: "Live", color: "green" }}
                title="Warmline"
                description="Networking assistant built solo end to end. Helps professionals maintain meaningful connections using semantic search and AI powered relationship insights."
                techTags={["Next.js", "TypeScript", "Supabase", "pgvector", "Claude API", "Gemini Embeddings"]}
                impactTags={["Parallel RAG queries", "3072-dim vectors", "Solo end-to-end build"]}
                tracks={["Engineering", "Product"]}
                links={[
                  { label: "Live ↗", url: "https://warmline-inky.vercel.app" },
                  { label: "GitHub ↗", url: "https://github.com/Sukritidubey31/Warmline" },
                ]}
                popupContent={warmlinePopup}
              />
            )}
            {show(["Engineering"]) && (
              <ProjectCard
                track="Engineering · AI · Full-stack"
                badge={{ label: "Live", color: "green" }}
                title="Rider Delay AI Agent"
                description="AI agent that detects delivery delays and contacts riders via conversational SMS. Rebuilt from MosAIc Hackathon prototype to production."
                techTags={["Python", "FastAPI", "Claude API", "Supabase", "APScheduler", "React", "TypeScript"]}
                impactTags={["Agentic loop", "Structured JSON decisions", "30-sec polling", "Full audit trail"]}
                tracks={["Engineering"]}
                links={[
                  { label: "Live ↗", url: "https://frontend-peach-seven-32.vercel.app" },
                  { label: "GitHub ↗", url: "https://github.com/Sukritidubey31/rider-delay-agent" },
                ]}
                popupContent={riderDelayPopup}
              />
            )}
            {show(["Data", "Engineering", "Product"]) && (
              <ProjectCard
                track="Data · ML · Product Thinking"
                badge={{ label: "Live", color: "green" }}
                title="ChurnLens"
                description="End to end churn prediction platform reframed as a behavioral risk scoring engine. Caught data leakage mid build. That became the story. Includes a full PM case study layer."
                techTags={["BigQuery", "XGBoost", "Python", "Supabase", "Tableau", "Next.js", "Claude API"]}
                impactTags={["$6.3M revenue at risk surfaced", "80K+ customers scored", "Data leakage caught"]}
                tracks={["Data", "Engineering", "Product"]}
                links={[
                  { label: "Live ↗", url: "https://churnlensapp.vercel.app" },
                  { label: "Tableau ↗", url: "https://public.tableau.com/views/ChurnLens/ChurnLens" },
                  { label: "GitHub ↗", url: "https://github.com/Sukritidubey31/ChurnAnalysis" },
                ]}
                popupContent={<ChurnLensContent />}
                readMoreLabel="Read More →"
              />
            )}
            {show(["Data"]) && (
              <ProjectCard
                track="Data · ML"
                badge={{ label: "Research", color: "rose" }}
                title="Consumer Behaviour Prediction"
                description="Four model comparison on Kaggle consumer data. Full write up: dataset, EDA, K fold cleanup, and why SVM hit 94% while Age led correlations at r = 0.62."
                techTags={["Python", "scikit-learn", "SVM", "Pandas", "Seaborn"]}
                impactTags={["94% test accuracy", "Age = top predictor (r=0.62)", "4 models compared"]}
                tracks={["Data"]}
                links={[
                  { label: "GitHub ↗", url: "https://github.com/Sukritidubey31/ConsumerModeling" },
                ]}
                popupContent={<ConsumerBehaviourContent />}
                readMoreLabel="Read More →"
              />
            )}
            {show(["Product"]) && (
              <ProjectCard
                track="Product · Strategy · Case Study"
                badge={{ label: "Case Study", color: "pink" }}
                title="Perplexity AI · Strategic Growth Plan"
                description="2026 enterprise strategy positioning Perplexity as the leading agentic AI platform. Targets Healthcare, Banking, and Manufacturing verticals."
                techTags={["RICE Framework", "Porter’s 5 Forces", "Blue Ocean Strategy", "GTM Design"]}
                impactTags={["$75M revenue target", "50+ enterprise clients", "4 strategic pillars"]}
                tracks={["Product"]}
                links={[]}
                popupContent={<PerplexityContent />}
                readMoreLabel="Read More →"
              />
            )}
          </div>
        </section>

        {/* Hackathons section */}
        <section>
          <h2
            className="font-playfair pb-2.5 mb-5 sm:mb-6 text-xl sm:text-2xl"
            style={{ color: "#2A1A18", borderBottom: "0.5px solid #F2E2DA" }}
          >
            Hackathons
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
            {show(["Product"]) && (
              <ProjectCard
                track="Product · VR · J&J"
                badge={{ label: "Finalist", color: "pink" }}
                title="Talent 2.0 · J&J Hackathon"
                description="VR-enhanced employee onboarding solution. Reduces time-to-productivity and improves retention. Selected as finalist at J&J Talent 2.0 Hackathon, Nov 2024."
                techTags={["VR", "AI/ML", "Product Design"]}
                impactTags={["Finalist", "-40% estimated onboarding cost", "$44M/yr problem sized"]}
                tracks={["Product"]}
                links={[]}
                popupContent={<TalentHackathonContent />}
                readMoreLabel="Read More →"
              />
            )}
            {show(["Product"]) && (
              <ProjectCard
                track="Product · AI/ML · Cornell"
                badge={{ label: "Jan 2025", color: "blue" }}
                title="Animal Health Hackathon"
                description="Pet health management app with BCS image recognition and personalized diet plans. Cornell University + College of Veterinary Medicine."
                techTags={["Image Recognition", "AI/ML", "Product Design"]}
                impactTags={["BCS estimation via image recognition", "Subscription model designed"]}
                tracks={["Product"]}
                links={[]}
                popupContent={<AnimalHackathonContent />}
                readMoreLabel="Read More →"
              />
            )}
            {show(["Product"]) && (
              <ProjectCard
                track="Product · AI · WIP Hackathon"
                badge={{ label: "Finalist", color: "pink" }}
                title="77 Cents"
                description="Salary benchmarking and negotiation coaching tool for women in PM roles. Named after the gender pay gap statistic. Finalist with Team Grace Hopper."
                techTags={["Lovable", "AI Prompt Design", "Information Architecture"]}
                impactTags={["WIP Hackathon finalist", "Salary negotiation coach", "Women in PM"]}
                tracks={["Product"]}
                links={[
                  { label: "Live ↗", url: "https://seventysevencents.lovable.app/" },
                ]}
                popupContent={seventySevenCentsPopup}
              />
            )}
            {show(["Data"]) && (
              <ProjectCard
                track="Data · ML"
                badge={{ label: "3rd place", color: "blue" }}
                title="Behavioral Analytics · Zerve AI x HackerEarth"
                description="3rd place. Full retention story on 409K+ events: Day 0 cliff, agent versus explorer split, dual ML models, and why Zerve’s own agent ranked the wrong lever until the data disagreed."
                techTags={["Python", "Streamlit", "ML Classification"]}
                impactTags={["Agent usage = top predictor", "409K behavioral events analyzed"]}
                tracks={["Data"]}
                links={[
                  { label: "Dashboard ↗", url: "https://sukritihackerearth.hub.zerve.cloud/" },
                  { label: "Notebook ↗", url: "https://www.zerve.ai/gallery/bbe2f901-05b6-48f5-b412-358cdf798057" },
                ]}
                popupContent={<ZerveHackathonContent />}
                readMoreLabel="Read More →"
              />
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
