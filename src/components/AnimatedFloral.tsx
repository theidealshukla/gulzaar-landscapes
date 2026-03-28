"use client";

import { motion } from "framer-motion";

interface AnimatedFloralProps {
  className?: string;
  delay?: number;
  duration?: number;
}

export default function AnimatedFloral({ className = "", delay = 0, duration = 15 }: AnimatedFloralProps) {
  return (
    <motion.div
      className={`absolute pointer-events-none opacity-20 drop-shadow-lg mix-blend-overlay ${className}`}
      animate={{
        y: [0, -20, 0],
        rotate: [0, 10, -5, 0],
        scale: [1, 1.05, 0.95, 1],
      }}
      transition={{
        duration: duration,
        repeat: Infinity,
        ease: "easeInOut",
        delay: delay,
      }}
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 160 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M80 150C80 150 78 95 30 60C30 60 65 50 80 80C80 80 95 50 130 60C130 60 82 95 80 150Z"
          fill="currentColor"
        />
        <path
          d="M80 80C80 80 60 40 40 20C40 20 70 15 90 35C90 35 110 15 140 20C140 20 120 40 80 80Z"
          fill="currentColor"
          className="opacity-60"
        />
        <path
          d="M80 150L80 80"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          className="opacity-40"
        />
      </svg>
    </motion.div>
  );
}
