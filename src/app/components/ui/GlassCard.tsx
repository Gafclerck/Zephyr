import { ReactNode } from "react";
import { motion } from "motion/react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function GlassCard({ children, className = "", hover = false }: GlassCardProps) {
  const Component = hover ? motion.div : "div";

  return (
    <Component
      {...(hover
        ? {
            whileHover: { scale: 1.03, borderColor: "rgba(0, 180, 255, 0.4)" },
            transition: { duration: 0.2, ease: "easeOut" },
          }
        : {})}
      className={`
        bg-muted/60 backdrop-blur-md
        border border-[#00B4FF]/20
        rounded-xl p-6
        ${hover ? "cursor-pointer" : ""}
        ${className}
      `}
    >
      {children}
    </Component>
  );
}
