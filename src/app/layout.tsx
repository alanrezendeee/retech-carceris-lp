import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://carceris.com.br"),
  title: "CARCERIS — A Infraestrutura Digital do Sistema Prisional da Paraíba",
  description:
    "Plataforma inteligente de gestão penitenciária para a SEAP-PB. 83 unidades, 16.452 presos, 174% de ocupação — controle absoluto, rastreabilidade total e integração com judiciário, saúde e segurança pública da Paraíba.",
  keywords: [
    "gestão prisional",
    "sistema penitenciário",
    "CARCERIS",
    "segurança pública",
    "gestão de detentos",
    "CRV",
    "central de regulação de vagas",
    "transferência prisional",
    "execução penal",
    "tecnologia prisional",
  ],
  authors: [{ name: "CARCERIS" }],
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://carceris.com.br",
    siteName: "CARCERIS",
    title: "CARCERIS — A Infraestrutura Digital do Sistema Prisional da Paraíba",
    description:
      "Gestão completa da SEAP-PB — 83 unidades, 16.452 presos, 174% de ocupação. Controle absoluto e rastreabilidade total.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "CARCERIS" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "CARCERIS — A Infraestrutura Digital do Sistema Prisional da Paraíba",
    description: "Gestão completa da SEAP-PB — 83 unidades, 16.452 presos, controle absoluto.",
    images: ["/og-image.png"],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://carceris.com.br/#organization",
      name: "CARCERIS",
      url: "https://carceris.com.br",
      description: "Plataforma de gestão penitenciária integrada para o estado da Paraíba",
      foundingCountry: "BR",
      areaServed: "BR",
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://carceris.com.br/#software",
      name: "CARCERIS",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description: "Sistema de gestão prisional integrado — da captura à reintegração social",
      publisher: { "@id": "https://carceris.com.br/#organization" },
      featureList: [
        "Gestão Operacional",
        "Saúde do Detento",
        "Educação",
        "Controle Jurídico",
        "Acompanhamento Social",
        "Central de Regulação de Vagas",
        "Controle de Transferências",
        "Inteligência Prisional",
      ],
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
