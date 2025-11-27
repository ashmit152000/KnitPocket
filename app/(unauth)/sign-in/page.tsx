"use client";
import SigninForm from "../components/signin/Form";
import SigninHero from "../components/signin/Hero";

export default function SignIn() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#050712] via-[#05070B] to-[#060915] text-white relative overflow-hidden">
      {/* Background grid + glow */}
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(0,217,255,0.18),_transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(199,125,255,0.14),_transparent_60%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,_rgba(255,255,255,0.06)_1px,_transparent_1px),linear-gradient(to_bottom,_rgba(255,255,255,0.06)_1px,_transparent_1px)] bg-[size:80px_80px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-10 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* LEFT: FORM */}
          <SigninForm />

          {/* RIGHT: HERO / DASHBOARD MOCK */}
          <SigninHero />
        </div>
      </div>
    </div>
  );
}
