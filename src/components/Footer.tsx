import React from "react";
import Link from "next/link";
import { Instagram, Linkedin } from "lucide-react";
import { Logo } from "./Logo";
import { SubstackIcon } from "./Icons";
import { siteContent } from "@/data/siteContent";

export const Footer = () => {
  const activeNiches = [
    "Founder & Startup Infrastructure",
    "AI Workflows & Automations",
    "Outcome-Based Education",
    "Relationships & Emotional Tech",
    "Pet Economy & Wellness",
  ];

  return (
    <footer className="bg-black text-white pt-24 pb-12 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <Logo className="w-12 h-12" />
              <span className="text-3xl font-display uppercase font-black tracking-tighter">Entrext.Labs</span>
            </div>
            <p className="text-base md:text-lg font-bold leading-tight text-muted">{siteContent.footer.description}</p>
            <div className="flex items-center gap-4">
              {[
                { Icon: Instagram, href: "https://www.instagram.com/entrext.labs" },
                { Icon: Linkedin, href: "https://www.linkedin.com/company/entrex-labs/" },
                { Icon: SubstackIcon, href: "https://entrextlabs.substack.com/subscribe" },
              ].map(({ Icon, href }, i) => (
                <a key={i} href={href} target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-white hover:text-electric-cyan hover:border-electric-cyan/50 transition-all">
                  <Icon size={24} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-mono text-xs font-black uppercase tracking-[0.3em] text-white/30 mb-8">Navigation</h4>
            <ul className="space-y-4">
              {["Home", "Niches", "Products", "Teams"].map((item) => (
                <li key={item}>
                  <Link href={item === "Home" ? "/" : `/${item.toLowerCase()}`} className="text-lg md:text-xl font-bold hover:text-electric-cyan transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-mono text-xs font-black uppercase tracking-[0.3em] text-white/30 mb-8">Active Clusters</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {activeNiches.map((niche) => (
                <div key={niche} className="bg-white/5 p-4 rounded-2xl border border-white/10 flex items-center justify-between group hover:border-neon-lime/30 transition-colors">
                  <span className="font-mono text-[10px] font-black uppercase tracking-widest text-white/60 group-hover:text-white transition-colors">{niche}</span>
                  <div className="w-2 h-2 bg-neon-lime rounded-full shadow-[0_0_8px_rgba(204,255,0,0.5)]" />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-8">
          <p className="font-mono text-[10px] font-black uppercase tracking-widest text-white/30">© 2026 Entrext Labs. Velocity is the moat.</p>
          <div className="flex items-center gap-8">
            <a href="#" className="font-mono text-[10px] font-black uppercase tracking-widest text-white/30 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="font-mono text-[10px] font-black uppercase tracking-widest text-white/30 hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};


