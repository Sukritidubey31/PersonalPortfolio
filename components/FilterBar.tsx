"use client";

export const TRACK_BADGE_STYLES: Record<string, { bg: string; text: string; border: string }> = {
  Product: { bg: "#FDE8F2", text: "#8A2252", border: "#EAC0D4" },
  Data: { bg: "#EDE9F8", text: "#5C519A", border: "#CEC8EA" },
  Engineering: { bg: "#EDF5E8", text: "#3D6438", border: "#C4D4BE" },
};

interface FilterBarProps {
  active: Set<string>;
  onToggle: (track: string) => void;
}

export default function FilterBar({ active, onToggle }: FilterBarProps) {
  return (
    <div className="flex flex-wrap gap-2 mb-8 sm:mb-10">
      {(["Product", "Data", "Engineering"] as const).map((track) => {
        const isActive = active.has(track);
        return (
          <button
            key={track}
            onClick={() => onToggle(track)}
            className="font-playfair"
            style={{
              fontSize: "12px",
              padding: "5px 16px",
              borderRadius: "20px",
              backgroundColor: isActive ? "#D4948A" : "#FAF0EC",
              color: isActive ? "#fff" : "#A06058",
              border: `1.5px solid ${isActive ? "#D4948A" : "#EDD4CC"}`,
              cursor: "pointer",
            }}
          >
            {track}
          </button>
        );
      })}
    </div>
  );
}
