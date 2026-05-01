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
      <div className="max-w-7xl mx-auto flex items-center justify-between bg-white border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] px-6 py-4 md:px-10">
        <Link href="/" className="flex items-center gap-3 cursor-pointer group">
          <Logo className="w-10 h-10 transition-transform group-hover:rotate-12" />
          <span className="font-display text-2xl md:text-3xl uppercase font-black tracking-tighter text-black">
            Entrext<span className="text-yellow-500">.</span>Labs
          </span>
        </Link>

        <div className="hidden xl:flex items-center gap-10 text-xs font-black uppercase tracking-[0.2em] text-black">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`hover:text-yellow-600 transition-colors relative group ${pathname === link.path ? 'text-black' : 'text-black/60'}`}
            >
              {link.name}
              <span className={`absolute -bottom-1 left-0 w-0 h-1 bg-black transition-all group-hover:w-full ${pathname === link.path ? 'w-full' : ''}`} />
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <div className="relative group hidden xl:block">
            <button
              className="bg-black text-white px-8 py-3 border-4 border-black text-xs font-black uppercase tracking-widest hover:bg-yellow-400 hover:text-black transition-all shadow-[6px_6px_0px_0px_rgba(0,0,0,0.2)] flex items-center gap-2 active:translate-x-1 active:translate-y-1 active:shadow-none"
            >
              Join the Lab
              <ChevronDown size={14} strokeWidth={3} />
            </button>

            {/* Dropdown Menu */}
            <div className="absolute top-[calc(100%+12px)] right-0 w-80 bg-white border-4 border-black shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50 overflow-hidden">
              {[
                { name: "Apply as Primary Partner", link: "https://tally.so/r/dW6V0o", icon: Beaker, color: "text-yellow-500" },
                { name: "Apply as Secondary Partner", link: "https://tally.so/r/81Kyoo", icon: Rocket, color: "text-black" }
              ].map((role) => (
                <a
                  key={role.name}
                  href={role.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 px-8 py-6 text-[10px] font-black uppercase tracking-widest hover:bg-yellow-400 transition-colors border-b-4 border-black last:border-b-0 group/item"
                >
                  <role.icon className={`${role.color} group-hover/item:scale-110 transition-transform`} size={20} strokeWidth={3} />
                  <span className="group-hover/item:translate-x-1 transition-transform">{role.name}</span>
                </a>
              ))}
            </div>
          </div>
          <button onClick={() => setIsOpen(!isOpen)} className="xl:hidden text-black">
            {isOpen ? <X size={28} strokeWidth={3} /> : <Menu size={28} strokeWidth={3} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-24 left-4 right-4 bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-8 xl:hidden z-50"
          >
            <div className="flex flex-col gap-8 text-center">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-4xl font-display uppercase font-black transition-colors ${pathname === link.path ? 'text-black' : 'text-black/30'}`}
                >
                  {link.name}
                </Link>
              ))}

              <div className="pt-8 border-t-4 border-black flex flex-col gap-4">
                <p className="font-mono text-[10px] font-black uppercase tracking-[0.4em] text-black/30 mb-2">Join the Lab</p>
                {[
                  { name: "Apply as Primary", link: "https://tally.so/r/dW6V0o", bg: "bg-black", text: "text-white" },
                  { name: "Apply as Secondary", link: "https://tally.so/r/yellow-400", bg: "bg-yellow-400", text: "text-black" }
                ].map((role) => (
                  <a
                    key={role.name}
                    href={role.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${role.bg} ${role.text} w-full py-5 border-4 border-black font-black text-xs uppercase tracking-widest shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]`}
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
