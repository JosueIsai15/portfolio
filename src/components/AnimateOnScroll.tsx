"use client";

import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  className?: string;
  amount?: number;
}

export default function AnimateOnScroll({
  children,
  delay = 0,
  direction = "up",
  className = "",
  amount = 0.15,
}: Props) {
  const offsets: Record<string, { x: number; y: number }> = {
    up:    { x: 0,   y: 40  },
    down:  { x: 0,   y: -40 },
    left:  { x: -40, y: 0   },
    right: { x: 40,  y: 0   },
    none:  { x: 0,   y: 0   },
  };

  const { x, y } = offsets[direction];

  const variants: Variants = {
    hidden:  { opacity: 0, x, y },
    visible: { opacity: 1, x: 0, y: 0 },
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount }}
      variants={variants}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
