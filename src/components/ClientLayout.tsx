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
            if (window.pageYOffset > 500) {
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
                    className="fixed bottom-8 right-8 z-[60] w-16 h-16 bg-yellow-400 border-4 border-black rounded-full flex items-center justify-center shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all group"
                >
                    <Rocket size={28} className="group-hover:-translate-y-1 transition-transform" />
                </motion.button>
            )}
        </AnimatePresence>
    );
};

export const ClientLayout = ({ children }: { children: React.ReactNode }) => {
    const pathname = usePathname();
    const isHome = pathname === '/';
    const { scrollYProgress } = useScroll();
    const [legalType, setLegalType] = useState<'privacy' | 'terms' | null>(null);

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <div className="min-h-screen bg-yellow-400 text-black font-bold selection:bg-black selection:text-yellow-400">
            <ScrollToTop />
            <div className="grainy-overlay" />
            <div className="fixed top-0 left-0 w-full h-2 bg-black z-[100]" />
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
