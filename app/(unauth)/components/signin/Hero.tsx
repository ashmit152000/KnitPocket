import { useEffect, useRef } from "react";

export default function SigninHero() {
  const heroRef = useRef<HTMLDivElement | null>(null);

  // Simple parallax on mouse move (desktop only)
  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const handleMove = (e: MouseEvent) => {
      const rect = hero.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      hero.style.setProperty("--tiltX", `${y * -8}deg`);
      hero.style.setProperty("--tiltY", `${x * 8}deg`);
      hero.style.setProperty("--shiftX", `${x * 10}px`);
      hero.style.setProperty("--shiftY", `${y * 10}px`);
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);
  return (
    <div className="order-1 lg:order-2">
      <div
        ref={heroRef}
        className="relative w-full h-full flex items-center justify-center"
        style={{
          transform:
            "perspective(1200px) rotateX(var(--tiltX,0deg)) rotateY(var(--tiltY,0deg))",
        }}
      >
        {/* Glow behind card */}
        <div className="absolute -top-16 right-2 w-64 h-64 rounded-full bg-[#00D9FF]/30 blur-[120px] animate-soft-glow" />
        <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-[#FF6B9D]/24 blur-[110px] animate-soft-glow delay-500" />

        {/* Main dashboard card */}
        <div
          className="relative w-full max-w-md rounded-3xl bg-[#080B14]/90 border border-white/10 shadow-[0_28px_80px_rgba(0,0,0,0.85)] backdrop-blur-2xl p-6 sm:p-7 animate-fade-in-right"
          style={{
            transform:
              "translateX(var(--shiftX,0px)) translateY(var(--shiftY,0px))",
          }}
        >
          {/* Top header */}
          <div className="flex items-center justify-between mb-5">
            <div>
              <p className="text-xs text-gray-400">Net worth</p>
              <p className="text-xl font-semibold tracking-tight">
                ₹ 12,48,920
              </p>
            </div>
            <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 text-emerald-300 text-[11px] px-2 py-1 border border-emerald-500/30">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              +12.4% this month
            </span>
          </div>

          {/* Line chart mock */}
          <div className="relative mb-5">
            <div className="h-32 rounded-xl bg-gradient-to-tr from-white/5 via-white/2 to-transparent border border-white/10 overflow-hidden">
              <svg
                viewBox="0 0 200 80"
                className="w-full h-full opacity-90"
                preserveAspectRatio="none"
              >
                <defs>
                  <linearGradient
                    id="chartGradient"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop offset="0%" stopColor="#00D9FF" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#00D9FF" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path
                  d="M0 60 L20 55 L40 50 L60 52 L80 40 L100 45 L120 30 L140 35 L160 25 L180 30 L200 18 V80 H0 Z"
                  fill="url(#chartGradient)"
                  className="animate-chart-fill"
                />
                <path
                  d="M0 60 L20 55 L40 50 L60 52 L80 40 L100 45 L120 30 L140 35 L160 25 L180 30 L200 18"
                  stroke="#00D9FF"
                  strokeWidth="2"
                  fill="none"
                  className="animate-chart-line"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="absolute bottom-1 left-4 text-[10px] text-gray-500 flex gap-6">
              <span>Jan</span>
              <span>Mar</span>
              <span>May</span>
              <span>Jul</span>
              <span>Sep</span>
            </div>
          </div>

          {/* Cards row */}
          <div className="grid grid-cols-3 gap-3 mb-4 text-xs">
            <div className="rounded-xl bg-white/4 border border-white/10 px-3 py-2.5">
              <p className="text-[10px] text-gray-400 mb-1">Expenses</p>
              <p className="font-semibold text-[13px]">₹ 42,310</p>
              <p className="text-[10px] text-rose-300 mt-0.5">+8.1%</p>
            </div>
            <div className="rounded-xl bg-white/4 border border-white/10 px-3 py-2.5">
              <p className="text-[10px] text-gray-400 mb-1">Investments</p>
              <p className="font-semibold text-[13px]">₹ 5,80,200</p>
              <p className="text-[10px] text-emerald-300 mt-0.5">+15.6%</p>
            </div>
            <div className="rounded-xl bg-white/4 border border-white/10 px-3 py-2.5">
              <p className="text-[10px] text-gray-400 mb-1">Saved</p>
              <p className="font-semibold text-[13px]">₹ 18,720</p>
              <p className="text-[10px] text-sky-300 mt-0.5">Goal 72%</p>
            </div>
          </div>

          {/* Bottom row: wallets + badge */}
          <div className="flex items-center justify-between">
            <div className="flex -space-x-2">
              <div className="h-7 w-7 rounded-full bg-gradient-to-tr from-[#00D9FF] to-[#C77DFF] border border-[#05070B] text-[10px] flex items-center justify-center">
                HDFC
              </div>
              <div className="h-7 w-7 rounded-full bg-gradient-to-tr from-[#FF6B9D] to-[#C77DFF] border border-[#05070B] text-[10px] flex items-center justify-center">
                SBI
              </div>
              <div className="h-7 w-7 rounded-full bg-[#111827] border border-white/10 text-[10px] flex items-center justify-center">
                +3
              </div>
            </div>
            <div className="rounded-full px-3 py-1.5 bg-white/4 border border-white/15 text-[10px] flex items-center gap-1 text-gray-200">
              <span>🔒</span>
              <span>256-bit encrypted sync</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
