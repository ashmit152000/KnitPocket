"use client";

import { useEffect, useState } from "react";
import { CheckCircle, AlertTriangle, X } from "lucide-react";

export default function Notification({
  message,
  type = "success",
  duration = 4000,
}: {
  message: string;
  type?: "success" | "error";
  duration?: number;
}) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), duration);
    return () => clearTimeout(timer);
  }, [duration]);

  if (!show) return null;

  return (
    <div
      className={`
        fixed top-0 left-0 w-full z-[9999]
        flex items-center justify-between
        px-6 py-4
        shadow-lg backdrop-blur-xl
        border-b border-white/20
        animate-slide-down
        ${
          type === "success"
            ? "bg-gradient-to-r from-[#2ecc71]/95 to-[#27ae60]/95 text-white"
            : "bg-gradient-to-r from-[#e74c3c]/95 to-[#c0392b]/95 text-white"
        }
      `}
    >
      {/* Icon + Message */}
      <div className="flex items-center gap-3">
        {type === "success" ? (
          <CheckCircle className="w-6 h-6" />
        ) : (
          <AlertTriangle className="w-6 h-6" />
        )}
        <p className="text-lg font-semibold tracking-wide">{message}</p>
      </div>

      {/* Close button */}
      <button
        onClick={() => setShow(false)}
        className="hover:opacity-70 transition"
      >
        <X className="w-6 h-6" />
      </button>
    </div>
  );
}
