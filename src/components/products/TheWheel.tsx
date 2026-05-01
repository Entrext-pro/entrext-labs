import React from "react";
import { motion } from "motion/react";

const months = [
  "JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE",
  "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER",
];

interface TheWheelProps {
  selectedMonth: string;
  setSelectedMonth: (month: string) => void;
  activeProductsCount: number;
}

export const TheWheel = ({ selectedMonth, setSelectedMonth, activeProductsCount }: TheWheelProps) => {
  const selectedIndex = months.indexOf(selectedMonth);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">
      <div className="space-y-10">
        <div>
          <div className="inline-block bg-black text-white px-5 py-2 rounded-lg font-mono text-[10px] font-black mb-8 border-4 border-black">
            PRODUCT PORTFOLIO · 2026
          </div>
          <h2 className="text-6xl sm:text-8xl md:text-[10rem] font-display uppercase italic font-black leading-[0.8] mb-8 tracking-tighter">
            THE WHEEL.
          </h2>
          <p className="text-xl md:text-2xl font-bold leading-tight opacity-70">
            Month-by-month product visibility across B2B, B2C, and Hybrid/Prosumer layers.
          </p>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-4 gap-3">
          {months.map((month) => (
            <button
              key={month}
              onClick={() => setSelectedMonth(month)}
              className={`px-4 py-3 rounded-xl font-mono text-[10px] font-black uppercase tracking-widest border-4 transition-all ${
                selectedMonth === month ? "bg-black text-white border-black" : "bg-white text-black border-black hover:bg-black hover:text-white"
              }`}
            >
              {month.slice(0, 3)}
            </button>
          ))}
        </div>
      </div>

      <div className="relative flex items-center justify-center">
        <div className="relative w-[300px] h-[300px] sm:w-[420px] sm:h-[420px] md:w-[560px] md:h-[560px]">
          <motion.div
            animate={{ rotate: -selectedIndex * 30 }}
            transition={{ type: "spring", stiffness: 50, damping: 20 }}
            className="absolute inset-0 border-8 border-black rounded-full"
          >
            {months.map((month, i) => {
              const angle = i * 30;
              return (
                <div key={month} className="absolute inset-0 flex justify-center" style={{ transform: `rotate(${angle}deg)` }}>
                  <div className={`w-1 h-8 md:h-12 bg-black/20 mt-4 ${selectedMonth === month ? "h-12 md:h-20 bg-black w-2" : ""}`} />
                  <span className={`absolute top-16 md:top-24 font-display text-lg md:text-3xl uppercase italic font-black ${selectedMonth === month ? "text-black scale-110" : "text-black/10"}`}>
                    {month.slice(0, 3)}
                  </span>
                </div>
              );
            })}
          </motion.div>

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 bg-white rounded-full border-8 border-black flex flex-col items-center justify-center">
              <span className="font-mono text-[10px] font-black text-black/40 mb-2 tracking-[0.3em]">ACTIVE MONTH</span>
              <span className="text-5xl sm:text-6xl md:text-[7rem] font-display uppercase italic font-black text-black leading-none">
                {selectedMonth.slice(0, 3)}
              </span>
              <div className="mt-5 bg-yellow-400 text-black px-5 py-2 rounded-lg font-mono text-[10px] font-black border-4 border-black">
                {activeProductsCount} PRODUCTS
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

