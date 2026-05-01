"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Manifesto } from "../components/teams/Manifesto";
import { siteContent } from "@/data/siteContent";
import { ChevronRight, Linkedin, ArrowRight } from "lucide-react";

interface Member {
  name: string;
  role: "TECH FOUNDER" | "GROWTH FOUNDER" | "BUILD IN PUBLIC DEV";
  bio: string;
  linkedin: string;
  image?: string;
}

interface Team {
  id: string;
  members: Member[];
}

const liSearch = (name: string) => `https://www.linkedin.com/search/results/all/?keywords=${encodeURIComponent(name)}`;

const teams: Team[] = [
  {
    id: "00",
    members: [
      {
        name: "Mohit Sharma",
        role: "TECH FOUNDER",
        bio: "One of the earliest builders in the lab. Shipped 3+ products and helped scale one further with a growth partner.",
        linkedin: liSearch("Mohit Sharma"),
        image: "/team_member_avatars_1777096127078.png"
      },
      {
        name: "Youssef Hassan",
        role: "GROWTH FOUNDER",
        bio: "Runs Build in Public on X with strong audience-building instincts and distribution focus.",
        linkedin: liSearch("Youssef Hassan"),
        image: "/founder_avatars_2_1777096147260.png"
      },
    ],
  },
  {
    id: "01",
    members: [
      {
        name: "Taha Sadikot",
        role: "TECH FOUNDER",
        bio: "One of the first people in the lab, leading deep technical builds with clarity.",
        linkedin: liSearch("Taha Sadikot"),
      },
      {
        name: "Ikshit Talera",
        role: "TECH FOUNDER",
        bio: "Backbone of Team 01 output. Co-owns Upvote and Guava with strong product, support, and SEO ownership.",
        linkedin: liSearch("Ikshit Talera"),
      },
      {
        name: "Ashish Sharma",
        role: "TECH FOUNDER",
        bio: "High-focus builder who ships clean and adds strong technical depth.",
        linkedin: liSearch("Ashish Sharma"),
      },
      {
        name: "Hitender Sharma",
        role: "GROWTH FOUNDER",
        bio: "Growth owner on Upvote with deep SEO-driven distribution work.",
        linkedin: liSearch("Hitender Sharma"),
      },
      {
        name: "Ranim Guani",
        role: "GROWTH FOUNDER",
        bio: "Former agency founder from UAE, now co-building Guava with strong founder energy.",
        linkedin: liSearch("Ranim Guani"),
      },
    ],
  },
  {
    id: "02",
    members: [
      {
        name: "Aryan Sagavekar",
        role: "TECH FOUNDER",
        bio: "Hardworking builder with a knack for extracting strong product ideas from sharp problem statements.",
        linkedin: liSearch("Aryan Sagavekar"),
      },
      {
        name: "Disha Gupta",
        role: "TECH FOUNDER",
        bio: "Punctual, fast, and ownership-first. If it's in Disha's hands, it gets done.",
        linkedin: liSearch("Disha Gupta"),
      },
    ],
  },
  {
    id: "03",
    members: [
      {
        name: "Garv Thakral",
        role: "TECH FOUNDER",
        bio: "Turns deep tech obsession into product ideas in emotional wellness categories.",
        linkedin: liSearch("Garv Thakral"),
      },
      {
        name: "Janet Yee",
        role: "GROWTH FOUNDER",
        bio: "US-based founder with strong marketing/media instincts leading Team 03 growth direction.",
        linkedin: liSearch("Janet Yee"),
      },
    ],
  },
  {
    id: "04",
    members: [
      {
        name: "Komal Siddharth",
        role: "TECH FOUNDER",
        bio: "High-velocity builder and natural team lead for Team 04.",
        linkedin: liSearch("Komal Siddharth"),
      },
      {
        name: "Tirth Patel",
        role: "TECH FOUNDER",
        bio: "Fast-learning builder, active contributor, and strong team player.",
        linkedin: liSearch("Tirth Patel"),
      },
      {
        name: "Anurag Prajapati",
        role: "TECH FOUNDER",
        bio: "Solid technical foundations with a clear builder mindset.",
        linkedin: liSearch("Anurag Prajapati"),
      },
      {
        name: "Akash Bauri",
        role: "TECH FOUNDER",
        bio: "Punctual AI founding engineer with high-variance product thinking.",
        linkedin: liSearch("Akash Bauri"),
      },
      {
        name: "Surya Pranav",
        role: "TECH FOUNDER",
        bio: "Build-in-public practitioner with strong execution habits.",
        linkedin: liSearch("Surya Pranav"),
      },
      {
        name: "Aisha Abahi",
        role: "GROWTH FOUNDER",
        bio: "Growth partner on Editflow, owning branding and Build in Public presence on X.",
        linkedin: liSearch("Aisha Abahi"),
      },
    ],
  },
];

const MemberCard = ({ member, index }: { member: Member; index: number }) => {
  const tilt = ["rotate-1", "-rotate-1", "rotate-2", "-rotate-2"][index % 4];
  
  return (
    <motion.article
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className={`min-w-[320px] md:min-w-[400px] sticker-card p-6 flex flex-col bg-white border-4 border-black ${tilt} hover:rotate-0 hover:scale-105 transition-all cursor-grab active:cursor-grabbing`}
    >
      <div className="relative aspect-[4/5] bg-yellow-100 border-4 border-black mb-6 overflow-hidden">
        {member.image ? (
          <img 
            src={member.image} 
            alt={member.name} 
            className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-black/5">
             <span className="text-6xl font-display font-black text-black/10">
               {member.name.split(" ").map(n => n[0]).join("")}
             </span>
          </div>
        )}
        <div className="absolute top-4 right-4 bg-black text-white px-3 py-1 font-mono text-[10px] font-black uppercase tracking-widest">
           TEAM READY
        </div>
      </div>

      <div className="flex-1">
        <h3 className="text-2xl md:text-3xl font-display font-black uppercase italic tracking-tighter mb-1">
          {member.name}
        </h3>
        <p className="font-mono text-[10px] font-black uppercase tracking-widest text-black/50 mb-4">
          {member.role}
        </p>
        <p className="text-sm font-bold leading-tight text-black/80 mb-6 line-clamp-3">
          {member.bio}
        </p>
      </div>

      <div className="mt-auto flex items-center justify-between pt-6 border-t-2 border-black/10">
        <a 
          href={member.linkedin} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center gap-2 text-xs font-black uppercase underline decoration-2 underline-offset-4 hover:text-yellow-600 transition-colors"
        >
          <Linkedin size={14} /> Profile
        </a>
        <div className="w-10 h-10 bg-black text-white rounded-none flex items-center justify-center">
          <ArrowRight size={18} />
        </div>
      </div>
    </motion.article>
  );
};

export const Teams = () => {
  const content = siteContent.teams;

  return (
    <div className="pt-24 pb-32 bg-yellow-400">
      <section className="py-24 px-6 max-w-7xl mx-auto overflow-hidden">
        <div className="mb-24">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="font-mono text-xs font-black uppercase tracking-[0.4em] text-black/50 mb-4"
          >
            {content.eyebrow}
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-5xl md:text-[8rem] font-display uppercase italic font-black tracking-tighter mt-4 leading-[0.85] text-black"
          >
            {content.title}
          </motion.h1>
          <p className="text-2xl md:text-4xl font-black mt-10 text-white drop-shadow-[4px_4px_0px_rgba(0,0,0,1)] max-w-4xl">
            {content.subtitle}
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            {[
              ["5", "TEAMS ACTIVE"],
              ["14", "FOUNDERS"],
              ["20+", "PRODUCTS SHIPPED"],
              ["OPEN", "FOUNDING SEATS"],
            ].map(([v, l], i) => (
              <motion.div 
                key={l}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white border-4 border-black p-6 text-center shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
              >
                <div className="text-3xl md:text-5xl font-display font-black text-black tracking-tighter italic uppercase">{v}</div>
                <div className="font-mono text-[10px] font-black uppercase tracking-widest text-black/40 mt-2">{l}</div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="space-y-32">
          {teams.map((team) => (
            <div key={team.id} className="relative">
              <div className="flex items-center gap-6 mb-12">
                <h2 className="text-4xl md:text-7xl font-display font-black uppercase italic tracking-tight text-black">
                  TEAM {team.id}
                </h2>
                <div className="h-2 bg-black flex-1" />
                <div className="bg-white border-4 border-black px-6 py-2 flex items-center gap-2">
                   <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                   <span className="font-mono text-xs font-black uppercase tracking-widest">ACTIVE</span>
                </div>
              </div>

              {/* Horizontal Scroll Container */}
              <div className="relative group">
                <div className="flex overflow-x-auto gap-8 pb-12 px-4 -mx-4 no-scrollbar cursor-grab active:cursor-grabbing snap-x snap-mandatory">
                  {team.members.map((member, idx) => (
                    <div key={member.name} className="snap-center">
                      <MemberCard member={member} index={idx} />
                    </div>
                  ))}
                  
                  {/* Empty State / Call to Action at the end of the scroll */}
                  <div className="snap-center min-w-[320px] md:min-w-[400px] border-4 border-dashed border-black/20 p-8 flex flex-col items-center justify-center text-center">
                    <p className="font-mono text-[10px] font-black uppercase tracking-widest opacity-30 mb-4">Space Available</p>
                    <h3 className="text-2xl font-display font-black uppercase italic tracking-tighter opacity-20 mb-8">Join Team {team.id}</h3>
                    <a href="https://tally.so/r/dW6V0o" className="btn-primary w-full text-xs">Apply Now</a>
                  </div>
                </div>
                
                {/* Horizontal Scroll Progress or Arrows could go here */}
                <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden lg:flex items-center justify-center w-12 h-12 bg-black text-white pointer-events-none opacity-0 group-hover:opacity-50 transition-opacity">
                  <ChevronRight size={32} />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-32">
          <Manifesto />
        </div>
      </section>
    </div>
  );
};
