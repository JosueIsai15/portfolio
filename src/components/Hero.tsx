"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ArrowDown, Mail, Terminal, Download } from "lucide-react";
import { GithubIcon } from "@/components/SocialIcons";

const roles = [
  "Frontend Developer",
  "React Specialist",
  "UI/UX Enthusiast",
  "Full Stack Dev",
];

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  // As user scrolls past Hero: fade out + move up
  const opacity   = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const translateY = useTransform(scrollYProgress, [0, 0.6], [0, -60]);

  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && displayText === currentRole) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    } else {
      timeout = setTimeout(
        () => {
          setDisplayText((prev) =>
            isDeleting
              ? prev.slice(0, -1)
              : currentRole.slice(0, prev.length + 1)
          );
        },
        isDeleting ? 50 : 100
      );
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  useEffect(() => {
    const interval = setInterval(() => setShowCursor((v) => !v), 530);
    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section
      id="inicio"
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center grid-bg overflow-hidden pt-20"
    >
      {/* Ambient glow orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#00f5ff]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-[#7b2fff]/5 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#0080ff]/3 rounded-full blur-3xl" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{ opacity, y: translateY }}
        className="relative z-10 w-full max-w-6xl mx-auto px-6 md:px-10 xl:px-0 text-center"
      >
        {/* Terminal badge */}
        <motion.div variants={itemVariants} className="flex items-center justify-center gap-2 mb-6">
          <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-[#00f5ff]/20 bg-[#00f5ff]/5 font-mono text-xs text-[#00f5ff]">
            <Terminal size={12} />
            <span>Disponible para proyectos</span>
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          </div>
        </motion.div>

        {/* Greeting */}
        <motion.p
          variants={itemVariants}
          className="font-mono text-[#00f5ff]/70 text-sm md:text-base tracking-[0.3em] mb-4 uppercase"
        >
          Hola, soy
        </motion.p>

        {/* Name */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl lg:text-8xl font-bold font-display mb-4 leading-none"
        >
          <span className="gradient-text">Josué</span>
          <br />
          <span className="text-white">García</span>
        </motion.h1>

        {/* Animated role */}
        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center gap-3 mb-6 h-12"
        >
          <span className="text-slate-500 font-mono text-sm">$</span>
          <span className="text-[#00f5ff] font-mono text-xl md:text-2xl">
            {displayText}
            <span
              className="ml-0.5"
              style={{ opacity: showCursor ? 1 : 0, color: "#00f5ff" }}
            >
              |
            </span>
          </span>
        </motion.div>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Creo experiencias web modernas y de alto rendimiento con{" "}
          <span className="text-[#00f5ff]">React</span>,{" "}
          <span className="text-[#00f5ff]">Next.js</span> y{" "}
          <span className="text-[#00f5ff]">TypeScript</span>. Apasionado por el
          diseño, la arquitectura limpia y el código que escala.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <motion.a
            href="#proyectos"
            className="btn-neon btn-neon-solid px-8 py-3 rounded-md font-mono text-sm font-bold"
            style={{
              background: "linear-gradient(135deg, #00f5ff, #0080ff)",
              color: "#050510",
              border: "none",
              boxShadow: "0 0 20px rgba(0, 245, 255, 0.3)",
            }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 30px rgba(0, 245, 255, 0.5), 0 0 60px rgba(0, 245, 255, 0.2)",
            }}
            whileTap={{ scale: 0.98 }}
          >
            Ver Proyectos
          </motion.a>
          <motion.a
            href="#contacto"
            className="btn-neon px-8 py-3 rounded-md"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Contactar
          </motion.a>
          <motion.a
            href="/cv.pdf"
            download
            className="flex items-center gap-2 px-8 py-3 rounded-md font-mono text-sm font-bold border border-[#7b2fff]/50 text-[#7b2fff] hover:bg-[#7b2fff]/10 hover:border-[#7b2fff] transition-all duration-200"
            whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(123,47,255,0.3)" }}
            whileTap={{ scale: 0.98 }}
          >
            <Download size={15} />
            Descargar CV
          </motion.a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center gap-6"
        >
          {[
            { icon: GithubIcon, href: "https://github.com/JosueIsai15", label: "GitHub", external: true },
            { icon: Mail, href: "#contacto", label: "Email", external: false },
          ].map(({ icon: Icon, href, label, external }) => (
            <motion.a
              key={label}
              href={href}
              aria-label={label}
              target={external ? "_blank" : undefined}
              rel={external ? "noopener noreferrer" : undefined}
              className="w-10 h-10 rounded-lg border border-[#00f5ff]/20 bg-[#00f5ff]/5 flex items-center justify-center text-slate-400 hover:text-[#00f5ff] hover:border-[#00f5ff]/50 transition-all duration-200"
              whileHover={{
                scale: 1.1,
                boxShadow: "0 0 15px rgba(0, 245, 255, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Icon size={18} />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-mono text-xs text-slate-600 tracking-widest uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="text-[#00f5ff]/40"
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
}
