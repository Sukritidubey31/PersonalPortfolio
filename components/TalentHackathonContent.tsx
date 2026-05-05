"use client";

import {
  SectionHeader,
  Body,
  NumberedList,
  BulletList,
  MetricBadge,
} from "@/components/ProjectDetailHelpers";

export function TalentHackathonContent({ showBackLink = false }: { showBackLink?: boolean }) {
  return (
    <>
      {/* Hero */}
      <div className="mb-10">
        <p
          className="text-[10px] uppercase tracking-widest font-playfair font-medium mb-3"
          style={{ color: "#D4948A" }}
        >
          VR Innovation · Employee Onboarding · Johnson &amp; Johnson · Finalist
        </p>
        <h1
          className="font-playfair mb-4 leading-tight"
          style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.2rem)", color: "#2A1A18" }}
        >
          Reimagining New Hire Onboarding with VR Technology
        </h1>
        <Body>
          In November 2024, I participated in the Talent 2.0 Hackathon
          organized by Johnson &amp; Johnson. The goal of the hackathon was to
          innovate the talent acquisition process from resumes to onboarding
          through the use of technology. Our team focused specifically on
          enhancing the onboarding experience for new hires using Virtual
          Reality. Our idea was selected as one of the finalists.
        </Body>
        <div className="flex flex-wrap gap-2 mt-5">
          <MetricBadge label="Finalist" color="pink" />
          <MetricBadge label="November 2024" color="blue" />
          <MetricBadge label="Johnson & Johnson" color="green" />
        </div>
      </div>

      {/* Section 1 */}
      <SectionHeader number={1} title="Brainstorming Phase" />
      <Body>
        We started by deciding which aspect of the talent acquisition process to
        focus on. After brainstorming, we decided to develop a solution for the
        onboarding experience, specifically for early career candidates.
      </Body>

      <div className="mt-5 mb-2">
        <p
          className="text-[9px] uppercase tracking-widest font-playfair font-medium mb-3"
          style={{ color: "#A4918D" }}
        >
          Why onboarding for early career hires?
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
        {[
          { stat: "$4,000+", label: "Average cost of onboarding per hire" },
          { stat: "36%", label: "Recent graduates leaving first job within year one" },
          { stat: "75%", label: "J&J employees who leave due to poor team connection" },
          { stat: "25%", label: "J&J annual hires who are early career professionals" },
        ].map((item) => (
          <div
            key={item.stat}
            className="rounded-card px-4 py-3"
            style={{ border: "0.5px solid #F2E2DA", backgroundColor: "#FAF3EF" }}
          >
            <p
              className="font-playfair mb-0.5"
              style={{ fontSize: "20px", color: "#D4948A" }}
            >
              {item.stat}
            </p>
            <p className="font-lato" style={{ fontSize: "11px", color: "#9A8480" }}>
              {item.label}
            </p>
          </div>
        ))}
      </div>

      <div className="mb-2">
        <p
          className="text-[9px] uppercase tracking-widest font-playfair font-medium mb-3"
          style={{ color: "#A4918D" }}
        >
          Why VR?
        </p>
      </div>
      <BulletList
        items={[
          "J&J already uses VR in parts of its onboarding process, helping reduce initial investment costs.",
          "Our estimations showed J&J spends approximately $44M/year on onboarding early career employees.",
          "We estimated that introducing VR could reduce the current onboarding cost by 40%.",
        ]}
      />

      {/* Section 2 */}
      <SectionHeader number={2} title="Talking with Mentors" />
      <Body>
        We talked to mentors at the hackathon and identified the following key
        pain points in the onboarding process for early career hires:
      </Body>
      <div className="mt-4">
        <BulletList
          items={[
            "Struggling to build a strong connection with the team and manager.",
            "Finding it challenging to grasp the company culture.",
            "Long and boring trainings.",
          ]}
        />
      </div>

      {/* Section 3 */}
      <SectionHeader number={3} title="Features for the Solution" />
      <Body>
        Based on our conversations with mentors and the pain points identified,
        we designed the following features:
      </Body>
      <div className="mt-4">
        <NumberedList
          items={[
            <span key="1">
              <strong style={{ color: "#2A1A18" }}>Real-Life Case Studies</strong> : Expose candidates to realistic scenarios based on their roles.
            </span>,
            <span key="2">
              <strong style={{ color: "#2A1A18" }}>Team-Based Case Studies</strong> : Working on team-based case studies helps candidates connect with team synergy. They gain insight into team dynamics, fostering closer, more effective collaboration.
            </span>,
            <span key="3">
              <strong style={{ color: "#2A1A18" }}>Company Culture and Values via VR</strong> : For example, presenting a &quot;leading by example&quot; case study and assessing behavior provides insights into mindset and alignment with the company&apos;s values.
            </span>,
          ]}
        />
      </div>

      {/* Section 4 */}
      <SectionHeader number={4} title="How Can This Be Monitored?" />
      <Body>
        To test if this is an effective solution, we would look into:
      </Body>
      <div className="mt-4">
        <NumberedList
          items={[
            "Cost savings for the onboarding process.",
            "Employee performance after the training.",
            "Early career employee retention rate.",
            "Employee feedback scores.",
          ]}
        />
      </div>

      {/* Outcome */}
      <div
        className="mt-8 rounded-card px-5 py-4"
        style={{ border: "0.5px solid #EAC0D4", backgroundColor: "#FDE8F2" }}
      >
        <p
          className="text-[9px] uppercase tracking-widest font-playfair font-medium mb-1"
          style={{ color: "#8A2252" }}
        >
          Outcome
        </p>
        <p className="font-playfair" style={{ fontSize: "17px", color: "#8A2252" }}>
          Selected as Finalist · November 2024
        </p>
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

