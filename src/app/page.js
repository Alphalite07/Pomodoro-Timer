"use client";

import { useState, useEffect } from "react";

// 1. Define our Retro-Futuristic Productivity Matrices (Templates)
const TEMPLATES = [
  {
    id: "classic",
    name: "CLASSIC_POMODORO",
    work: 25,
    break: 5,
    desc: "Standard 25/5 split. Optimal for maintaining steady baseline focus."
  },
  {
    id: "deep-work",
    name: "DEEP_CORE_SPRINT",
    work: 50,
    break: 10,
    desc: "Extended heavy focus block. Best for complex programming or writing."
  },
  {
    id: "ultradian",
    name: "ULTRADIAN_CYCLE",
    work: 90,
    break: 20,
    desc: "Max biological alignment. Exhausts full cognitive focus capacity."
  },
  {
    id: "burst",
    name: "CYBER_BURST",
    work: 15,
    break: 3,
    desc: "Rapid execution intervals. Perfect for clearing backlogs or small tasks."
  }
];

export default function RetroTimer() {
  const [status, setStatus] = useState("IDLE"); // IDLE, WORKING, BREAK
  const [timeLeft, setTimeLeft] = useState(0);
  const [currentBreak, setCurrentBreak] = useState(0);
  const [matrixName, setMatrixName] = useState("");
  
  // Custom input state variables
  const [customWork, setCustomWork] = useState("");
  const [customBreak, setCustomBreak] = useState("");

  // --- THE COUNTDOWN ENGINE ---
  useEffect(() => {
    let interval = null;

    if ((status === "WORKING" || status === "BREAK") && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((time) => time - 1);
      }, 1000);
    } else if (timeLeft === 0 && (status === "WORKING" || status === "BREAK")) {
      if (status === "WORKING") {
        setStatus("BREAK");
        setTimeLeft(currentBreak * 60);
      } else if (status === "BREAK") {
        setStatus("IDLE");
      }
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [status, timeLeft, currentBreak]);

  // --- TRIGGER INTERVALS ---
  const initializeMatrix = (workMin, breakMin, name) => {
    setMatrixName(name);
    setCurrentBreak(breakMin);
    setTimeLeft(workMin * 60);
    setStatus("WORKING");
  };

  const handleCustomSubmit = (e) => {
    e.preventDefault();
    const w = parseInt(customWork);
    const b = parseInt(customBreak);
    if (w > 0 && b > 0) {
      initializeMatrix(w, b, "CUSTOM_MATRIX");
    }
  };

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60).toString().padStart(2, "0");
    const s = (seconds % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  };

  return (
    <div className="min-h-screen bg-black text-emerald-400 font-mono flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-xl border border-emerald-500/30 bg-zinc-950/50 p-6 md:p-8 shadow-[0_0_20px_rgba(16,185,129,0.15)] relative">
        
        {/* Scanline Effect */}
        <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%)] bg-[length:100%_4px] z-10 opacity-10"></div>

        {/* Dashboard Status Header */}
        <div className="flex justify-between items-center mb-8 border-b border-emerald-500/30 pb-4 text-xs tracking-widest opacity-80">
          <span>SYS_STATUS: <span className={status !== "IDLE" ? "animate-pulse font-bold text-emerald-300" : ""}>{status}</span></span>
          <span>// LOC_EXECUTION_MODE</span>
        </div>

        {/* MODE 1: IDLE (Matrix & Custom Selection Dashboard) */}
        {status === "IDLE" && (
          <div>
            <h2 className="text-sm uppercase tracking-[0.25em] mb-4 text-emerald-500/80">// SELECT_CALIBRATION_MATRIX</h2>
            
            {/* Template Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {TEMPLATES.map((tmpl) => (
                <button
                  key={tmpl.id}
                  onClick={() => initializeMatrix(tmpl.work, tmpl.break, tmpl.name)}
                  className="border border-emerald-500/30 bg-zinc-900/20 p-4 text-left hover:border-emerald-400 hover:bg-emerald-950/30 transition-all group"
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-bold text-sm tracking-wide text-emerald-300 group-hover:text-emerald-400">
                      {tmpl.name}
                    </span>
                    <span className="text-xs bg-emerald-950 px-2 py-0.5 border border-emerald-800 text-emerald-400">
                      {tmpl.work}m / {tmpl.break}m
                    </span>
                  </div>
                  <p className="text-xs text-emerald-500/60 leading-relaxed">
                    {tmpl.desc}
                  </p>
                </button>
              ))}
            </div>

            {/* Custom Override Entry Row */}
            <div className="border-t border-emerald-500/20 pt-6">
              <h2 className="text-sm uppercase tracking-[0.25em] mb-4 text-emerald-500/80">// MANUAL_OVERRIDE_LOG</h2>
              <form onSubmit={handleCustomSubmit} className="flex flex-wrap md:flex-nowrap gap-4 items-end">
                <div className="flex-1 min-w-[120px]">
                  <label className="block text-[10px] uppercase tracking-widest text-emerald-500/60 mb-1">Work (Min)</label>
                  <input
                    type="number"
                    required
                    min="1"
                    className="w-full bg-black border border-emerald-500/30 p-2 text-sm text-emerald-400 focus:outline-none focus:border-emerald-400"
                    placeholder="45"
                    value={customWork}
                    onChange={(e) => setCustomWork(e.target.value)}
                  />
                </div>
                <div className="flex-1 min-w-[120px]">
                  <label className="block text-[10px] uppercase tracking-widest text-emerald-500/60 mb-1">Break (Min)</label>
                  <input
                    type="number"
                    required
                    min="1"
                    className="w-full bg-black border border-emerald-500/30 p-2 text-sm text-emerald-400 focus:outline-none focus:border-emerald-400"
                    placeholder="15"
                    value={customBreak}
                    onChange={(e) => setCustomBreak(e.target.value)}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full md:w-auto border border-emerald-500/60 bg-emerald-950/20 px-6 py-2 uppercase tracking-widest text-xs hover:bg-emerald-500 hover:text-black transition-colors h-[38px]"
                >
                  LOAD_EXE
                </button>
              </form>
            </div>
          </div>
        )}

        {/* MODE 2: THE OPERATIONAL TIMER */}
        {status !== "IDLE" && (
          <div className="text-center my-6">
            <span className="text-xs tracking-[0.4em] uppercase text-emerald-500/60 block mb-2">
              RUNNING:: {matrixName}
            </span>
            
            <h1 className="text-7xl md:text-8xl font-bold tracking-widest tabular-nums drop-shadow-[0_0_12px_rgba(16,185,129,0.7)] my-8">
              {formatTime(timeLeft)}
            </h1>
            
            <div className="inline-block px-4 py-1.5 border border-emerald-500/20 bg-black/50 text-xs tracking-wider mb-8">
              {status === "WORKING" ? (
                <span className="text-emerald-400 font-semibold tracking-[0.15em]">CORE_FOCUS_PHASE_ENGAGED</span>
              ) : (
                <span className="text-amber-400 font-semibold tracking-[0.15em] animate-pulse">SYSTEM_COOL_DOWN_ACTIVE</span>
              )}
            </div>

            <div className="flex justify-center">
              <button
                onClick={() => setStatus("IDLE")}
                className="border border-red-500/40 bg-red-950/10 text-red-400 hover:bg-red-500 hover:text-black px-8 py-2.5 uppercase tracking-widest text-xs transition-colors"
              >
                Terminate_Process
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}