"use client";

import { motion } from "framer-motion";
import AnimateOnScroll from "./AnimateOnScroll";
import Section from "./Section";
import { useState } from "react";
import { Send, Mail, MapPin, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { GithubIcon } from "./SocialIcons";

const info = [
  { icon: Mail,         label: "Email",     value: "josueisai2001y@gmail.com",  href: "mailto:josueisai2001y@gmail.com", color: "#00f5ff" },
  { icon: GithubIcon,   label: "GitHub",    value: "github.com/JosueIsai15",     href: "https://github.com/JosueIsai15",  color: "#7b2fff" },
  { icon: MapPin,       label: "Ubicación", value: "España 🇪🇸",                 href: null,                              color: "#00f5ff" },
];

type Status = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const [form, setForm]       = useState({ name: "", email: "", message: "" });
  const [status, setStatus]   = useState<Status>("idle");
  const [apiError, setApiError] = useState("");
  const [focused, setFocused] = useState<string | null>(null);

  const inputBase = "w-full bg-[#06061a] border rounded-xl px-4 py-3.5 text-white placeholder-slate-600 font-mono text-sm outline-none transition-all duration-200";
  const iClass = (f: string) =>
    `${inputBase} ${
      focused === f
        ? "border-[#00f5ff] shadow-[0_0_0_3px_rgba(0,245,255,0.07)]"
        : "border-[#1a1a4e] hover:border-[#00f5ff]/30"
    }`;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setApiError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (!res.ok) {
        setApiError(data.error ?? "Error desconocido.");
        setStatus("error");
      } else {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      }
    } catch {
      setApiError("No se pudo conectar. Verifica tu conexión.");
      setStatus("error");
    }
  };

  return (
    <Section id="contacto">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#050510] pointer-events-none" />

      {/* Header */}
      <AnimateOnScroll>
        <div className="flex items-center gap-4 mb-20">
          <span className="font-mono text-[#00f5ff]/50 text-sm">04.</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Contacto</h2>
          <div className="flex-1 h-px bg-gradient-to-r from-[#00f5ff]/30 to-transparent" />
        </div>
      </AnimateOnScroll>

      <div className="grid lg:grid-cols-[400px_1fr] gap-14 items-start">

        {/* ── Left ── */}
        <div className="space-y-8">
          <AnimateOnScroll direction="left" delay={0.05}>
            <div>
              <h3 className="text-2xl font-bold text-white mb-3">¡Hablemos!</h3>
              <p className="text-slate-300 leading-relaxed">
                Disponible para proyectos freelance, empleo o simplemente para
                charlar sobre tecnología. Respondo en menos de 24 h.
              </p>
            </div>
          </AnimateOnScroll>

          <div className="space-y-3">
            {info.map((item, i) => (
              <AnimateOnScroll key={item.label} direction="left" delay={0.1 + i * 0.06}>
                <motion.div
                  className="flex items-center gap-4 p-4 rounded-xl border border-white/8 bg-[#0d0d2b]/60"
                  whileHover={{ x: 5, borderColor: `${item.color}35` }}
                  transition={{ duration: 0.18 }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: `${item.color}12`, border: `1px solid ${item.color}25` }}
                  >
                    <item.icon size={17} style={{ color: item.color }} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-slate-500 text-[10px] font-mono uppercase tracking-widest mb-0.5">{item.label}</p>
                    {item.href
                      ? <a href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined} className="text-slate-200 hover:text-[#00f5ff] text-sm transition-colors truncate block">{item.value}</a>
                      : <span className="text-slate-200 text-sm">{item.value}</span>
                    }
                  </div>
                </motion.div>
              </AnimateOnScroll>
            ))}
          </div>

          <AnimateOnScroll direction="left" delay={0.36}>
            <div className="glow-card rounded-xl p-4 flex items-center gap-3.5">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#4ade80] shrink-0" />
              <div>
                <p className="text-emerald-400 font-mono text-sm font-semibold">Disponible para trabajar</p>
                <p className="text-slate-400 text-xs font-mono mt-0.5">{">> "} Buscando rol Frontend Developer</p>
              </div>
            </div>
          </AnimateOnScroll>
        </div>

        {/* ── Right: Form ── */}
        <AnimateOnScroll direction="right" delay={0.1}>
          {status === "success" ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              className="glow-card rounded-2xl p-14 flex flex-col items-center justify-center text-center gap-5 min-h-[420px]"
              style={{ borderColor: "rgba(0,245,255,0.25)" }}
            >
              <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 200, delay: 0.15 }}>
                <CheckCircle size={64} className="text-[#00f5ff]" style={{ filter: "drop-shadow(0 0 18px #00f5ff)" }} />
              </motion.div>
              <h3 className="text-xl font-bold text-white">¡Mensaje enviado!</h3>
              <p className="text-slate-300 text-sm max-w-xs leading-relaxed">
                Gracias por escribir. Te responderé a <span className="text-[#00f5ff]">{form.email || "tu correo"}</span> en menos de 24 horas.
              </p>
              <button
                onClick={() => { setStatus("idle"); setForm({ name: "", email: "", message: "" }); }}
                className="font-mono text-xs text-slate-500 hover:text-[#00f5ff] transition-colors mt-1"
              >
                Enviar otro mensaje →
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="glow-card rounded-2xl p-8 space-y-5">
              <p className="font-mono text-[#00f5ff]/50 text-xs">// send_message( )</p>

              {/* Name + Email row */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="font-mono text-[11px] text-slate-400 uppercase tracking-widest block">Nombre *</label>
                  <input
                    type="text" required placeholder="Tu nombre"
                    value={form.name}
                    onChange={e => setForm(s => ({ ...s, name: e.target.value }))}
                    onFocus={() => setFocused("name")} onBlur={() => setFocused(null)}
                    className={iClass("name")}
                    disabled={status === "loading"}
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="font-mono text-[11px] text-slate-400 uppercase tracking-widest block">Email *</label>
                  <input
                    type="email" required placeholder="tu@email.com"
                    value={form.email}
                    onChange={e => setForm(s => ({ ...s, email: e.target.value }))}
                    onFocus={() => setFocused("email")} onBlur={() => setFocused(null)}
                    className={iClass("email")}
                    disabled={status === "loading"}
                  />
                </div>
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label className="font-mono text-[11px] text-slate-400 uppercase tracking-widest block">Mensaje *</label>
                <textarea
                  required rows={5} minLength={10}
                  placeholder="Cuéntame sobre tu proyecto o consulta..."
                  value={form.message}
                  onChange={e => setForm(s => ({ ...s, message: e.target.value }))}
                  onFocus={() => setFocused("message")} onBlur={() => setFocused(null)}
                  className={`${iClass("message")} resize-none`}
                  disabled={status === "loading"}
                />
              </div>

              {/* Error */}
              {status === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2.5 p-3.5 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-sm"
                >
                  <AlertCircle size={16} className="shrink-0" />
                  {apiError}
                </motion.div>
              )}

              {/* Submit */}
              <motion.button
                type="submit"
                disabled={status === "loading"}
                className="w-full flex items-center justify-center gap-2.5 py-4 rounded-xl font-mono text-sm font-bold disabled:opacity-60 disabled:cursor-not-allowed"
                style={{ background: "linear-gradient(135deg, #00f5ff, #0080ff)", color: "#050510", boxShadow: "0 0 24px rgba(0,245,255,0.25)" }}
                whileHover={status !== "loading" ? { scale: 1.01, boxShadow: "0 0 36px rgba(0,245,255,0.40)" } : {}}
                whileTap={status !== "loading" ? { scale: 0.99 } : {}}
              >
                {status === "loading"
                  ? <><Loader2 size={15} className="animate-spin" /> Enviando...</>
                  : <><Send size={15} /> Enviar mensaje</>
                }
              </motion.button>

              <p className="text-slate-600 text-xs font-mono text-center">
                Tu mensaje llegará directamente a mi email ✓
              </p>
            </form>
          )}
        </AnimateOnScroll>
      </div>
    </Section>
  );
}
