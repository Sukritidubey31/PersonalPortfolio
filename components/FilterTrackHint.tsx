"use client";

/**
 * Explains the Product / Data / Engineering pills on Experience and Projects.
 */
export default function FilterTrackHint({
  className = "",
}: {
  className?: string;
}) {
  return (
    <p
      className={`font-lato text-[13px] sm:text-sm mb-4 sm:mb-5 max-w-2xl ${className}`.trim()}
      style={{ color: "#9A8480", lineHeight: 1.65 }}
    >
      Use the buttons below to narrow this list. Only cards tagged with your current
      selection stay visible, so you can focus on what matters to you. Tap the
      pills anytime to add or remove a focus area.
    </p>
  );
}
