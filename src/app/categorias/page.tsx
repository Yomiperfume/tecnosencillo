
import type { Metadata } from "next";
import Link from "next/link";
import { categories, articles } from "@/lib/articles";

export const metadata: Metadata = {
  title: "Categorías de tecnología",
  description:
    "Encuentra tutoriales y guías de informática, móviles, inteligencia artificial, aplicaciones e internet.",
};

export default function CategoriesPage() {
  return (
    <main>
      <section className="inner-hero">
        <div className="container">
          <span className="eyebrow">EXPLORA NUESTROS TEMAS</span>
          <h1>Encuentra tu <span>categoría.</span></h1>
          <p>
            Accede directamente a los temas que más te interesan
            y descubre nuevas guías.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container category-grid">
          {categories.map((category) => {
            const count = articles.filter(
              (article) => article.categorySlug === category.slug
            ).length;

            return (
              <Link
                href={`/blog?categoria=${category.slug}`}
                className="category-card"
                key={category.slug}
              >
                <span className="category-icon">✳</span>
                <strong>{category.name}</strong>
                <small>{category.description}</small>
                <small>{count} artículos publicados</small>
                <span className="category-arrow">↗</span>
              </Link>
            );
          })}
        </div>
      </section>
    </main>
  );
}
