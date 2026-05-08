import { Link, useLocation } from "react-router";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";
import { Sun, Moon, Menu, X, ArrowUpRight, Globe, ChevronDown, Code, Smartphone, Palette, TrendingUp } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";
import { useLanguage } from "../contexts/LanguageContext";
import { useState, useEffect, useRef } from "react";
import LogoBlanc from "../../assets/logos/Logo-Zephyr-Blanc.png";
import LogoNoir from "../../assets/logos/Logo-Zephyr-Noir.png";

/* ── Services submenu data ── */
const SERVICES_ITEMS = [
  {
    icon: Code,
    slug: "developpement-web",
    labelKey: "nav.sub_web",
    descKey:  "nav.sub_web_desc",
  },
  {
    icon: Smartphone,
    slug: "applications-mobiles",
    labelKey: "nav.sub_mobile",
    descKey:  "nav.sub_mobile_desc",
  },
  {
    icon: Palette,
    slug: "branding-design",
    labelKey: "nav.sub_branding",
    descKey:  "nav.sub_branding_desc",
  },
  {
    icon: TrendingUp,
    slug: "marketing-digital",
    labelKey: "nav.sub_marketing",
    descKey:  "nav.sub_marketing_desc",
  },
];

const NAV_LEFT_PLAIN = [
  { path: "/portfolio", labelKey: "nav.portfolio" },
  { path: "/solutions", labelKey: "nav.solutions" },
];

const NAV_RIGHT = [
  { path: "/blog",    labelKey: "nav.blog"    },
  { path: "/contact", labelKey: "nav.contact" },
];

export function Header() {
  const location  = useLocation();
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();
  const [hidden,  setHidden]  = useState(false);
  const [atTop,   setAtTop]   = useState(true);
  const [open,    setOpen]    = useState(false);          // mobile menu
  const [subOpen, setSubOpen] = useState(false);          // desktop submenu
  const [mobileSubOpen, setMobileSubOpen] = useState(false); // mobile accordion
  const subRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();

  const ALL_PLAIN_NAV = [
    { path: "/services", labelKey: "nav.services" },
    ...NAV_LEFT_PLAIN,
    ...NAV_RIGHT,
  ];

  useMotionValueEvent(scrollY, "change", (latest) => {
    const prev = scrollY.getPrevious() ?? 0;
    setAtTop(latest < 16);
    if (latest > prev && latest > 120 && !open) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  // Close everything on route change
  useEffect(() => {
    setOpen(false);
    setSubOpen(false);
    setMobileSubOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  // Close desktop submenu on outside click
  useEffect(() => {
    if (!subOpen) return;
    function handle(e: MouseEvent) {
      if (subRef.current && !subRef.current.contains(e.target as Node)) {
        setSubOpen(false);
      }
    }
    document.addEventListener("mousedown", handle);
    return () => document.removeEventListener("mousedown", handle);
  }, [subOpen]);

  const toggleLanguage = () => setLanguage(language === "fr" ? "en" : "fr");
  const isServicesActive = location.pathname === "/services" || location.pathname.startsWith("/services/");

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

          {/* Left nav: Services (with submenu) | Portfolio | Solutions */}
          <div className="flex items-stretch">

            {/* Services — submenu trigger */}
            <div ref={subRef} className="relative flex items-stretch">
              <button
                onMouseEnter={() => setSubOpen(true)}
                onMouseLeave={() => setSubOpen(false)}
                onClick={() => setSubOpen((v) => !v)}
                className={`
                  relative flex items-center gap-1.5 px-6
                  text-[11px] uppercase tracking-widest font-semibold
                  border-r border-border/40
                  hover:bg-muted/20 transition-colors duration-200
                  ${isServicesActive ? "text-[#1A3AFF]" : "text-muted-foreground hover:text-foreground"}
                `}
              >
                {t("nav.services")}
                <motion.span
                  animate={{ rotate: subOpen ? 180 : 0 }}
                  transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                >
                  <ChevronDown className="w-3 h-3" />
                </motion.span>
                {isServicesActive && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#1A3AFF]"
                    transition={{ type: "spring", stiffness: 500, damping: 40 }}
                  />
                )}
              </button>

              {/* Submenu panel */}
              <AnimatePresence>
                {subOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
                    onMouseEnter={() => setSubOpen(true)}
                    onMouseLeave={() => setSubOpen(false)}
                    className="absolute top-full left-0 mt-0 w-72 bg-background/98 backdrop-blur-xl border border-border/50 shadow-xl z-50"
                  >
                    {/* Top accent line */}
                    <div className="h-[2px] w-full bg-[#1A3AFF]" />

                    <div className="py-2">
                      {SERVICES_ITEMS.map((item, i) => {
                        const Icon = item.icon;
                        const isItemActive = location.pathname === `/services/${item.slug}`;
                        return (
                          <motion.div
                            key={item.slug}
                            initial={{ opacity: 0, x: -8 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.04, duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                          >
                            <Link
                              to={`/services/${item.slug}`}
                              className={`
                                flex items-center px-4 py-3 group
                                hover:bg-muted/40 transition-colors duration-150
                                ${isItemActive ? "bg-[#1A3AFF]/5" : ""}
                              `}
                            >
                              <p className={`text-[11px] font-semibold uppercase tracking-widest font-['Orbitron'] ${isItemActive ? "text-[#1A3AFF]" : "text-foreground group-hover:text-[#1A3AFF]"} transition-colors duration-150`}>
                                {t(item.labelKey)}
                              </p>
                            </Link>
                          </motion.div>
                        );
                      })}
                    </div>

                    {/* Footer — View all services */}
                    <div className="border-t border-border/40 px-4 py-3">
                      <Link
                        to="/services"
                        className="flex items-center justify-between text-[10px] uppercase tracking-widest text-muted-foreground hover:text-[#1A3AFF] transition-colors duration-150 group"
                      >
                        <span className="font-['Orbitron'] font-semibold">{t("nav.all_services")}</span>
                        <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Portfolio | Solutions */}
            {NAV_LEFT_PLAIN.map((item) => (
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

      {/* ── Mobile Menu ── */}
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

              {/* Services — accordion */}
              <motion.div
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0, duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              >
                <button
                  onClick={() => setMobileSubOpen((v) => !v)}
                  className={`w-full flex items-center justify-between py-5 border-b border-border/30 ${isServicesActive ? "text-[#1A3AFF]" : "text-foreground"}`}
                >
                  <span className="font-['Orbitron'] text-2xl font-medium tracking-wide">
                    {t("nav.services")}
                  </span>
                  <motion.span
                    animate={{ rotate: mobileSubOpen ? 180 : 0 }}
                    transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <ChevronDown className="w-5 h-5 text-muted-foreground" />
                  </motion.span>
                </button>

                <AnimatePresence>
                  {mobileSubOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="py-2 pl-4 border-l-2 border-[#1A3AFF]/30 ml-1 mb-2">
                        {SERVICES_ITEMS.map((item, i) => {
                          const Icon = item.icon;
                          return (
                            <motion.div
                              key={item.slug}
                              initial={{ opacity: 0, x: -8 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.05, duration: 0.2 }}
                            >
                              <Link
                                to={`/services/${item.slug}`}
                                className="flex items-center py-3 text-muted-foreground hover:text-[#1A3AFF] transition-colors"
                              >
                                <span className="text-sm font-['Orbitron'] font-semibold tracking-wide text-foreground">
                                  {t(item.labelKey)}
                                </span>
                              </Link>
                            </motion.div>
                          );
                        })}
                        <Link
                          to="/services"
                          className="flex items-center gap-2 py-3 text-xs font-['Orbitron'] uppercase tracking-widest text-muted-foreground hover:text-[#1A3AFF] transition-colors"
                        >
                          {t("nav.all_services")} <ArrowUpRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* Plain nav items */}
              {[...NAV_LEFT_PLAIN, ...NAV_RIGHT].map((item, i) => {
                const isActive = location.pathname === item.path || location.pathname.startsWith(item.path + "/");
                return (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: (i + 1) * 0.06, duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
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
