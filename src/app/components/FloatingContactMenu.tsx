import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useLocation } from "react-router";
import { MessageCircle, X, Bot } from "lucide-react";
import { ChatBot } from "./ChatBot";

/* ─── WhatsApp config ────────────────────────────────────────────────── */
const WA_NUMBER = "221XXXXXXXXX"; // ← remplacer par le vrai numéro (sans + ni espaces)

const CONTEXTUAL_MESSAGES: { pattern: RegExp; message: string }[] = [
  {
    pattern: /\/services\/developpement-web/,
    message: "Bonjour Zephyr,\nJe suis intéressé(e) par un projet de développement web.",
  },
  {
    pattern: /\/services\/applications-mobiles/,
    message: "Bonjour Zephyr,\nJe suis intéressé(e) par le développement d'une application mobile.",
  },
  {
    pattern: /\/services\/branding-design/,
    message: "Bonjour Zephyr,\nJe suis intéressé(e) par vos services de branding et design.",
  },
  {
    pattern: /\/services\/marketing-digital/,
    message: "Bonjour Zephyr,\nJe suis intéressé(e) par vos services de marketing digital.",
  },
  {
    pattern: /\/services/,
    message: "Bonjour Zephyr,\nJ'ai découvert vos services et souhaite en savoir plus.",
  },
  {
    pattern: /\/solutions\/[^/]+/,
    message: "Bonjour Zephyr,\nJe suis intéressé(e) par l'une de vos solutions packagées.",
  },
  {
    pattern: /\/solutions/,
    message: "Bonjour Zephyr,\nJe souhaite en savoir plus sur vos solutions.",
  },
  {
    pattern: /\/portfolio/,
    message: "Bonjour Zephyr,\nJ'ai consulté votre portfolio et souhaite discuter d'un projet similaire.",
  },
  {
    pattern: /\/contact/,
    message: "Bonjour Zephyr,\nJe souhaite démarrer un projet et préfère en discuter directement.",
  },
  {
    pattern: /\/blog/,
    message: "Bonjour Zephyr,\nJ'ai lu votre blog et souhaite en savoir plus sur votre expertise.",
  },
];

const DEFAULT_MESSAGE =
  "Bonjour Zephyr,\nJe suis intéressé(e) par vos services et souhaite discuter de mon projet.";

function getWhatsAppUrl(pathname: string): string {
  const msg =
    CONTEXTUAL_MESSAGES.find(({ pattern }) => pattern.test(pathname))?.message ??
    DEFAULT_MESSAGE;
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
}

/* ─── WhatsApp icon ──────────────────────────────────────────────────── */
function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

/* ─── Action item ────────────────────────────────────────────────────── */
interface ActionItemProps {
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
  accent?: string; // tailwind text color class for the icon
  delay: number;
}

function ActionItem({ icon, label, onClick, accent = "text-foreground", delay }: ActionItemProps) {
  return (
    <motion.button
      onClick={onClick}
      initial={{ opacity: 0, y: 8, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 8, scale: 0.95 }}
      transition={{ duration: 0.18, delay, ease: [0.16, 1, 0.3, 1] }}
      className={[
        "flex items-center gap-3 w-full",
        "px-4 py-3",
        "bg-background border border-border/60",
        "hover:border-border hover:bg-muted/30",
        "text-left transition-colors duration-150",
        "group",
      ].join(" ")}
      aria-label={label}
    >
      <span className={`shrink-0 w-5 h-5 ${accent} flex items-center justify-center`}>
        {icon}
      </span>
      <span className="text-sm font-medium text-foreground">{label}</span>
    </motion.button>
  );
}

/* ─── Main component ─────────────────────────────────────────────────── */
export function FloatingContactMenu() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { pathname } = useLocation();

  /* Close menu when clicking outside */
  useEffect(() => {
    if (!menuOpen) return;
    function handleOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleOutside);
    return () => document.removeEventListener("mousedown", handleOutside);
  }, [menuOpen]);

  /* Close menu when chat opens */
  function handleOpenChat() {
    setMenuOpen(false);
    setChatOpen(true);
  }

  function handleOpenWhatsApp() {
    setMenuOpen(false);
    window.open(getWhatsAppUrl(pathname), "_blank", "noopener,noreferrer");
  }

  const fabVisible = !chatOpen; // hide FAB while chat window is open

  return (
    <>
      {/* ── Chat window (controlled) ─────────────────────────────── */}
      <ChatBot
        open={chatOpen}
        onOpenChange={(v) => setChatOpen(v)}
      />

      {/* ── Floating stack ───────────────────────────────────────── */}
      <div
        ref={containerRef}
        className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 flex flex-col items-end gap-2"
      >
        {/* Expanded action items */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              key="menu-panel"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="flex flex-col gap-1.5 mb-2 items-end"
            >
              {/* Chat */}
              <ActionItem
                delay={0.05}
                icon={<Bot className="w-4 h-4" />}
                label="Chat Assistant"
                accent="text-[#1A3AFF]"
                onClick={handleOpenChat}
              />
              {/* WhatsApp */}
              <ActionItem
                delay={0}
                icon={<WhatsAppIcon className="w-4 h-4" />}
                label="WhatsApp"
                accent="text-[#25D366]"
                onClick={handleOpenWhatsApp}
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Primary FAB */}
        <AnimatePresence>
          {fabVisible && (
            <motion.button
              key="primary-fab"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => setMenuOpen((v) => !v)}
              aria-label={menuOpen ? "Fermer le menu de contact" : "Ouvrir le menu de contact"}
              aria-expanded={menuOpen}
              className={[
                "w-14 h-14 flex items-center justify-center",
                "bg-[#1A3AFF] text-white",
                "transition-colors duration-200",
                "shadow-lg shadow-[#1A3AFF]/25",
              ].join(" ")}
            >
              <AnimatePresence mode="wait" initial={false}>
                {menuOpen ? (
                  <motion.span
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <X className="w-5 h-5" />
                  </motion.span>
                ) : (
                  <motion.span
                    key="open"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <MessageCircle className="w-5 h-5" />
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
