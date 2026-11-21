
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Términos de Uso",
  description:
    "Lee los términos y condiciones que regulan el acceso y uso del sitio web TecnoSencillo.",
  alternates: {
    canonical: "/terminos",
  },
};

export default function TermsPage() {
  return (
    <main className="legal-page">
      <header className="legal-hero">
        <div className="legal-hero-inner">
          <span className="legal-eyebrow">USO RESPONSABLE DEL SITIO</span>
          <h1>Términos de Uso</h1>
          <p>
            Estas condiciones explican las normas básicas para acceder y
            utilizar los contenidos y servicios de TecnoSencillo.
          </p>
          <div className="legal-breadcrumb">
            <Link href="/">Inicio</Link>
            <span>/</span>
            <span>Términos de Uso</span>
          </div>
        </div>
      </header>

      <article className="legal-document">
        <div className="legal-updated">
          <span>Última actualización</span>
          <strong>16 de noviembre de 2026</strong>
        </div>

        <p className="legal-lead">
          Al acceder y utilizar TecnoSencillo, aceptas estos Términos de Uso.
          Si no estás de acuerdo con ellos, te recomendamos dejar de utilizar
          el sitio web.
        </p>

        <section>
          <h2>1. Sobre TecnoSencillo</h2>
          <p>
            TecnoSencillo es un sitio web dedicado a publicar información,
            explicaciones, tutoriales y guías prácticas relacionadas con la
            tecnología, la informática, los móviles, las aplicaciones, la
            inteligencia artificial e Internet.
          </p>
        </section>

        <section>
          <h2>2. Aceptación de los términos</h2>
          <p>
            Al navegar por este sitio, utilizar sus funciones o enviar mensajes
            a través de nuestro formulario de contacto, aceptas cumplir estos
            términos y las leyes que resulten aplicables.
          </p>
          <p>
            Podemos modificar estas condiciones cuando sea necesario. La
            versión vigente será la publicada en esta página.
          </p>
        </section>

        <section>
          <h2>3. Uso permitido</h2>
          <p>
            Puedes visitar el sitio, leer sus artículos y compartir enlaces a
            nuestros contenidos para fines personales, educativos o
            informativos.
          </p>
          <p>Al utilizar TecnoSencillo, te comprometes a no:</p>
          <ul>
            <li>Utilizar el sitio para actividades ilegales o fraudulentas.</li>
            <li>Intentar acceder sin autorización a sistemas o cuentas.</li>
            <li>Interferir con el funcionamiento o la seguridad del sitio.</li>
            <li>
              Enviar spam, mensajes abusivos o contenido malicioso mediante
              nuestros formularios.
            </li>
            <li>
              Copiar o republicar nuestros contenidos como propios sin
              autorización.
            </li>
          </ul>
        </section>

        <section>
          <h2>4. Propiedad intelectual</h2>
          <p>
            Salvo que se indique lo contrario, los textos originales, elementos
            gráficos, identidad visual y demás materiales creados para
            TecnoSencillo están protegidos por las normas aplicables de
            propiedad intelectual.
          </p>
          <p>
            No está permitido reproducir, distribuir o modificar de forma
            sustancial nuestros contenidos para publicarlos como propios sin
            autorización previa.
          </p>
          <p>
            Puedes citar breves fragmentos con atribución clara y un enlace a
            la publicación original, siempre que la legislación aplicable lo
            permita.
          </p>
        </section>

        <section>
          <h2>5. Exactitud de la información</h2>
          <p>
            Procuramos ofrecer información clara, útil y actualizada. Sin
            embargo, la tecnología cambia constantemente y algunos contenidos
            pueden quedar desactualizados o contener errores involuntarios.
          </p>
          <p>
            Los artículos se ofrecen con fines informativos y educativos. No
            constituyen asesoramiento profesional, técnico, jurídico,
            financiero ni de seguridad personalizado.
          </p>
          <p>
            Antes de realizar cambios importantes en tu dispositivo, sistema
            operativo, configuración o datos, comprueba la información y
            realiza copias de seguridad cuando sea necesario.
          </p>
        </section>

        <section>
          <h2>6. Enlaces y servicios de terceros</h2>
          <p>
            Nuestro sitio puede enlazar a páginas, herramientas, aplicaciones
            o servicios de terceros. Estos enlaces se proporcionan como
            referencia o recurso adicional.
          </p>
          <p>
            No controlamos ni garantizamos la disponibilidad, seguridad,
            exactitud o políticas de esos servicios. El uso de páginas
            externas queda sujeto a sus propios términos y condiciones.
          </p>
        </section>

        <section>
          <h2>7. Disponibilidad del sitio</h2>
          <p>
            Nos esforzamos por mantener TecnoSencillo disponible y funcionando
            correctamente. Sin embargo, no garantizamos que el acceso sea
            ininterrumpido, libre de errores o compatible con todos los
            dispositivos y navegadores.
          </p>
          <p>
            Podemos actualizar, suspender o retirar partes del sitio cuando
            sea necesario por razones técnicas, de seguridad o de
            mantenimiento.
          </p>
        </section>

        <section>
          <h2>8. Limitación de responsabilidad</h2>
          <p>
            En la medida permitida por la legislación aplicable, TecnoSencillo
            no será responsable de pérdidas o daños derivados del uso o de la
            imposibilidad de utilizar el sitio, de la confianza depositada en
            información publicada o de servicios externos enlazados.
          </p>
          <p>
            Nada de lo establecido en estos términos pretende excluir una
            responsabilidad que no pueda excluirse legalmente.
          </p>
        </section>

        <section>
          <h2>9. Privacidad</h2>
          <p>
            El tratamiento de la información personal se describe en nuestra{" "}
            <Link href="/privacidad">Política de Privacidad</Link>. Te
            recomendamos leerla antes de utilizar el formulario de contacto.
          </p>
        </section>

        <section>
          <h2>10. Cambios en los términos</h2>
          <p>
            Podemos revisar estos Términos de Uso para reflejar cambios en el
            sitio, sus funciones o los requisitos legales. Las modificaciones
            se publicarán en esta página con una nueva fecha de actualización.
          </p>
        </section>

        <section>
          <h2>11. Legislación aplicable</h2>
          <p>
            Estos términos se interpretarán de acuerdo con las leyes aplicables
            de Pakistán, sin perjuicio de los derechos obligatorios que puedan
            corresponder a los usuarios conforme a la legislación de su lugar
            de residencia.
          </p>
        </section>

        <section className="legal-contact-box">
          <h2>¿Necesitas aclarar algo?</h2>
          <p>
            Si tienes preguntas sobre estos términos, puedes ponerte en
            contacto con nosotros.
          </p>
          <a href="mailto:whatsinabox1@gmail.com" className="legal-email-link">
            whatsinabox1@gmail.com
          </a>
        </section>
      </article>
    </main>
  );
}
