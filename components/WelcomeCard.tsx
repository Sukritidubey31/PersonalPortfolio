"use client";

const HINT_CHIPS = [
  "What's her engineering background?",
  "Tell me about ChurnLens",
  "What roles is she open to?",
  "Has she built AI products?",
  "What's her PM experience at ZetaCrush?",
];

interface WelcomeCardProps {
  onChipClick: (text: string) => void;
}

export default function WelcomeCard({ onChipClick }: WelcomeCardProps) {
  return (
    <div
      style={{
        maxWidth: 520,
        width: "100%",
        borderRadius: 16,
        padding: "1.5rem 1.75rem",
        backgroundColor: "#fff",
        border: "0.5px solid #F2E2DA",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
        <span
          style={{
            width: 8,
            height: 8,
            borderRadius: "50%",
            backgroundColor: "#D4948A",
            flexShrink: 0,
            display: "inline-block",
          }}
        />
        <h2
          className="font-playfair"
          style={{ fontSize: 20, color: "#2A1A18", margin: 0 }}
        >
          Ask Sukriti&apos;s AI
        </h2>
      </div>

      <p
        className="font-lato"
        style={{
          fontSize: 13,
          color: "#9A8480",
          lineHeight: 1.7,
          marginBottom: 16,
        }}
      >
        Hi! I know everything about Sukriti: her experience, 
        her skills across product, data, and engineering, and more. What would you like to
        know?
      </p>

      <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
        {HINT_CHIPS.map((chip) => (
          <button
            key={chip}
            onClick={() => onChipClick(chip)}
            className="font-lato"
            style={{
              backgroundColor: "#FAF0EC",
              color: "#A06058",
              border: "0.5px solid #EDD4CC",
              borderRadius: 16,
              padding: "4px 12px",
              fontSize: 11,
              cursor: "pointer",
            }}
          >
            {chip}
          </button>
        ))}
      </div>
    </div>
  );
}
