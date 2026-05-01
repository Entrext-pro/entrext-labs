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
    <footer className="bg-black text-white pt-32 pb-12 px-6 border-t-8 border-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mb-32">
          <div className="space-y-10">
            <div className="flex items-center gap-4">
              <Logo className="w-14 h-14" />
              <span className="text-4xl font-display uppercase italic font-black tracking-tighter">Entrext<span className="text-yellow-400">.</span>Labs</span>
            </div>
            <p className="text-xl font-bold leading-tight text-white/60 italic">{siteContent.footer.description}</p>
            <div className="flex items-center gap-6">
              {[
                { Icon: Instagram, href: "https://www.instagram.com/entrext.labs" },
                { Icon: Linkedin, href: "https://www.linkedin.com/company/entrex-labs/" },
                { Icon: SubstackIcon, href: "https://entrextlabs.substack.com/subscribe" },
              ].map(({ Icon, href }, i) => (
                <a 
                  key={i} 
                  href={href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-14 h-14 bg-white/5 border-2 border-white/20 flex items-center justify-center text-white hover:bg-yellow-400 hover:text-black hover:border-yellow-400 transition-all shadow-[4px_4px_0px_0px_rgba(255,255,255,0.1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1"
                >
                  <Icon size={28} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-mono text-xs font-black uppercase tracking-[0.4em] text-white/30 mb-10">Navigation</h4>
            <ul className="space-y-6">
              {["Home", "Niches", "Products", "Teams"].map((item) => (
                <li key={item}>
                  <Link href={item === "Home" ? "/" : `/${item.toLowerCase()}`} className="text-2xl font-display uppercase italic font-black hover:text-yellow-400 transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-mono text-xs font-black uppercase tracking-[0.4em] text-white/30 mb-10">Active Clusters</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {activeNiches.map((niche) => (
                <div key={niche} className="bg-white/5 p-6 border-2 border-white/10 flex items-center justify-between group hover:bg-yellow-400 hover:text-black hover:border-black transition-all">
                  <span className="font-mono text-[10px] font-black uppercase tracking-widest text-white/60 group-hover:text-black transition-colors">{niche}</span>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full group-hover:bg-black transition-colors" />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-16 border-t-2 border-white/10 flex flex-col md:flex-row items-center justify-between gap-10">
          <p className="font-mono text-[10px] font-black uppercase tracking-widest text-white/20 italic">© 2026 Entrext Labs. Velocity is the moat.</p>
          <div className="flex items-center gap-10">
            <a href="#" className="font-mono text-[10px] font-black uppercase tracking-widest text-white/20 hover:text-yellow-400 transition-colors underline underline-offset-4">Privacy Policy</a>
            <a href="#" className="font-mono text-[10px] font-black uppercase tracking-widest text-white/20 hover:text-yellow-400 transition-colors underline underline-offset-4">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};


