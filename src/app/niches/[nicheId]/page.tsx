import { Metadata } from "next";
import { notFound } from "next/navigation";
import { liveNiches, comingSoonNiches } from "@/data/niches";
import { getProductsByNicheId } from "@/data/products";
import { NicheProductsView } from "@/views/NicheProducts";

interface Props {
  params: Promise<{ nicheId: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { nicheId } = await params;
  const allNiches = [...liveNiches, ...comingSoonNiches];
  const niche = allNiches.find((n) => n.id === nicheId);

  if (!niche) {
    return {
      title: "Niche Not Found",
    };
  }

  return {
    title: `${niche.title} | Products`,
    description: `Explore all products in the ${niche.title} niche at Entrext Labs.`,
  };
}

export async function generateStaticParams() {
  const allNiches = [...liveNiches, ...comingSoonNiches];
  return allNiches.map((niche) => ({
    nicheId: niche.id,
  }));
}

export default async function NicheProductsPage({ params }: Props) {
  const { nicheId } = await params;
  const allNiches = [...liveNiches, ...comingSoonNiches];
  const niche = allNiches.find((n) => n.id === nicheId);

  if (!niche) {
    notFound();
  }

  const products = getProductsByNicheId(nicheId);

  return <NicheProductsView niche={niche} products={products} />;
}
