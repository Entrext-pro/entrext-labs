export interface SocialLinks {
  tiktok?: string;
  instagram?: string;
  youtube?: string;
  twitter?: string;
}

export interface Niche {
  id: string;
  title: string;
  desc: string;
  color: string;
  socialLinks: SocialLinks;
}

export interface Product {
  name: string;
  desc: string;
  url: string;
  team: string;
  builder: string;
  niche: string;
  nicheId: string;
}
