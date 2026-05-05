"use client";
import ReactMarkdown from "react-markdown";

interface ChatMessageProps {
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

export default function ChatMessage({ role, content, timestamp }: ChatMessageProps) {
  const isUser = role === "user";
  const timeStr = timestamp.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: isUser ? "flex-end" : "flex-start",
        marginBottom: 20,
      }}
    >
      <div
        className={`bubble font-lato ${isUser ? "user-bubble" : "ai-bubble"}`}
        style={{
          maxWidth: isUser ? "75%" : "85%",
          backgroundColor: isUser ? "#D4948A" : "#fff",
          color: isUser ? "#fff" : "#2A1A18",
          border: isUser ? "none" : "0.5px solid #F2E2DA",
          borderRadius: isUser ? "18px 18px 4px 18px" : "18px 18px 18px 4px",
          padding: isUser ? "10px 16px" : "14px 18px",
          fontSize: 13,
          lineHeight: 1.65,
          overflow: "visible",
        }}
      >
        {isUser ? (
          <span>{content}</span>
        ) : (
          <ReactMarkdown
            components={{
              a: ({ href, children }) => {
                const isExternal = href?.startsWith("http");
                return (
                  <a
                    href={href}
                    target={isExternal ? "_blank" : "_self"}
                    rel="noopener noreferrer"
                    style={{
                      color: "#D4948A",
                      fontWeight: 500,
                      textDecoration: "underline",
                      textDecorationColor: "#EDD4CC",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "#A06058")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "#D4948A")
                    }
                  >
                    {children}
                    {isExternal ? " ↗" : ""}
                  </a>
                );
              },
              strong: ({ children }) => (
                <strong style={{ color: "#2A1A18", fontWeight: 600 }}>
                  {children}
                </strong>
              ),
              ul: ({ children }) => (
                <ul
                  style={{
                    paddingLeft: "1.25rem",
                    margin: "6px 0",
                    display: "flex",
                    flexDirection: "column",
                    gap: 4,
                  }}
                >
                  {children}
                </ul>
              ),
              ol: ({ children }) => (
                <ol
                  style={{
                    paddingLeft: "1.25rem",
                    margin: "6px 0",
                    display: "flex",
                    flexDirection: "column",
                    gap: 4,
                  }}
                >
                  {children}
                </ol>
              ),
              li: ({ children }) => (
                <li
                  style={{
                    fontSize: 13,
                    color: "#2A1A18",
                    lineHeight: 1.65,
                    listStyleType: "disc",
                  }}
                >
                  {children}
                </li>
              ),
              p: ({ children }) => (
                <p
                  style={{
                    margin: "4px 0",
                    fontSize: 13,
                    lineHeight: 1.65,
                    color: "#2A1A18",
                  }}
                >
                  {children}
                </p>
              ),
              h2: ({ children }) => (
                <p
                  className="font-playfair"
                  style={{
                    margin: "12px 0 5px",
                    fontWeight: 600,
                    fontSize: 15,
                    color: "#2A1A18",
                  }}
                >
                  {children}
                </p>
              ),
              h3: ({ children }) => (
                <p
                  className="font-playfair"
                  style={{
                    margin: "10px 0 4px",
                    fontWeight: 600,
                    fontSize: 14,
                    color: "#2A1A18",
                  }}
                >
                  {children}
                </p>
              ),
            }}
          >
            {content}
          </ReactMarkdown>
        )}
      </div>
      <span
        className="bubble-label font-lato"
        style={{ fontSize: 10, color: "#A4918D", marginTop: 4 }}
      >
        {timeStr}
      </span>
    </div>
  );
}
