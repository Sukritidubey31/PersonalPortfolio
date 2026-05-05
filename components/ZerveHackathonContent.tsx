"use client";

import { Body, StyledTable, NumberedList, MetricBadge } from "@/components/ProjectDetailHelpers";

function CollapsibleSection({
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
      className="portfolio-details mb-5 sm:mb-6 rounded-card overflow-hidden"
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

export function ZerveHackathonContent() {
  return (
    <div className="font-lato">
      <p
        className="text-[10px] uppercase tracking-widest font-playfair font-medium mb-3"
        style={{ color: "#D4948A" }}
      >
        Behavioral Analytics · Zerve AI x HackerEarth · 3rd place
      </p>
      <h2
        className="font-playfair mb-2 leading-tight text-xl sm:text-2xl"
        style={{ color: "#2A1A18" }}
      >
        The Machine That Knew Who Would Stay
      </h2>
      <p
        className="font-playfair text-sm mb-6"
        style={{ color: "#A4918D" }}
      >
        A data story about Zerve user retention
      </p>

      <div className="mb-5 sm:mb-6">
        <p
          className="text-[10px] sm:text-[11px] uppercase tracking-widest font-playfair font-medium mb-2"
          style={{ color: "#A4918D" }}
        >
          Executive summary
        </p>
        <Body>
          I analyzed 6,158 Zerve users across 409,300 raw events to understand what separates the 2.6%
          who become long term power users from the 97.4% who churn within their first 30 days. The
          retention gap is stark, predictable, and almost entirely explained by a single behavioral
          fork: whether a user engages the AI Agent or not. Power users fire an average of 134 agent
          actions versus just 12 for churned users, an 11.5 times differential that two independent
          machine learning models (Logistic Regression and Random Forest) both flag as a top 4
          retention predictor. The data tells a clear story: Zerve&apos;s highest value feature is
          being systematically underexposed to the users who need it most, and Day 0 is where the game
          is won or lost.
        </Body>
      </div>

      <div className="flex flex-wrap gap-2 mb-5">
        <MetricBadge label="409K+ events" color="blue" />
        <MetricBadge label="6,158 users" color="green" />
        <MetricBadge label="Agent usage: top retention signal" color="pink" />
      </div>

      <div className="flex flex-wrap gap-3 mb-8">
        <a
          href="https://sukritihackerearth.hub.zerve.cloud/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs sm:text-[13px] px-3.5 py-2 sm:px-4 font-lato"
          style={{ backgroundColor: "#D4948A", color: "#fff", borderRadius: "20px" }}
        >
          Dashboard ↗
        </a>
        <a
          href="https://www.zerve.ai/gallery/bbe2f901-05b6-48f5-b412-358cdf798057"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs sm:text-[13px] px-3.5 py-2 sm:px-4 font-lato"
          style={{ border: "0.5px solid #F2E2DA", color: "#9A8480", borderRadius: "20px" }}
        >
          Notebook ↗
        </a>
      </div>

      <CollapsibleSection title="1. User landscape" defaultOpen>
        <div className="space-y-4">
          <Body>
            Of the 6,158 unique users in our dataset, only 158 (2.6%) qualify as power users, defined
            as active for 30 or more days. The remaining 6,000 (97.4%) churn within that window. This
            is a brutally top heavy retention profile. The dataset spans 409,300 events across 26
            unique event types, split between web interactions (108,900 events, 27%) and backend
            executions (300,400 events, 73%), which shows the platform already skewing toward serious
            builders.
          </Body>
          <Body>
            The user base is clearly split in two. A small cohort of intensely engaged builders
            coexists with a large mass of explorers who sign up, poke around, and disappear. This is
            not unusual for developer tools, but the gap here is extreme. Power users generate 152.7
            manual actions on average versus 0.96 for churned users, a 159 times ratio that dwarfs
            even the agent usage gap. The platform is not failing to attract users; it is failing to
            convert them from spectators into builders.
          </Body>
          <Body>
            The 30 day power user threshold captures a natural breakpoint. Users who cross it have
            clearly embedded Zerve into their workflow. Users who do not have typically exhausted their
            free credits, hit friction, or simply never found their footing on the canvas.
          </Body>
        </div>
      </CollapsibleSection>

      <CollapsibleSection title="2. The retention gap">
        <div className="space-y-4">
          <Body>
            Retention rates by Day 0 engagement tell an unambiguous story: users who fire just a
            single event on signup day retain at 0.7%. That is barely above noise. Even heavier first
            day engagement only gets you to 8.4% retention in the 21 to 50 event bucket.
          </Body>
          <StyledTable
            headers={["Day 0 events", "Retention rate", "Users"]}
            rows={[
              ["1 event", "0.7%", "2,308"],
              ["2 to 3 events", "2.1%", "1,151"],
              ["4 to 5 events", "2.1%", "566"],
              ["6 to 10 events", "2.9%", "841"],
              ["11 to 20 events", "4.4%", "435"],
              ["21 to 50 events", "8.4%", "251"],
              ["50+ events", "6.9%", "594"],
            ]}
          />
          <Body>
            The single largest group, 2,308 users, nearly 37% of all users, fires exactly 1 event on
            Day 0 and retains at 0.7%. Almost 2,500 churned users also exceeded their credit limit on
            Day 0, and 2,552 more hit the credits below one threshold. That is a significant slice of
            the churned population burning through their allocation before they have even understood
            the product.
          </Body>
          <Body>
            Zero power users bought add on credits (0 out of 158), versus 1,267 churned users who did,
            which suggests that users who hit the credit wall and scramble to top up are still not
            converting to long term retention. The credit ceiling is a friction point that needs
            structural rethinking, not only a higher limit.
          </Body>
        </div>
      </CollapsibleSection>

      <CollapsibleSection title="3. Workflow patterns">
        <div className="space-y-4">
          <Body>
            The behavioral gap between power users and churned users is not subtle. Across every
            meaningful platform action, power users are dramatically more engaged.
          </Body>
          <StyledTable
            headers={["Behavior", "Power users", "Churned users", "Gap"]}
            rows={[
              ["Used AI Agent", "52.5%", "13.4%", "+39.1 pp"],
              ["Created Canvas", "35.4%", "5.0%", "+30.4 pp"],
              ["Ran a Block", "33.5%", "5.1%", "+28.4 pp"],
              ["Created Block", "30.4%", "3.2%", "+27.2 pp"],
              ["Created Edge", "21.5%", "0.9%", "+20.6 pp"],
              ["Tour Finished", "15.8%", "3.4%", "+12.4 pp"],
              ["Shared Canvas", "11.4%", "0.3%", "+11.1 pp"],
            ]}
          />
          <Body>
            The most striking inversion: skipping onboarding is more common among churned users
            (16.7%) than power users (10.1%), and completing onboarding is also more common among
            churned users (25.3% vs 17.1%). This tells us that the onboarding flow, whether skipped or
            completed, is not doing the job of creating builders. The 15.8% of power users who finished
            the product tour completed it at 15.8 tour actions on average, versus just 3.4 for
            churned users. Tour depth matters. Tour completion alone does not.
          </Body>
          <Body>
            Agent usage at session start (<code className="text-[11px]">used_agent_start</code>) is
            notably high even among churned users at 29.9%, compared to 39.2% for power users. This
            suggests many users try the agent but do not return to it: a discoverability problem, not
            a capability problem.
          </Body>
        </div>
      </CollapsibleSection>

      <CollapsibleSection title="4. Model evidence">
        <div className="space-y-4">
          <Body>
            Two independent classifiers were trained on 22 behavioral features to predict whether a
            user becomes a power user. The results converge on the same answer.
          </Body>
          <p
            className="text-[10px] sm:text-[11px] uppercase tracking-widest font-playfair font-medium"
            style={{ color: "#A4918D" }}
          >
            Logistic Regression (coefficient magnitude ranking)
          </p>
          <StyledTable
            headers={["Feature", "Coefficient", "Direction"]}
            rows={[
              ["Total Events", "+3.4289", "Toward power user"],
              ["Credits Used", "−1.7542", "Churn risk"],
              ["Unique Event Types", "+1.4457", "Toward power user"],
              ["Day 0 Events", "−1.4221", "Churn risk"],
              ["Total Sessions", "+0.7465", "Toward power user"],
              ["Skipped Onboarding", "−0.6576", "Churn risk"],
              ["Agent Actions", "+0.4528", "Toward power user (#8 of 22)"],
              ["Used Agent (flag)", "+0.3695", "Toward power user"],
            ]}
          />
          <Body>
            Random Forest confirmed agent actions at rank #4 of 22, with a Gini importance of 0.0730,
            the highest among all AI related features. The RF model achieved 98% overall accuracy on
            a held out test set (65% precision / 34% recall on the minority power user class), with the
            LR model reaching 88% accuracy (13% precision / 69% recall, better at catching power users
            through a wider net).
          </Body>
          <Body>
            The counterintuitive finding: Day 0 events carry a negative LR coefficient (−1.4221). More
            first day events associates with lower retention probability once other factors are
            controlled. High initial activity followed by credit exhaustion is a churn pattern, not a
            success pattern. The signal is not volume: it is depth over time.
          </Body>
          <Body>
            Before running any models, we asked Zerve&apos;s own agent to blindly rank 5 behaviors by
            retention predictiveness. It ranked sharing a canvas #1 and agent usage #4. The data
            disagreed sharply: agent usage was the #1 behavioral differentiator at 11.5 times between
            retained and churned users. The agent underestimated its own importance. That tension is
            not a flaw in the analysis, it is the finding. Intuition, even AI intuition, misses what
            only behavioral data can see.
          </Body>
        </div>
      </CollapsibleSection>

      <CollapsibleSection title="5. Product implications and recommendations">
        <div className="space-y-4">
          <Body>
            The agent usage gap is the largest actionable signal in the data. Power users average
            134.3 agent actions versus 11.7 for churned users, a gap bigger than any other feature in
            the model. Yet only 52.5% of power users and 13.4% of churned users ever trigger the agent
            at all. This is not a niche feature: it is the core differentiator, and most users never
            meaningfully engage it.
          </Body>
          <Body>
            Onboarding is directionally wrong. Completing the onboarding flow does not predict retention
            (17.1% power users vs 25.3% churned users both complete it). What predicts retention is
            building things: running blocks (33.5% vs 5.1%), creating canvases (35.4% vs 5.0%), creating
            edges (21.5% vs 0.9%). The current onboarding likely teaches the product rather than guiding
            users to their first genuine build.
          </Body>
          <Body>
            Credit exhaustion is a churn accelerant. 2,524 churned users exceeded their credit limit and
            2,552 hit credits below one on Day 0, yet zero power users triggered these events. The
            credit wall is hitting explorers before they have discovered value, and 1,267 churned
            users who bought add on credits still did not retain. Adding more credits without changing
            the activation journey will not move the needle.
          </Body>

          <p
            className="text-[10px] sm:text-[11px] uppercase tracking-widest font-playfair font-medium pt-2"
            style={{ color: "#A4918D" }}
          >
            What Zerve should do
          </p>
          <NumberedList
            items={[
              <>
                <strong style={{ color: "#2A1A18" }}>Make the AI Agent the first thing new users do.</strong>{" "}
                The data is unambiguous: agent usage is the #4 most important feature across two
                independent models, with an 11.5 times gap between retained and churned users. The
                agent should be introduced in the first 3 minutes of onboarding, not as optional
                discovery, but as the primary activation path. A single agent assisted block run
                within the first session should be the north star Day 0 metric. Track{" "}
                <code className="text-[11px]">used_agent_start</code> to{" "}
                <code className="text-[11px]">agent_actions</code> ≥ 10 as the core activation funnel.
              </>,
              <>
                <strong style={{ color: "#2A1A18" }}>
                  Replace onboarding completion with first canvas built as the activation metric.
                </strong>{" "}
                Currently, completing onboarding is actually negatively correlated with becoming a
                power user (churned users complete it at a higher rate). Power users do not stay
                because they finished a tutorial: they stay because they built something. Redesign
                onboarding around a guided ship your first canvas in 10 minutes experience. Target: at
                least one <code className="text-[11px]">created_canvas</code> plus at least one{" "}
                <code className="text-[11px]">ran_block</code> event within the first session.
              </>,
              <>
                <strong style={{ color: "#2A1A18" }}>
                  Redesign credit limits as a progression gate, not a hard wall.
                </strong>{" "}
                With 2,524 churned users hitting credits exceeded on Day 0 and 1,267 buying add on
                credits without retaining, the current credit model creates friction at exactly the
                wrong moment. Consider a builder credit system that grants additional compute when a
                user completes meaningful milestones (first canvas, first edge, first agent run)
                rather than on a flat time or quantity basis. This rewards activation behavior and
                reduces the punishing churn spike at the credit ceiling.
              </>,
            ]}
          />

          <div
            className="mt-6 rounded-card px-4 py-4"
            style={{
              borderLeft: "3px solid #D4948A",
              backgroundColor: "#FAF3EF",
              border: "0.5px solid #F2E2DA",
            }}
          >
            <p
              className="font-playfair font-medium mb-2"
              style={{ fontSize: "12px", color: "#2A1A18" }}
            >
              Closing insight
            </p>
            <Body>
              Only 15.7% of users who reach 100+ meaningful events become power users, but that still
              represents 548 users achieving a 6 times lift over the 2.6% baseline rate. The platform
              works for users who get deep enough to find it. The problem is not the product. The
              problem is the path. Every percentage point improvement in getting new users to their
              first agent assisted canvas run translates directly into power user conversion. The
              retention curve is not flat: it bends sharply in Zerve&apos;s favor the moment a user
              genuinely builds something. The only question is whether the product gets out of the way
              fast enough to let that happen.
            </Body>
            <p className="font-playfair font-medium mt-3" style={{ fontSize: "13px", color: "#2A1A18" }}>
              Zerve does not have a product problem. It has a path problem.
            </p>
          </div>
        </div>
      </CollapsibleSection>

      <div className="mb-2">
        <p
          className="text-[10px] sm:text-[11px] uppercase tracking-widest font-playfair font-medium mb-2"
          style={{ color: "#A4918D" }}
        >
          Stack
        </p>
        <p className="font-lato text-[13px] sm:text-sm" style={{ color: "#9A8480" }}>
          Python · Streamlit · sklearn · Behavioral analytics · Zerve canvas outputs
        </p>
      </div>

      <p className="font-lato text-[11px] leading-relaxed mt-4" style={{ color: "#A4918D" }}>
        Analysis based on 409,300 events across 6,158 users. Power user defined as active for at least
        30 days. Models: Logistic Regression (balanced class weights, 80/20 split) and Random Forest
        (100 estimators, balanced class weights). Statistics derived from canvas block outputs.
      </p>
    </div>
  );
}
