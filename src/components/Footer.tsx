import React from 'react';
import Link from 'next/link';
import { Globe, Instagram, Linkedin } from 'lucide-react';
import { Logo } from './Logo';
import { DiscordIcon, SubstackIcon } from './Icons';

export const Footer = () => {
  const activeNiches = [
    "Founder & Startup Infra",
    "Pet Economy & Wellness",
    "Relationships & Emotional Tech",
    "AI, Workflows & Automations",
    "Outcome-Based Education"
  ];

  return (
    <footer className="bg-black text-white pt-24 pb-12 px-6 border-t-8 border-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          {/* Brand */}
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-yellow-400 border-4 border-black rounded-xl flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <Logo className="text-black w-8 h-8" />
              </div>
              <span className="text-3xl font-display uppercase italic font-black tracking-tighter">Entrext<span className="text-yellow-500">.</span>Labs</span>
            </div>
            <p className="text-base md:text-lg font-bold leading-tight opacity-60">
              A high-velocity production unit shipping 5 micro-SaaS products every week. We turn market friction into functional software at terminal velocity.
            </p>
            <div className="flex items-center gap-4">
              {[
                { Icon: Instagram, href: "https://www.instagram.com/entrext.labs" },
                { Icon: Linkedin, href: "https://www.linkedin.com/company/entrex-labs/" },
                { Icon: SubstackIcon, href: "https://entrextlabs.substack.com/subscribe" }
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/10 border-2 border-white/20 rounded-xl flex items-center justify-center text-white hover:text-black hover:bg-yellow-400 transition-all"
                >
                  <Icon size={24} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-mono text-xs font-black uppercase tracking-widest text-white opacity-40 mb-8">Navigation</h4>
            <ul className="space-y-4">
              {['Home', 'Niches', 'Products', 'Teams'].map((item) => (
                <li key={item}>
                  <Link
                    href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="text-lg md:text-xl font-bold hover:text-yellow-400 transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Active Niches */}
          <div className="lg:col-span-2">
            <h4 className="font-mono text-xs font-black uppercase tracking-widest text-white opacity-40 mb-8">Active Verticals</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {activeNiches.map((niche) => (
                <div
                  key={niche}
                  className="bg-white/5 p-4 rounded-2xl border-2 border-white/10 flex items-center justify-between group hover:bg-yellow-400 hover:text-black transition-all cursor-default"
                >
                  <span className="font-mono text-[10px] font-black uppercase tracking-widest opacity-60 group-hover:opacity-100">{niche}</span>
                  <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-12 border-t-4 border-white/10 flex flex-col md:flex-row items-center justify-between gap-8">
          <p className="font-mono text-[10px] font-black uppercase tracking-widest opacity-40">
            © 2026 Entrext Labs. All rights reserved. Built for the next generation.
          </p>
          <div className="flex items-center gap-8">
            <a href="#" className="font-mono text-[10px] font-black uppercase tracking-widest opacity-40 hover:text-yellow-400">Privacy Policy</a>
            <a href="#" className="font-mono text-[10px] font-black uppercase tracking-widest opacity-40 hover:text-yellow-400">Terms of Service</a>
            <div className="bg-yellow-400 text-black px-6 py-2 rounded-lg font-mono text-[10px] font-black border-2 border-black shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)]">
              SYSTEM_STATUS: OPTIMAL
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
