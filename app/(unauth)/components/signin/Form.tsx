import Link from "next/link";
import { PayPalIcon, GoogleIcon, PaytmIcon, PhonePeIcon } from "./icons";
import { useState } from "react";
export default function SigninForm() {
  const oauthProviders = [
    { provider: "google", label: "Google", icon: <GoogleIcon /> },
    { provider: "paypal", label: "PayPal", icon: <PayPalIcon /> },
    { provider: "paytm", label: "Paytm", icon: <PaytmIcon /> },
    { provider: "phonepe", label: "PhonePe", icon: <PhonePeIcon /> },
  ];

  const handleOAuthLogin = (provider: string) => {
    console.log("OAuth login:", provider);
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="order-2 lg:order-1 animate-fade-in-up">
      {/* Brand */}
      <div className="mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-xs text-gray-300 mb-3">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Secure • AI-powered • Multi-wallet
        </div>
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-2">
          Welcome back to{" "}
          <span className="bg-gradient-to-r from-[#00D9FF] via-[#C77DFF] to-[#FF6B9D] bg-clip-text text-transparent">
            KnitPocket
          </span>
        </h1>
        <p className="text-gray-400 text-sm sm:text-base">
          Sign in to track every rupee, across bank accounts, cards, and
          wallets—beautifully.
        </p>
      </div>

      {/* OAuth buttons */}
      <div className="grid grid-cols-2 gap-3 mb-8 animate-stagger">
        {oauthProviders.map((service) => (
          <button
            key={service.provider}
            type="button"
            onClick={() => handleOAuthLogin(service.provider)}
            className="flex items-center justify-center gap-2 rounded-xl bg-white/5 border border-white/10 hover:border-[#00D9FF]/60 hover:bg-white/10 py-3 px-3 text-sm text-gray-100 backdrop-blur-md transition-all duration-300 hover:-translate-y-[2px] hover:shadow-[0_0_18px_rgba(0,217,255,0.28)] group"
          >
            <span className="transition-transform duration-300 group-hover:scale-110">
              {service.icon}
            </span>
            <span className="font-medium">{service.label}</span>
          </button>
        ))}
      </div>

      {/* Divider */}
      <div className="flex items-center gap-4 mb-6">
        <div className="flex-1 h-px bg-white/10" />
        <span className="text-xs uppercase tracking-[0.2em] text-gray-500">
          Or sign in with email
        </span>
        <div className="flex-1 h-px bg-white/10" />
      </div>

      {/* Form card */}
      <div className="rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl p-6 sm:p-7 shadow-[0_18px_45px_rgba(0,0,0,0.6)] animate-fade-in-up-delayed">
        {/* Email */}
        <div className="mb-5">
          <label className="block text-xs font-medium text-gray-300 mb-1.5">
            Email address
          </label>
          <div className="relative">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full rounded-xl bg-[#0D111C]/80 border border-white/15 px-4 py-3 text-sm text-gray-100 placeholder-gray-500 outline-none focus:border-[#00D9FF]/70 focus:ring-2 focus:ring-[#00D9FF]/25 focus:ring-offset-0 transition-all"
            />
          </div>
        </div>

        {/* Password */}
        <div className="mb-4">
          <div className="flex items-center justify-between mb-1.5">
            <label className="block text-xs font-medium text-gray-300">
              Password
            </label>
            <Link
              href="/forgot-password"
              className="text-xs text-[#00D9FF] hover:text-[#61eaff] transition-colors"
            >
              Forgot?
            </Link>
          </div>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            className="w-full rounded-xl bg-[#0D111C]/80 border border-white/15 px-4 py-3 text-sm text-gray-100 placeholder-gray-500 outline-none focus:border-[#C77DFF]/70 focus:ring-2 focus:ring-[#C77DFF]/25 focus:ring-offset-0 transition-all"
          />
        </div>

        {/* Remember + CTA */}
        <div className="flex items-center justify-between mb-5">
          <label className="flex items-center gap-2 text-xs text-gray-300 cursor-pointer select-none">
            <input
              type="checkbox"
              className="h-4 w-4 rounded border border-gray-500 bg-transparent text-[#00D9FF] focus:ring-0"
            />
            Keep me signed in
          </label>
          <span className="text-[11px] text-gray-500">
            2FA enabled by default
          </span>
        </div>

        <button
          type="submit"
          className="w-full rounded-xl bg-gradient-to-r from-[#00D9FF] via-[#C77DFF] to-[#FF6B9D] py-3 text-sm sm:text-[15px] font-semibold tracking-wide shadow-[0_12px_35px_rgba(0,217,255,0.45)] hover:shadow-[0_16px_45px_rgba(0,217,255,0.6)] transition-all hover:-translate-y-[1.5px] active:translate-y-0"
        >
          Sign in to KnitPocket
        </button>

        <p className="mt-4 text-xs text-center text-gray-400">
          New to KnitPocket?{" "}
          <Link
            href="/signup"
            className="text-[#00D9FF] hover:text-[#61eaff] font-medium"
          >
            Create an account
          </Link>
        </p>
      </div>
    </div>
  );
}
