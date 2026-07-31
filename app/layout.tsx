import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { site } from "@/data/site";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const grotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-grotesk" });

const title = `${site.name} · AI & Automation Engineer · Full-Stack Developer`;
const description =
  "Freelance AI & automation engineer and full-stack developer. I turn manual, repetitive work into production-grade AI systems (RAG, AI agents, LangChain, Next.js), delivered end-to-end from architecture to deployment.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: title,
    // Used when child pages set their own title, e.g. "Case study · Javed Ahmad".
    template: `%s · ${site.name}`,
  },
  description,
  applicationName: `${site.name} Portfolio`,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.name,
  category: "technology",
  keywords: [
    "AI engineer",
    "AI automation engineer",
    "full-stack developer",
    "freelance AI developer",
    "hire AI engineer",
    "RAG developer",
    "LangChain developer",
    "AI agents",
    "business process automation",
    "n8n automation",
    "Next.js developer",
    "React developer",
    "Python developer",
    "FastAPI",
    "vector database",
    "DevOps",
    "Lahore, Pakistan",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title,
    description,
    url: site.url,
    siteName: site.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  // Paste your Google Search Console token here after verifying the domain:
  // verification: { google: "your-token" },
};

// JSON-LD structured data — makes Google understand *who* this site is about
// (a person + a service), enabling knowledge-graph and rich-result eligibility.
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${site.url}/#person`,
      name: site.name,
      url: site.url,
      jobTitle: "AI & Automation Engineer · Full-Stack Developer",
      description,
      email: `mailto:${site.email}`,
      telephone: site.whatsapp,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Lahore",
        addressCountry: "PK",
      },
      sameAs: [site.links.upwork, site.links.linkedin, site.links.github],
      knowsAbout: [
        "Artificial Intelligence",
        "Retrieval-Augmented Generation (RAG)",
        "AI Agents",
        "LangChain",
        "Full-Stack Development",
        "Business Process Automation",
        "Next.js",
        "Python",
        "DevOps",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      url: site.url,
      name: title,
      description,
      inLanguage: "en",
      publisher: { "@id": `${site.url}/#person` },
    },
    {
      "@type": "ProfessionalService",
      "@id": `${site.url}/#service`,
      name: `${site.name} · AI, Automation & Full-Stack Engineering`,
      description,
      url: site.url,
      image: `${site.url}/opengraph-image`,
      provider: { "@id": `${site.url}/#person` },
      areaServed: "Worldwide",
      email: `mailto:${site.email}`,
      telephone: site.whatsapp,
      priceRange: "$$",
      serviceType: [
        "AI Engineering",
        "AI Automation",
        "Full-Stack Web Development",
        "RAG & AI Agents",
        "DevOps & Deployment",
      ],
    },
  ],
};

// Sets the theme class before first paint to avoid a flash of the wrong theme.
const themeScript = `
(function () {
  try {
    var stored = localStorage.getItem("theme");
    var dark = stored ? stored === "dark" : window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (dark) document.documentElement.classList.add("dark");
  } catch (e) {}
})();
`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${grotesk.variable} font-sans`}>{children}</body>
    </html>
  );
}
