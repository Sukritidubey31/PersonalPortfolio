"use client";
import { useState } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import StoryCard from "@/components/StoryCard";
import FilterBar from "@/components/FilterBar";
import FilterTrackHint from "@/components/FilterTrackHint";

function SectionHeading({ title }: { title: string }) {
  return (
    <h2
      className="font-playfair pb-2 mb-4 sm:mb-5 text-2xl sm:text-3xl"
      style={{ color: "#2A1A18", borderBottom: "0.5px solid #F2E2DA" }}
    >
      {title}
    </h2>
  );
}

function RoleLabel({ label }: { label: string }) {
  return (
    <p
      className="text-[13px] sm:text-[14px] uppercase tracking-widest font-playfair font-medium mb-2.5 mt-5 first:mt-0"
      style={{ color: "#5C4A45" }}
    >
      {label}
    </p>
  );
}

export default function ExperiencePage() {
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
        <div className="mb-7 sm:mb-9">
          <p
            className="text-[13px] sm:text-[14px] uppercase tracking-widest font-playfair font-medium mb-2.5"
            style={{ color: "#A06058" }}
          >
            Work history
          </p>
          <h1
            className="font-playfair mb-2 sm:mb-2.5"
            style={{
              fontSize: "clamp(1.45rem, 2.6vw, 1.9rem)",
              color: "#2A1A18",
              lineHeight: 1.15,
            }}
          >
            Experience
          </h1>
          <p
            className="font-playfair max-w-2xl text-[19px] sm:text-[20px] lg:text-[1.35rem]"
            style={{ color: "#5C4A45", lineHeight: 1.55 }}
          >
            3 years of experience across product, engineering, and data.
          </p>
        </div>

        <FilterTrackHint className="text-[12px] sm:text-[13px] mb-3 sm:mb-4" />
        <FilterBar active={activeFilters} onToggle={toggle} />

        {/* ZetaCrush */}
        <section className="mb-12 sm:mb-14">
          <SectionHeading title="ZetaCrush - Early stage B2B startup" />
          <RoleLabel label="Product Manager, Sep 2025 – Present" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
            {show(["Product", "Engineering"]) && (
              <StoryCard
                badge={{ label: "648 WAU week 1", color: "green" }}
                headline="Led 0→1 product development from idea to launched MVP"
                body="Owned the entire product process from scratch. Ran 50+ customer discovery interviews, wrote the PRD, defined scope, and shipped the MVP in 4 weeks. Hit 648 weekly active users in week one and 23% day-7 retention."
                techTags={["Python", "SQL", "Looker Studio"]}
                impactTags={["648 WAU week 1", "MVP in 4 weeks", "50+ discovery interviews"]}
                tracks={["Product", "Engineering"]}
              />
            )}
            {show(["Product", "Engineering", "Data"]) && (
              <StoryCard
                badge={{ label: "B2C → B2B pivot", color: "rose" }}
                headline="Drove product strategy pivot from B2C to B2B through user research synthesis"
                body="Synthesized findings by analyzing the feedbacks, metrics and KPIs for MVP, to identify willingness-to-pay signals and market fit gaps. Translated insights into a revised roadmap that shaped the company's direction from B2C to B2B."
                techTags={["SQL", "User Research"]}
                impactTags={["B2C → B2B pivot", "Company direction shift"]}
                tracks={["Product", "Engineering", "Data"]}
              />
            )}
            {show(["Product", "Engineering"]) && (
              <StoryCard
                badge={{ label: "+30% query accuracy", color: "blue" }}
                headline="Shipped a RAG-powered AI feature so users could ask questions in plain English"
                body="Defined requirements and shipped a RAG-powered LLM feature using open-weight models and multi-turn architecture so the AI retrieves the right context before answering. Query accuracy improved by 30%."
                techTags={["RAG", "LLMs", "Python", "Prompt Engineering"]}
                impactTags={["+30% query accuracy", "Multi-turn architecture"]}
                tracks={["Product", "Engineering"]}
              />
            )}
            {show(["Product", "Engineering", "Data"]) && (
              <StoryCard
                badge={{ label: "+23% day-7 retention", color: "green" }}
                headline="Improved retention and activation through A/B testing and funnel analysis"
                body="Analyzed event-level engagement data using SQL and Python to find where users dropped off, then designed and ran A/B tests across the onboarding flow. Day-7 retention up 23%, activation rate up 18%, time to first value shortened by 2 days."
                techTags={["SQL", "Python", "A/B Testing", "Event Analytics"]}
                impactTags={["+23% day-7 retention", "+18% activation rate", "-2 days time to value"]}
                tracks={["Product", "Engineering", "Data"]}
              />
            )}
            {show(["Product", "Engineering", "Data"]) && (
              <StoryCard
                badge={{ label: "60% less reporting time", color: "green" }}
                headline="Built dashboards to track growth and product health across the user lifecycle"
                body="Built Looker Studio dashboards tracking 15+ growth and KPI metrics covering acquisition, activation, engagement, and retention. Cut reporting time by 60% and gave the team a shared real-time view of product health."
                techTags={["Looker Studio", "KPI Design"]}
                impactTags={["60% less reporting time", "15+ metrics tracked"]}
                tracks={["Product", "Engineering", "Data"]}
              />
            )}
            {show(["Product", "Engineering"]) && (
              <StoryCard
                badge={{ label: "30+ users onboarded", color: "blue" }}
                headline="Developed Python integrations and internal tooling to unblock early users"
                body="Shipped Python integrations end-to-end for 30+ early users, resolving technical blockers and accelerating onboarding. Authored internal automation scripts to streamline data ingestion and user workflow pipelines."
                techTags={["Python", "Data Pipelines", "Automation"]}
                impactTags={["30+ users unblocked", "Faster onboarding"]}
                tracks={["Product", "Engineering"]}
              />
            )}
          </div>
        </section>

        {/* J.P. Morgan Chase */}
        <section className="mb-12 sm:mb-14">
          <SectionHeading title="J.P. Morgan Chase, Commercial banking" />

          <RoleLabel label="Associate, Software Engineer 2, Jan 2024 – Jul 2024" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 mb-6">
            {show(["Product"]) && (
              <StoryCard
                badge={{ label: "+15% sprint throughput", color: "green" }}
                headline="Acted as Product Owner to deliver 3 internal integration projects on time"
                body="Stepped into the Product Owner role for 3 internal integration projects, managing the Jira backlog, running Agile ceremonies, and keeping stakeholders aligned. Sprint throughput improved 15%, clarification cycles reduced 40% through detailed user stories in Confluence."
                techTags={["Jira", "Confluence", "Agile/Scrum"]}
                impactTags={["+15% sprint throughput", "-40% clarification cycles"]}
                tracks={["Product"]}
              />
            )}
            {show(["Engineering", "Product"]) && (
              <StoryCard
                badge={{ label: "+30% operational efficiency", color: "green" }}
                headline="Identified workflow bottlenecks and presented automation POCs to leadership"
                body="Mapped internal workflows to surface inefficiencies, designed automation hypotheses, built proof of concepts, and presented validated findings to leadership. Led to a 30% improvement in operational efficiency."
                techTags={["Process Mapping", "POC Development"]}
                impactTags={["+30% operational efficiency"]}
                tracks={["Engineering", "Product"]}
              />
            )}
            {show(["Engineering", "Product"]) && (
              <StoryCard
                badge={{ label: "40% faster deploys", color: "blue" }}
                headline="Led API server migration with zero downtime during data center modernization"
                body="Led end-to-end API server migration with automated testing and CI/CD via Jenkins. Reduced deployment time by 40% by migrating cloud infrastructure to AWS using Terraform."
                techTags={["AWS", "Terraform", "CI/CD", "Jenkins"]}
                impactTags={["Zero downtime migration", "-40% deploy time"]}
                tracks={["Engineering", "Product"]}
              />
            )}
            {show(["Engineering", "Product" , "Data"]) && (
              <StoryCard
                badge={{ label: "25% less data latency", color: "blue" }}
                headline="Built Kafka pipelines in Java Spring Boot to stream loan data across distributed systems"
                body="Built Kafka producers and consumers to stream loan data, improving data latency by 25%. Developed AWS Lambda microservices triggered via Amazon SQS across 3 service interfaces, increasing system modularity and fault tolerance."
                techTags={["Kafka", "Java Spring Boot", "AWS Lambda", "SQS"]}
                impactTags={["-25% data latency", "3 service interfaces"]}
                tracks={["Engineering", "Product", "Data"]}
              />
            )}
            {show(["Engineering", "Product", "Data"]) && (
              <StoryCard
                badge={{ label: "75% faster processing", color: "blue" }}
                headline="Built AWS data lake architecture migrating 1TB+ on-premise data to S3"
                body="Developed an AWS data lake architecture migrating 1TB+ of on-premise data to S3 with Glue ETL workflows, reducing data processing time by 75%."
                techTags={["AWS S3", "Glue ETL", "Data Lake"]}
                impactTags={["-75% processing time", "1TB+ migrated"]}
                tracks={["Engineering", "Product", "Data"]}
              />
            )}
          </div>

          <RoleLabel label="Software Engineer (Analyst), Jul 2022 – Jan 2024" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 mb-6">
            {show(["Engineering", "Data", "Product"]) && (
              <StoryCard
                badge={{ label: "50% less manual reporting", color: "green" }}
                headline="Automated reporting for 200+ stakeholders using SQL, Python, and Tableau"
                body="Built automated workflows using SQL, Python, and Tableau that cut manual reporting by 50% across 200+ stakeholders. Improved data quality from 67% to 94% by building SQL transformation layers to clean and standardize 500K+ records."
                techTags={["SQL", "Python", "Tableau", "dbt"]}
                impactTags={["-50% manual reporting", "67% → 94% data quality", "500K+ records"]}
                tracks={["Engineering", "Data", "Product"]}
              />
            )}
            {show(["Engineering", "Data"]) && (
              <StoryCard
                badge={{ label: "5 min → under 1 min", color: "blue" }}
                headline="Reduced BigQuery query execution time from 5 min to under 1 min"
                body="Optimized BigQuery queries using partitioning and clustering across 20M+ transactions, reducing execution time from 5 minutes to under 1 minute."
                techTags={["BigQuery", "SQL Optimization", "Partitioning", "Clustering"]}
                impactTags={["5 min → under 1 min", "20M+ transactions"]}
                tracks={["Engineering", "Data"]}
              />
            )}
            {show(["Engineering", "Data"]) && (
              <StoryCard
                badge={{ label: "+5% risk accuracy", color: "blue" }}
                headline="Ran deep-dive SQL analysis on commercial portfolios to surface fraud patterns"
                body="Analyzed large commercial banking datasets using SQL to identify valuation trends and fraud signals, improving risk assessment accuracy by 5%. Maintained dbt transformation pipelines ensuring consistency across 15+ downstream reports."
                techTags={["SQL", "dbt", "Data Modeling"]}
                impactTags={["+5% risk accuracy", "15+ downstream reports"]}
                tracks={["Engineering", "Data"]}
              />
            )}
            {show(["Engineering"]) && (
              <StoryCard
                badge={{ label: "100% successful deploys", color: "blue" }}
                headline="Built REST APIs and shipped Java Spring Boot features in Kubernetes environment"
                body="Built REST APIs secured with OAuth 2.0, IAM, and AWS Secrets Manager. Shipped Java Spring Boot features in a Kubernetes and Docker environment. Developed and executed automated UAT and regression test suites across 30+ features ensuring 100% successful production deployments."
                techTags={["REST APIs", "OAuth 2.0", "Java Spring Boot", "Kubernetes", "Docker"]}
                impactTags={["100% successful deploys", "30+ features tested"]}
                tracks={["Engineering"]}
              />
            )}
          </div>

          <RoleLabel label="Software Engineer Intern, Jan 2022 – Jun 2022" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
            {show(["Engineering"]) && (
              <StoryCard
                badge={{ label: "20% fewer critical defects", color: "green" }}
                headline="Built demo infrastructure on AWS using Terraform to simulate data pipelines"
                body="Built demo infrastructure using Terraform and AWS simulating data pipelines for internal demonstrations, reducing critical defects by 20%."
                techTags={["Terraform", "AWS", "Data Pipelines"]}
                impactTags={["-20% critical defects"]}
                tracks={["Engineering"]}
              />
            )}
          </div>
        </section>

        {/* KPMG */}
        <section className="mb-12 sm:mb-14">
          <SectionHeading title="KPMG" />
          <RoleLabel label="Summer Analyst Intern, Jun 2021 – Jul 2021" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
            {show(["Data", "Engineering", "Product"]) && (
              <StoryCard
                badge={{ label: "25% better reporting efficiency", color: "green" }}
                headline="Built SQL schemas and Power BI dashboards to track client KPIs in real time"
                body="Developed SQL data schemas and launched interactive Power BI dashboards enabling clients to track KPIs in real time, improving reporting efficiency by 25%."
                techTags={["SQL", "Power BI"]}
                impactTags={["+25% reporting efficiency", "Real-time KPI tracking"]}
                tracks={["Data", "Engineering", "Product"]}
              />
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
