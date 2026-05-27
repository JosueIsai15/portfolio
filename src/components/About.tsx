"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import AnimateOnScroll from "./AnimateOnScroll";
import Section from "./Section";
import { Code2, Zap, Globe, Coffee } from "lucide-react";

const stats = [
  { value: "3+",  label: "Años de experiencia",   icon: Coffee },
  { value: "20+", label: "Proyectos completados", icon: Code2  },
  { value: "10+", label: "Tecnologías dominadas", icon: Zap    },
  { value: "∞",   label: "Ganas de aprender",     icon: Globe  },
];

export default function About() {
  return (
    <Section id="sobre-mi">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0d0d2b]/20 to-transparent pointer-events-none" />

      {/* Header */}
      <AnimateOnScroll>
        <div className="flex items-center gap-4 mb-20">
          <span className="font-mono text-[#00f5ff]/50 text-sm">01.</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Sobre Mí</h2>
          <div className="flex-1 h-px bg-gradient-to-r from-[#00f5ff]/30 to-transparent" />
        </div>
      </AnimateOnScroll>

      {/* Two columns */}
      <div className="grid lg:grid-cols-2 gap-16 items-start">

        {/* ── Left: photo + text + terminal ── */}
        <div className="space-y-7">

          {/* Profile photo */}
          <AnimateOnScroll direction="left" delay={0.02}>
            <div className="flex items-center gap-5">
              <motion.div
                className="relative shrink-0"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.25 }}
              >
                {/* Glow ring */}
                <div
                  className="absolute inset-0 rounded-2xl blur-md opacity-40"
                  style={{ background: "linear-gradient(135deg, #00f5ff, #7b2fff)" }}
                />
                <div
                  className="relative w-24 h-24 rounded-2xl overflow-hidden border-2"
                  style={{ borderColor: "rgba(0,245,255,0.35)" }}
                >
                  <Image
                    src="/foto.jpg"
                    alt="Josué García"
                    fill
                    className="object-cover object-center"
                    sizes="96px"
                    priority
                  />
                </div>
                {/* Online dot */}
                <span className="absolute -bottom-1.5 -right-1.5 w-4 h-4 rounded-full bg-emerald-400 border-2 border-[#050510] shadow-[0_0_8px_#4ade80]" />
              </motion.div>
              <div>
                <h3 className="text-white font-bold text-xl">Josué García</h3>
                <p className="text-[#00f5ff] font-mono text-xs mt-0.5">Frontend Developer</p>
                <p className="text-slate-500 font-mono text-xs mt-1">España 🇪🇸 · Disponible</p>
              </div>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll direction="left" delay={0.05}>
            <p className="text-slate-200 text-lg leading-relaxed">
              Soy un{" "}
              <span className="text-[#00f5ff] font-semibold">Frontend Developer</span>{" "}
              con pasión por construir interfaces que no solo funcionan perfectamente,
              sino que también deleitan a quien las usa.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll direction="left" delay={0.1}>
            <p className="text-slate-300 leading-relaxed">
              Mi enfoque combina{" "}
              <span className="text-white font-medium">código limpio y mantenible</span>{" "}
              con{" "}
              <span className="text-white font-medium">diseño cuidadoso</span>.
              Creo que la mejor UI es la que el usuario ni nota — porque todo fluye
              de forma natural.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll direction="left" delay={0.15}>
            <p className="text-slate-300 leading-relaxed">
              Trabajo con{" "}
              <span className="text-[#00f5ff]">React / Next.js</span> y TypeScript
              en frontend, con experiencia también en backend con{" "}
              <span className="text-[#00f5ff]">Node.js</span> y{" "}
              <span className="text-[#00f5ff]">Python / Django</span>.
            </p>
          </AnimateOnScroll>

          {/* Terminal */}
          <AnimateOnScroll direction="left" delay={0.2}>
            <div className="glow-card rounded-xl overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 bg-[#06061a] border-b border-[#1a1a4e]">
                <span className="w-3 h-3 rounded-full bg-red-500/80" />
                <span className="w-3 h-3 rounded-full bg-yellow-400/80" />
                <span className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="text-slate-500 text-xs font-mono ml-3">terminal</span>
              </div>
              <div className="p-5 font-mono text-xs space-y-1.5">
                <p>
                  <span className="text-[#00f5ff]">josue@portfolio</span>
                  <span className="text-slate-500">:~$ </span>
                  <span className="text-slate-300">cat about.json</span>
                </p>
                <div className="pl-2 space-y-1 mt-2 border-l-2 border-[#1a1a4e]">
                  <p className="text-slate-500">{"{"}</p>
                  {[
                    { k: "nombre",     v: '"Josué García"',       bool: false },
                    { k: "rol",        v: '"Frontend Developer"', bool: false },
                    { k: "ubicacion",  v: '"España 🇪🇸"',          bool: false },
                    { k: "disponible", v: "true",                 bool: true  },
                  ].map((l, i, arr) => (
                    <p key={l.k} className="pl-4">
                      <span className="text-purple-400">&quot;{l.k}&quot;</span>
                      <span className="text-slate-600">: </span>
                      <span className={l.bool ? "text-[#00f5ff]" : "text-emerald-400"}>{l.v}</span>
                      {i < arr.length - 1 && <span className="text-slate-600">,</span>}
                    </p>
                  ))}
                  <p className="text-slate-500">{"}"}</p>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>

        {/* ── Right: stats grid ── */}
        <div className="grid grid-cols-2 gap-5">
          {stats.map((s, i) => (
            <AnimateOnScroll key={s.label} direction="right" delay={0.1 + i * 0.08}>
              <motion.div
                className="glow-card rounded-2xl p-8 flex flex-col items-center justify-center text-center gap-3 aspect-square"
                whileHover={{ scale: 1.04, y: -4 }}
                transition={{ duration: 0.2 }}
              >
                <s.icon size={26} className="text-[#00f5ff]/60" />
                <span
                  className="text-4xl font-bold gradient-text"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  {s.value}
                </span>
                <span className="text-slate-400 text-xs leading-snug">{s.label}</span>
              </motion.div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </Section>
  );
}
