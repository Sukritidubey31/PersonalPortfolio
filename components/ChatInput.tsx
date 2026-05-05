"use client";
import { useRef, KeyboardEvent } from "react";

const HINT_CHIPS = [
  "What's her engineering background?",
  "Tell me about ChurnLens",
  "What roles is she open to?",
  "Has she built AI products?",
  "What's her PM experience at ZetaCrush?",
];

interface ChatInputProps {
  value: string;
  onChange: (val: string) => void;
  onSubmit: () => void;
  onChipClick: (text: string) => void;
  isLoading: boolean;
  messageCount: number;
  onDownload: () => void;
}

export default function ChatInput({
  value,
  onChange,
  onSubmit,
  onChipClick,
  isLoading,
  messageCount,
  onDownload,
}: ChatInputProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const canSend = !isLoading && value.trim().length > 0;

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      onSubmit();
    }
  };

  return (
    <div
      className="no-print shrink-0"
      style={{
        backgroundColor: "#fff",
        borderTop: "0.5px solid #F2E2DA",
        padding: "12px 16px",
      }}
    >
      <div style={{ maxWidth: 672, margin: "0 auto" }}>
        {/* Input row */}
        <div style={{ display: "flex", gap: 8, marginBottom: 10 }}>
          <input
            ref={inputRef}
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            onKeyDown={handleKeyDown}
            disabled={isLoading}
            placeholder="Ask anything about Sukriti..."
            className="font-lato"
            style={{
              flex: 1,
              backgroundColor: "#FAF0EC",
              border: "0.5px solid #EDD4CC",
              borderRadius: 24,
              padding: "10px 16px",
              fontSize: 13,
              color: "#2A1A18",
              outline: "none",
            }}
            onFocus={(e) =>
              (e.currentTarget.style.borderColor = "#D4948A")
            }
            onBlur={(e) =>
              (e.currentTarget.style.borderColor = "#EDD4CC")
            }
          />
          <button
            onClick={onSubmit}
            disabled={!canSend}
            className="font-lato"
            style={{
              flexShrink: 0,
              backgroundColor: canSend ? "#D4948A" : "#EDD4CC",
              color: canSend ? "#fff" : "#A4918D",
              borderRadius: 20,
              padding: "8px 18px",
              fontSize: 13,
              fontWeight: 500,
              cursor: canSend ? "pointer" : "not-allowed",
              border: "none",
              transition: "background-color 0.15s",
            }}
          >
            Send
          </button>
        </div>

        {/* Hint chips — only when input is empty */}
        {!value.trim() && (
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 8 }}>
            {HINT_CHIPS.map((chip) => (
              <button
                key={chip}
                onClick={() => onChipClick(chip)}
                disabled={isLoading}
                className="font-lato"
                style={{
                  backgroundColor: "#FAF0EC",
                  color: "#A06058",
                  border: "0.5px solid #EDD4CC",
                  borderRadius: 16,
                  padding: "4px 12px",
                  fontSize: 11,
                  cursor: isLoading ? "not-allowed" : "pointer",
                }}
              >
                {chip}
              </button>
            ))}
          </div>
        )}

        {/* Download — only when 2+ messages */}
        {messageCount >= 2 && (
          <button
            onClick={onDownload}
            className="download-btn font-lato"
            style={{
              fontSize: 11,
              color: "#A4918D",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 0,
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = "#D4948A")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "#A4918D")
            }
          >
            Download conversation as PDF
          </button>
        )}
      </div>
    </div>
  );
}
