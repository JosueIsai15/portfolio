"use client";

import { motion } from "framer-motion";
import AnimateOnScroll from "./AnimateOnScroll";
import Section from "./Section";
import { ExternalLink, ArrowRight } from "lucide-react";
import { GithubIcon } from "./SocialIcons";
import { useState } from "react";

const projects = [
  {
    id: 1, featured: true,
    title: "E-Commerce Platform",
    description: "Plataforma full-stack con autenticación, carrito, pagos con Stripe y panel de admin. Arquitectura escalable con Next.js y Node.js.",
    tags: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Stripe", "Tailwind"],
    github: "#", live: "#", color: "#00f5ff", status: "Completado",
  },
  {
    id: 2, featured: false,
    title: "Dashboard Analytics",
    description: "Dashboard de analíticas en tiempo real con visualizaciones D3.js, filtros avanzados y exportación de reportes.",
    tags: ["React", "TypeScript", "D3.js", "Python", "Django", "Redis"],
    github: "#", live: "#", color: "#7b2fff", status: "Completado",
  },
  {
    id: 3, featured: false,
    title: "Task Management App",
    description: "App de tareas colaborativa con drag-and-drop, notificaciones en tiempo real y sincronización multi-dispositivo.",
    tags: ["React", "Node.js", "Socket.io", "MongoDB"],
    github: "#", live: "#", color: "#0080ff", status: "En desarrollo",
  },
  {
    id: 4, featured: false,
    title: "API REST Microservices",
    description: "Arquitectura de microservicios con JWT, rate limiting, documentación Swagger y despliegue en Docker.",
    tags: ["Node.js", "Express", "Docker", "PostgreSQL", "JWT"],
    github: "#", live: null, color: "#00f5ff", status: "Completado",
  },
  {
    id: 5, featured: false,
    title: "Blog Platform",
    description: "Plataforma de blog con CMS propio, editor rich-text, tags y búsqueda full-text optimizada para SEO.",
    tags: ["Next.js", "MDX", "Tailwind CSS", "Vercel"],
    github: "#", live: "#", color: "#7b2fff", status: "Completado",
  },
  {
    id: 6, featured: false,
    title: "CLI Automation Tool",
    description: "Herramienta CLI en Python para automatización de flujos de trabajo con configuración YAML y hooks.",
    tags: ["Python", "Click", "YAML", "Shell"],
    github: "#", live: null, color: "#0080ff", status: "Completado",
  },
];

const featured = projects[0];
const rest = projects.slice(1);

function Card({ p, delay }: { p: typeof projects[0]; delay: number }) {
  return (
    <AnimateOnScroll delay={delay} direction="up">
      <motion.div
        className="glow-card rounded-2xl overflow-hidden h-full flex flex-col group"
        style={{ borderColor: `${p.color}18` }}
        whileHover={{ y: -6, borderColor: `${p.color}50` }}
        transition={{ duration: 0.22 }}
      >
        <div className="h-0.5" style={{ background: `linear-gradient(90deg, ${p.color}, transparent)` }} />
        <div className="p-6 flex flex-col flex-1 gap-4">
          <div className="flex items-start justify-between gap-2">
            <div className="space-y-1.5 flex-1 min-w-0">
              <span
                className="inline-block text-xs font-mono px-2.5 py-0.5 rounded-full"
                style={{ color: p.color, background: `${p.color}12`, border: `1px solid ${p.color}30` }}
              >
                {p.status}
              </span>
              <h3 className="text-white font-bold text-base leading-snug group-hover:text-[#00f5ff] transition-colors">
                {p.title}
              </h3>
            </div>
            <div className="flex gap-1.5 shrink-0 mt-1">
              <motion.a href={p.github} aria-label="GitHub"
                className="w-8 h-8 flex items-center justify-center rounded-lg border border-white/10 text-slate-400 hover:text-[#00f5ff] hover:border-[#00f5ff]/40 transition-all"
                whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <GithubIcon size={14} />
              </motion.a>
              {p.live && (
                <motion.a href={p.live} aria-label="Demo"
                  className="w-8 h-8 flex items-center justify-center rounded-lg border border-white/10 text-slate-400 hover:text-[#00f5ff] hover:border-[#00f5ff]/40 transition-all"
                  whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                  <ExternalLink size={14} />
                </motion.a>
              )}
            </div>
          </div>
          <p className="text-slate-300 text-sm leading-relaxed flex-1 line-clamp-3">{p.description}</p>
          <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/5">
            {p.tags.map(t => (
              <span key={t} className="text-xs font-mono px-2 py-0.5 rounded border border-white/10 text-slate-400">
                {t}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </AnimateOnScroll>
  );
}

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? rest : rest.slice(0, 3);

  return (
    <Section id="proyectos">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0d0d2b]/15 to-transparent pointer-events-none" />

      {/* Header */}
      <AnimateOnScroll>
        <div className="flex items-center gap-4 mb-20">
          <span className="font-mono text-[#00f5ff]/50 text-sm">03.</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Proyectos</h2>
          <div className="flex-1 h-px bg-gradient-to-r from-[#00f5ff]/30 to-transparent" />
        </div>
      </AnimateOnScroll>

      {/* Featured */}
      <AnimateOnScroll delay={0.05}>
        <motion.div
          className="glow-card rounded-2xl overflow-hidden mb-16"
          style={{ borderColor: "rgba(0,245,255,0.2)" }}
          whileHover={{ borderColor: "rgba(0,245,255,0.4)" }}
          transition={{ duration: 0.25 }}
        >
          <div className="h-0.5 bg-gradient-to-r from-[#00f5ff] via-[#7b2fff] to-[#0080ff]" />
          <div className="p-8 md:p-10 relative overflow-hidden">
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-[#00f5ff]/5 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10 grid md:grid-cols-[1fr_180px] gap-8 items-start">
              <div className="space-y-5">
                <div className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#00f5ff] shadow-[0_0_8px_#00f5ff] animate-pulse" />
                  <span className="font-mono text-[#00f5ff]/70 text-xs tracking-[0.2em] uppercase">Proyecto Destacado</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">{featured.title}</h3>
                <p className="text-slate-300 leading-relaxed text-base">{featured.description}</p>
                <div className="flex flex-wrap gap-2">
                  {featured.tags.map(t => (
                    <span key={t} className="px-3 py-1 text-xs font-mono rounded-lg text-[#00f5ff] bg-[#00f5ff]/10 border border-[#00f5ff]/25">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex md:flex-col gap-3">
                <motion.a href={featured.github}
                  className="flex-1 md:flex-none flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-white/10 text-slate-300 hover:text-[#00f5ff] hover:border-[#00f5ff]/35 font-mono text-sm transition-all"
                  whileHover={{ scale: 1.02 }}>
                  <GithubIcon size={14} /> Código
                </motion.a>
                <motion.a href={featured.live ?? "#"}
                  className="flex-1 md:flex-none flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#00f5ff]/12 border border-[#00f5ff]/25 text-[#00f5ff] font-mono text-sm hover:bg-[#00f5ff]/20 transition-all"
                  whileHover={{ scale: 1.02 }}>
                  <ExternalLink size={14} /> Demo
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimateOnScroll>

      {/* Grid */}
      <AnimateOnScroll direction="none">
        <p className="font-mono text-slate-500 text-xs tracking-[0.2em] uppercase text-center mb-10">— Más proyectos —</p>
      </AnimateOnScroll>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {visible.map((p, i) => <Card key={p.id} p={p} delay={i * 0.07} />)}
      </div>

      {!showAll && rest.length > 3 && (
        <AnimateOnScroll direction="none" delay={0.1}>
          <div className="flex justify-center">
            <motion.button
              onClick={() => setShowAll(true)}
              className="inline-flex items-center gap-2 font-mono text-sm text-slate-400 hover:text-[#00f5ff] transition-colors group"
              whileHover={{ y: -1 }}
            >
              Ver todos los proyectos
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </div>
        </AnimateOnScroll>
      )}
    </Section>
  );
}
