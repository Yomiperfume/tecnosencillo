
const articles = [
  {
    category: "WINDOWS",
    title: "CÃ³mo acelerar Windows 11 sin instalar programas",
    description:
      "Descubre ajustes sencillos para mejorar el rendimiento de tu ordenador.",
    date: "GuÃ­a prÃ¡ctica",
    icon: "â–£",
    color: "blue",
    read: "7 min",
  },
  {
    category: "INTELIGENCIA ARTIFICIAL",
    title: "Herramientas de inteligencia artificial gratuitas que debes conocer",
    description:
      "Explora herramientas Ãºtiles para estudiar, trabajar y ahorrar tiempo.",
    date: "TecnologÃ­a",
    icon: "âœ³",
    color: "violet",
    read: "8 min",
  },
  {
    category: "ANDROID",
    title: "CÃ³mo liberar espacio en tu telÃ©fono Android",
    description:
      "Aprende a organizar tus archivos y recuperar espacio de almacenamiento.",
    date: "Tutorial",
    icon: "â–¤",
    color: "green",
    read: "6 min",
  },
];

const categories = [
  { icon: "â–£", name: "InformÃ¡tica", desc: "Windows, PC y soluciones" },
  { icon: "â–¤", name: "MÃ³viles", desc: "Android y smartphones" },
  { icon: "âœ³", name: "Inteligencia artificial", desc: "IA y herramientas Ãºtiles" },
  { icon: "âŒ˜", name: "Aplicaciones", desc: "Apps y programas" },
  { icon: "â—Ž", name: "Internet", desc: "Web, privacidad y seguridad" },
  { icon: "â–±", name: "GuÃ­as prÃ¡cticas", desc: "Aprende paso a paso" },
];

export default function Home() {
  return (
    <main>

      <section className="hero">
        <div className="container hero-content">
          <div className="hero-copy">
            <span className="eyebrow">
              <span className="live-dot" />
              TECNOLOGÃA PARA TODOS
            </span>

            <h1>
              La tecnologÃ­a,
              <br />
              <span>mÃ¡s fÃ¡cil</span> para todos.
            </h1>

            <p>
              Aprende, descubre y aprovecha el mundo digital.
              Tutoriales sencillos, consejos Ãºtiles y guÃ­as
              prÃ¡cticas para tu dÃ­a a dÃ­a.
            </p>

            <div className="hero-actions">
              <a href="/blog" className="primary-button">
                Descubrir artÃ­culos <span>â†’</span>
              </a>
              <a href="#categorias" className="secondary-button">
                Ver categorÃ­as
              </a>
            </div>

            <div className="hero-note">
              <span>âœ“</span> Explicaciones claras Â· GuÃ­as prÃ¡cticas Â· Recursos Ãºtiles
            </div>
          </div>

          <div className="hero-art">
            <div className="art-glow" />
            <div className="art-card art-card-main">
              <div className="art-top">
                <span className="art-dot" />
                <span className="art-dot" />
                <span className="art-dot" />
                <span className="art-label">TU MUNDO DIGITAL</span>
              </div>
              <div className="art-symbol">TS<span>.</span></div>
              <div className="art-bottom">
                <span>TECNOLOGÃA</span>
                <span>01 / 06</span>
              </div>
            </div>
            <div className="floating-card floating-one">
              <span>âœ³</span>
              <div>
                <strong>Inteligencia artificial</strong>
                <small>Descubre nuevas herramientas</small>
              </div>
            </div>
            <div className="floating-card floating-two">
              <span>âœ“</span>
              <div>
                <strong>GuÃ­as sencillas</strong>
                <small>Aprende paso a paso</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="trust-strip">
        <div className="container trust-content">
          <span>TECNOLOGÃA EXPLICADA DE FORMA SENCILLA</span>
          <span>InformÃ¡tica</span>
          <span>Â·</span>
          <span>Inteligencia artificial</span>
          <span>Â·</span>
          <span>Aplicaciones</span>
          <span>Â·</span>
          <span>Internet</span>
        </div>
      </section>

      <section className="section" id="categorias">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">EXPLORA Y APRENDE</span>
              <h2>Â¿QuÃ© te interesa hoy?</h2>
              <p>Encuentra informaciÃ³n Ãºtil sobre la tecnologÃ­a que utilizas cada dÃ­a.</p>
            </div>
            <a href="/categorias" className="text-link">Todas las categorÃ­as â†’</a>
          </div>

          <div className="category-grid">
            {categories.map((category) => (
              <a
                href="/blog"
                className="category-card"
                key={category.name}
              >
                <span className="category-icon">{category.icon}</span>
                <strong>{category.name}</strong>
                <small>{category.desc}</small>
                <span className="category-arrow">â†—</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section articles-section">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">EL BLOG</span>
              <h2>Aprende algo nuevo.</h2>
              <p>GuÃ­as y consejos para aprovechar mejor la tecnologÃ­a.</p>
            </div>
            <a href="/blog" className="text-link">Ver todos los artÃ­culos â†’</a>
          </div>

          <div className="article-grid">
            {articles.map((article, index) => (
              <article className="article-card" key={article.title}>
                <div className={`article-visual ${article.color}`}>
                  <span className="visual-number">0{index + 1}</span>
                  <span className="visual-symbol">{article.icon}</span>
                  <span className="visual-caption">TECNO SENCILLO</span>
                </div>
                <div className="article-body">
                  <div className="article-meta">
                    <span>{article.category}</span>
                    <span>{article.read} de lectura</span>
                  </div>
                  <h3>{article.title}</h3>
                  <p>{article.description}</p>
                  <a href="/blog" className="article-link">
                    Leer artÃ­culo <span>â†’</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="newsletter-section">
        <div className="container newsletter-content">
          <div>
            <span className="eyebrow">SIEMPRE APRENDIENDO</span>
            <h2>La tecnologÃ­a no tiene por quÃ© ser complicada.</h2>
            <p>
              Estamos creando un espacio para ayudarte a entender
              mejor el mundo digital, una guÃ­a a la vez.
            </p>
          </div>
          <a href="/blog" className="primary-button">
            Explorar el blog â†’
          </a>
        </div>
      </section>
    </main>
  );
}

