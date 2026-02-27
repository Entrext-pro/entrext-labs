"use client";

import React from 'react';
import { motion } from 'motion/react';
import { Plus } from 'lucide-react';
import { Manifesto } from '../components/teams/Manifesto';

const teams = [
  {
    id: "00",
    name: "Founder & Startup Infra",
    members: "Mohit & Manthan",
    focus: "Building a 'company operating system' that removes friction from starting, running, and scaling a business.",
    color: "bg-yellow-100",
    tag: "CORE_SYSTEM"
  },
  {
    id: "01",
    name: "AI, Workflows & Automations",
    members: "Taha, Ikshit",
    focus: "Developing mission-critical AI applications, automations, and workflows specifically designed for B2B efficiency.",
    color: "bg-blue-100",
    tag: "AI_ENGINE"
  },
  {
    id: "02",
    name: "Outcome-Based Education",
    members: "Aryan, Disha",
    focus: "Replacing passive learning with risk reduction and guaranteed results for career pivots and income-linked skills.",
    color: "bg-emerald-100",
    tag: "EDTECH_LAB"
  },
  {
    id: "03",
    name: "Relationships & Emotional Tech",
    members: "Garv, Hitanshi, Tarasha",
    focus: "Creating emotional support systems providing guidance for self-awareness, conflict resolution, and social confidence.",
    color: "bg-purple-100",
    tag: "HUMAN_STACK"
  },
  {
    id: "04",
    name: "Pet Economy & Wellness",
    members: "Komal, Vinayak, Surya",
    focus: "Treating pets as family members through AI-driven personalized nutrition and health monitoring.",
    color: "bg-orange-100",
    tag: "PET_TECH"
  }
];

export const Teams = () => {
  return (
    <div className="pt-24 pb-32 bg-yellow-400">
      <section className="py-32 md:py-56 px-6 max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-32 md:mb-48 gap-16">
          <div className="max-w-4xl">
            <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-[8rem] font-display uppercase italic font-black leading-[0.9] md:leading-[0.8] mb-10 tracking-tighter">The Teams.</h2>
            <p className="text-base md:text-xl font-bold leading-tight max-w-2xl mt-10 opacity-60">
              5 elite units. 5 distinct missions.
              <span className="text-black underline decoration-2 underline-offset-4"> One common goal: High-velocity production.</span>
            </p>
          </div>
          <div className="bg-black text-white p-8 md:p-10 rounded-2xl shadow-[6px_6px_0px_0px_rgba(0,0,0,0.2)] self-start md:self-auto border-4 border-black">
            <p className="font-mono text-[8px] font-black uppercase tracking-widest mb-2 opacity-40">Capacity</p>
            <p className="text-xl md:text-3xl font-display uppercase italic font-black">Full Strength</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 mb-56">
          {teams.map((team, i) => (
            <motion.div
              key={team.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10, rotate: i % 2 === 0 ? 1 : -1 }}
              className="sticker-card p-6 md:p-10 lg:p-14 flex flex-col h-full relative group bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
            >
              <div className="flex items-center justify-between mb-12">
                <div className="w-16 h-16 bg-yellow-400 border-4 border-black rounded-xl flex items-center justify-center font-display text-3xl font-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                  {team.id}
                </div>
                <div className="bg-black text-white px-5 py-2 rounded-full font-mono text-[8px] font-black uppercase tracking-widest shadow-lg">
                  {team.tag}
                </div>
              </div>

              <h3 className="text-2xl md:text-4xl font-display uppercase italic font-black mb-10 leading-[0.9] md:leading-[0.8] tracking-tighter">{team.name}</h3>

              <div className="space-y-10 flex-1">
                <div>
                  <p className="font-mono text-[8px] font-black uppercase tracking-widest opacity-40 mb-4">Personnel</p>
                  <p className="text-xl md:text-2xl font-black">{team.members}</p>
                </div>
                <div>
                  <p className="font-mono text-[8px] font-black uppercase tracking-widest opacity-40 mb-4">Mission Focus</p>
                  <p className="text-base md:text-lg font-bold leading-tight opacity-60">{team.focus}</p>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t-4 border-black flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-emerald-400 rounded-full border-2 border-black animate-pulse" />
                  <span className="font-mono text-[8px] font-black uppercase tracking-widest opacity-40">DEPLOYED_ACTIVE</span>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Join Team Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="sticker-card bg-black text-white p-6 md:p-10 lg:p-14 flex flex-col items-center justify-center text-center h-full min-h-[450px] border-4 border-black group shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]"
          >
            <div className="w-24 h-24 bg-yellow-400 text-black rounded-full flex items-center justify-center mb-10 group-hover:rotate-90 transition-transform shadow-[6px_6px_0px_0px_rgba(255,255,255,0.1)] border-4 border-black">
              <Plus size={48} strokeWidth={4} />
            </div>
            <h3 className="text-2xl sm:text-3xl md:text-5xl font-display uppercase italic font-black mb-8 tracking-tighter">JOIN AS A FOUNDER?</h3>
            <p className="text-base md:text-xl font-black uppercase tracking-widest opacity-40 max-w-[250px] mb-10">We are looking for owners, not employees.</p>

            <div className="flex flex-col gap-4 w-full max-w-xs">
              {[
                { name: "Founding AI Engineer", link: "https://tally.so/r/dW6V0o" },
                { name: "Founding Content Creator", link: "https://tally.so/r/81Kyoo" },
                { name: "Founding Build in Public Dev", link: "https://tally.so/r/RG0aGv" }
              ].map((role) => (
                <a
                  key={role.name}
                  href={role.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-black px-6 py-4 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-yellow-400 transition-all border-4 border-black shadow-[4px_4px_0px_0px_rgba(255,255,255,0.1)]"
                >
                  {role.name}
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        <Manifesto />
      </section>
    </div>
  );
};

