"use client";
import { useState } from "react";

const HINTS = [
  "Does she know SQL?",
  "What's her PM experience?",
  "Show me her AI projects",
  "Has she built with Next.js?",
];

interface AiSearchProps {
  placeholder?: string;
}

export default function AiSearch({
  placeholder = "Ask anything about Sukriti…",
}: AiSearchProps) {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleAsk(q: string) {
    if (!q.trim()) return;
    setQuestion(q);
    setLoading(true);
    setAnswer("");
    try {
      const res = await fetch("/api/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: q }),
      });
      const data = await res.json();
      setAnswer(data.answer ?? "Sorry, no answer returned.");
    } catch {
      setAnswer("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3">
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleAsk(question)}
          placeholder={placeholder}
          className="flex-1 min-w-0 text-[15px] sm:text-base px-4 py-3 sm:px-5 sm:py-3.5 outline-none font-lato"
          style={{
            backgroundColor: "#FAF0EC",
            border: "0.5px solid #EDD4CC",
            borderRadius: "20px",
            color: "#2A1A18",
          }}
        />
        <button
          onClick={() => handleAsk(question)}
          disabled={loading}
          className="text-[15px] font-medium px-5 py-3 sm:px-6 sm:py-3.5 shrink-0 w-full sm:w-auto font-lato"
          style={{
            backgroundColor: "#D4948A",
            color: "#fff",
            borderRadius: "20px",
            border: "none",
            opacity: loading ? 0.7 : 1,
          }}
        >
          {loading ? "…" : "Ask ↗"}
        </button>
      </div>

      <div className="flex flex-wrap gap-2 sm:gap-2.5 mt-4">
        {HINTS.map((hint) => (
          <button
            key={hint}
            onClick={() => handleAsk(hint)}
            className="text-[12px] sm:text-[13px] px-3 py-1.5 sm:px-3.5 sm:py-2 font-lato"
            style={{
              backgroundColor: "#FAF3EF",
              border: "0.5px solid #F2E2DA",
              borderRadius: "8px",
              color: "#9A8480",
            }}
          >
            {hint}
          </button>
        ))}
      </div>

      {(loading || answer) && (
        <div
          className="mt-5 p-5 sm:p-6 text-[15px] sm:text-base leading-relaxed rounded-card font-lato"
          style={{
            backgroundColor: "#FAF3EF",
            border: "0.5px solid #EDD4CC",
            color: "#2A1A18",
          }}
        >
          {loading ? (
            <span className="font-lato" style={{ color: "#9A8480" }}>
              Thinking…
            </span>
          ) : (
            answer
          )}
        </div>
      )}
    </div>
  );
}
