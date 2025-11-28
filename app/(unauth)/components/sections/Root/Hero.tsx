import ButtonPrimary from "@/components/ButtonPrimary";
import ButtonSecondary from "@/components/ButtonSecondary";
import VideoPanel from "./VideoPanel";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden h-auto min-h-[800px]"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full z-0 pointer-events-none">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-[#00D9FF]/20 rounded-full blur-[100px] mix-blend-screen animate-blob"></div>
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-[#FF6B9D]/20 rounded-full blur-[100px] mix-blend-screen animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-[#C77DFF]/20 rounded-full blur-[100px] mix-blend-screen animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-[#00D9FF]/20 backdrop-blur-sm mb-8 animate-float shadow-[0_0_15px_rgba(0,217,255,0.2)]">
          <span className="flex h-2 w-2 rounded-full bg-[#00D9FF]"></span>
          <span className="text-sm font-medium text-gray-300">
            New: AI-Powered Finance Tracker
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-tight">
          Master Your Money <br />
          <span className="shine-text">With Pure Intelligence</span>
        </h1>

        <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-400 mb-10">
          Stop guessing where your money goes. CashFactor brings clarity to your
          chaos with real-time tracking, smart budgeting, and predictive
          analytics wrapped in a stunning dark mode experience.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
          <ButtonPrimary text="Start Tracking Free" pathToNavigate="/sign-up" />
          <ButtonSecondary
            text="Watch Demo"
            isSVG
            SVG={
              <i
                className="text-xs p-2 rounded-full bg-white/10 group-hover:bg-white/20 transition-colors"
                data-fa-i2svg=""
              >
                <svg
                  className="svg-inline--fa fa-play"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="play"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                  data-fa-i2svg=""
                >
                  <path
                    fill="currentColor"
                    d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"
                  ></path>
                </svg>
              </i>
            }
          />
        </div>
          
        <VideoPanel/>
        
      </div>
    </section>
  );
}
