"use client";
import { OAuthButton } from "@/components/OAuthProviders";
import { useState } from "react";
import Link from "next/link";
import GoalItem from "../components/sign-up/GoalItem";
import MiniCard from "../components/sign-up/MiniCard";
import CategoryItem from "../components/sign-up/CategoryItem";
import AuthForm from "@/components/auth-pages/Form";

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#06070d] text-white overflow-hidden">
      {/* GRID BACKGROUND */}
      <div className="absolute inset-0 opacity-[0.07] bg-[url('/grid.svg')] bg-cover"></div>

      {/* GLOWING GRADIENT BLOBS */}
      <div className="pointer-events-none">
        <div className="absolute top-20 left-32 w-[420px] h-[420px] bg-[#00D9FF]/20 rounded-full blur-[150px]"></div>
        <div className="absolute top-32 right-32 w-[420px] h-[420px] bg-[#C77DFF]/20 rounded-full blur-[150px]"></div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#FF6B9D]/10 rounded-full blur-[200px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20 pb-32 grid grid-cols-1 md:grid-cols-2 gap-20">
        {/* LEFT — SIGN UP FORM */}
        <div className="max-w-md mx-auto md:mx-0 animate-fadeIn">
          {/* Tag */}

          {/* FORM */}
          <AuthForm />

          <p className="text-gray-400 mt-6 text-center">
            Already have an account?{" "}
            <Link
              href="/sign-in"
              className="text-[#00D9FF] hover:text-[#00b8e6]"
            >
              Sign in
            </Link>
          </p>
        </div>

        {/* RIGHT HERO — PREMIUM DASHBOARD SNAPSHOTS */}
        <div className="hidden lg:flex items-center justify-center relative w-full">
          {/* Subtle spotlight background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#00D9FF]/10 via-transparent to-[#FF6B9D]/10 blur-3xl opacity-40"></div>

          <div className="relative flex flex-col gap-6 items-center select-none">
            {/* MAIN CARD — Net Worth */}
            <div
              className="w-[420px] rounded-3xl bg-[#0d0f16]/90 backdrop-blur-xl border border-white/10 
                  shadow-[0_0_40px_-5px_rgba(0,217,255,0.25)] p-6 animate-floatSlow"
            >
              <div className="flex justify-between mb-4">
                <h2 className="text-lg font-semibold text-white">Net Worth</h2>
                <span className="text-xs px-3 py-1 rounded-full bg-[#00D9FF]/15 text-[#00D9FF]">
                  +12.4% this month
                </span>
              </div>

              {/* Line chart */}
              <svg viewBox="0 0 400 120" className="w-full h-28 opacity-90">
                <path
                  d="M0 80 L50 60 L100 70 L150 45 L200 55 L250 35 L300 50 L350 40 L400 45"
                  fill="none"
                  stroke="url(#gradStroke)"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient
                    id="gradStroke"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stopColor="#00D9FF" />
                    <stop offset="50%" stopColor="#C77DFF" />
                    <stop offset="100%" stopColor="#FF6B9D" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mt-6">
                <MiniCard title="Expenses" amount="₹42,310" />
                <MiniCard title="Invested" amount="₹5,80,200" />
                <MiniCard title="Saved" amount="₹18,720" />
              </div>
            </div>

            {/* CARD ROW — Clean & Balanced */}
            <div className="flex gap-6">
              {/* GOALS CARD */}
              <div
                className="w-[260px] rounded-2xl bg-[#0b0f1a]/80 backdrop-blur-xl border border-white/10 p-5 
                      shadow-[0_0_30px_-5px_rgba(199,125,255,0.2)] animate-floatMedium"
              >
                <h3 className="text-sm font-semibold mb-4 text-white">
                  Goals Progress
                </h3>

                <GoalItem label="Emergency Fund" percent={72} />
                <GoalItem label="Travel Savings" percent={48} />
                <GoalItem label="Gadget Fund" percent={35} />
              </div>

              {/* CATEGORIES CARD */}
              <div
                className="w-[260px] rounded-2xl bg-[#0b0f1a]/80 backdrop-blur-xl border border-white/10 p-5 
                      shadow-[0_0_30px_-5px_rgba(0,217,255,0.18)] animate-floatFast"
              >
                <h3 className="text-sm font-semibold mb-4 text-white">
                  Top Categories
                </h3>
                <CategoryItem title="Food & Dining" amount="₹14,200" />
                <CategoryItem title="Transportation" amount="₹8,940" />
                <CategoryItem title="Shopping" amount="₹11,780" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animations */}
    </div>
  );
}

/* ------- Components -------- */

function Input({
  placeholder,
  type = "text",
}: {
  placeholder: string;
  type?: string;
}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-[#00D9FF] outline-none transition-all"
    />
  );
}

function PasswordInput({
  label,
  show,
  setShow,
}: {
  label: string;
  show: boolean;
  setShow: (v: boolean) => void;
}) {
  return (
    <div className="relative">
      <input
        type={show ? "text" : "password"}
        placeholder={label}
        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-[#00D9FF] outline-none transition-all"
      />
      <button
        type="button"
        onClick={() => setShow(!show)}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
      >
        {show ? "🙈" : "👁️"}
      </button>
    </div>
  );
}
