"use client";

import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion, useScroll, useSpring } from 'motion/react';
import { Rocket } from 'lucide-react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { LegalModal } from './FAQ';

const ScrollToTop = () => {
    const pathname = usePathname();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return null;
};

const BackToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 500) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    initial={{ opacity: 0, scale: 0.5, y: 50 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.5, y: 50 }}
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="fixed bottom-8 right-8 z-[60] w-14 h-14 bg-electric-cyan text-black rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(0,245,255,0.3)] hover:scale-110 transition-all group border border-white/20"
                >
                    <Rocket size={24} className="group-hover:-translate-y-1 transition-transform" />
                </motion.button>
            )}
        </AnimatePresence>
    );
};

export const ClientLayout = ({ children }: { children: React.ReactNode }) => {
    const pathname = usePathname();
    const { scrollYProgress } = useScroll();
    const [legalType, setLegalType] = useState<'privacy' | 'terms' | null>(null);

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <div className="min-h-screen bg-black text-white selection:bg-electric-cyan selection:text-black">
            <ScrollToTop />
            <div className="grainy-overlay opacity-30" />
            
            {/* Scroll Progress Bar */}
            <motion.div 
                className="fixed top-0 left-0 right-0 h-1 bg-electric-cyan z-[100] origin-left"
                style={{ scaleX }}
            />

            <Navbar />
            <main>
                {children}
            </main>
            <Footer />
            <BackToTop />
            
            <AnimatePresence>
                {legalType && (
                    <LegalModal type={legalType} onClose={() => setLegalType(null)} />
                )}
            </AnimatePresence>
        </div>
    );
};
