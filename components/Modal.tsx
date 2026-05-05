"use client";
import { useEffect, useRef } from "react";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export default function Modal({ open, onClose, children }: ModalProps) {
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: "rgba(42,26,24,0.35)" }}
      onClick={onClose}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        className="relative w-full max-w-3xl max-h-[85vh] overflow-y-auto rounded-card px-6 py-8 sm:px-8 sm:py-10 font-lato"
        style={{
          backgroundColor: "#FEFCFB",
          border: "0.5px solid #F2E2DA",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[11px] px-3 py-1 font-lato"
          style={{ color: "#9A8480", border: "0.5px solid #F2E2DA", borderRadius: "16px" }}
        >
          Close ✕
        </button>
        {children}
      </div>
    </div>
  );
}
