"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronDown } from 'lucide-react';
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
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-4 md:px-6 md:py-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between bg-white border-4 border-black rounded-2xl md:rounded-3xl px-6 py-3 md:px-10 md:py-4 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
        <Link href="/" className="flex items-center gap-3 cursor-pointer group">
          <Logo className="w-10 h-10 transition-transform group-hover:rotate-12" />
          <span className="font-display text-2xl md:text-3xl uppercase italic font-black tracking-tighter">Entrext<span className="text-yellow-500">.</span>Labs</span>
        </Link>

        <div className="hidden xl:flex items-center gap-8 text-xs font-black uppercase tracking-widest">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`hover:italic transition-all hover:translate-x-1 ${pathname === link.path ? 'underline underline-offset-8 decoration-4 decoration-yellow-400' : ''}`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <div className="relative group hidden xl:block">
            <button
              className="bg-black text-white px-8 py-3 rounded-xl md:rounded-2xl text-xs font-black uppercase tracking-widest hover:bg-yellow-400 hover:text-black transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)] border-2 border-black flex items-center gap-2"
            >
              Join the Lab
              <ChevronDown size={14} strokeWidth={3} />
            </button>

            {/* Dropdown Menu */}
            <div className="absolute top-full right-0 mt-2 w-72 bg-white border-4 border-black rounded-2xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50 overflow-hidden">
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
                  className="block px-6 py-4 text-[10px] font-black uppercase tracking-widest hover:bg-yellow-400 transition-colors border-b-2 border-black last:border-b-0"
                >
                  {role.name}
                </a>
              ))}
            </div>
          </div>
          <button onClick={() => setIsOpen(!isOpen)} className="xl:hidden text-black">
            {isOpen ? <X size={32} strokeWidth={3} /> : <Menu size={32} strokeWidth={3} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="absolute top-24 left-4 right-4 bg-yellow-400 border-4 border-black rounded-3xl p-8 xl:hidden shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]"
          >
            <div className="flex flex-col gap-6 text-center">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  onClick={() => setIsOpen(false)}
                  className="text-4xl font-display uppercase italic font-black text-black hover:text-white transition-colors"
                >
                  {link.name}
                </Link>
              ))}

              <div className="pt-6 border-t-4 border-black/10 flex flex-col gap-4">
                <p className="font-mono text-[10px] font-black uppercase tracking-[0.2em] opacity-40 mb-2">Join the Lab</p>
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
                    className="bg-black text-white w-full py-4 rounded-xl font-black text-sm uppercase tracking-widest shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)]"
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
