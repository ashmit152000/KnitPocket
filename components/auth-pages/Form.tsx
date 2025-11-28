"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname} from "next/navigation";
import { OAuthButton } from "../OAuthProviders";

export default function AuthForm() {
    const pathName = usePathname();
    const isLoginPage = pathName.startsWith("/sign-in");
    const [showPassword, setShowPassword] = useState(false);
    return <div className="order-2 lg:order-1 animate-fade-in-up">
      {/* Brand */}
      <div className="mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-xs text-gray-300 mb-3">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Secure • AI-powered • Multi-wallet
        </div>
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-2">
          {isLoginPage ? "Welcome back to " : "Join " }
          <span className="bg-gradient-to-r from-[#00D9FF] via-[#C77DFF] to-[#FF6B9D] bg-clip-text text-transparent">
            KnitPocket
          </span>
        </h1>
        <p className="text-gray-400 text-sm sm:text-base">
          {isLoginPage ? "Sign in to track every rupee, across bank accounts, cards, and wallets—beautifully." : "Track your money, grow your wealth, and control your financial future — beautifully."}
        </p>
      </div>

      {/* OAuth buttons */}
      <OAuthButton/>

      {/* Divider */}
      <div className="flex items-center gap-4 mb-6">
        <div className="flex-1 h-px bg-white/10" />
        <span className="text-xs uppercase tracking-[0.2em] text-gray-500">
          Or {isLoginPage ? "sign in" : "sign up"} with email
        </span>
        <div className="flex-1 h-px bg-white/10" />
      </div>

      {/* Form card */}
      <form className="space-y-5">
            {!isLoginPage && <div className="flex gap-4">
              <Input placeholder="First Name" />
              <Input placeholder="Last Name" />
            </div> }

            {!isLoginPage && <Input placeholder="Mobile Number" type="number" />}
            <Input placeholder="Email Address" type="email" />

            <PasswordInput
              label="Password"
              show={showPassword}
              setShow={setShowPassword}
            />

            {!isLoginPage && <Input placeholder="Confirm Password" type={showPassword ? "text" : "password"} />}

            {/* SIGNUP/SIGNIN BUTTON */}
            <button className="w-full py-4 rounded-xl text-white font-semibold bg-gradient-to-r from-[#00D9FF] via-[#C77DFF] to-[#FF6B9D] hover:scale-[1.02] transition-all shadow-lg shadow-[#00D9FF]/20">
              {isLoginPage ? "Sign In To KnitPocket" : "Sign Up To KnitPocket"}
            </button>

            <p className="text-gray-400 mt-6 text-center">
            {isLoginPage ? "Don't have an account? " : "Already have an account? "} 
            <Link
              href={isLoginPage ? "/sign-up" : "/sign-in"}
              className="text-[#00D9FF] hover:text-[#00b8e6]"
            >
              {isLoginPage ? "Sign up" : "Sign in"}
            </Link>
          </p>
          </form>
    </div>

}

function Input({
  placeholder,
  type = "text"
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
  setShow
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