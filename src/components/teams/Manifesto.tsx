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
  <section className="py-24 px-6 bg-white border-t-8 border-black">
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
      <div>
        <p className="font-mono text-[10px] font-black uppercase tracking-widest opacity-50">THE STANDARD</p>
        <h2 className="text-4xl md:text-6xl font-display uppercase italic font-black mt-4">Who This Is For.</h2>
        <div className="mt-8 space-y-4">
          {whoFor.map((item) => (
            <div key={item} className="border-4 border-black rounded-xl p-4 font-bold bg-yellow-50">
              {item}
            </div>
          ))}
        </div>
      </div>

      <div>
        <p className="font-mono text-[10px] font-black uppercase tracking-widest opacity-50">THE FILTER</p>
        <h2 className="text-4xl md:text-6xl font-display uppercase italic font-black mt-4">Who This Is Not For.</h2>
        <p className="mt-4 text-sm md:text-base font-bold opacity-70">We protect the ecosystem deliberately. The wrong energy slows the entire team.</p>
        <div className="mt-8 space-y-4">
          {whoNotFor.map((item) => (
            <div key={item} className="border-4 border-black rounded-xl p-4 font-bold bg-white">
              {item}
            </div>
          ))}
        </div>
        <p className="mt-6 font-mono text-xs font-black uppercase tracking-widest">TECH FOUNDER · GROWTH FOUNDER · BUILD IN PUBLIC</p>
      </div>
    </div>
  </section>
);

