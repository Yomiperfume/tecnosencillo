
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Cookies",
  description:
    "Información sobre las cookies y tecnologías utilizadas en TecnoSencillo.",
  alternates: {
    canonical: "/cookies",
  },
};

const sections = [
  {
    number: "01",
    title: "¿Qué son las cookies?",
    paragraphs: [
      "Las cookies son pequeños archivos de texto que un sitio web puede almacenar en tu navegador o dispositivo cuando lo visitas.",
      "Pueden utilizarse para recordar preferencias, facilitar determinadas funciones y comprender cómo se utiliza una página web.",
    ],
  },
  {
    number: "02",
    title: "Tipos de cookies",
    paragraphs: [
      "Las cookies se pueden clasificar según la finalidad para la que se utilizan:",
    ],
    items: [
      ["Técnicas o necesarias", "Permiten el funcionamiento básico y seguro de determinadas funciones del sitio."],
      ["De preferencias", "Recuerdan opciones como el idioma o las preferencias de navegación."],
      ["De análisis", "Ayudan a comprender cómo los visitantes utilizan una página web."],
      ["Publicitarias", "Pueden utilizarse para mostrar anuncios y medir su rendimiento."],
    ],
  },
  {
    number: "03",
    title: "Cookies en TecnoSencillo",
    paragraphs: [
      "TecnoSencillo puede utilizar tecnologías técnicas necesarias para ofrecer y proteger el funcionamiento del sitio web. Los proveedores de alojamiento y los servicios externos también pueden procesar información técnica relacionada con la navegación.",
      "En la fecha de actualización de esta política, no hemos integrado intencionadamente herramientas propias de análisis publicitario ni servicios de publicidad personalizada.",
      "Si incorporamos servicios como Google Analytics o Google AdSense en el futuro, actualizaremos esta política para explicar las tecnologías utilizadas y las opciones disponibles para gestionar el consentimiento.",
    ],
  },
  {
    number: "04",
    title: "Servicios de terceros",
    paragraphs: [
      "Algunos servicios externos relacionados con el funcionamiento del sitio podrían utilizar sus propias cookies o tecnologías similares.",
      "Estos servicios gestionan sus tecnologías conforme a sus propias políticas. Recomendamos consultar la documentación de cada proveedor cuando utilices sus servicios.",
    ],
  },
  {
    number: "05",
    title: "Cómo gestionar las cookies",
    paragraphs: [
      "Puedes configurar tu navegador para bloquear, limitar o eliminar cookies. Las opciones disponibles dependen del navegador que utilices.",
    ],
    items: [
      ["Google Chrome", "Configuración de privacidad y seguridad."],
      ["Mozilla Firefox", "Ajustes de privacidad y protección."],
      ["Microsoft Edge", "Permisos de cookies y datos del sitio."],
      ["Safari", "Ajustes de privacidad."],
    ],
    extra:
      "Ten en cuenta que bloquear determinadas cookies técnicas puede afectar al funcionamiento de algunas páginas o funciones.",
  },
  {
    number: "06",
    title: "Cambios en esta política",
    paragraphs: [
      "Podemos actualizar esta Política de Cookies cuando cambien las tecnologías utilizadas, los servicios integrados o las obligaciones legales aplicables.",
      "La fecha de actualización aparecerá al principio de esta página.",
    ],
  },
];

const cookieStyles = `
.ts-cookie-page {
  background: #f4f6f8 !important;
  color: #25394b !important;
  min-height: 700px !important;
  padding: 58px 24px 90px !important;
  font-family: Arial, Helvetica, sans-serif !important;
}

.ts-cookie-page *,
.ts-cookie-page *::before,
.ts-cookie-page *::after {
  box-sizing: border-box !important;
}

.ts-cookie-page .ts-cookie-wrap {
  width: 100% !important;
  max-width: 1120px !important;
  margin: 0 auto !important;
}

.ts-cookie-page .ts-cookie-breadcrumb {
  display: flex !important;
  gap: 10px !important;
  align-items: center !important;
  margin: 0 0 25px !important;
  color: #84919c !important;
  font-size: 12px !important;
  font-weight: 600 !important;
}

.ts-cookie-page .ts-cookie-breadcrumb a {
  color: #168f85 !important;
  text-decoration: none !important;
}

.ts-cookie-page .ts-cookie-hero {
  position: relative !important;
  overflow: hidden !important;
  display: grid !important;
  grid-template-columns: 1fr 310px !important;
  align-items: center !important;
  gap: 35px !important;
  min-height: 330px !important;
  padding: 55px 62px !important;
  border-radius: 18px !important;
  background: #172d43 !important;
  color: #ffffff !important;
  box-shadow: 0 18px 45px rgba(23,45,67,.12) !important;
}

.ts-cookie-page .ts-cookie-hero::after {
  content: "" !important;
  position: absolute !important;
  width: 440px !important;
  height: 440px !important;
  right: -180px !important;
  top: -240px !important;
  border: 1px solid rgba(255,255,255,.10) !important;
  border-radius: 50% !important;
  pointer-events: none !important;
}

.ts-cookie-page .ts-cookie-eyebrow {
  display: inline-flex !important;
  align-items: center !important;
  gap: 9px !important;
  color: #63d2c3 !important;
  font-size: 10px !important;
  font-weight: 800 !important;
  letter-spacing: 2px !important;
  margin: 0 0 22px !important;
}

.ts-cookie-page .ts-cookie-eyebrow::before {
  content: "" !important;
  width: 7px !important;
  height: 7px !important;
  border-radius: 50% !important;
  background: #63d2c3 !important;
}

.ts-cookie-page .ts-cookie-hero h1 {
  color: #ffffff !important;
  font-size: clamp(38px, 5vw, 58px) !important;
  line-height: 1.08 !important;
  letter-spacing: -2.2px !important;
  font-weight: 800 !important;
  margin: 0 0 18px !important;
}

.ts-cookie-page .ts-cookie-hero h1 span {
  color: #63d2c3 !important;
}

.ts-cookie-page .ts-cookie-hero-copy {
  max-width: 560px !important;
}

.ts-cookie-page .ts-cookie-hero-copy > p {
  color: #c5d1da !important;
  font-size: 15px !important;
  line-height: 1.9 !important;
  max-width: 490px !important;
  margin: 0 !important;
}

.ts-cookie-page .ts-cookie-hero-art {
  position: relative !important;
  display: grid !important;
  place-items: center !important;
  width: 250px !important;
  height: 220px !important;
  justify-self: center !important;
}

.ts-cookie-page .ts-cookie-art-square {
  display: grid !important;
  place-items: center !important;
  width: 125px !important;
  height: 125px !important;
  border: 1px solid rgba(99,210,195,.55) !important;
  border-radius: 27px !important;
  background: linear-gradient(145deg,#2d586b,#1c4057) !important;
  transform: rotate(-8deg) !important;
  box-shadow: 0 20px 45px rgba(0,0,0,.22) !important;
}

.ts-cookie-page .ts-cookie-art-square span {
  color: #70dccc !important;
  font-size: 65px !important;
  font-weight: 800 !important;
  letter-spacing: -5px !important;
}

.ts-cookie-page .ts-cookie-art-circle {
  position: absolute !important;
  width: 205px !important;
  height: 205px !important;
  border: 1px solid rgba(99,210,195,.18) !important;
  border-radius: 50% !important;
}

.ts-cookie-page .ts-cookie-art-circle::after {
  content: "" !important;
  position: absolute !important;
  width: 11px !important;
  height: 11px !important;
  right: 17px !important;
  top: 32px !important;
  border-radius: 50% !important;
  background: #63d2c3 !important;
}

.ts-cookie-page .ts-cookie-hero-meta {
  grid-column: 1 / -1 !important;
  display: flex !important;
  align-items: center !important;
  flex-wrap: wrap !important;
  gap: 12px !important;
  padding-top: 23px !important;
  border-top: 1px solid rgba(255,255,255,.13) !important;
  color: #a9bbc8 !important;
  font-size: 11px !important;
}

.ts-cookie-page .ts-cookie-hero-meta strong {
  color: #ffffff !important;
  font-weight: 700 !important;
}

.ts-cookie-page .ts-cookie-main {
  display: grid !important;
  grid-template-columns: 245px minmax(0,1fr) !important;
  gap: 25px !important;
  align-items: start !important;
  margin-top: 28px !important;
}

.ts-cookie-page .ts-cookie-sidebar {
  position: sticky !important;
  top: 25px !important;
}

.ts-cookie-page .ts-cookie-nav-card {
  padding: 25px 20px !important;
  background: #ffffff !important;
  border: 1px solid #e6ebef !important;
  border-radius: 13px !important;
}

.ts-cookie-page .ts-cookie-small-label {
  color: #8a989f !important;
  font-size: 9px !important;
  font-weight: 800 !important;
  letter-spacing: 1.7px !important;
  margin: 0 0 9px !important;
}

.ts-cookie-page .ts-cookie-nav-card h2 {
  color: #172d43 !important;
  font-size: 20px !important;
  font-weight: 750 !important;
  margin: 0 0 17px !important;
}

.ts-cookie-page .ts-cookie-nav-card nav {
  display: flex !important;
  flex-direction: column !important;
  gap: 4px !important;
}

.ts-cookie-page .ts-cookie-nav-card nav a {
  display: flex !important;
  gap: 10px !important;
  align-items: flex-start !important;
  padding: 10px 8px !important;
  border-radius: 7px !important;
  color: #61717e !important;
  font-size: 11px !important;
  line-height: 1.5 !important;
  font-weight: 600 !important;
  text-decoration: none !important;
}

.ts-cookie-page .ts-cookie-nav-card nav a span {
  color: #209c90 !important;
  font-size: 9px !important;
  font-weight: 800 !important;
}

.ts-cookie-page .ts-cookie-nav-card nav a:hover {
  background: #edf8f6 !important;
  color: #167b72 !important;
}

.ts-cookie-page .ts-cookie-sidebar-note {
  margin-top: 15px !important;
  padding: 21px !important;
  border: 1px solid #d9eeeb !important;
  border-radius: 12px !important;
  background: #eaf7f5 !important;
}

.ts-cookie-page .ts-cookie-sidebar-note strong {
  display: block !important;
  color: #176c65 !important;
  font-size: 13px !important;
  margin-bottom: 7px !important;
}

.ts-cookie-page .ts-cookie-sidebar-note p {
  color: #64817d !important;
  font-size: 11px !important;
  line-height: 1.8 !important;
  margin: 0 !important;
}

.ts-cookie-page .ts-cookie-document {
  min-width: 0 !important;
  padding: 38px 43px !important;
  background: #ffffff !important;
  border: 1px solid #e6ebef !important;
  border-radius: 13px !important;
  box-shadow: 0 12px 35px rgba(23,45,67,.035) !important;
}

.ts-cookie-page .ts-cookie-intro {
  padding: 22px 24px !important;
  background: #f0f8f7 !important;
  border-left: 3px solid #36b8aa !important;
  border-radius: 0 9px 9px 0 !important;
  margin-bottom: 10px !important;
}

.ts-cookie-page .ts-cookie-intro strong {
  display: block !important;
  color: #168f85 !important;
  font-size: 9px !important;
  letter-spacing: 1.5px !important;
  margin-bottom: 8px !important;
}

.ts-cookie-page .ts-cookie-intro p {
  color: #435d69 !important;
  font-size: 13px !important;
  line-height: 1.8 !important;
  margin: 0 !important;
}

.ts-cookie-page .ts-cookie-section {
  display: grid !important;
  grid-template-columns: 36px minmax(0,1fr) !important;
  gap: 15px !important;
  padding: 29px 0 !important;
  border-bottom: 1px solid #edf0f2 !important;
  scroll-margin-top: 25px !important;
}

.ts-cookie-page .ts-cookie-number {
  display: grid !important;
  place-items: center !important;
  width: 33px !important;
  height: 33px !important;
  color: #168f85 !important;
  background: #eaf6f4 !important;
  border-radius: 8px !important;
  font-size: 10px !important;
  font-weight: 800 !important;
}

.ts-cookie-page .ts-cookie-section h2 {
  color: #172d43 !important;
  font-size: 19px !important;
  line-height: 1.4 !important;
  letter-spacing: -.4px !important;
  font-weight: 750 !important;
  margin: 2px 0 13px !important;
}

.ts-cookie-page .ts-cookie-section p {
  color: #667580 !important;
  font-size: 13px !important;
  line-height: 1.95 !important;
  margin: 0 0 12px !important;
}

.ts-cookie-page .ts-cookie-items {
  display: flex !important;
  flex-direction: column !important;
  gap: 9px !important;
  margin-top: 18px !important;
}

.ts-cookie-page .ts-cookie-item {
  display: grid !important;
  grid-template-columns: 25px minmax(0,1fr) !important;
  gap: 12px !important;
  padding: 14px !important;
  border: 1px solid #edf0f2 !important;
  border-radius: 8px !important;
  background: #fafbfc !important;
}

.ts-cookie-page .ts-cookie-check {
  display: grid !important;
  place-items: center !important;
  width: 23px !important;
  height: 23px !important;
  color: #168f85 !important;
  background: #e4f5f2 !important;
  border-radius: 50% !important;
  font-size: 11px !important;
  font-weight: 800 !important;
}

.ts-cookie-page .ts-cookie-item strong {
  display: block !important;
  color: #30485a !important;
  font-size: 12px !important;
  margin: 2px 0 5px !important;
}

.ts-cookie-page .ts-cookie-item p {
  color: #74818d !important;
  font-size: 11px !important;
  line-height: 1.7 !important;
  margin: 0 !important;
}

.ts-cookie-page .ts-cookie-warning {
  padding: 14px 16px !important;
  margin-top: 15px !important;
  background: #fff8ed !important;
  border: 1px solid #f1e7d6 !important;
  border-radius: 8px !important;
  color: #806c4d !important;
  font-size: 12px !important;
  line-height: 1.8 !important;
}

.ts-cookie-page .ts-cookie-contact {
  border-bottom: 0 !important;
}

.ts-cookie-page .ts-cookie-contact a {
  display: inline-block !important;
  color: #168f85 !important;
  font-size: 13px !important;
  font-weight: 750 !important;
  text-decoration: none !important;
  margin-top: 5px !important;
}

.ts-cookie-page .ts-cookie-contact a:hover {
  text-decoration: underline !important;
}

.ts-cookie-page .ts-cookie-end {
  display: flex !important;
  align-items: center !important;
  gap: 12px !important;
  padding-top: 20px !important;
  border-top: 1px solid #edf0f2 !important;
}

.ts-cookie-page .ts-cookie-end strong {
  color: #209c90 !important;
  font-size: 22px !important;
  letter-spacing: -2px !important;
}

.ts-cookie-page .ts-cookie-end span {
  color: #9aa5ac !important;
  font-size: 8px !important;
  font-weight: 800 !important;
  letter-spacing: 1.2px !important;
}

.ts-cookie-page .ts-cookie-end span:last-child {
  margin-left: auto !important;
}

@media (max-width: 850px) {
  .ts-cookie-page .ts-cookie-hero {
    grid-template-columns: 1fr 200px !important;
    padding: 42px 35px !important;
  }

  .ts-cookie-page .ts-cookie-hero-art {
    transform: scale(.8) !important;
  }

  .ts-cookie-page .ts-cookie-main {
    grid-template-columns: 1fr !important;
  }

  .ts-cookie-page .ts-cookie-sidebar {
    position: static !important;
  }

  .ts-cookie-page .ts-cookie-sidebar-note {
    display: none !important;
  }

  .ts-cookie-page .ts-cookie-nav-card nav {
    display: grid !important;
    grid-template-columns: 1fr 1fr !important;
  }
}

@media (max-width: 560px) {
  .ts-cookie-page {
    padding: 30px 14px 60px !important;
  }

  .ts-cookie-page .ts-cookie-hero {
    display: block !important;
    padding: 32px 24px 20px !important;
    border-radius: 13px !important;
  }

  .ts-cookie-page .ts-cookie-hero-art {
    display: none !important;
  }

  .ts-cookie-page .ts-cookie-hero h1 {
    font-size: 42px !important;
    letter-spacing: -1.7px !important;
  }

  .ts-cookie-page .ts-cookie-hero-copy > p {
    font-size: 13px !important;
  }

  .ts-cookie-page .ts-cookie-hero-meta {
    margin-top: 25px !important;
    padding-top: 17px !important;
    font-size: 10px !important;
  }

  .ts-cookie-page .ts-cookie-nav-card {
    padding: 19px !important;
  }

  .ts-cookie-page .ts-cookie-nav-card nav {
    grid-template-columns: 1fr !important;
  }

  .ts-cookie-page .ts-cookie-document {
    padding: 22px 17px !important;
  }

  .ts-cookie-page .ts-cookie-section {
    grid-template-columns: 29px minmax(0,1fr) !important;
    gap: 10px !important;
    padding: 23px 0 !important;
  }

  .ts-cookie-page .ts-cookie-number {
    width: 27px !important;
    height: 27px !important;
    font-size: 9px !important;
  }

  .ts-cookie-page .ts-cookie-section h2 {
    font-size: 17px !important;
  }

  .ts-cookie-page .ts-cookie-section p {
    font-size: 12px !important;
  }

  .ts-cookie-page .ts-cookie-intro {
    padding: 17px !important;
  }
}
`;

export default function CookiesPage() {
  return (
    <>
      <style>{cookieStyles}</style>

      <main className="ts-cookie-page">
        <div className="ts-cookie-wrap">
          <div className="ts-cookie-breadcrumb">
            <a href="/">Inicio</a>
            <span>/</span>
            <span>Información legal</span>
            <span>/</span>
            <span>Cookies</span>
          </div>

          <header className="ts-cookie-hero">
            <div className="ts-cookie-hero-copy">
              <span className="ts-cookie-eyebrow">CENTRO DE PRIVACIDAD</span>
              <h1>
                Política de
                <br />
                <span>Cookies.</span>
              </h1>
              <p>
                La transparencia también forma parte de una buena
                experiencia digital. Aquí te explicamos cómo pueden
                utilizarse las cookies en TecnoSencillo.
              </p>
            </div>

            <div className="ts-cookie-hero-art" aria-hidden="true">
              <div className="ts-cookie-art-circle" />
              <div className="ts-cookie-art-square">
                <span>C.</span>
              </div>
            </div>

            <div className="ts-cookie-hero-meta">
              <span>Última actualización:</span>
              <strong>16 de noviembre de 2026</strong>
              <span>·</span>
              <span>Lectura aproximada: 4 minutos</span>
            </div>
          </header>

          <div className="ts-cookie-main">
            <aside className="ts-cookie-sidebar">
              <div className="ts-cookie-nav-card">
                <p className="ts-cookie-small-label">GUÍA DE CONTENIDO</p>
                <h2>En esta página</h2>
                <nav aria-label="Contenido de la política">
                  {sections.map((section) => (
                    <a href={`#cookie-${section.number}`} key={section.number}>
                      <span>{section.number}</span>
                      {section.title}
                    </a>
                  ))}
                  <a href="#cookie-contact">
                    <span>07</span>
                    Contacto
                  </a>
                </nav>
              </div>

              <div className="ts-cookie-sidebar-note">
                <strong>La claridad importa.</strong>
                <p>
                  Queremos que entiendas cómo funciona nuestro sitio,
                  sin tecnicismos innecesarios.
                </p>
              </div>
            </aside>

            <article className="ts-cookie-document">
              <div className="ts-cookie-intro">
                <strong>ANTES DE CONTINUAR</strong>
                <p>
                  Esta política describe qué son las cookies, qué tipos
                  existen y cómo puedes gestionar su uso desde tu navegador.
                </p>
              </div>

              {sections.map((section) => (
                <section
                  className="ts-cookie-section"
                  id={`cookie-${section.number}`}
                  key={section.number}
                >
                  <div className="ts-cookie-number">{section.number}</div>

                  <div>
                    <h2>{section.title}</h2>

                    {section.paragraphs.map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}

                    {section.items && (
                      <div className="ts-cookie-items">
                        {section.items.map(([title, description]) => (
                          <div className="ts-cookie-item" key={title}>
                            <span className="ts-cookie-check">✓</span>
                            <div>
                              <strong>{title}</strong>
                              <p>{description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {section.extra && (
                      <div className="ts-cookie-warning">
                        {section.extra}
                      </div>
                    )}
                  </div>
                </section>
              ))}

              <section
                className="ts-cookie-section ts-cookie-contact"
                id="cookie-contact"
              >
                <div className="ts-cookie-number">07</div>
                <div>
                  <h2>¿Necesitas más información?</h2>
                  <p>
                    Si tienes alguna pregunta sobre esta política,
                    puedes contactar con nuestro equipo.
                  </p>
                  <a href="mailto:whatsinabox1@gmail.com">
                    whatsinabox1@gmail.com ↗
                  </a>
                </div>
              </section>

              <div className="ts-cookie-end">
                <strong>TS.</strong>
                <span>TECNOLOGÍA SIN COMPLICACIONES</span>
                <span>FIN DEL DOCUMENTO</span>
              </div>
            </article>
          </div>
        </div>
      </main>
    </>
  );
}
