import { ReactNode } from "react";

interface Props {
  id: string;
  children: ReactNode;
  className?: string;
}

/**
 * Wrapper reutilizable para todas las secciones del portfolio.
 * Garantiza centrado consistente y alineado con el Navbar.
 * max-w-6xl + px-6 md:px-10 xl:px-0 → mismo ancho que el nav.
 */
export default function Section({ id, children, className = "" }: Props) {
  return (
    <section id={id} className={`relative w-full py-28 ${className}`}>
      <div className="max-w-6xl mx-auto px-6 md:px-10 xl:px-0">
        {children}
      </div>
    </section>
  );
}
