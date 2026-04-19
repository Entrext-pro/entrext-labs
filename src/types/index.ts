export interface SocialLinks {
  tiktok?: string;
  instagram?: string;
  youtube?: string;
  twitter?: string;
}

export type MarketLayer = "B2B" | "B2C" | "HYBRID_PROSUMER";

export interface Niche {
  id: string;
  title: string;
  desc: string;
  color: string;
  socialLinks: SocialLinks;
  marketLayer: MarketLayer;
  cluster: string;
}

export interface Product {
  name: string;
  desc: string;
  url: string;
  team: string;
  builder: string;
  niche: string;
  nicheId: string;
  marketLayer: MarketLayer;
  cluster: string;
  canonicalId?: string;
  mergedGroupId?: string;
  canonicalLabel?: string;
}
