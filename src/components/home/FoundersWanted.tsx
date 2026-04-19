import React from "react";
import { founderRoles, siteContent } from "@/data/siteContent";

export const FoundersWanted = () => {
  const { founders } = siteContent.home;

  return (
    <section className="py-24 md:py-36 px-6 bg-yellow-400 border-t-8 border-black">
      <div className="max-w-7xl mx-auto">
        <p className="font-mono text-[10px] font-black uppercase tracking-widest opacity-60">{founders.eyebrow}</p>
        <h2 className="mt-4 text-4xl md:text-7xl font-display uppercase italic font-black">{founders.title}</h2>
        <p className="mt-4 text-base md:text-2xl font-black">{founders.subtitle}</p>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {founderRoles.map((role) => (
            <a
              key={role.title}
              href={role.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block border-4 border-black rounded-2xl p-6 bg-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"
            >
              <h3 className="text-2xl font-display uppercase italic font-black">{role.title}</h3>
              <p className="mt-4 text-sm font-bold opacity-75 leading-tight">{role.desc}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

