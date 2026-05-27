"use client";

import { motion } from "framer-motion";
import AnimateOnScroll from "./AnimateOnScroll";
import Section from "./Section";

const categories = [
  {
    num: "01", label: "Frontend", color: "#00f5ff",
    skills: [
      { name: "React / Next.js",  pct: 93 },
      { name: "TypeScript",       pct: 88 },
      { name: "HTML / CSS",       pct: 96 },
      { name: "Tailwind CSS",     pct: 92 },
      { name: "Framer Motion",    pct: 80 },
    ],
  },
  {
    num: "02", label: "Backend", color: "#7b2fff",
    skills: [
      { name: "Node.js",    pct: 82 },
      { name: "Express.js", pct: 80 },
      { name: "Python",     pct: 75 },
      { name: "Django",     pct: 70 },
      { name: "REST APIs",  pct: 88 },
    ],
  },
  {
    num: "03", label: "Otros / Tools", color: "#0080ff",
    skills: [
      { name: "Java",         pct: 68 },
      { name: "Flutter/Dart", pct: 60 },
      { name: "Git / GitHub", pct: 92 },
      { name: "PostgreSQL",   pct: 75 },
      { name: "Docker",       pct: 65 },
    ],
  },
];

const tags = [
  "React", "Next.js", "TypeScript", "JavaScript", "HTML", "CSS", "SASS",
  "Tailwind CSS", "Framer Motion", "Node.js", "Express", "Python", "Django",
  "Java", "Flutter", "Dart", "REST APIs", "GraphQL",
  "PostgreSQL", "MongoDB", "Redis", "Docker", "Git", "Figma", "Vercel", "AWS",
  "Jest", "Cypress",
];

function Bar({ name, pct, color, delay }: { name: string; pct: number; color: string; delay: number }) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between text-sm">
        <span className="text-slate-200 font-medium">{name}</span>
        <span className="font-mono text-xs" style={{ color }}>{pct}%</span>
      </div>
      <div className="h-2 w-full rounded-full bg-white/5 overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{ background: `linear-gradient(90deg, ${color}, ${color}55)`, boxShadow: `0 0 8px ${color}44` }}
          initial={{ width: 0 }}
          whileInView={{ width: `${pct}%` }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 1.1, delay, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <Section id="skills">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0d0d2b]/15 via-transparent to-[#0d0d2b]/15 pointer-events-none" />

      {/* Header */}
      <AnimateOnScroll>
        <div className="flex items-center gap-4 mb-20">
          <span className="font-mono text-[#00f5ff]/50 text-sm">02.</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Skills</h2>
          <div className="flex-1 h-px bg-gradient-to-r from-[#00f5ff]/30 to-transparent" />
        </div>
      </AnimateOnScroll>

      {/* 3 columns */}
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {categories.map((cat, ci) => (
          <AnimateOnScroll key={cat.label} delay={ci * 0.1} direction="up">
            <div className="glow-card rounded-2xl p-7 h-full" style={{ borderColor: `${cat.color}20` }}>
              <div className="flex items-center gap-3 mb-7 pb-4 border-b border-white/5">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-mono font-bold shrink-0"
                  style={{ background: `${cat.color}15`, color: cat.color }}
                >
                  {cat.num}
                </div>
                <h3 className="text-white font-semibold">{cat.label}</h3>
                <div className="ml-auto w-2 h-2 rounded-full" style={{ background: cat.color, boxShadow: `0 0 6px ${cat.color}` }} />
              </div>
              <div className="space-y-5">
                {cat.skills.map((s, si) => (
                  <Bar key={s.name} name={s.name} pct={s.pct} color={cat.color} delay={0.15 + si * 0.07} />
                ))}
              </div>
            </div>
          </AnimateOnScroll>
        ))}
      </div>

      {/* Learning strip */}
      <AnimateOnScroll delay={0.1}>
        <div className="glow-card rounded-2xl px-7 py-5 flex flex-col sm:flex-row sm:items-center gap-4 mb-20">
          <span className="font-mono text-[#7b2fff] text-xs shrink-0">// aprendiendo ahora</span>
          <div className="flex flex-wrap gap-2">
            {["Rust", "WebAssembly", "Three.js", "Kubernetes"].map(t => (
              <span key={t} className="px-3 py-1 rounded-full text-sm font-mono border border-[#7b2fff]/40 text-[#7b2fff] bg-[#7b2fff]/10">
                {t}
              </span>
            ))}
          </div>
        </div>
      </AnimateOnScroll>

      {/* Tag cloud */}
      <AnimateOnScroll direction="none">
        <p className="font-mono text-slate-500 text-xs text-center mb-8 tracking-[0.25em] uppercase">
          — tecnologías que uso —
        </p>
      </AnimateOnScroll>
      <div className="flex flex-wrap justify-center gap-3">
        {tags.map((tag, i) => (
          <AnimateOnScroll key={tag} delay={i * 0.018} direction="none">
            <motion.span
              className="px-4 py-2 rounded-lg text-sm font-mono border border-[#1a1a4e] text-slate-400 bg-[#0d0d2b]/70 cursor-default select-none"
              whileHover={{ color: "#00f5ff", borderColor: "rgba(0,245,255,0.4)", backgroundColor: "rgba(0,245,255,0.06)", scale: 1.06 }}
              transition={{ duration: 0.15 }}
            >
              {tag}
            </motion.span>
          </AnimateOnScroll>
        ))}
      </div>
    </Section>
  );
}
