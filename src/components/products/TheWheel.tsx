import React from 'react';
import { motion } from 'motion/react';

const months = [
  "JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE",
  "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"
];

interface TheWheelProps {
  selectedMonth: string;
  setSelectedMonth: (month: string) => void;
  activeProductsCount: number;
}

export const TheWheel = ({ selectedMonth, setSelectedMonth, activeProductsCount }: TheWheelProps) => {
  const selectedIndex = months.indexOf(selectedMonth);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-32 items-center">
      <div className="space-y-10 md:space-y-16">
        <div>
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="inline-block bg-black text-white px-6 py-2 rounded-lg font-mono text-xs font-black mb-10 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)]"
          >
            MISSION_ARCHIVE: 2026_PRODUCTS
          </motion.div>
          <h2 className="text-6xl sm:text-8xl md:text-[10rem] font-display uppercase italic font-black leading-[0.8] mb-10 tracking-tighter">
            THE <br /> <span className="text-white">WHEEL.</span>
          </h2>
          <p className="text-xl md:text-3xl font-bold leading-tight opacity-60">
            12 Months. 200 Missions. <br />
            <span className="text-black underline decoration-4 underline-offset-8">Zero excuses. Just drops. ⚡️</span>
          </p>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
          {months.map((month) => (
            <button
              key={month}
              onClick={() => setSelectedMonth(month)}
              className={`
                px-4 py-3 rounded-xl font-mono text-[10px] font-black uppercase tracking-widest border-4 transition-all
                ${selectedMonth === month 
                  ? 'bg-black text-white border-black shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)]' 
                  : 'bg-white text-black border-black hover:bg-yellow-400'}
              `}
            >
              {month.slice(0, 3)}
            </button>
          ))}
        </div>
      </div>

      <div className="relative flex items-center justify-center">
        <div className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[600px] md:h-[600px]">
          <motion.div 
            animate={{ rotate: -selectedIndex * 30 }}
            transition={{ type: "spring", stiffness: 50, damping: 20 }}
            className="absolute inset-0 border-8 border-black rounded-full shadow-[16px_16px_0px_0px_rgba(0,0,0,0.1)]"
          >
            {months.map((month, i) => {
              const angle = i * 30;
              return (
                <div 
                  key={month}
                  className="absolute inset-0 flex justify-center"
                  style={{ transform: `rotate(${angle}deg)` }}
                >
                  <div className={`
                    w-1 h-8 md:h-12 bg-black/20 mt-4 transition-all
                    ${selectedMonth === month ? 'h-12 md:h-20 bg-black w-2' : ''}
                  `} />
                  <span className={`
                    absolute top-16 md:top-24 font-display text-lg md:text-4xl uppercase italic font-black transition-all
                    ${selectedMonth === month ? 'text-black scale-125' : 'text-black/10'}
                  `}>
                    {month.slice(0, 3)}
                  </span>
                </div>
              );
            })}
          </motion.div>

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 bg-white rounded-full border-8 border-black shadow-[16px_16px_0px_0px_rgba(0,0,0,0.1)] flex flex-col items-center justify-center relative overflow-hidden">
              <motion.div 
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="relative z-10 flex flex-col items-center"
              >
                <span className="font-mono text-[10px] font-black text-black/40 mb-2 tracking-[0.5em]">ACTIVE_MONTH</span>
                <span className="text-5xl sm:text-6xl md:text-[7rem] font-display uppercase italic font-black text-black leading-none">{selectedMonth.slice(0, 3)}</span>
                <div className="mt-6 bg-yellow-400 text-black px-6 py-2 rounded-lg font-mono text-[10px] font-black border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)]">
                  {activeProductsCount} DROPS_DETECTED
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
