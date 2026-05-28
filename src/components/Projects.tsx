"use client";

import { motion } from "framer-motion";
import AnimateOnScroll from "./AnimateOnScroll";
import Section from "./Section";
import { ExternalLink, ArrowRight } from "lucide-react";
import { GithubIcon } from "./SocialIcons";
import { useState } from "react";

const featured = [
  {
    id: 1,
    title: "FinTrack — Dashboard Financiero",
    description: "App full-stack con autenticación real (Supabase Auth), gestión de ingresos y gastos por categorías, gráficas mensuales interactivas y datos privados por usuario mediante Row Level Security.",
    tags: ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "Recharts", "Tailwind CSS"],
    github: "https://github.com/JosueIsai15/fintrack",
    live: "https://fintrack-iota-indol.vercel.app",
    color: "#00f5ff",
    gradient: "from-[#00f5ff] via-[#0080ff] to-[#7b2fff]",
    glow: "#00f5ff",
    badge: "Full Stack · Auth · BD",
  },
  {
    id: 2,
    title: "CineTrack — Películas & Series",
    description: "App de descubrimiento de cine con hero animado, búsqueda en tiempo real, tráilers en modal, watchlist persistente y páginas de detalle con reparto. Consume la API de TMDB con ISR.",
    tags: ["Next.js", "TypeScript", "TMDB API", "Framer Motion", "Tailwind CSS"],
    github: "https://github.com/JosueIsai15/cinetrack",
    live: "https://cinetrack-omega-wine.vercel.app",
    color: "#7b2fff",
    gradient: "from-[#7b2fff] via-[#a855f7] to-[#0080ff]",
    glow: "#7b2fff",
    badge: "API Externa · ISR · Streaming",
  },
  {
    id: 3,
    title: "CodeLens — AI Code Analysis",
    description: "Herramienta de análisis de código con IA. Editor Monaco (VS Code), 4 modos de análisis (Review, Explicar, Optimizar, Seguridad), respuestas en streaming con Groq Llama 3.3 70B.",
    tags: ["Next.js", "TypeScript", "Groq API", "Monaco Editor", "Framer Motion"],
    github: "https://github.com/JosueIsai15/codelens",
    live: "https://codelens-inky.vercel.app",
    color: "#0080ff",
    gradient: "from-[#0080ff] via-[#00f5ff] to-[#7b2fff]",
    glow: "#0080ff",
    badge: "IA · Streaming · Dev Tool",
  },
];

const upcoming = [
  {
    id: 4,
    title: "Task Management App",
    description: "App de tareas colaborativa con drag-and-drop, notificaciones en tiempo real y sincronización multi-dispositivo.",
    tags: ["React", "Node.js", "Socket.io", "MongoDB"],
    github: "#", live: "#", color: "#00f5ff", status: "Próximamente",
  },
  {
    id: 5,
    title: "API REST Microservices",
    description: "Arquitectura de microservicios con JWT, rate limiting, documentación Swagger y despliegue en Docker.",
    tags: ["Node.js", "Express", "Docker", "PostgreSQL", "JWT"],
    github: "#", live: null, color: "#7b2fff", status: "Próximamente",
  },
  {
    id: 6,
    title: "CLI Automation Tool",
    description: "Herramienta CLI en Python para automatización de flujos de trabajo con configuración YAML y hooks.",
    tags: ["Python", "Click", "YAML", "Shell"],
    github: "#", live: null, color: "#0080ff", status: "Próximamente",
  },
];

function UpcomingCard({ p, delay }: { p: typeof upcoming[0]; delay: number }) {
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
          <span
            className="inline-block w-fit text-xs font-mono px-2.5 py-0.5 rounded-full"
            style={{ color: p.color, background: `${p.color}12`, border: `1px solid ${p.color}30` }}
          >
            {p.status}
          </span>
          <h3 className="text-white font-bold text-base leading-snug group-hover:text-[#00f5ff] transition-colors">
            {p.title}
          </h3>
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
  const visibleUpcoming = showAll ? upcoming : upcoming.slice(0, 3);

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

      {/* Featured projects — todos destacados */}
      <div className="space-y-8 mb-20">
        {featured.map((p, i) => (
          <AnimateOnScroll key={p.id} delay={i * 0.08}>
            <motion.div
              className="glow-card rounded-2xl overflow-hidden"
              style={{ borderColor: `${p.glow}22` }}
              whileHover={{ borderColor: `${p.glow}44` }}
              transition={{ duration: 0.25 }}
            >
              <div className={`h-0.5 bg-gradient-to-r ${p.gradient}`} />
              <div className="p-8 md:p-10 relative overflow-hidden">
                {/* Ambient glow */}
                <div
                  className="absolute -top-24 -right-24 w-96 h-96 rounded-full blur-3xl pointer-events-none opacity-50"
                  style={{ background: `${p.glow}08` }}
                />
                <div className="relative z-10 grid md:grid-cols-[1fr_200px] gap-8 items-start">
                  {/* Info */}
                  <div className="space-y-5">
                    <div className="flex items-center gap-3 flex-wrap">
                      <div className="flex items-center gap-2">
                        <span
                          className="w-2 h-2 rounded-full animate-pulse shadow-lg"
                          style={{ background: p.color, boxShadow: `0 0 8px ${p.color}` }}
                        />
                        <span className="font-mono text-xs tracking-[0.2em] uppercase" style={{ color: `${p.color}99` }}>
                          Proyecto Destacado
                        </span>
                      </div>
                      <span
                        className="text-xs font-mono px-2.5 py-0.5 rounded-full border"
                        style={{ color: p.color, background: `${p.color}12`, borderColor: `${p.color}30` }}
                      >
                        {p.badge}
                      </span>
                    </div>

                    <h3 className="text-2xl md:text-3xl font-bold text-white">{p.title}</h3>
                    <p className="text-slate-300 leading-relaxed text-base">{p.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {p.tags.map(t => (
                        <span
                          key={t}
                          className="px-3 py-1 text-xs font-mono rounded-lg border"
                          style={{ color: p.color, background: `${p.color}10`, borderColor: `${p.color}25` }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="flex md:flex-col gap-3">
                    <motion.a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 md:flex-none flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl border border-white/10 text-slate-300 hover:text-white hover:border-white/25 font-mono text-sm transition-all"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <GithubIcon size={15} /> Código
                    </motion.a>
                    <motion.a
                      href={p.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 md:flex-none flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl border font-mono text-sm transition-all"
                      style={{
                        background: `${p.color}15`,
                        borderColor: `${p.color}35`,
                        color: p.color,
                      }}
                      whileHover={{ scale: 1.02, backgroundColor: `${p.color}25` }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <ExternalLink size={15} /> Demo en vivo
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimateOnScroll>
        ))}
      </div>

      {/* Upcoming */}
      <AnimateOnScroll direction="none">
        <p className="font-mono text-slate-500 text-xs tracking-[0.2em] uppercase text-center mb-10">— En construcción —</p>
      </AnimateOnScroll>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {visibleUpcoming.map((p, i) => (
          <UpcomingCard key={p.id} p={p} delay={i * 0.07} />
        ))}
      </div>

      {!showAll && upcoming.length > 3 && (
        <AnimateOnScroll direction="none" delay={0.1}>
          <div className="flex justify-center">
            <motion.button
              onClick={() => setShowAll(true)}
              className="inline-flex items-center gap-2 font-mono text-sm text-slate-400 hover:text-[#00f5ff] transition-colors group"
              whileHover={{ y: -1 }}
            >
              Ver todos
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </div>
        </AnimateOnScroll>
      )}
    </Section>
  );
}
