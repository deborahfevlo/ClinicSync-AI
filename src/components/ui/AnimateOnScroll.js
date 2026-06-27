/*
  

  

   WHY inline style here and not Tailwind:
   The opacity and transform values are driven by JS state (visible).
   Tailwind can't read JS state at runtime, so we use a style prop
   for these two properties only. Everything else uses Tailwind.

   Props:
     delay  — ms before animation starts. Use index * 80 for stagger.
     y      — starting Y offset in px (default 24)
═══════════════════════════════════════════════════════════════ */

"use client";

import { useEffect, useRef, useState } from "react";

export default function AnimateOnScroll({ children, delay = 0, y = 24 }) {
  const ref            = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect(); // animate once, stop watching
        }
      },
      { threshold: 0.12 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        opacity:    visible ? 1 : 0,
        transform:  visible ? "translateY(0)" : `translateY(${y}px)`,
        transition: `opacity 0.55s ease ${delay}ms, transform 0.55s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
