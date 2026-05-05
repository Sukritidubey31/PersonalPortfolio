import Link from 'next/link';

export const metadata = {
  title: 'I Treated My Job Search Like a Product to Build | Sukriti Dubey',
  description: 'An honest account of building tools, automating workflows, and out-thinking a difficult job market.',
};

export default function BlogJobSearch() {
  return (
    <>
      {/* Nav */}
      <nav style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 1.5rem', height: '50px', background: '#fff', borderBottom: '0.5px solid #F2E2DA', position: 'sticky', top: 0, zIndex: 10 }}>
        <Link href="/" style={{ fontFamily: "'Playfair Display', serif", fontSize: '17px', color: '#2A1A18', textDecoration: 'none' }}>Sukriti Dubey</Link>
        <Link href="/blogs" style={{ fontSize: '11px', color: '#D4948A', border: '0.5px solid #EDD4CC', padding: '4px 12px', borderRadius: '16px', background: '#FAF0EC', textDecoration: 'none' }}>← Back</Link>
      </nav>

      <article style={{
        maxWidth: '720px',
        margin: '0 auto',
        padding: '2rem 1.5rem 4rem',
        fontFamily: "'Lato', sans-serif",
        color: '#2A1A18',
        background: '#FEFCFB',
      }}>

        {/* Header */}
        <div style={{ marginBottom: '2.5rem', borderBottom: '0.5px solid #F2E2DA', paddingBottom: '2rem' }}>
          <div style={{ fontSize: '11px', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#D4948A', marginBottom: '0.75rem' }}>
            Job Search · Reflections
          </div>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: '36px', lineHeight: '1.15', color: '#2A1A18', marginBottom: '1rem', fontWeight: 400 }}>
            I Treated My Job Search Like a Product to Build
          </h1>
          <p style={{ fontFamily: "'Playfair Display', serif", fontSize: '18px', color: '#9A8480', fontStyle: 'italic', lineHeight: '1.5', marginBottom: '1.25rem' }}>
            And then I rebuilt the product four times.
          </p>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            {['Job Search', 'AI Tools', 'Building', 'Automation', 'Reflections'].map(tag => (
              <span key={tag} style={{ fontSize: '11px', padding: '3px 10px', borderRadius: '8px', background: '#FAF3EF', color: '#A06058', border: '0.5px solid #EDD4CC' }}>{tag}</span>
            ))}
          </div>
        </div>

        {/* Intro */}
        <p style={bodyStyle}>
          I graduated into a difficult market. Not just difficult in the "hiring is slow" way. I was an early career person trying to move from software engineering into a product role. Two years of prior experience. Competing with people who had been PMs for five years. The conditions were already stacked a certain way and I knew it.
        </p>
        <p style={{ ...bodyStyle, marginBottom: '2.5rem' }}>
          So I made a decision pretty early on: I was not going to out-apply everyone. I was going to out-think it. What happened next was honestly one of the most chaotic, interesting, frustrating, and skill-building periods of my life. And I want to write it down.
        </p>

        {/* Section 1 */}
        <Section title="First: The Problem I Was Actually Solving" emoji="🎯" />
        <p style={bodyStyle}>
          Job applications are time consuming. That part is obvious. But the real problem is not just volume. It is that everything requires the same amount of effort even when it should not.
        </p>
        <p style={bodyStyle}>
          Writing a cover letter. Researching a company. Finding the right person to reach out to. Following up. Keeping track of who you talked to. Every single task eats your day and most of it is just process, not thinking.
        </p>
        <CalloutBox>
          And then AI came along and made it faster for everyone. Which sounds great. Until you realize that if you are using Claude to write your cover letter and the next 500 applicants are also using Claude to write their cover letter, you are not standing out. You are just doing the same thing faster.
        </CalloutBox>
        <p style={{ ...bodyStyle, marginBottom: '2.5rem' }}>
          That is the problem I kept coming back to. Not just "how do I do this faster" but "how do I do something that other people are not doing."
        </p>

        {/* Section 2 */}
        <Section title="The First Thing I Built: A Resume Customizer on Lovable" emoji="🛠️" />
        <BuildCard
          name="Resume Customizer"
          tool="Lovable"
          status="Scrapped"
          statusColor="#FAF3EF"
          statusTextColor="#A06058"
          description="Upload a resume, paste a job description, get customized bullet points back."
          lesson="The bottleneck was not the formatting. It was the research and the personalization."
        />
        <p style={{ ...bodyStyle, marginBottom: '2.5rem' }}>
          What I learned from building it was more valuable than the app itself. I learned how to think about what the actual bottleneck is before I start building. And that became the seed of everything that came after.
        </p>

        {/* Section 3 */}
        <Section title="Then I Found Clay" emoji="🧪" />
        <p style={bodyStyle}>
          I started using Clay on the free plan. You can only export 100 people maximum so I had to be very strategic about who I was pulling and what filters I was using. This alone taught me something real: when you have limited resources you get very good at defining your criteria precisely.
        </p>
        <p style={{ ...bodyStyle, marginBottom: '2.5rem' }}>
          I also used Clay to generate personalized LinkedIn messages. And then I stopped, because I noticed something. Everyone was doing the same thing. The messages felt generated. Recruiters and founders could tell. The personalization was surface level because it was all coming from the same type of prompt. That was a pattern I kept running into. Every time AI made something easier for me, it also made it easier for everyone else. The tool was not the advantage. How I used it was.
        </p>

        {/* Section 4 */}
        <Section title="The App That Taught Me the Most" emoji="💡" />
        <BuildCard
          name="Research-First Cover Letter Tool"
          tool="Lovable + Anthropic API"
          status="Actually proud of this one"
          statusColor="#EDF5E8"
          statusTextColor="#3D6438"
          description="Upload resume and JD. Research the company. Save context you care about. Generate a cover letter that actually includes what you found interesting."
          lesson="Less like AI writing for you. More like AI helping you write better."
        />
        <div style={{ background: '#FAF3EF', borderRadius: '12px', padding: '1.25rem 1.5rem', marginBottom: '1.5rem', border: '0.5px solid #EDD4CC' }}>
          <p style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#D4948A', marginBottom: '8px', fontWeight: 500 }}>How the flow worked</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {[
              'Upload resume and job description',
              'Research tab: find what actually interests you about the company',
              "Save specific points — culture, AI products they're building, mission",
              "Filter research down to what's relevant to your profile",
              'Add your own notes before generating',
              'All context → Claude → cover letter that sounds like you',
            ].map((step, i) => (
              <div key={i} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <span style={{ width: '22px', height: '22px', borderRadius: '50%', background: '#D4948A', color: '#fff', fontSize: '11px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontWeight: 500 }}>{i + 1}</span>
                <span style={{ fontSize: '13px', color: '#6B5A58', lineHeight: '1.6', paddingTop: '2px' }}>{step}</span>
              </div>
            ))}
          </div>
        </div>
        <p style={{ ...bodyStyle, marginBottom: '2.5rem' }}>
          Did it save me time? Honestly, not that much at first. But it taught me how to think about user flows. How to use AI not as a replacement but as a layer. How to build something that respected the human judgment that should still be in the process. That ended up mattering a lot when I was talking to hiring managers about how I think about product.
        </p>

        {/* Section 5 */}
        <Section title="The Automation Era" emoji="⚙️" />
        <p style={bodyStyle}>At some point I went deep on automation and it got kind of wild.</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '10px', marginBottom: '1.5rem' }}>
          {[
            { tool: 'n8n', desc: 'Scraped job boards, pulled listings into Google Sheets, scored resume against JDs, flagged high-scoring ones by morning' },
            { tool: 'OpenClaw', desc: 'Searched Google, Indeed, and other boards simultaneously. Sent top listings every morning on WhatsApp. Folder per job, cover letter pre-drafted' },
            { tool: 'Clay + Claude', desc: 'Connected as a connector into the workflow for personalization at scale' },
          ].map(({ tool, desc }) => (
            <div key={tool} style={{ background: '#fff', border: '0.5px solid #F2E2DA', borderRadius: '10px', padding: '12px 14px' }}>
              <div style={{ fontSize: '12px', fontWeight: 600, color: '#2A1A18', marginBottom: '4px' }}>{tool}</div>
              <div style={{ fontSize: '12px', color: '#9A8480', lineHeight: '1.6' }}>{desc}</div>
            </div>
          ))}
        </div>
        <CalloutBox>
          And then I had a moment where I looked at all of this and thought: wait. I am spending more time building the pipeline than using it. The automation becomes the project and the actual goal gets a little blurry.
        </CalloutBox>
        <p style={{ ...bodyStyle, marginBottom: '2.5rem' }}>
          What it did teach me though: how to think in systems. How to chain tools together. How to build something that runs without you watching it. Those are real skills and I use them constantly now.
        </p>

        {/* Section 6 */}
        <Section title="The Cold Email Problem" emoji="📧" />
        <p style={bodyStyle}>
          Sending cold emails is also a time consuming task. When you are emailing three people at the same company for the same role the emails are almost identical. So I built a Google Sheet with columns for name, company, title, subject line, and body. The body column used Excel formula syntax to pull the person's name and company into a template dynamically.
        </p>
        <div style={{ background: '#FAF3EF', borderRadius: '10px', padding: '1rem 1.25rem', marginBottom: '1.5rem', border: '0.5px solid #EDD4CC' }}>
          <p style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#D4948A', marginBottom: '10px', fontWeight: 500 }}>The setup</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            {[
              'Google Sheet: name, company, title, subject, body columns',
              'Body column uses formula syntax to pull name + company into template dynamically',
              'Different sheets for different role types',
              'n8n grabs resume from Drive + pulls sheet + batch sends',
              'What took an hour now takes a few minutes',
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#D4948A', flexShrink: 0, marginTop: '6px' }} />
                <span style={{ fontSize: '13px', color: '#6B5A58', lineHeight: '1.6' }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
        <p style={{ ...bodyStyle, marginBottom: '2.5rem' }}>
          I also tried Phantombuster for LinkedIn connection requests. Fourteen day free trial. It was reaching people I never would have found manually and the acceptance rate was around 10 to 20 percent. The subscription is expensive though. If you are doing very targeted outreach it can be worth it.
        </p>

        {/* Section 7 */}
        <Section title="The Personalized Website Move" emoji="🌐" />
        <p style={bodyStyle}>This one was a little unhinged but I loved it.</p>
        <p style={bodyStyle}>
          When there was a role I really cared about, especially at a startup, I would build a quick personal website using Lovable specifically for that role and sometimes for that specific person I was reaching out to.
        </p>
        <div style={{ background: '#FAF3EF', borderRadius: '10px', padding: '1rem 1.25rem', marginBottom: '2.5rem', border: '0.5px solid #EDD4CC' }}>
          <p style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#D4948A', marginBottom: '10px', fontWeight: 500 }}>The process</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            {[
              'Give Claude my resume and the job description',
              'Claude generates a Lovable prompt',
              'Lovable builds the site using my saved design screenshot as a style reference',
              'Always came out in the same visual style',
              'Not just "here is my resume." Here is a thing I made for you specifically.',
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#D4948A', flexShrink: 0, marginTop: '6px' }} />
                <span style={{ fontSize: '13px', color: '#6B5A58', lineHeight: '1.6' }}>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Section 8 — Learnings */}
        <Section title="What the Whole Thing Actually Taught Me" emoji="📌" />
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '2.5rem' }}>
          {[
            {
              title: 'Token awareness is a real skill',
              body: 'When you are running automations and pipelines all day you hit your API limits faster than you expect. Being mindful about what goes into a prompt makes the output better anyway.',
            },
            {
              title: 'Personalization beats volume every time',
              body: 'The cold emails that got responses were not the ones from the batch sends. Two genuinely personal emails a day beat twenty templated ones.',
            },
            {
              title: 'Building things is a better portfolio than describing things',
              body: 'Every project I built during the search became something I could talk about — not in a "here is a thing I did" way but in a "here is how I think" way.',
            },
            {
              title: 'The tool is never the advantage',
              body: 'Claude, Clay, n8n, Lovable, Phantombuster — all available to everyone. The advantage is knowing when to use which one, how to combine them, and when to stop automating and do something human instead.',
            },
            {
              title: 'Speed is a learnable skill',
              body: 'I built things in a day that I would have said would take me a week six months ago. Not because I got smarter but because I got better at scoping, prompting, and knowing what done looks like.',
            },
          ].map(({ title, body }, i) => (
            <div key={i} style={{ display: 'flex', gap: '14px', background: '#fff', border: '0.5px solid #F2E2DA', borderRadius: '12px', padding: '1rem 1.25rem' }}>
              <span style={{ width: '28px', height: '28px', borderRadius: '50%', background: '#FAF3EF', border: '0.5px solid #EDD4CC', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', color: '#D4948A', fontWeight: 600, flexShrink: 0 }}>{i + 1}</span>
              <div>
                <p style={{ fontSize: '14px', fontWeight: 600, color: '#2A1A18', marginBottom: '4px' }}>{title}</p>
                <p style={{ fontSize: '13px', color: '#9A8480', lineHeight: '1.65', margin: 0 }}>{body}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Honest part */}
        <Section title="The Honest Part" emoji="💬" />
        <p style={bodyStyle}>
          Not everything worked. Some of the automation was honestly busywork dressed up as productivity. There were weeks where I was building workflows instead of having conversations, and conversations are what actually move a job search forward.
        </p>
        <p style={bodyStyle}>The search took longer than I wanted. It was hard in ways that were personal and not just logistical.</p>
        <p style={{ ...bodyStyle, marginBottom: '3rem' }}>
          But I came out of it with skills I genuinely did not have before. Technical skills, yes. But more than that: the ability to look at a messy, overwhelming process and ask "what is actually broken here" and then go build something for it. That, I think, is the thing worth writing down.
        </p>

        {/* Author footer */}
        <div style={{ borderTop: '0.5px solid #F2E2DA', paddingTop: '1.5rem', display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#FAF3EF', border: '0.5px solid #EDD4CC', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '13px', color: '#D4948A', fontWeight: 600, flexShrink: 0 }}>SD</div>
          <div>
            <p style={{ fontSize: '13px', fontWeight: 600, color: '#2A1A18', margin: 0 }}>Sukriti Dubey</p>
            <p style={{ fontSize: '12px', color: '#9A8480', margin: 0 }}>Cornell MEng · Software Engineering, Product, and Data · Bay Area</p>
          </div>
        </div>

      </article>
    </>
  );
}

const bodyStyle: React.CSSProperties = {
  fontSize: '15px',
  lineHeight: '1.8',
  color: '#4A3A38',
  marginBottom: '1.25rem',
};

function Section({ title, emoji }: { title: string; emoji: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', margin: '2.5rem 0 1rem' }}>
      <span style={{ fontSize: '16px' }}>{emoji}</span>
      <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '22px', fontWeight: 400, color: '#2A1A18', margin: 0 }}>{title}</h2>
    </div>
  );
}

function CalloutBox({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ borderLeft: '3px solid #D4948A', background: '#FAF3EF', borderRadius: '0 10px 10px 0', padding: '1rem 1.25rem', margin: '1.25rem 0', fontSize: '15px', lineHeight: '1.75', color: '#6B5A58', fontStyle: 'italic' }}>
      {children}
    </div>
  );
}

function BuildCard({ name, tool, status, statusColor, statusTextColor, description, lesson }: {
  name: string; tool: string; status: string; statusColor: string; statusTextColor: string; description: string; lesson: string;
}) {
  return (
    <div style={{ background: '#fff', border: '0.5px solid #F2E2DA', borderRadius: '12px', padding: '1.1rem 1.25rem', marginBottom: '1.25rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
        <div>
          <p style={{ fontSize: '14px', fontWeight: 600, color: '#2A1A18', margin: 0 }}>{name}</p>
          <p style={{ fontSize: '12px', color: '#BBA8A4', margin: '2px 0 0' }}>Built with {tool}</p>
        </div>
        <span style={{ fontSize: '10px', padding: '3px 10px', borderRadius: '8px', background: statusColor, color: statusTextColor, whiteSpace: 'nowrap' }}>{status}</span>
      </div>
      <p style={{ fontSize: '13px', color: '#9A8480', lineHeight: '1.6', margin: '0 0 8px' }}>{description}</p>
      <p style={{ fontSize: '13px', color: '#D4948A', fontWeight: 500, margin: 0 }}>Lesson: {lesson}</p>
    </div>
  );
}
