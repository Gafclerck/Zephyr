import { motion } from "motion/react";
import { useLocation } from "react-router";

/* ─── WhatsApp number ─────────────────────────────────────────────────── */
const WA_NUMBER = "221XXXXXXXXX"; // ← replace with real number (no + or spaces)

/* ─── Contextual messages per route ──────────────────────────────────── */
const CONTEXTUAL_MESSAGES: { pattern: RegExp; message: string }[] = [
  {
    pattern: /\/services\/developpement-web/,
    message:
      "Bonjour Zephyr,\nJe suis intéressé(e) par un projet de développement web et souhaite en discuter.",
  },
  {
    pattern: /\/services\/applications-mobiles/,
    message:
      "Bonjour Zephyr,\nJe suis intéressé(e) par le développement d'une application mobile.",
  },
  {
    pattern: /\/services\/branding-design/,
    message:
      "Bonjour Zephyr,\nJe suis intéressé(e) par vos services de branding et design.",
  },
  {
    pattern: /\/services\/marketing-digital/,
    message:
      "Bonjour Zephyr,\nJe suis intéressé(e) par vos services de marketing digital.",
  },
  {
    pattern: /\/services/,
    message:
      "Bonjour Zephyr,\nJ'ai découvert vos services et souhaite en savoir plus.",
  },
  {
    pattern: /\/solutions\/([^/]+)/,
    message:
      "Bonjour Zephyr,\nJe suis intéressé(e) par l'une de vos solutions packagées et souhaite obtenir plus d'informations.",
  },
  {
    pattern: /\/solutions/,
    message:
      "Bonjour Zephyr,\nJe souhaite en savoir plus sur vos solutions packagées.",
  },
  {
    pattern: /\/portfolio/,
    message:
      "Bonjour Zephyr,\nJ'ai consulté votre portfolio et souhaite discuter d'un projet similaire.",
  },
  {
    pattern: /\/contact/,
    message:
      "Bonjour Zephyr,\nJe souhaite démarrer un projet et préfère en discuter directement.",
  },
  {
    pattern: /\/blog/,
    message:
      "Bonjour Zephyr,\nJ'ai lu votre blog et souhaite en savoir plus sur votre expertise.",
  },
];

const DEFAULT_MESSAGE =
  "Bonjour Zephyr,\nJe suis intéressé(e) par vos services et souhaite discuter de mon projet.";

function getContextualMessage(pathname: string): string {
  for (const { pattern, message } of CONTEXTUAL_MESSAGES) {
    if (pattern.test(pathname)) return message;
  }
  return DEFAULT_MESSAGE;
}

function buildWhatsAppUrl(pathname: string): string {
  const message = getContextualMessage(pathname);
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
}

/* ─── WhatsApp SVG icon ─────────────────────────────────────────────── */
function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

/* ─── Component ─────────────────────────────────────────────────────── */
export function WhatsAppButton() {
  const { pathname } = useLocation();
  const waUrl = buildWhatsAppUrl(pathname);

  return (
    <motion.a
      href={waUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contacter sur WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.2, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      /* Stack above chatbot: chatbot is at bottom-6/bottom-8 (24px/32px)
         w-16 = 64px, gap = 12px → WA sits at 24+64+12 = 100px from bottom */
      className={[
        "fixed z-50",
        "bottom-[100px] right-6",
        "md:bottom-[108px] md:right-8",
        "w-14 h-14",
        "flex items-center justify-center",
        "bg-background border border-border/60",
        "hover:border-[#25D366]/60 hover:bg-[#25D366]/5",
        "text-[#25D366]",
        "transition-colors duration-200",
        "shadow-sm",
        "group",
      ].join(" ")}
    >
      <WhatsAppIcon className="w-6 h-6 transition-transform duration-200 group-hover:scale-110" />

      {/* Subtle online indicator */}
      <span
        className="absolute top-0 right-0 w-2.5 h-2.5 bg-[#25D366] border-2 border-background -mt-0.5 -mr-0.5"
        aria-hidden="true"
      />

      {/* Tooltip on hover — desktop only */}
      <span
        className={[
          "pointer-events-none absolute right-full mr-3",
          "hidden md:flex items-center gap-2",
          "px-3 py-1.5 bg-background border border-border/60",
          "text-foreground text-xs font-medium whitespace-nowrap",
          "opacity-0 group-hover:opacity-100",
          "translate-x-1 group-hover:translate-x-0",
          "transition-all duration-200",
          "shadow-sm",
        ].join(" ")}
      >
        <WhatsAppIcon className="w-3 h-3 text-[#25D366] shrink-0" />
        Discuter sur WhatsApp
      </span>
    </motion.a>
  );
}
