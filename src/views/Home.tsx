"use client";

import React from 'react';
import { Hero } from '../components/home/Hero';
import { TheModel } from '../components/home/TheModel';
import { ToolOfTheMonth } from '../components/home/ToolOfTheMonth';
import { ProblemStatement } from '../components/home/ProblemStatement';
import { SupportResources } from '../components/home/SupportResources';
import { FoundersWanted } from '../components/home/FoundersWanted';
import { CommunitySection } from '../components/home/CommunitySection';

export const Home = () => {
  return (
    <div className="pt-16">
      <Hero />
      <TheModel />
      <ToolOfTheMonth />
      <ProblemStatement />
      <SupportResources />
      <FoundersWanted />
      <CommunitySection />
    </div>
  );
};
