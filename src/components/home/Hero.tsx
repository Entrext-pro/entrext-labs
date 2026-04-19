"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { siteContent } from "@/data/siteContent";

export const Hero = () => {
  const { hero } = siteContent.home;

  return (
    <section className="relative min-h-screen flex items-center px-6 pt-32 pb-20 border-b-8 border-black">
      <div className="max-w-7xl mx-auto w-full text-center">
        <p className="font-mono text-[10px] font-black uppercase tracking-[0.3em] opacity-50 mb-8">{hero.eyebrow}</p>
        <h1 className="font-display text-5xl md:text-8xl lg:text-[10rem] leading-[0.85] uppercase italic font-black tracking-tighter">
          {hero.headline[0]}
          <br />
          <span className="text-yellow-500">{hero.headline[1]}</span>
        </h1>
        <p className="text-base md:text-xl font-bold leading-tight max-w-3xl mx-auto mt-10 opacity-75">{hero.description}</p>
        <p className="mt-6 font-black uppercase tracking-widest text-sm md:text-base">{hero.points.join(" ")}</p>

        <div className="mt-12 flex flex-col md:flex-row gap-4 justify-center">
          {hero.ctas.map((cta) =>
            cta.href.startsWith("#") ? (
              <a key={cta.label} href={cta.href} className="btn-primary px-8 py-4 text-lg flex items-center justify-center gap-3">
                {cta.label} <ArrowUpRight size={20} />
              </a>
            ) : (
              <Link key={cta.label} href={cta.href} className="btn-primary px-8 py-4 text-lg flex items-center justify-center gap-3">
                {cta.label} <ArrowUpRight size={20} />
              </Link>
            )
          )}
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-4">
          {hero.stats.map((stat) => (
            <div key={stat} className="border-4 border-black rounded-xl p-4 font-mono text-xs md:text-sm font-black uppercase bg-white">
              {stat}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
