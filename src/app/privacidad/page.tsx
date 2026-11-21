
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de Privacidad",
  description:
    "Consulta cómo TecnoSencillo recopila, utiliza y protege la información personal de sus visitantes.",
  alternates: {
    canonical: "/privacidad",
  },
};

export default function PrivacyPage() {
  return (
    <main className="legal-page">
      <header className="legal-hero">
        <div className="legal-hero-inner">
          <span className="legal-eyebrow">TRANSPARENCIA Y CONFIANZA</span>
          <h1>Política de Privacidad</h1>
          <p>
            Tu privacidad importa. Aquí te explicamos qué información puede
            recopilarse cuando visitas TecnoSencillo y cómo se utiliza.
          </p>
          <div className="legal-breadcrumb">
            <Link href="/">Inicio</Link>
            <span>/</span>
            <span>Política de Privacidad</span>
          </div>
        </div>
      </header>

      <article className="legal-document">
        <div className="legal-updated">
          <span>Última actualización</span>
          <strong>16 de noviembre de 2026</strong>
        </div>

        <p className="legal-lead">
          Esta Política de Privacidad explica cómo TecnoSencillo trata la
          información relacionada con las personas que visitan nuestro sitio
          web o se ponen en contacto con nosotros.
        </p>

        <section>
          <h2>1. Quiénes somos</h2>
          <p>
            TecnoSencillo es un sitio web de información y divulgación
            tecnológica que ofrece artículos, tutoriales y guías prácticas
            sobre informática, dispositivos móviles, inteligencia artificial,
            aplicaciones e Internet.
          </p>
          <p>
            Si tienes preguntas sobre esta política o sobre el tratamiento de
            tus datos, puedes escribirnos a{" "}
            <a href="mailto:whatsinabox1@gmail.com">
              whatsinabox1@gmail.com
            </a>
            .
          </p>
        </section>

        <section>
          <h2>2. Qué información podemos recopilar</h2>
          <p>
            Dependiendo de cómo utilices el sitio, podemos recibir los
            siguientes datos:
          </p>
          <ul>
            <li>
              <strong>Datos de contacto:</strong> nombre, dirección de correo
              electrónico y mensaje cuando utilizas nuestro formulario de
              contacto.
            </li>
            <li>
              <strong>Datos técnicos:</strong> información básica que puede
              generar tu navegador o dispositivo, como dirección IP, tipo de
              navegador, sistema operativo y registros de acceso gestionados
              por el proveedor de alojamiento.
            </li>
            <li>
              <strong>Datos de navegación:</strong> información técnica
              relacionada con la visita a las páginas, cuando sea necesaria
              para el funcionamiento, la seguridad o el mantenimiento del
              sitio.
            </li>
          </ul>
          <p>
            No solicitamos intencionadamente datos personales sensibles a
            través del formulario de contacto. Por favor, no envíes contraseñas,
            datos bancarios ni información confidencial.
          </p>
        </section>

        <section>
          <h2>3. Cómo utilizamos la información</h2>
          <p>La información recibida puede utilizarse para:</p>
          <ul>
            <li>Responder preguntas y solicitudes enviadas por los visitantes.</li>
            <li>Atender sugerencias, comentarios y consultas.</li>
            <li>Mantener la seguridad y el funcionamiento del sitio web.</li>
            <li>Detectar envíos abusivos, spam o actividades no autorizadas.</li>
            <li>Cumplir las obligaciones legales que resulten aplicables.</li>
          </ul>
          <p>
            No vendemos deliberadamente los datos personales enviados a través
            del formulario de contacto.
          </p>
        </section>

        <section>
          <h2>4. Formulario de contacto y servicios externos</h2>
          <p>
            Nuestro formulario de contacto utiliza FormSubmit para procesar y
            entregar los mensajes a nuestro correo electrónico. Cuando envías
            un mensaje, los datos que introduces pueden ser tratados por este
            proveedor para prestar el servicio, filtrar spam y entregar la
            comunicación.
          </p>
          <p>
            Puedes consultar la información del proveedor en su{" "}
            <a
              href="https://formsubmit.co/"
              target="_blank"
              rel="noopener noreferrer"
            >
              sitio web oficial
            </a>
            . El tratamiento realizado por servicios externos también está
            sujeto a sus propias políticas y condiciones.
          </p>
        </section>

        <section>
          <h2>5. Cookies y tecnologías similares</h2>
          <p>
            TecnoSencillo no incorpora actualmente herramientas propias de
            analítica o publicidad basadas en cookies. Sin embargo, el
            alojamiento web y los servicios externos utilizados pueden emplear
            tecnologías técnicas necesarias para prestar sus servicios.
          </p>
          <p>
            Si en el futuro incorporamos Google Analytics, Google AdSense u
            otras herramientas que utilicen cookies o tecnologías similares,
            actualizaremos esta política y, cuando corresponda, habilitaremos
            los mecanismos de información y consentimiento necesarios antes
            de activarlas.
          </p>
        </section>

        <section>
          <h2>6. Conservación de la información</h2>
          <p>
            Conservaremos los mensajes recibidos durante el tiempo necesario
            para atender las consultas, mantener un registro razonable de la
            comunicación y cumplir las obligaciones legales aplicables.
          </p>
          <p>
            Los proveedores externos pueden aplicar sus propios plazos de
            conservación. Puedes solicitar que eliminemos la información de
            contacto que conservemos, sujeto a las obligaciones legales que
            puedan impedir su eliminación.
          </p>
        </section>

        <section>
          <h2>7. Protección de la información</h2>
          <p>
            Adoptamos medidas razonables para proteger la información frente
            al acceso, uso, alteración o divulgación no autorizados. No
            obstante, ningún sistema de transmisión o almacenamiento por
            Internet puede garantizar una seguridad absoluta.
          </p>
        </section>

        <section>
          <h2>8. Enlaces a otros sitios</h2>
          <p>
            Nuestros artículos pueden incluir enlaces a páginas externas.
            TecnoSencillo no controla las prácticas de privacidad ni el
            contenido de esos sitios. Te recomendamos revisar sus políticas
            antes de compartir información personal con ellos.
          </p>
        </section>

        <section>
          <h2>9. Tus derechos y tus opciones</h2>
          <p>
            Según la legislación aplicable, puedes tener derecho a solicitar
            acceso, corrección o eliminación de tus datos personales, así como
            a oponerte a determinados tratamientos.
          </p>
          <p>
            Para realizar una solicitud, escríbenos a{" "}
            <a href="mailto:whatsinabox1@gmail.com">
              whatsinabox1@gmail.com
            </a>
            . Es posible que necesitemos verificar tu identidad antes de
            atenderla.
          </p>
        </section>

        <section>
          <h2>10. Privacidad de menores</h2>
          <p>
            TecnoSencillo no está dirigido específicamente a menores de edad
            ni solicita deliberadamente sus datos personales. Si consideras
            que un menor nos ha enviado información personal, ponte en
            contacto con nosotros para que podamos revisar la situación.
          </p>
        </section>

        <section>
          <h2>11. Cambios en esta política</h2>
          <p>
            Podemos actualizar esta Política de Privacidad cuando cambien
            nuestros servicios, prácticas o requisitos legales. Publicaremos
            cualquier modificación en esta página e indicaremos la fecha de
            actualización.
          </p>
        </section>

        <section className="legal-contact-box">
          <h2>¿Tienes preguntas sobre tu privacidad?</h2>
          <p>
            Si necesitas más información sobre esta política o sobre tus datos,
            estaremos encantados de atenderte.
          </p>
          <a href="mailto:whatsinabox1@gmail.com" className="legal-email-link">
            whatsinabox1@gmail.com
          </a>
        </section>
      </article>
    </main>
  );
}
