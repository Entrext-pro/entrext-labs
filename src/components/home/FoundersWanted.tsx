import React from 'react';
import { motion } from 'motion/react';
import { Code2, Megaphone, Palette, Rocket, ArrowRight, ShieldCheck, Zap, Users, ChevronDown } from 'lucide-react';

export const FoundersWanted = () => {
  const roles = [
    {
      title: "AI Founding Engineers",
      icon: <Code2 size={32} />,
      desc: "Architects deeply rooted in technology who build from 0 to 1 using AI leverage.",
      link: "https://tally.so/r/dW6V0o"
    },
    {
      title: "Founding Content Creators",
      icon: <Palette size={32} />,
      desc: "Visionaries who bridge the gap between product and audience through storytelling.",
      link: "https://tally.so/r/81Kyoo"
    },
    {
      title: "Founding Build in Public Devs",
      icon: <Zap size={32} />,
      desc: "Developers who thrive in transparency and build the next era of micro-SaaS in public.",
      link: "https://tally.so/r/RG0aGv"
    }
  ];

  return (
    <section className="py-32 md:py-56 px-6 bg-yellow-400 relative z-10 border-t-8 border-black overflow-hidden">
      {/* Background Flow Elements */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none select-none">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(5)].map((_, i) => (
            <span key={i} className="text-[15rem] font-display uppercase italic font-black leading-none mr-20">FOUNDERS_NOT_EMPLOYEES</span>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row gap-24 items-start">
          <div className="flex-1 space-y-12">
            <div className="inline-block bg-black text-white px-5 py-2 rounded-lg font-mono text-[10px] font-black uppercase tracking-[0.3em] border-4 border-black shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)]">
              THE_PARTNERSHIP
            </div>
            <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-[8rem] font-display uppercase italic font-black leading-[0.9] md:leading-[0.8] tracking-tighter">
              WE ARE NOT <br />
              LOOKING FOR <br />
              <span className="text-white drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">EMPLOYEES.</span>
            </h2>
            
            <div className="space-y-10 max-w-2xl">
              <p className="text-xl sm:text-3xl md:text-5xl font-black leading-tight tracking-tight">
                We are looking for Founders.
              </p>
              <p className="text-base md:text-xl font-bold leading-tight opacity-80">
                Entrext is not a corporate, hierarchical company. We don’t work that way. We are an <span className="text-black underline decoration-4 underline-offset-4">ownership-driven company</span>. 
              </p>
              <p className="text-base md:text-xl font-bold leading-tight opacity-80">
                We believe in building, owning, and taking responsibility—that’s how we operate. Most of what we do is deeply rooted in technology. This is where founders come into play.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-10">
              <div className="flex items-center gap-4 p-6 bg-black text-white rounded-2xl border-4 border-black shadow-[6px_6px_0px_0px_rgba(255,255,255,0.1)]">
                <ShieldCheck className="text-yellow-400 shrink-0" size={32} />
                <span className="font-mono text-xs font-black uppercase tracking-widest">Ownership Driven</span>
              </div>
              <div className="flex items-center gap-4 p-6 bg-white text-black rounded-2xl border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                <Zap className="text-yellow-500 shrink-0" size={32} />
                <span className="font-mono text-xs font-black uppercase tracking-widest">Tech Rooted</span>
              </div>
            </div>

            <div className="pt-10 relative group inline-block">
              <button 
                className="btn-primary px-6 py-4 md:px-12 md:py-6 text-lg md:text-2xl flex items-center gap-6 group"
              >
                START YOUR JOURNEY <ChevronDown size={32} strokeWidth={3} className="group-hover:rotate-180 transition-transform" />
              </button>
              
              {/* Dropdown Menu */}
              <div className="absolute top-full left-0 mt-4 w-80 bg-white border-4 border-black rounded-2xl shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50 overflow-hidden">
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
                    className="block px-8 py-5 text-sm font-black uppercase tracking-widest hover:bg-yellow-400 transition-colors border-b-2 border-black last:border-b-0 text-black"
                  >
                    {role.name}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="flex-1 w-full relative">
            {/* Diagrammatic Flow */}
            <div className="space-y-8 relative">
              {roles.map((role, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => window.location.href = role.link}
                  className="sticker-card bg-white p-8 md:p-10 border-4 border-black shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] relative z-20 cursor-pointer hover:bg-yellow-50 transition-colors group"
                >
                  <div className="flex items-center gap-8">
                    <div className="w-16 h-16 bg-yellow-400 border-4 border-black rounded-xl flex items-center justify-center shrink-0 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] group-hover:rotate-6 transition-transform">
                      {role.icon}
                    </div>
                    <div>
                      <h3 className="text-lg md:text-2xl font-display uppercase italic font-black mb-2 tracking-tight">{role.title}</h3>
                      <p className="text-sm font-bold opacity-60 leading-tight">{role.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}

              <div className="relative py-12 px-10 border-8 border-black bg-black text-white rounded-[3rem] shadow-[15px_15px_0px_0px_rgba(0,0,0,0.2)] overflow-hidden group">
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:rotate-12 transition-transform">
                  <Rocket size={120} strokeWidth={1} />
                </div>
                <div className="relative z-10 space-y-6">
                  <h4 className="text-2xl sm:text-3xl md:text-5xl font-display uppercase italic font-black leading-none tracking-tighter">
                    Own a product. <br />
                    <span className="text-yellow-400">Take a leap of faith.</span>
                  </h4>
                  <p className="text-base md:text-xl font-bold opacity-60 max-w-md">
                    Explore the next era of micro-SaaS with us. Start your entrepreneurial journey today.
                  </p>
                </div>
              </div>

              {/* Connecting Arrows (Visual) */}
              <div className="absolute -left-12 top-0 bottom-0 w-1 border-l-4 border-black/10 border-dashed hidden xl:block" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
