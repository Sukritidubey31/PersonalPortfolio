"use client";
import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  const inputStyle = {
    backgroundColor: "#FAF3EF",
    border: "0.5px solid #EDD4CC",
    borderRadius: "8px",
    color: "#2A1A18",
    fontSize: "13px",
    padding: "10px 12px",
    width: "100%",
    outline: "none",
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 font-lato">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div>
          <label className="block text-[11px] font-playfair font-medium mb-1" style={{ color: "#9A8480" }}>
            Name
          </label>
          <input
            required
            type="text"
            placeholder="Your name"
            value={form.name}
            onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
            className="font-lato"
            style={inputStyle}
          />
        </div>
        <div>
          <label className="block text-[11px] font-playfair font-medium mb-1" style={{ color: "#9A8480" }}>
            Email
          </label>
          <input
            required
            type="email"
            placeholder="your@email.com"
            value={form.email}
            onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
            className="font-lato"
            style={inputStyle}
          />
        </div>
      </div>
      <div>
        <label className="block text-[11px] font-playfair font-medium mb-1" style={{ color: "#9A8480" }}>
          Message
        </label>
        <textarea
          required
          rows={4}
          placeholder="What would you like to say?"
          value={form.message}
          onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
          className="font-lato"
          style={{ ...inputStyle, resize: "vertical" }}
        />
      </div>

      <div className="flex items-center gap-4">
        <button
          type="submit"
          disabled={status === "loading"}
          className="text-[12px] font-lato font-medium px-5 py-2"
          style={{
            backgroundColor: "#D4948A",
            color: "#fff",
            borderRadius: "20px",
            border: "none",
            opacity: status === "loading" ? 0.7 : 1,
            cursor: status === "loading" ? "not-allowed" : "pointer",
          }}
        >
          {status === "loading" ? "Sending…" : "Send message →"}
        </button>
        {status === "success" && (
          <span className="text-[12px] font-lato" style={{ color: "#3D6438" }}>
            Message sent!
          </span>
        )}
        {status === "error" && (
          <span className="text-[12px] font-lato" style={{ color: "#8A2252" }}>
            Something went wrong. Try again.
          </span>
        )}
      </div>
    </form>
  );
}
