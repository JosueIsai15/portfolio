"use client";

import { motion } from "framer-motion";
import { Mail, Heart } from "lucide-react";
import { GithubIcon } from "@/components/SocialIcons";

export default function Footer() {
  return (
    <footer className="relative border-t border-[#1a1a4e] py-8">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#00f5ff]/25 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 md:px-10 xl:px-0 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Logo */}
        <motion.div
          className="font-mono text-[#00f5ff] font-bold tracking-widest text-sm"
          whileHover={{ scale: 1.05 }}
        >
          <span className="opacity-50">&lt;</span>
          <span>JG</span>
          <span className="opacity-50">/&gt;</span>
        </motion.div>

        {/* Copyright */}
        <p className="text-slate-600 text-xs font-mono flex items-center gap-1.5">
          Hecho con{" "}
          <Heart size={12} className="text-[#00f5ff]" style={{
            filter: "drop-shadow(0 0 4px #00f5ff)",
          }} />
          {" "}por Josué García · {new Date().getFullYear()}
        </p>

        {/* Social links */}
        <div className="flex items-center gap-4">
          {[
            { icon: GithubIcon, href: "https://github.com/JosueIsai15", label: "GitHub", external: true },
            { icon: Mail, href: "mailto:josueisai2001y@gmail.com", label: "Email", external: false },
          ].map(({ icon: Icon, href, label, external }) => (
            <motion.a
              key={label}
              href={href}
              aria-label={label}
              target={external ? "_blank" : undefined}
              rel={external ? "noopener noreferrer" : undefined}
              className="text-slate-600 hover:text-[#00f5ff] transition-colors"
              whileHover={{ scale: 1.2, y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <Icon size={16} />
            </motion.a>
          ))}
        </div>
      </div>
    </footer>
  );
}
