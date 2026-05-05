"use client";

export default function TypingIndicator() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "5px",
        padding: "12px 16px",
      }}
    >
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          style={{
            width: 6,
            height: 6,
            borderRadius: "50%",
            backgroundColor: "#EDD4CC",
            display: "inline-block",
            animation: `dot-pulse 1.2s ease-in-out ${i * 0.2}s infinite`,
          }}
        />
      ))}
    </div>
  );
}
