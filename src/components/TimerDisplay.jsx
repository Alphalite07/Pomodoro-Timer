export default function RetroTimer() {
  return (
    // The main void background
    <div className="min-h-screen bg-black text-emerald-400 font-mono flex flex-col items-center justify-center p-6">
      
      {/* Main Console Container */}
      <div className="w-full max-w-md border border-emerald-500/30 bg-zinc-950/50 p-8 shadow-[0_0_20px_rgba(16,185,129,0.15)]">
        
        {/* Header / Status */}
        <div className="flex justify-between items-center mb-8 border-b border-emerald-500/30 pb-4 text-sm tracking-widest opacity-80">
          <span>SYS.STATUS: <span className="animate-pulse">WORKING</span></span>
          <span>// SESSION_01</span>
        </div>

        {/* The Timer */}
        <div className="text-center my-12">
          {/* Using tracking-widest and tabular-nums to keep the digits perfectly aligned */}
          <h1 className="text-7xl md:text-8xl font-bold tracking-widest tabular-nums drop-shadow-[0_0_10px_rgba(16,185,129,0.8)]">
            45:00
          </h1>
          <p className="mt-4 text-emerald-400/60 uppercase tracking-[0.3em] text-xs">
            Remaining Execution Time
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 mt-12">
          <button className="flex-1 border border-emerald-500/50 bg-emerald-900/20 py-3 uppercase tracking-widest text-sm hover:bg-emerald-500 hover:text-black transition-colors duration-200">
            Pause
          </button>
          <button className="flex-1 border border-emerald-500/50 bg-transparent py-3 uppercase tracking-widest text-sm text-emerald-400/60 hover:border-emerald-400 hover:text-emerald-400 transition-colors duration-200">
            Abort
          </button>
        </div>

      </div>
    </div>
  );
}