"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download } from "lucide-react";

const navLinks = [
  { href: "#inicio",    label: "Inicio"    },
  { href: "#sobre-mi",  label: "Sobre Mí"  },
  { href: "#skills",    label: "Skills"    },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#contacto",  label: "Contacto"  },
];

export default function Navbar() {
  const [scrolled,       setScrolled]       = useState(false);
  const [activeSection,  setActiveSection]  = useState("inicio");
  const [menuOpen,       setMenuOpen]       = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      const ids = [...navLinks].reverse().map(l => l.href.slice(1));
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 100) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Full-width background bar */}
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.55 }}
        className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
          scrolled ? "bg-[#050510]/90 backdrop-blur-xl border-b border-[#00f5ff]/10 shadow-lg" : "bg-transparent"
        }`}
      >
        {/* Centered content — same max-w + px as every section */}
        <div className="max-w-6xl mx-auto px-6 md:px-10 xl:px-0 py-4 flex items-center justify-between">

          {/* Logo */}
          <motion.a
            href="#inicio"
            className="font-mono font-bold text-lg tracking-widest"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-[#00f5ff]/50">&lt;</span>
            <span style={{ color: "#00f5ff", textShadow: "0 0 10px #00f5ff" }}>JG</span>
            <span className="text-[#00f5ff]/50">/&gt;</span>
          </motion.a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <motion.a
                key={link.href}
                href={link.href}
                className={`relative font-mono text-sm tracking-wide transition-colors duration-200 ${
                  activeSection === link.href.slice(1)
                    ? "text-[#00f5ff]"
                    : "text-slate-400 hover:text-white"
                }`}
                whileHover={{ y: -1 }}
              >
                {activeSection === link.href.slice(1) && (
                  <motion.span
                    layoutId="nav-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-px bg-[#00f5ff]"
                    style={{ boxShadow: "0 0 8px #00f5ff" }}
                  />
                )}
                {link.label}
              </motion.a>
            ))}
          </div>

          {/* CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <motion.a
              href="/cv.pdf"
              download
              className="flex items-center gap-1.5 px-4 py-2 rounded-lg border border-[#7b2fff]/40 text-[#7b2fff] font-mono text-xs tracking-widest uppercase transition-all duration-200 hover:bg-[#7b2fff]/10 hover:border-[#7b2fff]"
              whileHover={{ scale: 1.02, boxShadow: "0 0 14px rgba(123,47,255,0.3)" }}
              whileTap={{ scale: 0.98 }}
            >
              <Download size={11} />
              CV
            </motion.a>
            <motion.a
              href="#contacto"
              className="inline-flex items-center gap-2 px-5 py-2 rounded-lg border border-[#00f5ff]/40 text-[#00f5ff] font-mono text-xs tracking-widest uppercase transition-all duration-200 hover:bg-[#00f5ff]/10 hover:border-[#00f5ff]"
              whileHover={{ scale: 1.02, boxShadow: "0 0 16px rgba(0,245,255,0.25)" }}
              whileTap={{ scale: 0.98 }}
            >
              Contáctame
            </motion.a>
          </div>

          {/* Hamburger */}
          <button
            className="md:hidden text-[#00f5ff] p-2 -mr-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menú"
          >
            <div className="w-6 flex flex-col gap-[5px]">
              {[
                { rotate: menuOpen ? 45 : 0,   y: menuOpen ? 9 : 0 },
                { opacity: menuOpen ? 0 : 1 },
                { rotate: menuOpen ? -45 : 0,  y: menuOpen ? -9 : 0 },
              ].map((anim, i) => (
                <motion.span
                  key={i}
                  animate={anim}
                  className="block h-0.5 w-full bg-[#00f5ff] rounded-full"
                  style={{ boxShadow: "0 0 4px #00f5ff" }}
                />
              ))}
            </div>
          </button>
        </div>

        {/* Mobile dropdown */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="md:hidden overflow-hidden bg-[#0a0a20]/98 backdrop-blur-xl border-t border-[#00f5ff]/10"
            >
              <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col gap-1">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    initial={{ x: -16, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.04 }}
                    onClick={() => setMenuOpen(false)}
                    className={`flex items-center gap-3 py-3 border-b border-white/5 font-mono text-sm ${
                      activeSection === link.href.slice(1) ? "text-[#00f5ff]" : "text-slate-400"
                    }`}
                  >
                    <span className="text-[#00f5ff]/30 text-xs">0{i + 1}.</span>
                    {link.label}
                  </motion.a>
                ))}
                {/* CV download in mobile menu */}
                <motion.a
                  href="/cv.pdf"
                  download
                  initial={{ x: -16, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: navLinks.length * 0.04 }}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-3 py-3 font-mono text-sm text-[#7b2fff] mt-1"
                >
                  <Download size={14} />
                  Descargar CV
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}
