export default function LineGraphLoader() {
  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-md">
        <div className="loader-container">
          
          {/* Graph Lines */}
          <svg
            width="200"
            height="120"
            viewBox="0 0 200 120"
            className="loader-graph"
          >
            {/* Grid lines */}
            <g stroke="rgba(255,255,255,0.1)" strokeWidth="1">
              <line x1="0" y1="30" x2="200" y2="30" />
              <line x1="0" y1="60" x2="200" y2="60" />
              <line x1="0" y1="90" x2="200" y2="90" />
            </g>

            {/* Animated Path */}
            <path
              d="
                M 0 90
                Q 40 70 60 85
                T 110 55
                T 160 30
                T 200 20
              "
              fill="none"
              stroke="url(#gradientStroke)"
              strokeWidth="4"
              strokeLinecap="round"
              className="animate-path"
            />

            {/* Gradient definition */}
            <defs>
              <linearGradient id="gradientStroke" x1="0" x2="1" y1="0" y2="0">
                <stop offset="0%" stopColor="#00D9FF" />
                <stop offset="50%" stopColor="#C77DFF" />
                <stop offset="100%" stopColor="#FF6B9D" />
              </linearGradient>
            </defs>
          </svg>

          {/* Text */}
          <p className="loader-text">
            <span className="text-cycle cycle-1">Analyzing your money flow…</span>
            <span className="text-cycle cycle-2">Predicting patterns…</span>
            <span className="text-cycle cycle-3">Processing…</span>
          </p>
        </div>
      </div>

      <style jsx>{`
        
      `}</style>
    </>
  );
}
