import { JSX } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWandMagicSparkles,
  faChartLine,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";

export default function FeaturesSection(): JSX.Element {
  return (
    <section id="features" className="py-28 bg-darker relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why Choose{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D9FF] to-[#FF6B9D]">
              CashFactor?
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Built for modern users who value aesthetics as much as performance.
          </p>
        </div>

        {/* Feature Block 1 */}
        <div className="flex flex-col md:flex-row items-center gap-14 mb-32">
          {/* Card */}
          <div className="w-full md:w-1/2 relative group">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#00D9FF]/20 to-[#C77DFF]/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />

            <div className="relative h-[400px] w-full rounded-2xl overflow-hidden glass-panel border border-white/10 flex items-center justify-center">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-40 mix-blend-overlay" />

              <div className="relative z-10 p-8 w-full">
                <div className="bg-darker/80 backdrop-blur-md p-6 rounded-xl border border-white/10 shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
                  <div className="flex justify-between items-center mb-4">
                    <h4 className="font-semibold text-gray-200">Monthly Spending</h4>
                    <span className="text-xs px-2 py-1 rounded bg-green-500/20 text-green-400">
                      +12% saved
                    </span>
                  </div>

                  <div className="h-2 bg-white/10 rounded-full overflow-hidden mb-2">
                    <div className="h-full w-3/4 bg-gradient-to-r from-[#00D9FF] to-[#C77DFF]" />
                  </div>

                  <p className="text-xs text-gray-400 text-right">75% of budget</p>
                </div>
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="w-full md:w-1/2">
            <div className="w-12 h-12 rounded-lg bg-[#00D9FF]/20 flex items-center justify-center mb-6 border border-[#00D9FF]/40 shadow-[0_0_20px_rgba(0,217,255,0.25)]">
              <FontAwesomeIcon icon={faWandMagicSparkles} className="text-[#00D9FF] text-xl" />
            </div>

            <h3 className="text-3xl font-bold mb-4">Smart Budgeting</h3>

            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              Create budgets that actually work. Our AI analyzes your spending habits and sets realistic limits so you never overspend again.
            </p>

            <ul className="space-y-3">
              {[
                "Auto-categorization",
                "Rolling budgets",
                "Spending alerts",
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-gray-300">
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="text-green-400 text-sm"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Feature Block 2 */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-14">
          {/* Card */}
          <div className="w-full md:w-1/2 relative group">
            <div className="absolute inset-0 bg-gradient-to-bl from-[#C77DFF]/20 to-[#00D9FF]/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />

            <div className="relative h-[400px] w-full rounded-2xl overflow-hidden glass-panel border border-white/10 flex items-center justify-center">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1642543492481-44e81e3914a7?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-40 mix-blend-overlay" />

              <div className="relative z-10 w-full p-8">
                <div className="grid grid-cols-2 gap-4">
                  {/* Card 1 */}
                  <div className="bg-darker/90 p-4 rounded-xl border border-white/10 shadow-lg transform -translate-y-4">
                    <div className="text-xs text-gray-400 mb-1">Total Assets</div>
                    <div className="text-xl font-bold text-white">$124,500</div>
                    <div className="text-xs text-green-400 mt-1">▲ 2.4%</div>
                  </div>

                  {/* Card 2 */}
                  <div className="bg-darker/90 p-4 rounded-xl border border-white/10 shadow-lg transform translate-y-4">
                    <div className="text-xs text-gray-400 mb-1">Liabilities</div>
                    <div className="text-xl font-bold text-white">$12,300</div>
                    <div className="text-xs text-red-400 mt-1">▼ 1.2%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="w-full md:w-1/2">
            <div className="w-12 h-12 rounded-lg bg-[#FF6B9D]/20 flex items-center justify-center mb-6 border border-[#FF6B9D]/40 shadow-[0_0_20px_rgba(255,107,157,0.25)]">
              <FontAwesomeIcon icon={faChartLine} className="text-[#FF6B9D] text-xl" />
            </div>

            <h3 className="text-3xl font-bold mb-4">Investment Tracking</h3>

            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              Track stocks, crypto, and assets across all platforms. See your net worth grow with real-time insights and portfolio analytics.
            </p>

            <ul className="space-y-3">
              {[
                "Real-time market data",
                "Crypto support",
                "Dividend tracking",
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-gray-300">
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="text-green-400 text-sm"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}
