
import Link from "next/link";

export default function Header() {
  return (
    <header className="site-header">
      <div className="container nav-container">
        <Link href="/" className="brand" aria-label="TecnoSencillo - Inicio">
          <span className="brand-mark">TS</span>
          <span>
            Tecno<span className="brand-accent">Sencillo</span>
          </span>
        </Link>

        <nav className="navigation" aria-label="Navegación principal">
          <Link href="/">Inicio</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/categorias">Categorías</Link>
          <Link href="/sobre-nosotros">Sobre nosotros</Link>
          <Link href="/contacto">Contacto</Link>
        </nav>

        <Link href="/blog" className="nav-button">
          Explorar artículos →
        </Link>
      </div>
    </header>
  );
}
