"use client";

import {
  SectionHeader,
  Body,
  NumberedList,
  StyledTable,
  MetricBadge,
} from "@/components/ProjectDetailHelpers";

function CollapsiblePart({
  title,
  defaultOpen,
  children,
}: {
  title: string;
  defaultOpen?: boolean;
  children: React.ReactNode;
}) {
  return (
    <details
      open={defaultOpen}
      className="churnlens-details mb-5 sm:mb-6 rounded-card overflow-hidden"
      style={{ border: "0.5px solid #F2E2DA", backgroundColor: "#FEFCFB" }}
    >
      <summary
        className="px-4 py-3 sm:px-5 sm:py-3.5 font-playfair text-base sm:text-lg cursor-pointer"
        style={{ color: "#2A1A18", backgroundColor: "#FAF3EF" }}
      >
        {title}
      </summary>
      <div
        className="px-4 py-5 sm:px-5 border-t"
        style={{ borderColor: "#F2E2DA", backgroundColor: "#FEFCFB" }}
      >
        {children}
      </div>
    </details>
  );
}

export function ChurnLensContent({ showBackLink = false }: { showBackLink?: boolean }) {
  return (
    <>
      {/* Hero */}
      <div className="mb-10">
        <p
          className="text-[10px] uppercase tracking-widest font-playfair font-medium mb-3"
          style={{ color: "#D4948A" }}
        >
          Machine Learning · Product Strategy · Customer Retention
        </p>
        <h1
          className="font-playfair mb-4 leading-tight"
          style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.2rem)", color: "#2A1A18" }}
        >
          ChurnLens
        </h1>
        <Body>
          In undergrad I built a data analytics project on customer churn:
          models, charts, and insight ready views for stakeholders. 
          During my Masters at Cornell I revisited the same problem in a product sense:
          users, pain, what to ship first, and how to measure success. 
          Part 1 below is that PM framing. 
          Part 2 is what I built: ChurnLens, the full pipeline from BigQuery and XGBoost through Tableau and a Claude query layer on real scale data, including finding and fixing data leakage.
        </Body>

        <div
          className="mt-5 rounded-card px-4 py-3"
          style={{ border: "0.5px solid #F2E2DA", backgroundColor: "#FAF3EF" }}
        >
          <p
            className="font-playfair font-medium mb-1"
            style={{ fontSize: "12px", color: "#2A1A18" }}
          >
            Who it&apos;s for
          </p>
          <p className="font-lato" style={{ fontSize: "12px", color: "#9A8480" }}>
            A retention or growth PM at a mid size e commerce company who needs
            to know which customers to intervene with this week, not next
            quarter.
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mt-5">
          <MetricBadge label="$5.82M revenue at risk surfaced" color="green" />
          <MetricBadge label="80,000+ customers scored" color="blue" />
          <MetricBadge label="Data leakage detected and resolved" color="green" />
          <MetricBadge label="AUC corrected from 1.0 to honest baseline" color="blue" />
        </div>

        <div className="flex flex-wrap gap-3 mt-4">
          {[
            { label: "Live ↗", href: "https://churnlensapp.vercel.app", primary: true },
            {
              label: "Tableau ↗",
              href: "https://public.tableau.com/views/ChurnLens/ChurnLens",
              primary: false,
            },
            {
              label: "GitHub ↗",
              href: "https://github.com/Sukritidubey31/ChurnAnalysis",
              primary: false,
            },
          ].map((l) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] font-lato px-3 py-1.5"
              style={{
                backgroundColor: l.primary ? "#D4948A" : "#FAF3EF",
                color: l.primary ? "#fff" : "#9A8480",
                border: `0.5px solid ${l.primary ? "#D4948A" : "#F2E2DA"}`,
                borderRadius: "20px",
              }}
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>

      <CollapsiblePart
        title="Part 1: Churn analysis and PM case study"
        defaultOpen={false}
      >
      <SectionHeader number={1} title="Identifying Users and Use Cases" />
      <Body>
        Primary users for this will be businesses or organizations. Specific
        users within the company and their use cases:
      </Body>
      <div className="mt-4 space-y-3">
        {[
          {
            role: "Product Managers",
            use: "Identify at-risk customers, optimize product features, and make data-driven decisions.",
          },
          {
            role: "Sales Team",
            use: "Prioritize outreach efforts and focus on high-risk customers.",
          },
          {
            role: "Marketing Team",
            use: "Design targeted campaigns, segment customers based on churn risk, and create personalized offers.",
          },
          {
            role: "Leadership",
            use: "Gain insights into overall customer health, track retention metrics, and make strategic decisions.",
          },
        ].map((u) => (
          <div
            key={u.role}
            className="rounded-card px-4 py-3"
            style={{ border: "0.5px solid #F2E2DA", backgroundColor: "#FEFCFB" }}
          >
            <p
              className="font-playfair font-medium mb-0.5"
              style={{ fontSize: "12px", color: "#2A1A18" }}
            >
              {u.role}
            </p>
            <p className="font-lato" style={{ fontSize: "12px", color: "#9A8480" }}>
              {u.use}
            </p>
          </div>
        ))}
      </div>

      <SectionHeader number={2} title="Identifying Pain Points" />
      <NumberedList
        items={[
          "Challenge in aligning product development with customer retention goals.",
          "Inefficient resource allocation, spending time on customers that are unlikely to convert or renew.",
          "Lack of a deep understanding of the underlying reasons for churn.",
          "Frequent churn reduces the overall CLV, hindering long term profitability and reducing the return on investments made in customer acquisition.",
          "Handling churn reactively leads to higher costs in customer service, support, and acquisition efforts, as the company is constantly trying to replace lost customers instead of retaining them.",
        ]}
      />

      <div className="mt-6">
        <p
          className="text-[9px] uppercase tracking-widest font-playfair font-medium mb-3"
          style={{ color: "#A4918D" }}
        >
          Features → Pain Points
        </p>
        <StyledTable
          headers={["Feature", "Pain Points Addressed"]}
          rows={[
            [
              "Support Ticket Volume and Resolution Time",
              "Handling Churn Reactively Leads to Higher Costs in Customer Service, Support, and Acquisition Efforts",
            ],
            [
              "Customer Lifetime Value (CLV) Forecasting",
              "Frequent Churn Reduces the Overall CLV Hindering Long term Profitability",
            ],
            [
              "Feature Usage Patterns: identifies which features are most and least used by customers to guide product development and improvements.",
              "Challenge in Aligning Product Development with Customer Retention Goals; Lack of a Deep Understanding of the Underlying Reasons for Churn",
            ],
            [
              "Sentiment Analysis",
              "Lack of a Deep Understanding of the Underlying Reasons for Churn",
            ],
            [
              "Customer Engagement History: tracks frequency and depth of customer engagement to identify those in need of attention.",
              "Inefficient Resource Allocation Spending Time on Customers Unlikely to Convert or Renew; Handling Churn Reactively",
            ],
            [
              "Churn Risk Score: assigns a probability of churn to each customer",
              "Inefficient Resource Allocation Spending Time on Customers Unlikely to Convert; Handling Churn Reactively",
            ],
          ]}
        />
      </div>

      <SectionHeader number={3} title="Prioritization" />
      <Body>
        To prioritize among the above features, I considered four factors:
      </Body>
      <div className="mt-4">
        <NumberedList
          items={[
            <span key="1">
              <strong style={{ color: "#2A1A18" }}>Ease of Implementation and Scalability</strong>
              . Support ticket volume and resolution time and feature usage pattern might be easier to implement compared to features like sentiment analysis which require NLP.
            </span>,
            <span key="2">
              <strong style={{ color: "#2A1A18" }}>Business Impact</strong>
              . Features like churn risk score and CLV forecasting are high impact because they allow companies to focus on high value customers.
            </span>,
            <span key="3">
              <strong style={{ color: "#2A1A18" }}>Support in Decision Making</strong>
              . Churn risk score and customer engagement history are valuable because they guide retention efforts by highlighting at risk customers.
            </span>,
            <span key="4">
              <strong style={{ color: "#2A1A18" }}>Customer Experience Enhancement</strong>
              . Features like sentiment analysis and customer engagement history can enhance the customer experience most since they allow the organization to understand customers better.
            </span>,
          ]}
        />
      </div>
      <div
        className="mt-5 rounded-card px-4 py-3"
        style={{ border: "0.5px solid #EDD4CC", backgroundColor: "#FAF0EC" }}
      >
        <p
          className="font-playfair font-medium mb-1"
          style={{ fontSize: "12px", color: "#A06058" }}
        >
          If I had to prioritize right now
        </p>
        <p className="font-lato" style={{ fontSize: "12px", color: "#9A8480" }}>
          Business impact should be the first priority since the purpose of
          churn analysis is to help businesses understand churning and make
          necessary changes. This should be followed by support in
          decision making, as no meaningful changes can be made if the feature
          does not provide actionable insights.
        </p>
      </div>
      <div className="flex flex-wrap gap-2 mt-4">
        {["Churn Risk Score", "CLV Forecasting", "Customer Engagement History"].map(
          (f, i) => (
            <div key={f} className="flex items-center gap-2">
              <span
                className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-medium font-lato shrink-0"
                style={{ backgroundColor: "#FAF0EC", color: "#D4948A" }}
              >
                {i + 1}
              </span>
              <span
                className="text-[11px] font-lato px-2.5 py-1 rounded-pill"
                style={{
                  backgroundColor: "#EDE9F8",
                  color: "#5C519A",
                  border: "0.5px solid #CEC8EA",
                }}
              >
                {f}
              </span>
            </div>
          )
        )}
      </div>

      <SectionHeader number={4} title="Implementation" />

      {[
        {
          title: "Churn Risk Score",
          steps: [
            "Collect historical customer data including engagement metrics, transaction history, support interactions, and usage frequency.",
            "Use machine learning models to assign a churn risk score based on past churn patterns.",
            "Integrate the score into a customer dashboard for real time monitoring.",
            "Set risk thresholds and create workflows for intervention.",
          ],
        },
        {
          title: "CLV Forecasting",
          steps: [
            "Analyze historical purchase data, subscription lengths, average order value, and engagement levels to establish a baseline for CLV.",
            "Apply predictive models such as time-series forecasting or Monte Carlo simulations to estimate future revenue from each customer.",
            "Integrate CLV insights into business intelligence tools to guide retention efforts, pricing strategies, and marketing campaigns.",
            "Ensure that high-value customers receive personalized retention initiatives.",
          ],
        },
        {
          title: "Customer Engagement History",
          steps: [
            "Aggregate data on logins, feature usage, session duration, and customer support interactions to create a comprehensive view of engagement levels.",
            "Develop an engagement scoring model that categorizes customers as highly engaged, moderately engaged, or at risk of churning.",
            "Integrate engagement insights into retention workflows and product analytics dashboards.",
            "Enable personalized outreach efforts and product experience optimizations based on engagement patterns.",
          ],
        },
      ].map((feature) => (
        <div key={feature.title} className="mb-6">
          <p
            className="font-playfair mb-3"
            style={{ fontSize: "15px", color: "#2A1A18" }}
          >
            {feature.title}
          </p>
          <NumberedList items={feature.steps} />
        </div>
      ))}

      <SectionHeader number={5} title="Monitoring the Success" />
      <StyledTable
        headers={["Feature", "Monitor the Model", "Monitor Success"]}
        rows={[
          [
            "Churn Risk Score",
            "Accuracy by comparing predicted churn vs. actual churn.",
            "Churn reduction rates after implementing interventions; conversion rates of retention efforts.",
          ],
          [
            "CLV Forecasting",
            "Accuracy by comparing actual vs. predicted CLV.",
            "CLV trends over time to see if customer value increases with retention efforts; ROI of retention strategies by linking CLV improvements to targeted retention.",
          ],
          [
            "Customer Engagement History",
            "n/a",
            "Changes in engagement scores; conversion rates from at-risk to actively engaged users.",
          ],
        ]}
      />

      </CollapsiblePart>

      <CollapsiblePart title="Part 2: What I built as ChurnLens" defaultOpen={false}>
      <Body>
        With the PM framework from Part 1 in mind, I ran the full pipeline on
        real customer data. Here is what surfaced when the model actually ran.
      </Body>

      <div className="mt-5 space-y-4">
        {[
          {
            label: "Finding 1: The activation problem",
            text: "Most churned customers never activated core product features. Users who hadn't engaged with 3+ features by day 14 showed a 74% churn rate. Early activation was a stronger signal than any purchase behavior metric.",
          },
          {
            label: "Finding 2: Purchase frequency beats order value",
            text: "A customer who purchased 6× per year at $50 was 3× less likely to churn than one who purchased 2× per year at $150. Frequency signals commitment; high one-time spend does not.",
          },
          {
            label: "Finding 3: Channel quality drove churn variance",
            text: "Paid social customers churned at 2.4× the rate of organic and referral customers, even when controlling for purchase behavior. Acquisition channel is a churn predictor, not just a growth metric.",
          },
        ].map((finding) => (
          <div
            key={finding.label}
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
              {finding.label}
            </p>
            <p className="font-lato" style={{ fontSize: "12px", color: "#9A8480" }}>
              {finding.text}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <p
          className="text-[9px] uppercase tracking-widest font-playfair font-medium mb-4"
          style={{ color: "#A4918D" }}
        >
          Pipeline
        </p>
        <div className="space-y-4">
          {[
            {
              step: "01",
              title: "BigQuery",
              desc: "Data ingestion and SQL feature engineering across 80,000+ customer records. Built recency, frequency, and support ticket features.",
            },
            {
              step: "02",
              title: "Python + XGBoost",
              desc: "Trained gradient boosting classifier on engineered features. AUC initially came back at 1.0, which meant something was wrong.",
            },
            {
              step: "03",
              title: "Data leakage catch",
              desc: "A feature derived from the churn label had slipped into training. Caught it, removed it, retrained. The corrected AUC reflected a real, honest model.",
            },
            {
              step: "04",
              title: "Supabase",
              desc: "Stored scored customers with risk tiers (high / medium / low) and segment tags for downstream filtering.",
            },
            {
              step: "05",
              title: "Tableau Public",
              desc: "Visual dashboard showing churn probability by cohort, channel, and region. Built for a retention PM to hand to leadership.",
            },
            {
              step: "06",
              title: "Next.js + Claude API",
              desc: 'Plain-English query interface on top of the scored data. Ask "which customers are most at risk this month?" and get a structured, readable answer.',
            },
          ].map((s) => (
            <div key={s.step} className="flex gap-4">
              <span
                className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-medium font-lato"
                style={{ backgroundColor: "#FAF0EC", color: "#D4948A" }}
              >
                {s.step}
              </span>
              <div>
                <p
                  className="font-lato font-medium"
                  style={{ fontSize: "12px", color: "#2A1A18" }}
                >
                  {s.title}
                </p>
                <p className="font-lato" style={{ fontSize: "12px", color: "#9A8480" }}>
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8">
        <p
          className="text-[9px] uppercase tracking-widest font-playfair font-medium mb-3"
          style={{ color: "#A4918D" }}
        >
          Tech Stack
        </p>
        <StyledTable
          headers={["Tool", "Role", "Output"]}
          rows={[
            ["BigQuery", "Cloud SQL layer", "Feature engineering at scale"],
            ["Python + XGBoost", "ML training", "Churn probability scores"],
            ["Supabase", "Database", "Scored customers + risk segments"],
            ["Tableau Public", "Visualization", "Dashboard for stakeholder consumption"],
            ["Next.js + Claude API", "Interface", "Plain-English query layer"],
          ]}
        />
      </div>

      </CollapsiblePart>

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
