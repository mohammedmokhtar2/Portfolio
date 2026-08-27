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
  title: "Mohammed Mokhtar (محمد مختار) | Intelligent Systems & AI Engineer",
  description: "Official portfolio of Eng. Mohammed Mokhtar (محمد مختار), Intelligent Systems & AI Engineer who developed the Helwan National University web platform & RAG chatbot.",
  keywords: [
    "Mohammed Mokhtar",
    "Mohammed Mokhtar Soliman Salama",
    "Eng. Mohammed Mokhtar",
    "Eng. Mokhtar",
    "Mokhtar",
    "محمد مختار",
    "المهندس محمد مختار",
    "م. محمد مختار",
    "مختار",
    "جامعة حلوان الأهلية",
    "شات بوت جامعة حلوان الأهلية",
    "موقع جامعة حلوان الأهلية",
    "مين عمل موقع جامعة حلوان الأهلية",
    "مطور موقع جامعة حلوان الأهلية",
    "Intelligent Systems & AI Engineer",
    "AI Software Engineer",
    "Software Engineer",
    "Technology Builder",
    "Artificial Intelligence",
    "Natural Language Processing",
    "Retrieval-Augmented Generation",
    "RAG",
    "Internet of Things",
    "IoT",
    "LangGraph",
    "Embedded Systems",
    "Helwan National University",
    "HNU",
    "HNU RAG Chatbot",
    "HNU website",
    "HNU AI Chatbot",
    "HNU Chatbot",
    "HNU official website",
    "HNU official RAG Chatbot",
    "HNU official AI Chatbot",
    "HNU official Chatbot"  
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
    title: "Mohammed Mokhtar (محمد مختار) | Intelligent Systems & AI Engineer",
    description: "Portfolio of Eng. Mohammed Mokhtar Soliman Salama, Intelligent Systems & AI Engineer who developed the Helwan National University website and AI RAG chatbot.",
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
    title: "Mohammed Mokhtar (محمد مختار) | Intelligent Systems & AI Engineer",
    description: "Portfolio of Eng. Mohammed Mokhtar Soliman Salama, Intelligent Systems & AI Engineer who developed the Helwan National University website and AI RAG chatbot.",
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
  "alternateName": [
    "Mohammed Mokhtar Soliman Salama",
    "Eng. Mohammed Mokhtar",
    "Eng. Mokhtar",
    "Mokhtar",
    "محمد مختار",
    "المهندس محمد مختار",
    "م. محمد مختار",
    "مختار"
  ],
  "url": "https://www.mohammed-mokhtar.com",
  "image": "https://www.mohammed-mokhtar.com/images/profile.jpeg",
  "jobTitle": "Intelligent Systems & AI Engineer",
  "description": "Eng. Mohammed Mokhtar Soliman Salama (محمد مختار) is an Intelligent Systems & AI Engineer who developed the official Helwan National University Web Platform (موقع جامعة حلوان الأهلية) and HNU RAG Chatbot (شات بوت جامعة حلوان الأهلية).",
  "worksFor": {
    "@type": "Organization",
    "name": "Helwan National University",
    "alternateName": "جامعة حلوان الأهلية"
  },
  "alumniOf": {
    "@type": "EducationalOrganization",
    "name": "Helwan National University",
    "alternateName": "جامعة حلوان الأهلية"
  },
  "knowsAbout": [
    "Artificial Intelligence",
    "Natural Language Processing",
    "Retrieval-Augmented Generation",
    "Internet of Things",
    "LangGraph",
    "Embedded Systems",
    "Helwan National University Web Platform",
    "Helwan National University Chatbot",
    "موقع جامعة حلوان الأهلية",
    "شات بوت جامعة حلوان الأهلية"
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


