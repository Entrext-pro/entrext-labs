"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronDown, Beaker, Rocket } from 'lucide-react';
import { Logo } from './Logo';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Teams', path: '/teams' },
    { name: 'Niches', path: '/niches' },
    { name: 'Products', path: '/products' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-4 md:px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between lab-card px-6 py-3 md:px-8 border-white/10">
        <Link href="/" className="flex items-center gap-3 cursor-pointer group">
          <Logo className="w-10 h-10 transition-transform group-hover:rotate-12" />
          <span className="font-display text-2xl md:text-3xl uppercase font-black tracking-tighter">Entrext<span className="text-electric-cyan">.</span>Labs</span>
        </Link>

        <div className="hidden xl:flex items-center gap-10 text-xs font-black uppercase tracking-widest">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`hover:text-electric-cyan transition-colors relative group ${pathname === link.path ? 'text-electric-cyan' : 'text-white/70'}`}
            >
              {link.name}
              <span className={`absolute -bottom-1 left-0 w-0 h-px bg-electric-cyan transition-all group-hover:w-full ${pathname === link.path ? 'w-full' : ''}`} />
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <div className="relative group hidden xl:block">
            <button
              className="bg-electric-cyan text-black px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-widest hover:scale-105 transition-all shadow-[0_0_15px_rgba(0,245,255,0.3)] flex items-center gap-2"
            >
              Apply to Lab
              <ChevronDown size={14} strokeWidth={3} />
            </button>

            {/* Dropdown Menu */}
            <div className="absolute top-full right-0 mt-4 w-72 bg-obsidian-light border border-white/10 rounded-2xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50 overflow-hidden backdrop-blur-xl">
              {[
                { name: "Apply as Primary Partner", link: "https://tally.so/r/dW6V0o", icon: Beaker, color: "text-neon-lime" },
                { name: "Apply as Secondary Partner", link: "https://tally.so/r/81Kyoo", icon: Rocket, color: "text-electric-cyan" }
              ].map((role) => (
                <a
                  key={role.name}
                  href={role.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 px-6 py-5 text-[10px] font-black uppercase tracking-widest hover:bg-white/5 transition-colors border-b border-white/5 last:border-b-0 group/item"
                >
                  <role.icon className={`${role.color} group-hover/item:scale-110 transition-transform`} size={18} />
                  <span className="group-hover/item:translate-x-1 transition-transform">{role.name}</span>
                </a>
              ))}
            </div>
          </div>
          <button onClick={() => setIsOpen(!isOpen)} className="xl:hidden text-white">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-24 left-4 right-4 lab-card p-8 xl:hidden border-white/20 bg-obsidian-light/95"
          >
            <div className="flex flex-col gap-8 text-center">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-4xl font-display uppercase font-black transition-colors ${pathname === link.path ? 'text-electric-cyan' : 'text-white'}`}
                >
                  {link.name}
                </Link>
              ))}

              <div className="pt-8 border-t border-white/10 flex flex-col gap-4">
                <p className="font-mono text-[10px] font-black uppercase tracking-[0.4em] text-white/30 mb-2">Join the Lab</p>
                {[
                  { name: "Apply as Primary", link: "https://tally.so/r/dW6V0o", bg: "bg-neon-lime", text: "text-black" },
                  { name: "Apply as Secondary", link: "https://tally.so/r/81Kyoo", bg: "bg-electric-cyan", text: "text-black" }
                ].map((role) => (
                  <a
                    key={role.name}
                    href={role.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${role.bg} ${role.text} w-full py-4 rounded-full font-black text-xs uppercase tracking-widest shadow-lg`}
                  >
                    {role.name}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
