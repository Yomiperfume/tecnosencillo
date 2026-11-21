
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "TecnoSencillo",
      url: siteUrl,
      description:
        "Un sitio web de tecnología con tutoriales sencillos y guías prácticas.",
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      name: "TecnoSencillo",
      url: siteUrl,
      inLanguage: "es",
      publisher: {
        "@id": `${siteUrl}/#organization`,
      },
    },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "TecnoSencillo | Tecnología sin complicaciones",
    template: "%s | TecnoSencillo",
  },

  description:
    "Aprende sobre informática, Android, inteligencia artificial, aplicaciones e internet con tutoriales sencillos y guías prácticas.",

  applicationName: "TecnoSencillo",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "es_ES",
    url: siteUrl,
    siteName: "TecnoSencillo",
    title: "TecnoSencillo | Tecnología sin complicaciones",
    description:
      "Aprende tecnología con tutoriales sencillos, explicaciones claras y guías prácticas.",
  },

  twitter: {
    card: "summary_large_image",
    title: "TecnoSencillo | Tecnología sin complicaciones",
    description:
      "Tutoriales sencillos y guías prácticas para entender mejor la tecnología.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteJsonLd).replace(/</g, "\\u003c"),
          }}
        />

        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
