"use client";

import {
  SectionHeader,
  Body,
  NumberedList,
  BulletList,
  StyledTable,
  MetricBadge,
} from "@/components/ProjectDetailHelpers";

export function PerplexityContent({ showBackLink = false }: { showBackLink?: boolean }) {
  return (
    <>

      <div
        className="rounded-pill px-4 py-3 mb-8 flex items-start gap-2"
        style={{
          background: "#FEF3CD",
          border: "0.5px solid #F0C040",
          borderRadius: "8px",
        }}
      >
        <span style={{ fontSize: "14px" }}>⚠️</span>
        <p
          className="font-lato leading-relaxed"
          style={{ fontSize: "12px", color: "#7A5C00" }}
        >
          This was created in early 2025 as part of Cornell coursework. Some
          market data and competitive details are now outdated. This is shared
          to demonstrate strategic thinking and PM frameworks only.
        </p>
      </div>

      {/* Hero */}
      <div className="mb-10">
        <p
          className="text-[10px] uppercase tracking-widest font-playfair font-medium mb-3"
          style={{ color: "#D4948A" }}
        >
          Cornell Coursework · March 2025
        </p>
        <h1
          className="font-playfair mb-4 leading-tight"
          style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.2rem)", color: "#2A1A18" }}
        >
          Enterprise Agentic AI Platform Strategy
        </h1>
        <Body>
          A comprehensive 2026 strategic growth plan positioning Perplexity AI
          as the leading enterprise agentic AI platform. The strategy navigates
          competitive pressures from OpenAI, Google, and Microsoft while
          leveraging Perplexity&apos;s differentiated real-time knowledge and
          autonomous workflow capabilities to capture enterprise market share.
        </Body>
        <div className="flex flex-wrap gap-2 mt-5">
          <MetricBadge label="$75M Revenue Target" color="green" />
          <MetricBadge label="50+ Enterprise Clients" color="blue" />
          <MetricBadge label="50% Workflow Reduction" color="green" />
        </div>
      </div>

      {/* Section 1 */}
      <SectionHeader number={1} title="Strategic Recommendation" />
      <div
        className="rounded-card px-5 py-4 mb-4"
        style={{ border: "0.5px solid #EDD4CC", backgroundColor: "#FAF0EC" }}
      >
        <p
          className="font-playfair font-medium mb-1"
          style={{ fontSize: "12px", color: "#A06058" }}
        >
          Core recommendation
        </p>
        <p className="font-playfair" style={{ fontSize: "17px", color: "#2A1A18" }}>
          Build the Perplexity Knowledge Broker Platform : an autonomous AI
          system that manages complex enterprise workflows.
        </p>
      </div>
      <BulletList
        items={[
          "Key targets: 50+ enterprise clients by 2026, 50% workflow time reduction, $75M revenue run rate.",
          "Strategic advantage: Context-aware autonomous agents versus general AI assistants.",
          "Investment required: $25M R&D allocation for platform development and vertical solutions.",
          "Target markets: Healthcare, Banking and Finance, Manufacturing.",
        ]}
      />

      {/* Section 2 */}
      <SectionHeader number={2} title="The Problem" />
      <Body>
        Current AI assistants execute single commands but lack autonomous
        decision-making. Enterprises struggle with complex workflows requiring
        context retention across stages. No clear market leader exists in
        agentic enterprise AI despite growing demand.
      </Body>
      <div className="mt-4">
        <p
          className="text-[9px] uppercase tracking-widest font-playfair font-medium mb-3"
          style={{ color: "#A4918D" }}
        >
          Perplexity-specific challenges
        </p>
        <BulletList
          items={[
            "Need for differentiation beyond basic search to justify its $9B valuation.",
            "Limited enterprise presence despite strong consumer adoption.",
            "Dependency on third-party foundation models creating vulnerability.",
          ]}
        />
      </div>

      {/* Section 3 */}
      <SectionHeader number={3} title="Mission and Vision" />
      <div className="space-y-4">
        <div
          className="rounded-card px-5 py-4"
          style={{ border: "0.5px solid #F2E2DA", backgroundColor: "#FAF3EF" }}
        >
          <p
            className="text-[9px] uppercase tracking-widest font-playfair font-medium mb-2"
            style={{ color: "#A4918D" }}
          >
            Mission
          </p>
          <p className="font-lato" style={{ fontSize: "13px", color: "#9A8480" }}>
            To empower organizations with autonomous, context-aware AI agents
            that revolutionize knowledge discovery and decision-making processes.
          </p>
        </div>
        <div
          className="rounded-card px-5 py-4"
          style={{ border: "0.5px solid #EDD4CC", backgroundColor: "#FAF0EC" }}
        >
          <p
            className="text-[9px] uppercase tracking-widest font-playfair font-medium mb-2"
            style={{ color: "#D4948A" }}
          >
            Vision
          </p>
          <p className="font-lato" style={{ fontSize: "13px", color: "#9A8480" }}>
            To be the global leader in Agentic AI systems, enabling seamless
            collaboration between humans and autonomous agents for unparalleled
            efficiency and innovation.
          </p>
        </div>
      </div>

      {/* Section 4 */}
      <SectionHeader number={4} title="Strategic Pillars" />
      <NumberedList
        items={[
          <span key="1">
            <strong style={{ color: "#2A1A18" }}>Platform Development</strong> : Build a proprietary orchestration layer for task routing, develop an advanced contextual memory system, create a secure scalable cloud architecture.
          </span>,
          <span key="2">
            <strong style={{ color: "#2A1A18" }}>Vertical Solutions</strong> : Healthcare for clinical decision support and research acceleration, Banking for fraud detection and regulatory compliance, Manufacturing for supply chain optimization and predictive maintenance.
          </span>,
          <span key="3">
            <strong style={{ color: "#2A1A18" }}>Trust and Integration</strong> : Transparent explainable AI actions, enterprise security compliance, seamless integration with existing systems.
          </span>,
          <span key="4">
            <strong style={{ color: "#2A1A18" }}>Market Expansion</strong> : Strategic partnerships with industry leaders, targeted GTM strategy for enterprise penetration, value-based pricing model.
          </span>,
        ]}
      />

      {/* Section 5 */}
      <SectionHeader number={5} title="Prioritization Using RICE" />
      <p
        className="font-lato mb-4"
        style={{ fontSize: "12px", color: "#9A8480", fontStyle: "italic" }}
      >
        RICE Score = (Reach × Impact × Confidence) / Effort
      </p>
      <StyledTable
        headers={["Initiative", "Reach", "Impact", "Confidence", "Effort (hrs)", "RICE Score", "Priority"]}
        rows={[
          ["Improve Customer Experience & Engagement", "950", "3", "0.9", "850", "3.02", "Highest"],
          ["Expand Integrations & Partnerships", "700", "2", "0.85", "700", "1.70", "High"],
          ["Enhance Core Platform Capabilities", "800", "2", "0.9", "900", "1.60", "High"],
          ["Leverage AI & Automation for Insights", "600", "3", "0.8", "1000", "1.44", "Medium"],
          ["Drive Market Expansion and Adoption", "500", "2", "0.75", "750", "1.00", "Deferred"],
        ]}
      />
      <div
        className="mt-4 rounded-card px-4 py-3"
        style={{ border: "0.5px solid #EDD4CC", backgroundColor: "#FAF0EC" }}
      >
        <p className="font-lato" style={{ fontSize: "12px", color: "#9A8480" }}>
          <strong style={{ color: "#A06058" }}>Resource allocation recommendation:</strong> Remove Drive Market Expansion and Adoption → saves ~750 hrs. Optional: delay AI &amp; Automation Insights for further flexibility.
        </p>
      </div>

      {/* Section 6 */}
      <SectionHeader number={6} title="Go-to-Market Strategy" />
      <div className="mb-4">
        <p
          className="text-[9px] uppercase tracking-widest font-playfair font-medium mb-3"
          style={{ color: "#A4918D" }}
        >
          Target markets &amp; decision-makers
        </p>
        <BulletList
          items={[
            "Target markets: Healthcare, Banking and Finance, Manufacturing",
            "Decision-makers: CIO, CTO, COO",
            "End users: Analysts, Operations Managers",
          ]}
        />
      </div>
      <div className="mt-5">
        <p
          className="text-[9px] uppercase tracking-widest font-playfair font-medium mb-3"
          style={{ color: "#A4918D" }}
        >
          GTM Timeline
        </p>
        <StyledTable
          headers={["Quarter", "Focus"]}
          rows={[
            ["Q3 2025", "Design Partner Onboarding : 3 to 5 design partners per vertical"],
            ["Q4 2025", "Early Adoption : 10 to 15 early adopters"],
            ["Q1 2026", "General Availability : full platform launch + AI insights"],
            ["Q2 2026", "Market Expansion : additional verticals and regions"],
          ]}
        />
      </div>

      {/* Section 7 */}
      <SectionHeader number={7} title="2026 Goals" />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {[
          {
            category: "Customer",
            goals: [
              "50+ enterprise clients",
              "90% client satisfaction",
              "80% annual retention",
              "5+ lighthouse customers",
            ],
          },
          {
            category: "Product",
            goals: [
              "50% workflow time reduction",
              "90% task automation",
              "99.9% system availability",
            ],
          },
          {
            category: "Financial",
            goals: [
              "$75M annualized revenue",
              "65% gross margin",
              "40% YoY growth",
            ],
          },
          {
            category: "Innovation",
            goals: [
              "10+ proprietary innovations",
              "15+ industry partnerships",
            ],
          },
        ].map((g) => (
          <div
            key={g.category}
            className="rounded-card px-4 py-3"
            style={{ border: "0.5px solid #F2E2DA", backgroundColor: "#FEFCFB" }}
          >
            <p
              className="text-[9px] uppercase tracking-widest font-playfair font-medium mb-2"
              style={{ color: "#A4918D" }}
            >
              {g.category}
            </p>
            <BulletList items={g.goals} />
          </div>
        ))}
      </div>

      {showBackLink && (
      <div className="mt-12 pt-8" style={{ borderTop: "0.5px solid #F2E2DA" }}>
        <a
          href="/projects"
          className="text-[11px] font-lato px-4 py-2"
          style={{
            border: "0.5px solid #F2E2DA",
            borderRadius: "20px",
            color: "#9A8480",
          }}
        >
          ← Back to Projects
        </a>
      </div>
      )}
    </>
  );
}

