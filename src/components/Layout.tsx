import React from 'react';
import { useLocation } from 'react-router-dom';
import { motion, useScroll, useSpring } from 'motion/react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const { scrollYProgress } = useScroll();
  const location = useLocation();
  const isHome = location.pathname === '/';
  
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen bg-yellow-400 text-black font-bold selection:bg-black selection:text-yellow-400">
      <div className="grainy-overlay" />
      <div className="fixed top-0 left-0 w-full h-2 bg-black z-[100]" />
      {!isHome && <Navbar />}
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
};
