import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Thierno Mamoudou Bah — Élève-ingénieur IA & Cybersécurité",
  description:
    "Portfolio de Thierno Mamoudou Bah : projets d'intelligence artificielle (RAG, NLP multilingue), IoT/ML et développement full stack. Élève-ingénieur IACS à l'ENSA de Béni Mellal.",
  keywords: ["Thierno Mamoudou Bah", "portfolio", "intelligence artificielle", "IA", "IoT", "full stack", "ENSA Béni Mellal"],
  authors: [{ name: "Thierno Mamoudou Bah" }],
  openGraph: {
    title: "Thierno Mamoudou Bah — Élève-ingénieur IA & Cybersécurité",
    description:
      "Projets d'IA générative, NLP multilingue, IoT/ML et full stack. Élève-ingénieur IACS à l'ENSA de Béni Mellal.",
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fr" className="h-full antialiased">
      <body className="bg-white font-sans text-ink">{children}</body>
    </html>
  );
}
