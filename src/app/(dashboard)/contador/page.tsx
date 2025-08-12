import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SEO About",
  description: "SEO Sobre Nosotros",
  keywords: ["Abaout Page", "Camilo", "Practica"],
};

export default function ContadorPage() {
  return <span className="text-7xl">Contador Page</span>;
}
