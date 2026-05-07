import { Link, useLocation } from "react-router";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";
import { Sun, Moon, Menu, X, ArrowUpRight, Globe } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";
import { useLanguage } from "../contexts/LanguageContext";
import { useState, useEffect } from "react";
import LogoBlanc from "../../assets/logos/Logo-Zephyr-Blanc.png";
import LogoNoir from "../../assets/logos/Logo-Zephyr-Noir.png";

const NAV_LEFT = [
  { path: "/services", labelKey: "nav.services" },
  { path: "/portfolio", labelKey: "nav.portfolio" },
  { path: "/solutions", labelKey: "nav.solutions" },
];

const NAV_RIGHT = [
  { path: "/blog", labelKey: "nav.blog" },
  { path: "/contact", labelKey: "nav.contact" },
];

export function Header() {
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();
  const [hidden, setHidden] = useState(false);
  const [atTop, setAtTop] = useState(true);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();

  const ALL_NAV = [...NAV_LEFT, ...NAV_RIGHT];

  useMotionValueEvent(scrollY, "change", (latest) => {
    const prev = scrollY.getPrevious() ?? 0;
    setAtTop(latest < 16);
    if (latest > prev && latest > 120 && !open) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const toggleLanguage = () => setLanguage(language === "fr" ? "en" : "fr");

  return (
    <>
      <motion.header
        variants={{ visible: { y: 0 }, hidden: { y: "-100%" } }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-300 ${
          atTop
            ? "bg-background/80 backdrop-blur-sm border-b border-border/20"
            : "bg-background/95 backdrop-blur-lg border-b border-border/40"
        }`}
      >
        {/* ── Desktop ── */}
        <div className="hidden lg:flex items-stretch h-[72px] w-full border-b">
          {/* Left nav: Services | Portfolio | Solutions */}
          <div className="flex items-stretch">
            {NAV_LEFT.map((item) => (
              <NavCell
                key={item.path}
                path={item.path}
                label={t(item.labelKey)}
                currentPath={location.pathname}
                borderSide="right"
              />
            ))}
          </div>

          {/* Center logo */}
          <Link
            to="/"
            aria-label="Zephyr — Accueil"
            className="flex-1 flex items-center justify-center border-x border-border/40 hover:bg-muted/20 transition-colors duration-200"
          >
            <img src={LogoBlanc} alt="Zephyr" className="h-15 hidden dark:block object-contain" />
            <img src={LogoNoir}  alt="Zephyr" className="h-15 block dark:hidden object-contain" />
          </Link>

          {/* Right nav: Blog | Contact */}
          <div className="flex items-stretch">
            {NAV_RIGHT.map((item) => (
              <NavCell
                key={item.path}
                path={item.path}
                label={t(item.labelKey)}
                currentPath={location.pathname}
                borderSide="left"
              />
            ))}
          </div>

          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Changer le thème"
            className="px-4 border-l border-border/40 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted/20 transition-colors duration-200"
          >
            {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* Language toggle */}
          <button
            onClick={toggleLanguage}
            aria-label="Changer de langue"
            title={language === "fr" ? "Switch to English" : "Passer en Français"}
            className="px-4 border-l border-border/40 flex items-center justify-center gap-1.5 text-muted-foreground hover:text-foreground hover:bg-muted/20 transition-colors duration-200"
          >
            <Globe className="w-3.5 h-3.5" />
            <span className="text-[10px] font-semibold tracking-wider uppercase">
              {language === "fr" ? "EN" : "FR"}
            </span>
          </button>
        </div>

        {/* ── Mobile ── */}
        <div className="lg:hidden flex items-stretch h-[60px] w-full">
          <Link
            to="/"
            className="flex items-center px-5 border-r border-border/40 hover:bg-muted/20 transition-colors"
          >
            <img src={LogoBlanc} alt="Zephyr" className="h-6 hidden dark:block object-contain" />
            <img src={LogoNoir}  alt="Zephyr" className="h-6 block dark:hidden object-contain" />
          </Link>

          <div className="flex-1" />

          {/* Language toggle — mobile */}
          <button
            onClick={toggleLanguage}
            aria-label="Changer de langue"
            className="px-3 border-x border-border/40 flex items-center justify-center gap-1 text-muted-foreground hover:text-foreground hover:bg-muted/20 transition-colors"
          >
            <Globe className="w-3.5 h-3.5" />
            <span className="text-[10px] font-semibold uppercase">
              {language === "fr" ? "EN" : "FR"}
            </span>
          </button>

          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Changer le thème"
            className="px-4 border-r border-border/40 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted/20 transition-colors"
          >
            {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* Hamburger */}
          <button
            onClick={() => setOpen(!open)}
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            className="w-14 flex items-center justify-center text-foreground hover:bg-muted/20 transition-colors relative z-50"
          >
            <AnimatePresence mode="wait" initial={false}>
              {open ? (
                <motion.span key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.18 }}>
                  <X className="w-5 h-5" />
                </motion.span>
              ) : (
                <motion.span key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.18 }}>
                  <Menu className="w-5 h-5" />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
            className="fixed top-[60px] left-0 right-0 h-[calc(100dvh-60px)] bg-background z-[60] flex flex-col overflow-y-auto pb-20"
          >
            <nav className="flex flex-col px-6 pt-8 pb-12 gap-0">
              {ALL_NAV.map((item, i) => {
                const isActive = location.pathname === item.path || location.pathname.startsWith(item.path + "/");
                return (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06, duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <Link
                      to={item.path}
                      className={`flex items-center justify-between py-5 border-b border-border/30 ${isActive ? "text-[#1A3AFF]" : "text-foreground"}`}
                    >
                      <span className="font-['Orbitron'] text-2xl font-medium tracking-wide">
                        {t(item.labelKey)}
                      </span>
                      <ArrowUpRight className="w-5 h-5 text-muted-foreground" />
                    </Link>
                  </motion.div>
                );
              })}
            </nav>

            <div className="mt-auto px-6 pb-10 border-t border-border/30 pt-8">
              <p className="text-muted-foreground text-sm mb-1">contact@zephyr.sn</p>
              <p className="text-muted-foreground text-sm">Dakar, Sénégal</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

/* ── Desktop Nav Cell ── */
interface NavCellProps {
  path: string;
  label: string;
  currentPath: string;
  borderSide: "left" | "right";
}

function NavCell({ path, label, currentPath, borderSide }: NavCellProps) {
  const isActive = currentPath === path || currentPath.startsWith(path + "/");
  const borderClass = borderSide === "right" ? "border-r border-border/40" : "border-l border-border/40";

  return (
    <Link
      to={path}
      className={`
        relative flex items-center px-6 text-[11px] uppercase tracking-widest font-semibold
        hover:bg-muted/20 transition-colors duration-200 ${borderClass}
        ${isActive ? "text-[#1A3AFF]" : "text-muted-foreground hover:text-foreground"}
      `}
    >
      {label}
      {isActive && (
        <motion.span
          layoutId="nav-underline"
          className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#1A3AFF]"
          transition={{ type: "spring", stiffness: 500, damping: 40 }}
        />
      )}
    </Link>
  );
}
