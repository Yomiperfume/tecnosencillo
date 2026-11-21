
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sobre nosotros",
  description:
    "Conoce TecnoSencillo: un espacio dedicado a explicar la tecnología de forma clara, práctica y sencilla.",
  alternates: {
    canonical: "/sobre-nosotros",
  },
};

export default function AboutPage() {
  return (
    <main className="about-page">
      <section className="about-hero">
        <div className="container about-hero-inner">
          <span className="about-eyebrow">CONOCE TECNOSENCILLO</span>
          <h1>La tecnología debería ser fácil para todos.</h1>
          <p>
            Creemos que aprender sobre tecnología no debería ser complicado.
            Estamos aquí para ayudarte a entenderla y utilizarla con confianza.
          </p>
        </div>
      </section>

      <div className="container about-content">
        <section className="about-intro">
          <span className="about-section-label">NUESTRA MISIÓN</span>
          <h2>Explicaciones claras. Soluciones prácticas.</h2>
          <p>
            TecnoSencillo es un proyecto editorial de tecnología creado para
            acercar el mundo digital a todo el mundo. Publicamos guías,
            tutoriales y explicaciones sobre informática, móviles,
            inteligencia artificial, aplicaciones e Internet.
          </p>
          <p>
            Nuestro objetivo es convertir temas técnicos en información
            comprensible y útil, para que puedas resolver problemas cotidianos,
            descubrir herramientas y tomar decisiones mejor informadas.
          </p>
        </section>

        <section className="about-values">
          <div className="about-value-card">
            <span>01</span>
            <h3>Claridad</h3>
            <p>
              Explicamos los temas con palabras sencillas, evitando
              complicaciones innecesarias.
            </p>
          </div>

          <div className="about-value-card">
            <span>02</span>
            <h3>Utilidad</h3>
            <p>
              Priorizamos consejos prácticos que puedas aplicar en tus
              dispositivos y en tu vida digital.
            </p>
          </div>

          <div className="about-value-card">
            <span>03</span>
            <h3>Responsabilidad</h3>
            <p>
              Buscamos ofrecer información precisa, revisar nuestras guías
              y corregir los errores cuando los detectamos.
            </p>
          </div>
        </section>

        <section className="about-topics">
          <div>
            <span className="about-section-label">QUÉ ENCONTRARÁS AQUÍ</span>
            <h2>Un poco de tecnología, explicada mejor.</h2>
          </div>

          <div className="about-topic-list">
            <Link href="/categorias">Informática y Windows <span>→</span></Link>
            <Link href="/categorias">Móviles y Android <span>→</span></Link>
            <Link href="/categorias">Inteligencia artificial <span>→</span></Link>
            <Link href="/categorias">Aplicaciones y software <span>→</span></Link>
            <Link href="/categorias">Internet y seguridad <span>→</span></Link>
            <Link href="/categorias">Guías prácticas <span>→</span></Link>
          </div>
        </section>

        <section className="about-editorial">
          <span className="about-section-label">NUESTRO COMPROMISO EDITORIAL</span>
          <h2>Información que merece tu confianza.</h2>
          <p>
            Trabajamos para que nuestros contenidos sean claros, relevantes
            y útiles. Cuando un tutorial incluye instrucciones técnicas,
            nuestro objetivo es comprobar que los pasos sean adecuados y
            explicar cualquier limitación importante.
          </p>
          <p>
            La tecnología cambia constantemente. Por eso, los contenidos
            pueden revisarse y actualizarse cuando sea necesario. Si encuentras
            un error o información que necesita corrección, puedes comunicarlo
            a través de nuestra página de contacto.
          </p>
        </section>

        <section className="about-cta">
          <span>TECNOSENCILLO</span>
          <h2>¿Listo para aprender algo nuevo?</h2>
          <p>
            Explora nuestras guías y descubre cómo hacer que la tecnología
            trabaje a tu favor.
          </p>
          <Link href="/blog">Explorar artículos →</Link>
        </section>
      </div>
    </main>
  );
}
