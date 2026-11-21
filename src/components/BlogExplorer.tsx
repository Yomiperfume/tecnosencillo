
"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { articles, categories } from "@/lib/articles";

export default function BlogExplorer() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("todos");
  const [isReady, setIsReady] = useState(false);

  // Read category and search parameters from the URL.
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    const category = params.get("categoria") || "todos";
    const query = params.get("q") || "";

    const validCategory =
      category === "todos" ||
      categories.some((item) => item.slug === category);

    setActiveCategory(validCategory ? category : "todos");
    setSearch(query);
    setIsReady(true);

    const handlePopState = () => {
      const currentParams = new URLSearchParams(window.location.search);
      const currentCategory = currentParams.get("categoria") || "todos";
      const currentQuery = currentParams.get("q") || "";

      const isValid =
        currentCategory === "todos" ||
        categories.some((item) => item.slug === currentCategory);

      setActiveCategory(isValid ? currentCategory : "todos");
      setSearch(currentQuery);
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  // Keep the URL synchronized with the selected filters.
  useEffect(() => {
    if (!isReady) return;

    const params = new URLSearchParams();

    if (activeCategory !== "todos") {
      params.set("categoria", activeCategory);
    }

    if (search.trim()) {
      params.set("q", search.trim());
    }

    const queryString = params.toString();
    const newUrl = queryString ? `/blog?${queryString}` : "/blog";

    window.history.replaceState(null, "", newUrl);
  }, [activeCategory, search, isReady]);

  const filteredArticles = useMemo(() => {
    const query = search.toLowerCase().trim();

    return articles.filter((article) => {
      const matchesSearch =
        !query ||
        article.title.toLowerCase().includes(query) ||
        article.description.toLowerCase().includes(query) ||
        article.category.toLowerCase().includes(query);

      const matchesCategory =
        activeCategory === "todos" ||
        article.categorySlug === activeCategory;

      return matchesSearch && matchesCategory;
    });
  }, [search, activeCategory]);

  const clearFilters = () => {
    setSearch("");
    setActiveCategory("todos");
  };

  return (
    <div>
      <div className="blog-search">
        <span aria-hidden="true">⌕</span>

        <input
          type="search"
          placeholder="Buscar tutoriales, aplicaciones, consejos..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          aria-label="Buscar artículos"
        />

        {search && (
          <button onClick={() => setSearch("")}>
            Limpiar
          </button>
        )}
      </div>

      <div className="filter-list">
        <button
          className={activeCategory === "todos" ? "filter-active" : ""}
          onClick={() => setActiveCategory("todos")}
          aria-pressed={activeCategory === "todos"}
        >
          Todos
        </button>

        {categories.map((category) => (
          <button
            key={category.slug}
            className={
              activeCategory === category.slug ? "filter-active" : ""
            }
            onClick={() => setActiveCategory(category.slug)}
            aria-pressed={activeCategory === category.slug}
          >
            {category.name}
          </button>
        ))}
      </div>

      <p className="results-count" aria-live="polite">
        {filteredArticles.length}{" "}
        {filteredArticles.length === 1
          ? "artículo encontrado"
          : "artículos encontrados"}
      </p>

      {filteredArticles.length > 0 ? (
        <div className="article-grid blog-grid">
          {filteredArticles.map((article, index) => (
            <article className="article-card" key={article.slug}>
              <div
                className={`article-visual ${
                  ["blue", "violet", "green"][index % 3]
                }`}
              >
                <span className="visual-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="visual-symbol">✳</span>

                <span className="visual-caption">
                  TECNO SENCILLO
                </span>
              </div>

              <div className="article-body">
                <div className="article-meta">
                  <span>{article.category.toUpperCase()}</span>
                  <span>{article.readingTime}</span>
                </div>

                <h3>{article.title}</h3>

                <p>{article.description}</p>

                <Link
                  href={`/blog/${article.slug}`}
                  className="article-link"
                >
                  Leer artículo <span>→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="empty-results">
          <span aria-hidden="true">⌕</span>

          <h3>No encontramos artículos</h3>

          <p>
            Prueba con otra palabra o selecciona una categoría diferente.
          </p>

          <button
            className="primary-button"
            onClick={clearFilters}
          >
            Ver todos los artículos
          </button>
        </div>
      )}
    </div>
  );
}
