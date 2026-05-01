"use client";

import React from 'react';
import { Hero } from '../components/home/Hero';
import { TheModel } from '../components/home/TheModel';
import { Pathways } from '../components/home/Pathways';
import { RolesComparison } from '../components/home/RolesComparison';
import { CoreValues } from '../components/home/CoreValues';
import { ToolOfTheMonth } from '../components/home/ToolOfTheMonth';
import { ProblemStatement } from '../components/home/ProblemStatement';
import { SupportResources } from '../components/home/SupportResources';
import { FoundersWanted } from '../components/home/FoundersWanted';
import { FAQ } from '../components/FAQ';
import { BootstrappedStatement } from '../components/home/BootstrappedStatement';
import { MarqueeStrip } from '../components/home/MarqueeStrip';

export const Home = () => {
  return (
    <div className="bg-yellow-400">
      <Hero />
      <MarqueeStrip />
      <TheModel />
      <Pathways />
      <RolesComparison />
      <CoreValues />
      <ToolOfTheMonth />
      <ProblemStatement />
      <SupportResources />
      <FoundersWanted />
      <FAQ />
      <MarqueeStrip />
      <BootstrappedStatement />
    </div>
  );
};
