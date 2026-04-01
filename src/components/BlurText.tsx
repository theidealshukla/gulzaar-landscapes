"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

interface BlurTextProps {
  text: string;
  className?: string;
  delay?: number;
}

export default function BlurText({ text, className = "", delay = 0 }: BlurTextProps) {
  const containerRef = useRef<HTMLHeadingElement>(null);
  const [isInView, setIsInView] = useState(false);
  const words = text.split(" ");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const wordVariants = {
    hidden: {
      filter: "blur(10px)",
      opacity: 0,
      y: 50,
    },
    visible: (i: number) => ({
      filter: "blur(0px)",
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: delay + i * 0.1,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      },
    }),
  };

  return (
    <h1
      ref={containerRef}
      className={className}
      style={{ fontFamily: "var(--font-heading-glass)" }}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          custom={i}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={wordVariants}
          style={{
            display: "inline-block",
            marginRight: "0.3em",
            willChange: "filter, opacity, transform",
          }}
        >
          {word}
        </motion.span>
      ))}
    </h1>
  );
}
