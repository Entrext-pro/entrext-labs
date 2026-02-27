import React from 'react';

export const Logo = ({ className = "w-10 h-10" }: { className?: string }) => (
  <div className={`${className} bg-black rounded-xl flex items-center justify-center overflow-hidden border-4 border-black shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)]`}>
    <img
      src="/Entrext.png"
      alt="Entrext Labs Logo"
      className="w-full h-full object-contain p-1"
    />
  </div>
);
