"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import WelcomeCard from "@/components/WelcomeCard";
import ChatMessage from "@/components/ChatMessage";
import ChatInput from "@/components/ChatInput";
import TypingIndicator from "@/components/TypingIndicator";

type Message = {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
};

export default function AskPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  const sendMessage = async (text: string) => {
    if (!text.trim() || isLoading) return;

    const userMsg: Message = {
      id: `${Date.now()}-user`,
      role: "user",
      content: text.trim(),
      timestamp: new Date(),
    };

    const nextMessages = [...messages, userMsg];
    setMessages(nextMessages);
    setInput("");
    setIsLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: nextMessages.map((m) => ({
            role: m.role,
            content: m.content,
          })),
        }),
      });

      const data = await res.json();

      setMessages((prev) => [
        ...prev,
        {
          id: `${Date.now()}-assistant`,
          role: "assistant",
          content: data.message,
          timestamp: new Date(),
        },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          id: `${Date.now()}-error`,
          role: "assistant",
          content: "Sorry, something went wrong. Please try again.",
          timestamp: new Date(),
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = () => sendMessage(input);
  const handleChipClick = (text: string) => sendMessage(text);
  const handleDownload = () => window.print();

  const showWelcome = messages.length === 0 && !isLoading;

  return (
    <div
      style={{
        backgroundColor: "#FEFCFB",
        display: "flex",
        flexDirection: "column",
        height: "100dvh",
      }}
    >
      {/* Print styles */}
      <style>{`
        @keyframes dot-pulse {
          0%, 80%, 100% { opacity: 0.3; transform: scale(0.9); }
          40% { opacity: 1; transform: scale(1); }
        }
        @media print {
          .no-print { display: none !important; }
          .chat-area { overflow: visible !important; height: auto !important; }
          .print-header { display: block !important; }
          .user-bubble { margin-left: auto; }
          .bubble-label { font-size: 10px; color: #888; }
          body { background: white; }
        }
      `}</style>

      {/* Print header (hidden on screen) */}
      <div
        className="print-header font-lato"
        style={{ display: "none", fontSize: 14, marginBottom: 16 }}
      >
        Conversation with Sukriti&apos;s AI
      </div>

      {/* Nav */}
      <nav
        className="no-print"
        style={{
          flexShrink: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 1.25rem",
          height: 56,
          borderBottom: "0.5px solid #F2E2DA",
          backgroundColor: "#FEFCFB",
        }}
      >
        <Link
          href="/"
          className="font-playfair"
          style={{ fontSize: 15, color: "#2A1A18", fontWeight: 500 }}
        >
          Sukriti Dubey
        </Link>
        <Link
          href="/"
          className="font-lato"
          style={{ fontSize: 12, color: "#9A8480", textDecoration: "none" }}
        >
          ← Back to portfolio
        </Link>
      </nav>

      {/* Chat area */}
      <div
        className="chat-area"
        style={{
          flex: 1,
          overflowY: "auto",
          backgroundColor: "#FEFCFB",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {showWelcome ? (
          <div
            style={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "1.5rem",
            }}
          >
            <WelcomeCard onChipClick={handleChipClick} />
          </div>
        ) : (
          <div
            style={{
              maxWidth: 672,
              width: "100%",
              margin: "0 auto",
              padding: "1.5rem 1rem",
            }}
          >
            {messages.map((msg) => (
              <ChatMessage
                key={msg.id}
                role={msg.role}
                content={msg.content}
                timestamp={msg.timestamp}
              />
            ))}

            {isLoading && (
              <div style={{ display: "flex", alignItems: "flex-start", marginBottom: 20 }}>
                <div
                  style={{
                    backgroundColor: "#fff",
                    border: "0.5px solid #F2E2DA",
                    borderRadius: "18px 18px 18px 4px",
                  }}
                >
                  <TypingIndicator />
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>
        )}
      </div>

      {/* Input bar */}
      <ChatInput
        value={input}
        onChange={setInput}
        onSubmit={handleSubmit}
        onChipClick={handleChipClick}
        isLoading={isLoading}
        messageCount={messages.length}
        onDownload={handleDownload}
      />
    </div>
  );
}
