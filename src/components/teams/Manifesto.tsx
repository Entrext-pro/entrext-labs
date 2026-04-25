import React from "react";

const whoFor = [
  "Founders who cannot stop building even when no one is watching.",
  "Builders who choose ownership over titles.",
  "People who can ship in public and learn fast.",
  "Tech and Growth operators who want real product responsibility.",
];

const whoNotFor = [
  "People looking for comfort before ownership.",
  "Shortcut seekers who avoid hard execution cycles.",
  "Title-first applicants who avoid accountability.",
  "Low-signal energy that slows the team down.",
];

export const Manifesto = () => (
  <section className="py-24 md:py-36 px-6 bg-obsidian-light/30 rounded-[3rem] border border-white/5 relative overflow-hidden">
    <div className="absolute inset-0 grid-bg opacity-5 pointer-events-none" />
    
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
      <div>
        <p className="font-mono text-xs font-black uppercase tracking-[0.4em] text-neon-lime mb-4">THE STANDARD</p>
        <h2 className="text-4xl md:text-6xl font-display uppercase font-black tracking-tighter text-white">Who This Is For.</h2>
        <div className="mt-10 space-y-4">
          {whoFor.map((item, i) => (
            <div key={i} className="lab-card p-5 font-bold border-white/5 bg-white/[0.02] text-white/80 hover:text-white transition-colors">
              <span className="text-neon-lime mr-3 font-mono">→</span> {item}
            </div>
          ))}
        </div>
      </div>

      <div>
        <p className="font-mono text-xs font-black uppercase tracking-[0.4em] text-red-500 mb-4">THE FILTER</p>
        <h2 className="text-4xl md:text-6xl font-display uppercase font-black tracking-tighter text-white">Who This Is Not For.</h2>
        <p className="mt-6 text-lg font-bold text-muted leading-relaxed">We protect the ecosystem deliberately. The wrong energy slows the entire team.</p>
        <div className="mt-10 space-y-4">
          {whoNotFor.map((item, i) => (
            <div key={i} className="lab-card p-5 font-bold border-white/5 bg-white/[0.01] text-white/50 hover:text-white/80 transition-colors">
              <span className="text-red-500/50 mr-3 font-mono">×</span> {item}
            </div>
          ))}
        </div>
        <p className="mt-10 font-mono text-[10px] font-black uppercase tracking-[0.5em] text-white/20">
          PRIMARY PARTNER · SECONDARY PARTNER · VELOCITY LAB
        </p>
      </div>
    </div>
  </section>
);


