import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mohammed Mokhtar | Intelligent Systems & AI Engineer",
  description: "Portfolio of Mohammed Mokhtar Soliman Salama, Intelligent Systems & AI Engineer specializing in NLP, RAG, and IoT systems.",
  keywords: [
    "Mohammed Mokhtar",
    "Mohammed Mokhtar Soliman Salama",
    "Intelligent Systems & AI Engineer",
    "AI Software Engineer",
    "Technology Builder",
    "Artificial Intelligence",
    "Natural Language Processing",
    "Retrieval-Augmented Generation",
    "RAG",
    "Internet of Things",
    "IoT",
    "LangGraph",
    "Embedded Systems",
    "Helwan National University"
  ],
  authors: [{ name: "Mohammed Mokhtar Soliman Salama", url: "https://www.mohammed-mokhtar.com" }],
  creator: "Mohammed Mokhtar Soliman Salama",
  metadataBase: new URL("https://www.mohammed-mokhtar.com"),
  alternates: {
    canonical: "https://www.mohammed-mokhtar.com",
  },
  icons: {
    icon: "/images/profile.jpeg",
    apple: "/images/profile.jpeg",
  },
  openGraph: {
    title: "Mohammed Mokhtar | Intelligent Systems & AI Engineer",
    description: "Portfolio of Mohammed Mokhtar Soliman Salama, Intelligent Systems & AI Engineer specializing in NLP, RAG, and IoT systems.",
    url: "https://www.mohammed-mokhtar.com",
    siteName: "Mohammed Mokhtar Portfolio",
    images: [
      {
        url: "/images/profile.jpeg",
        width: 800,
        height: 800,
        alt: "Mohammed Mokhtar Soliman Salama",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohammed Mokhtar | Intelligent Systems & AI Engineer",
    description: "Portfolio of Mohammed Mokhtar Soliman Salama, Intelligent Systems & AI Engineer specializing in NLP, RAG, and IoT systems.",
    images: ["/images/profile.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Mohammed Mokhtar",
  "alternateName": "Mohammed Mokhtar Soliman Salama",
  "url": "https://www.mohammed-mokhtar.com",
  "image": "https://www.mohammed-mokhtar.com/images/profile.jpeg",
  "jobTitle": "Intelligent Systems & AI Engineer",
  "worksFor": {
    "@type": "Organization",
    "name": "Helwan National University"
  },
  "alumniOf": {
    "@type": "EducationalOrganization",
    "name": "Helwan National University"
  },
  "knowsAbout": [
    "Artificial Intelligence",
    "Natural Language Processing",
    "Retrieval-Augmented Generation",
    "Internet of Things",
    "LangGraph",
    "Embedded Systems"
  ],
  "sameAs": [
    "https://github.com/mohammedmokhtar2",
    "https://www.linkedin.com/in/mohammedmokhtar2",
    "https://huggingface.co/mohammedmokhtar2"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${plusJakarta.variable} font-sans bg-black text-neutral-100 antialiased selection:bg-blue-600 selection:text-white min-h-screen relative overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}


