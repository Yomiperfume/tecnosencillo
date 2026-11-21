
import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "¿Tienes una pregunta, sugerencia o necesitas ayuda? Ponte en contacto con el equipo de TecnoSencillo.",
  alternates: {
    canonical: "/contacto",
  },
};

export default function ContactPage() {
  return (
    <main className="contact-page">
      <section className="contact-hero">
        <div className="contact-hero-inner">
          <span className="contact-eyebrow">ESTAMOS AQUÍ PARA AYUDARTE</span>
          <h1>Hablemos de tecnología.</h1>
          <p>
            ¿Tienes alguna pregunta, sugerencia o idea? Nos encantará
            escucharte. Escríbenos y estaremos encantados de atenderte.
          </p>
          <div className="contact-breadcrumb">
            <Link href="/">Inicio</Link>
            <span>/</span>
            <span>Contacto</span>
          </div>
        </div>
      </section>

      <section className="contact-main">
        <div className="contact-layout">
          <div className="contact-information">
            <span className="contact-section-label">PONTE EN CONTACTO</span>
            <h2>Tu mensaje es importante para nosotros.</h2>
            <p className="contact-description">
              En TecnoSencillo creemos que la tecnología debe ser fácil de
              entender. Si necesitas ayuda con una guía, quieres sugerir un
              tema o simplemente quieres compartir tu opinión, este es el
              lugar adecuado.
            </p>

            <div className="contact-info-card">
              <div className="contact-info-icon" aria-hidden="true">
                @
              </div>
              <div>
                <span className="contact-info-label">CORREO ELECTRÓNICO</span>
                <a href="mailto:whatsinabox1@gmail.com">
                  whatsinabox1@gmail.com
                </a>
                <p>Para consultas, sugerencias y colaboraciones.</p>
              </div>
            </div>

            <div className="contact-note">
              <span className="contact-note-icon" aria-hidden="true">
                ✓
              </span>
              <div>
                <strong>Comunicación clara y directa</strong>
                <p>
                  Leemos los mensajes y procuramos responder lo antes posible.
                </p>
              </div>
            </div>
          </div>

          <div className="contact-form-card">
            <div className="contact-form-heading">
              <span className="contact-section-label">ESCRÍBENOS</span>
              <h2>Envíanos un mensaje</h2>
              <p>
                Completa los campos y nos pondremos en contacto contigo.
              </p>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}
