import React from 'react';
import { Linkedin, Instagram } from 'lucide-react';
import { DiscordIcon, SubstackIcon } from '../Icons';

export const CommunitySection = () => (
  <section className="py-32 md:py-56 px-6 bg-yellow-400 text-black relative z-10 border-t-8 border-black">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-xl md:text-2xl font-black uppercase tracking-[0.3em] mb-16 opacity-40">
        Connect with the Lab
      </h2>
      
      <div className="flex flex-wrap justify-center gap-8">
        {[
          { name: "Substack", icon: SubstackIcon, url: "https://entrextlabs.substack.com/subscribe" },
          { name: "LinkedIn", icon: Linkedin, url: "https://www.linkedin.com/company/entrex-labs/" },
          { name: "Instagram", icon: Instagram, url: "https://www.instagram.com/entrext.labs" }
        ].map((social) => (
          <a 
            key={social.name} 
            href={social.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-16 h-16 rounded-xl border-4 border-black flex items-center justify-center bg-white hover:bg-yellow-400 transition-all group shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
          >
            <social.icon size={24} className="text-black transition-colors" />
          </a>
        ))}
      </div>
    </div>
  </section>
);
