import { Products as ProductsPage } from "@/views/Products";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Product Ecosystem",
    description: "Explore the Entrext Labs micro-SaaS ecosystem. A monthly showcase of our latest high-velocity software deployments.",
};

export default function Products() {
    return <ProductsPage />;
}
