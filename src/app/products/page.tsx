import { Products as ProductsPage } from "@/views/Products";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Product Portfolio",
  description:
    "Explore Entrext products across B2B, B2C, and Hybrid/Prosumer layers with cluster-level architecture.",
};

export default function Products() {
  return <ProductsPage />;
}

