
import type { Metadata } from "next";
import BlogExplorer from "@/components/BlogExplorer";

export const metadata: Metadata = {
  title: "Blog de tecnología",
  description:
    "Explora tutoriales de informática, Android, inteligencia artificial, aplicaciones e internet en TecnoSencillo.",
};

export default function BlogPage() {
  return (
    <main>
      <section className="inner-hero">
        <div className="container">
          <span className="eyebrow">EL BLOG DE TECNOSENCILLO</span>
          <h1>Explora. Aprende. <span>Descubre.</span></h1>
          <p>
            Tutoriales, explicaciones y consejos prácticos para
            entender mejor la tecnología.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <BlogExplorer />
        </div>
      </section>
    </main>
  );
}
