import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SEO Contact',
  description: 'SEO Puede COntactarme',
  keywords: ['Abaout Page', 'Camilo', 'Practica'],
};

export default function ContactPage() {
  return <span className="text-7xl">Contact Page</span>;
}
