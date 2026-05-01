"use client";

import React from "react";
import { motion, useScroll, useSpring } from "motion/react";

export const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-2 bg-black z-[100] origin-left"
      style={{ scaleX }}
    >
      <div className="absolute top-0 left-0 right-0 h-full bg-yellow-400 opacity-50 blur-sm" />
    </motion.div>
  );
};
