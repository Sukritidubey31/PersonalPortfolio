"use client";

export function SectionHeader({
  number,
  title,
}: {
  number: number;
  title: string;
}) {
  return (
    <div className="flex items-start gap-3 mb-4 mt-10">
      <span
        className="shrink-0 font-playfair font-medium mt-1"
        style={{ fontSize: "10px", color: "#D4948A", letterSpacing: "0.05em" }}
      >
        {String(number).padStart(2, "0")}
      </span>
      <h2
        className="font-playfair leading-snug"
        style={{ fontSize: "20px", color: "#2A1A18" }}
      >
        {title}
      </h2>
    </div>
  );
}

export function PartLabel({ label }: { label: string }) {
  return (
    <div
      className="inline-block text-[9px] uppercase tracking-widest font-playfair font-medium px-3 py-1 rounded-pill mb-6"
      style={{
        backgroundColor: "#FAF0EC",
        color: "#D4948A",
        border: "0.5px solid #EDD4CC",
      }}
    >
      {label}
    </div>
  );
}

export function Body({ children }: { children: React.ReactNode }) {
  return (
    <p
      className="font-lato leading-relaxed"
      style={{ fontSize: "13px", color: "#9A8480" }}
    >
      {children}
    </p>
  );
}

export function NumberedList({
  items,
}: {
  items: (string | React.ReactNode)[];
}) {
  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <div key={i} className="flex gap-3">
          <span
            className="shrink-0 w-5 h-5 rounded-full flex items-center justify-center font-lato font-medium mt-0.5"
            style={{
              fontSize: "10px",
              backgroundColor: "#FAF0EC",
              color: "#D4948A",
            }}
          >
            {i + 1}
          </span>
          <div
            className="font-lato leading-relaxed"
            style={{ fontSize: "12px", color: "#9A8480" }}
          >
            {item}
          </div>
        </div>
      ))}
    </div>
  );
}

export function BulletList({
  items,
}: {
  items: (string | React.ReactNode)[];
}) {
  return (
    <ul className="space-y-1.5 pl-4" style={{ listStyleType: "disc" }}>
      {items.map((item, i) => (
        <li
          key={i}
          className="font-lato leading-relaxed"
          style={{ fontSize: "12px", color: "#9A8480" }}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

export function StyledTable({
  headers,
  rows,
}: {
  headers: string[];
  rows: (string | React.ReactNode)[][];
}) {
  return (
    <div style={{ overflowX: "auto" }}>
      <table
        style={{
          borderCollapse: "collapse",
          width: "100%",
          minWidth: "480px",
        }}
      >
        <thead>
          <tr>
            {headers.map((h, i) => (
              <th
                key={i}
                className="font-playfair font-medium text-left"
                style={{
                  padding: "10px 14px",
                  border: "0.5px solid #F2E2DA",
                  backgroundColor: "#FAF3EF",
                  fontSize: "11px",
                  color: "#2A1A18",
                }}
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i}>
              {row.map((cell, j) => (
                <td
                  key={j}
                  className="font-lato"
                  style={{
                    padding: "10px 14px",
                    border: "0.5px solid #F2E2DA",
                    backgroundColor: i % 2 === 0 ? "#FEFCFB" : "#FAF3EF",
                    fontSize: "12px",
                    color: "#9A8480",
                    verticalAlign: "top",
                  }}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function Divider() {
  return (
    <div
      className="my-10"
      style={{ borderBottom: "0.5px solid #F2E2DA" }}
    />
  );
}

export function MetricBadge({
  label,
  color,
}: {
  label: string;
  color: "green" | "blue" | "pink";
}) {
  const styles = {
    green: { bg: "#EDF5E8", text: "#3D6438", border: "#C4D4BE" },
    blue: { bg: "#EDE9F8", text: "#5C519A", border: "#CEC8EA" },
    pink: { bg: "#FDE8F2", text: "#8A2252", border: "#EAC0D4" },
  };
  const s = styles[color];
  return (
    <span
      className="inline-block text-[10px] font-medium px-2.5 py-1 rounded-pill font-playfair"
      style={{ backgroundColor: s.bg, color: s.text, border: `0.5px solid ${s.border}` }}
    >
      {label}
    </span>
  );
}
