"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Home, Terminal } from "lucide-react";

export default function NotFound() {
  return (
    <div
      className="min-h-screen flex items-center justify-center grid-bg overflow-hidden"
      style={{ background: "#050510" }}
    >
      {/* Ambient glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#00f5ff]/4 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 text-center px-6 flex flex-col items-center">

        {/* 404 */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span
            className="font-bold leading-none select-none"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "clamp(7rem, 20vw, 14rem)",
              background: "linear-gradient(135deg, #00f5ff, #7b2fff, #0080ff)",
              backgroundSize: "300% 300%",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              animation: "gradientShift 6s ease infinite",
            }}
          >
            404
          </span>
        </motion.div>

        {/* Terminal card */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="glow-card rounded-xl overflow-hidden max-w-sm w-full mb-10 text-left"
        >
          {/* Title bar */}
          <div className="flex items-center gap-2 px-4 py-3 bg-[#06061a] border-b border-[#1a1a4e]">
            <span className="w-3 h-3 rounded-full bg-red-500/80" />
            <span className="w-3 h-3 rounded-full bg-yellow-400/80" />
            <span className="w-3 h-3 rounded-full bg-green-500/80" />
            <Terminal size={12} className="ml-3 text-slate-500" />
            <span className="font-mono text-slate-500 text-xs ml-1">bash</span>
          </div>
          {/* Content */}
          <div className="p-5 font-mono text-xs space-y-1.5">
            <p>
              <span className="text-[#00f5ff]">josue@portfolio</span>
              <span className="text-slate-500">:~$ </span>
              <span className="text-slate-300">navigate /esta-pagina</span>
            </p>
            <p className="text-red-400">Error 404: Página no encontrada</p>
            <p className="text-slate-500">
              La ruta <span className="text-yellow-400">no existe</span> en este servidor.
            </p>
            <p className="text-[#00f5ff] flex items-center gap-1.5">
              <span className="animate-pulse">▊</span> Redirige al inicio para continuar
            </p>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.45 }}
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-mono text-sm font-bold transition-all duration-200 hover:opacity-90"
            style={{
              background: "linear-gradient(135deg, #00f5ff, #0080ff)",
              color: "#050510",
              boxShadow: "0 0 24px rgba(0,245,255,0.3)",
            }}
          >
            <Home size={15} />
            Volver al inicio
          </Link>
        </motion.div>

      </div>
    </div>
  );
}
