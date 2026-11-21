import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { articles, getArticle } from "@/lib/articles";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);

  if (!article) {
    return {
      title: "Artículo no encontrado",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const articleUrl = `${siteUrl}/blog/${article.slug}`;

  return {
    title: article.title,
    description: article.description,

    alternates: {
      canonical: `/blog/${article.slug}`,
    },

    openGraph: {
      type: "article",
      locale: "es_ES",
      url: articleUrl,
      siteName: "TecnoSencillo",
      title: article.title,
      description: article.description,
      publishedTime: article.date,
      modifiedTime: article.updated || article.date,
      images: article.heroImage
        ? [
            {
              url: article.heroImage,
              alt: article.heroImageAlt || article.title,
            },
          ]
        : undefined,
    },

    twitter: {
      card: article.heroImage ? "summary_large_image" : "summary",
      title: article.title,
      description: article.description,
      images: article.heroImage ? [article.heroImage] : undefined,
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}

function formatDate(date: string) {
  return new Date(`${date}T12:00:00`).toLocaleDateString("es-ES", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function ArticleImage({
  src,
  alt,
  credit,
  creditUrl,
  priority = false,
}: {
  src: string;
  alt: string;
  credit?: string;
  creditUrl?: string;
  priority?: boolean;
}) {
  return (
    <figure className="article-featured-image">
      <Image
        src={src}
        alt={alt}
        width={1536}
        height={1024}
        priority={priority}
        sizes="(max-width: 768px) 100vw, 760px"
        style={{
          width: "100%",
          height: "auto",
          borderRadius: "16px",
        }}
      />

      {credit && (
        <figcaption
          style={{
            marginTop: "8px",
            fontSize: "0.8rem",
            opacity: 0.75,
          }}
        >
          Imagen:{" "}
          {creditUrl ? (
            <a
              href={creditUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {credit}
            </a>
          ) : (
            credit
          )}
        </figcaption>
      )}
    </figure>
  );
}

export default function ArticlePage({ params }: Props) {
  return (
    <Suspense
      fallback={
        <main className="article-page">
          <div className="container article-container">
            <p>Cargando artículo...</p>
          </div>
        </main>
      }
    >
      <ArticleContent params={params} />
    </Suspense>
  );
}

async function ArticleContent({ params }: Props) {
  const { slug } = await params;
  const article = getArticle(slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = articles
    .filter(
      (item) =>
        item.slug !== article.slug &&
        item.categorySlug === article.categorySlug
    )
    .slice(0, 3);

  const articleUrl = `${siteUrl}/blog/${article.slug}`;

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${articleUrl}#article`,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": articleUrl,
    },
    headline: article.title,
    description: article.description,
    image: article.heroImage
      ? [`${siteUrl}${article.heroImage}`]
      : undefined,
    datePublished: article.date,
    dateModified: article.updated || article.date,
    author: {
      "@type": "Organization",
      name: article.author,
    },
    publisher: {
      "@type": "Organization",
      name: "TecnoSencillo",
      url: siteUrl,
    },
    articleSection: article.category,
    inLanguage: "es",
    isPartOf: {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
    },
  };

  return (
    <main className="professional-article">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleJsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <div className="container">
        {/* Breadcrumbs */}
        <nav className="modern-breadcrumbs" aria-label="Ruta de navegación">
          <Link href="/">Inicio</Link>
          <span>/</span>
          <Link href="/blog">Blog</Link>
          <span>/</span>
          <span>{article.category}</span>
        </nav>
      </div>

      {/* Article Hero */}
      <header className="reading-hero">
        <div className="reading-hero-inner">
          <Link
            href={`/blog?categoria=${article.categorySlug}`}
            className="article-category-label"
          >
            {article.category}
          </Link>

          <h1>{article.title}</h1>

          <p className="reading-subtitle">{article.description}</p>

          <div className="reading-meta">
            <div className="reading-author-avatar">TS</div>

            <div className="reading-author-details">
              <strong>{article.author}</strong>
              <span>Equipo editorial de TecnoSencillo</span>
            </div>

            <span className="meta-divider" />

            <div className="reading-date">
              <span>Publicado</span>
              <strong>{formatDate(article.date)}</strong>
            </div>

            <span className="meta-divider" />

            <div className="reading-time">
              <span>Tiempo de lectura</span>
              <strong>{article.readingTime}</strong>
            </div>
          </div>
        </div>
      </header>

      {/* Main Reading Area */}
      <div className="container professional-reading-container">
        <div className="professional-reading-grid">
          <article className="professional-article-content">
            <div className="article-intro-box">
              <span className="intro-label">EN ESTA GUÍA</span>
              <p>{article.introduction}</p>
            </div>

            {article.heroImage && (
              <ArticleImage
                src={article.heroImage}
                alt={article.heroImageAlt || article.title}
                credit={article.heroImageCredit}
                creditUrl={article.heroImageCreditUrl}
                priority
              />
            )}

            <div className="article-body">
              {article.sections.map((section, index) => (
                <div key={section.heading}>
                  <section
                    id={`section-${index + 1}`}
                    className="professional-content-section"
                  >
                    <span className="section-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <h2>{section.heading}</h2>

                    {section.paragraphs.map((paragraph, paragraphIndex) => (
                      <p key={paragraphIndex}>{paragraph}</p>
                    ))}

                    {section.links && section.links.length > 0 && (
                      <ul className="article-resource-links">
                        {section.links.map((link) => (
                          <li key={link.url}>
                            <a
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {link.label} ↗
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}

                    {section.tips && section.tips.length > 0 && (
                      <div className="professional-tips">
                        <div className="tips-heading">
                          <span className="tips-icon">✓</span>
                          <strong>Pasos recomendados</strong>
                        </div>

                        <ol>
                          {section.tips.map((tip) => (
                            <li key={tip}>{tip}</li>
                          ))}
                        </ol>
                      </div>
                    )}
                  </section>

                  {article.secondaryImage && index === 4 && (
                    <ArticleImage
                      src={article.secondaryImage}
                      alt={article.secondaryImageAlt || article.title}
                      credit={article.secondaryImageCredit}
                      creditUrl={article.secondaryImageCreditUrl}
                    />
                  )}
                </div>
              ))}

              <section id="conclusion" className="professional-conclusion">
                <span className="conclusion-label">RESUMEN FINAL</span>
                <h2>Conclusión</h2>
                <p>{article.conclusion}</p>
              </section>
            </div>

            {article.references && article.references.length > 0 && (
              <section className="article-references">
                <h2>Fuentes y recursos oficiales</h2>
                <p>
                  Consulta estas páginas para conocer las funciones,
                  condiciones y límites actualizados de cada herramienta.
                </p>

                <ul>
                  {article.references.map((reference) => (
                    <li key={reference.url}>
                      <a
                        href={reference.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {reference.title} ↗
                      </a>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            <div className="article-bottom-navigation">
              <Link href="/blog" className="back-to-blog">
                ← Volver al blog
              </Link>

              <Link href="/categorias" className="explore-categories">
                Explorar categorías →
              </Link>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="professional-article-sidebar">
            <div className="contents-card">
              <span className="sidebar-eyebrow">CONTENIDO</span>
              <h3>En este artículo</h3>

              <nav aria-label="Contenido del artículo">
                {article.sections.map((section, index) => (
                  <a key={section.heading} href={`#section-${index + 1}`}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    {section.heading}
                  </a>
                ))}

                <a href="#conclusion">
                  <span>✓</span>
                  Conclusión
                </a>
              </nav>
            </div>

            <div className="sidebar-brand-card">
              <div className="sidebar-brand-logo">TS</div>
              <span>TECNOSENCILLO</span>
              <h3>La tecnología, sin complicaciones.</h3>
              <p>
                Guías prácticas y explicaciones sencillas para aprovechar
                mejor la tecnología cada día.
              </p>
              <Link href="/blog">Descubrir más artículos →</Link>
            </div>
          </aside>
        </div>

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <section className="related-articles">
            <div className="related-heading">
              <div>
                <span className="sidebar-eyebrow">SIGUE APRENDIENDO</span>
                <h2>También te puede interesar</h2>
              </div>

              <Link href="/blog">Ver todos los artículos →</Link>
            </div>

            <div className="related-grid">
              {relatedArticles.map((item) => (
                <Link
                  href={`/blog/${item.slug}`}
                  className="related-card"
                  key={item.slug}
                >
                  <span>{item.category}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <strong>Leer artículo →</strong>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}