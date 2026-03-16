import { Product } from '@/types';

export const allProductsByMonth: Record<string, Product[]> = {
  "JANUARY": [
    { name: "Secretroom", desc: "Ephemeral anonymous chat service. No signups, no history, just vibes.", url: "secretroom.entrext.in", team: "04", builder: "Team 4: Komal, Vinayak, Surya", niche: "Social", nicheId: "relationships-social-emotional" },
    { name: "ReTone", desc: "AI-powered text tone optimizer for perfect message context.", url: "retone.entrext.in", team: "03", builder: "Team 3: Garv, Hitanshi, Tarasha", niche: "AI Productivity", nicheId: "ai-workflows-automations" },
    { name: "Unpuzzle", desc: "Physics-based gymnasium for the mind. Stress-test your spatial reasoning.", url: "unpuzzle.entrext.in", team: "02", builder: "Team 2: Aryan, Disha", niche: "Gaming/EdTech", nicheId: "outcome-based-education" },
    { name: "PayShot", desc: "Turn chat screenshots into professional invoices automatically.", url: "payshot.entrext.in", team: "03", builder: "Team 3: Garv, Hitanshi, Tarasha", niche: "FinTech", nicheId: "founder-startup-business" },
    { name: "EditFlow", desc: "Weekly planner for editing teams. Visibility for every frame.", url: "editflow.entrext.in", team: "04", builder: "Team 4: Komal, Vinayak, Surya", niche: "SaaS", nicheId: "ai-workflows-automations" },
    { name: "Soho Space", desc: "Marketplace connecting visionary founders with elite growth partners.", url: "sohospace.entrext.in", team: "02", builder: "Team 2: Aryan, Disha", niche: "Marketplace", nicheId: "founder-startup-business" },
    { name: "TouchGrass", desc: "Daily outdoor habit app. Stay active, stay accountable, go outside.", url: "touchgrass.entrext.com", team: "00", builder: "Team 0: Mohit & Manthan", niche: "Health/Wellness", nicheId: "pet-economy-wellness" },
    { name: "Introbuddy", desc: "AI-powered hiring platform that automates first-round interviews.", url: "introbuddy.entrext.com", team: "01", builder: "Team 1: Taha, Ikshit", niche: "HRTech", nicheId: "founder-startup-business" },
    { name: "BabySimple", desc: "AI text simplification tool for jargon-filled corporate language.", url: "babysimple.entrext.in", team: "04", builder: "Team 4: Komal, Vinayak, Surya", niche: "AI Productivity", nicheId: "ai-workflows-automations" },
    { name: "Upvote", desc: "Simple feedback and voting tool for business owners.", url: "upvote.entrext.com", team: "01", builder: "Team 1: Taha, Ikshit", niche: "SaaS", nicheId: "ai-workflows-automations" },
    { name: "Reword", desc: "AI-powered content repurposing tool for creators and marketers.", url: "reword.entrext.com", team: "00", builder: "Team 0: Mohit & Manthan", niche: "Creator Economy", nicheId: "founder-startup-business" },
    { name: "Mistrategist", desc: "Turn-based stealth game. Plan, execute, and infiltrate.", url: "mistrategist.entrext.com", team: "02", builder: "Team 2: Aryan, Disha", niche: "Gaming", nicheId: "outcome-based-education" },
    { name: "ListenDrift", desc: "Speech analysis and attention-tracking for presenters.", url: "listendrift.entrext.com", team: "05", builder: "Team 5 Builders", niche: "Analytics", nicheId: "ai-workflows-automations" },
    { name: "Spy", desc: "Market Intelligence platform for the dropshipping community.", url: "pickspy.entrext.com", team: "02", builder: "Team 2: Aryan, Disha", niche: "E-commerce", nicheId: "founder-startup-business" }
  ],
  "FEBRUARY": [
    { name: "PawNote", desc: "Never forget your vet's instructions. Prepare and track pet care.", url: "pawnote.entrext.com", team: "04", builder: "Team 4: Komal, Vinayak, Surya", niche: "PetTech", nicheId: "pet-economy-wellness" },
    { name: "Vouched", desc: "Collect and display testimonials everywhere with zero friction.", url: "vouched.entrext.com", team: "03", builder: "Team 3: Garv, Hitanshi, Tarasha", niche: "Marketing", nicheId: "founder-startup-business" },
    { name: "Chronos", desc: "High-velocity time management for production teams.", url: "chronos.entrext.com", team: "02", builder: "Team 2: Aryan, Disha", niche: "Productivity", nicheId: "ai-workflows-automations" },
    { name: "Nurturely", desc: "Automated customer nurture loops for small businesses.", url: "nurturely.entrext.com", team: "02", builder: "Team 2: Aryan, Disha", niche: "SaaS", nicheId: "ai-workflows-automations" },
    { name: "FutureFit", desc: "FutureFit is an AI engine that predicts your future career paths from your habits and goals.", url: "futurefit.entrext.com", team: "02", builder: "Team 2: Aryan, Disha", niche: "Career Planning", nicheId: "outcome-based-education" },
    { name: "PetVault", desc: "Secure digital storage for all your pet's medical records.", url: "petvault.entrext.com", team: "04", builder: "Team 4: Komal, Vinayak, Surya", niche: "PetTech", nicheId: "pet-economy-wellness" },
    { name: "BuildInPublic", desc: "The ultimate OS for building and sharing in public.", url: "buildinpublic.entrext.com", team: "00", builder: "Team 0: Mohit & Manthan", niche: "Creator Economy", nicheId: "founder-startup-business" },
    { name: "SoloPilot", desc: "AI co-pilot for solo entrepreneurs managing multiple projects.", url: "solopilot.entrext.com", team: "04", builder: "Team 4: Komal, Vinayak, Surya", niche: "AI SaaS", nicheId: "ai-workflows-automations" },
    { name: "InviteFlow", desc: "Seamless event invitation and guest management system.", url: "inviteflow.entrext.com", team: "01", builder: "Team 1: Taha, Ikshit", niche: "EventTech", nicheId: "founder-startup-business" },
    { name: "SubSafe", desc: "Track and manage all your recurring subscriptions in one place.", url: "subsafe.entrext.com", team: "01", builder: "Team 1: Taha, Ikshit", niche: "FinTech", nicheId: "founder-startup-business" }
  ],
};

export const months = [
  "JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE",
  "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"
];

// Helper function to get all products flattened
export const getAllProducts = (): Product[] => {
  return Object.values(allProductsByMonth).flat();
};

// Helper function to get products by niche ID
export const getProductsByNicheId = (nicheId: string): Product[] => {
  return getAllProducts().filter(product => product.nicheId === nicheId);
};
