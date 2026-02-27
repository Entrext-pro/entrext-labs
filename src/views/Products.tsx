"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Terminal, ArrowUpRight } from 'lucide-react';
import { TheWheel } from '../components/products/TheWheel';

const months = [
  "JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE",
  "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"
];

const allProductsByMonth: Record<string, any[]> = {
  "JANUARY": [
    { name: "Secretroom", desc: "Ephemeral anonymous chat service. No signups, no history, just vibes.", url: "secretroom.entrext.in", team: "04", builder: "Team 4: Komal, Vinayak, Surya", niche: "Social" },
    { name: "ReTone", desc: "AI-powered text tone optimizer for perfect message context.", url: "retone.entrext.in", team: "03", builder: "Team 3: Garv, Hitanshi, Tarasha", niche: "AI Productivity" },
    { name: "Unpuzzle", desc: "Physics-based gymnasium for the mind. Stress-test your spatial reasoning.", url: "unpuzzle.entrext.in", team: "02", builder: "Team 2: Aryan, Disha", niche: "Gaming/EdTech" },
    { name: "PayShot", desc: "Turn chat screenshots into professional invoices automatically.", url: "payshot.entrext.in", team: "03", builder: "Team 3: Garv, Hitanshi, Tarasha", niche: "FinTech" },
    { name: "EditFlow", desc: "Weekly planner for editing teams. Visibility for every frame.", url: "editflow.entrext.in", team: "04", builder: "Team 4: Komal, Vinayak, Surya", niche: "SaaS" },
    { name: "Soho Space", desc: "Marketplace connecting visionary founders with elite growth partners.", url: "sohospace.entrext.in", team: "02", builder: "Team 2: Aryan, Disha", niche: "Marketplace" },
    { name: "TouchGrass", desc: "Daily outdoor habit app. Stay active, stay accountable, go outside.", url: "touchgrass.entrext.com", team: "00", builder: "Team 0: Mohit & Manthan", niche: "Health/Wellness" },
    { name: "Introbuddy", desc: "AI-powered hiring platform that automates first-round interviews.", url: "introbuddy.entrext.com", team: "01", builder: "Team 1: Taha, Ikshit", niche: "HRTech" },
    { name: "BabySimple", desc: "AI text simplification tool for jargon-filled corporate language.", url: "babysimple.entrext.in", team: "04", builder: "Team 4: Komal, Vinayak, Surya", niche: "AI Productivity" },
    { name: "Upvote", desc: "Simple feedback and voting tool for business owners.", url: "upvote.entrext.com", team: "01", builder: "Team 1: Taha, Ikshit", niche: "SaaS" },
    { name: "Reword", desc: "AI-powered content repurposing tool for creators and marketers.", url: "reword.entrext.com", team: "00", builder: "Team 0: Mohit & Manthan", niche: "Creator Economy" },
    { name: "Mistrategist", desc: "Turn-based stealth game. Plan, execute, and infiltrate.", url: "mistrategist.entrext.com", team: "02", builder: "Team 2: Aryan, Disha", niche: "Gaming" },
    { name: "ListenDrift", desc: "Speech analysis and attention-tracking for presenters.", url: "listendrift.entrext.com", team: "05", builder: "Team 5 Builders", niche: "Analytics" },
    { name: "Spy", desc: "Market Intelligence platform for the dropshipping community.", url: "pickspy.entrext.com", team: "02", builder: "Team 2: Aryan, Disha", niche: "E-commerce" }
  ],
  "FEBRUARY": [
    { name: "PawNote", desc: "Never forget your vet's instructions. Prepare and track pet care.", url: "pawnote.entrext.com", team: "04", builder: "Team 4: Komal, Vinayak, Surya", niche: "PetTech" },
    { name: "Vouched", desc: "Collect and display testimonials everywhere with zero friction.", url: "vouched.entrext.com", team: "03", builder: "Team 3: Garv, Hitanshi, Tarasha", niche: "Marketing" },
    { name: "Chronos", desc: "High-velocity time management for production teams.", url: "chronos.entrext.com", team: "02", builder: "Team 2: Aryan, Disha", niche: "Productivity" },
    { name: "Nurturely", desc: "Automated customer nurture loops for small businesses.", url: "nurturely.entrext.com", team: "02", builder: "Team 2: Aryan, Disha", niche: "SaaS" },
    { name: "FutureFit", desc: "FutureFit is an AI engine that predicts your future career paths from your habits and goals.", url: "futurefit.entrext.com", team: "02", builder: "Team 2: Aryan, Disha", niche: "Career Planning" },
    { name: "PetVault", desc: "Secure digital storage for all your pet's medical records.", url: "petvault.entrext.com", team: "04", builder: "Team 4: Komal, Vinayak, Surya", niche: "PetTech" },
    { name: "BuildInPublic", desc: "The ultimate OS for building and sharing in public.", url: "buildinpublic.entrext.com", team: "00", builder: "Team 0: Mohit & Manthan", niche: "Creator Economy" },
    { name: "SoloPilot", desc: "AI co-pilot for solo entrepreneurs managing multiple projects.", url: "solopilot.entrext.com", team: "04", builder: "Team 4: Komal, Vinayak, Surya", niche: "AI SaaS" },
    { name: "InviteFlow", desc: "Seamless event invitation and guest management system.", url: "inviteflow.entrext.com", team: "01", builder: "Team 1: Taha, Ikshit", niche: "EventTech" },
    { name: "SubSafe", desc: "Track and manage all your recurring subscriptions in one place.", url: "subsafe.entrext.com", team: "01", builder: "Team 1: Taha, Ikshit", niche: "FinTech" }
  ],
};

export const Products = () => {
  const [selectedMonth, setSelectedMonth] = useState("JANUARY");
  const activeProducts = allProductsByMonth[selectedMonth] || [];
  const selectedIndex = months.indexOf(selectedMonth);

  return (
    <div className="pt-24 pb-32 bg-yellow-400">
      <section id="products" className="py-32 md:py-56 relative z-10 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none select-none">
          <div className="flex animate-marquee whitespace-nowrap">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-[8rem] md:text-[15rem] font-display uppercase italic font-black leading-none mr-40">PRODUCTION_PRODUCTS_2026</span>
            ))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-20">
          <TheWheel
            selectedMonth={selectedMonth}
            setSelectedMonth={setSelectedMonth}
            activeProductsCount={activeProducts.length}
          />

          <div className="mt-40">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedMonth}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-16"
              >
                {activeProducts.length > 0 ? (
                  activeProducts.map((p, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ y: -10, rotate: i % 2 === 0 ? 1 : -1 }}
                      className="sticker-card p-10 flex flex-col h-full relative group bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
                    >
                      <div className="absolute top-0 right-0 bg-black text-yellow-400 px-5 py-2 border-b-4 border-l-4 border-black font-display uppercase italic font-black text-xs">
                        {p.niche}
                      </div>

                      <div className="mb-12">
                        <div className="font-mono text-[8px] font-black uppercase tracking-widest opacity-40 mb-4">Team_{p.team}</div>
                        <h3 className="text-xl md:text-3xl font-display uppercase italic font-black leading-[0.9] md:leading-[0.8] mb-8 tracking-tighter">{p.name}</h3>
                        <p className="text-base md:text-lg font-bold leading-tight opacity-60">{p.desc}</p>
                      </div>

                      <div className="mt-auto pt-8 border-t-4 border-black flex items-center justify-between">
                        <div className="space-y-2">
                          <p className="font-mono text-[8px] font-black uppercase tracking-widest opacity-40">{p.url}</p>
                          <div className="flex items-center gap-2">
                            <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-black" />
                            <p className="text-[10px] font-black uppercase">Built by: <span className="text-black underline decoration-2">{p.builder.split(':')[0]}</span></p>
                          </div>
                        </div>
                        <a
                          href={`https://${p.url}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-14 h-14 bg-black text-white rounded-xl flex items-center justify-center hover:bg-yellow-400 hover:text-black transition-all border-4 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,0.2)]"
                        >
                          <ArrowUpRight size={24} strokeWidth={3} />
                        </a>
                      </div>
                    </motion.div>
                  ))
                ) : (
                  <div className="col-span-full py-48 border-8 border-dashed border-black/10 rounded-[3rem] flex flex-col items-center justify-center text-center">
                    <div className="w-24 h-24 bg-black/5 rounded-full flex items-center justify-center mb-8">
                      <Terminal className="text-black/10" size={48} />
                    </div>
                    <h3 className="text-2xl sm:text-3xl md:text-5xl font-display uppercase italic font-black text-black/10 tracking-tighter">System Idle.</h3>
                    <p className="font-black text-black/5 mt-4 uppercase tracking-[0.5em] text-lg">Awaiting deployment for {selectedMonth} 2026</p>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>
    </div>
  );
};
