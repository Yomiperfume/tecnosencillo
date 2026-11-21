
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <div className="footer-brand">
          <Link href="/" className="brand footer-logo">
            <span className="brand-mark">TS</span>
            <span>
              Tecno<span className="brand-accent">Sencillo</span>
            </span>
          </Link>

          <p>La tecnología, más fácil para todos.</p>
        </div>

        <div className="footer-column">
          <strong>Explorar</strong>
          <Link href="/blog">Blog</Link>
          <Link href="/categorias">Categorías</Link>
          <Link href="/sobre-nosotros">Sobre nosotros</Link>
        </div>

        <div className="footer-column">
          <strong>Información</strong>
          <Link href="/contacto">Contacto</Link>
          <Link href="/privacidad">Privacidad</Link>
          <Link href="/cookies">Cookies</Link>
          <Link href="/terminos">Términos y condiciones</Link>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>© 2026 TecnoSencillo. Todos los derechos reservados.</span>
        <span>Hecho para aprender. Diseñado para todos.</span>
      </div>
    </footer>
  );
}
