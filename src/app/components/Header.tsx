//pour garder la version
import { Link, useLocation } from "react-router";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";
import { Sun, Moon, Menu, X, ArrowUpRight } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";
import React, { useState } from "react";
import LogoBlanc from "../../assets/logos/Logo-Zephyr-Blanc.png";
import LogoNoir from "../../assets/logos/Logo-Zephyr-Noir.png";

const NAV_LEFT = [
  { path: "/services", label: "Services" },
  { path: "/portfolio", label: "Portfolio" },
];

const NAV_RIGHT = [
  { path: "/solutions", label: "Solutions" },
  { path: "/blog", label: "Blog" },
  { path: "/contact", label: "Contact" },
];

const ALL_NAV = [...NAV_LEFT, ...NAV_RIGHT];

export function Header() {
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();
  const [hidden, setHidden] = useState(false);
  const [atTop, setAtTop] = useState(true);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const prev = scrollY.getPrevious() ?? 0;
    setAtTop(latest < 16);
    // Hide when scrolling down past 120px, show when scrolling up
    // Don't hide if mobile menu is open
    if (latest > prev && latest > 120 && !open) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  // Close on route change
  React.useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  // Lock body scroll when open
  React.useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <motion.header
        variants={{ visible: { y: 0 }, hidden: { y: "-100%" } }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-300  ${
          atTop
            ? "bg-background/80 backdrop-blur-sm border-b border-border/20"
            : "bg-background/95 backdrop-blur-lg border-b border-border/40"
        }`}
      >
        {/* ── Desktop ── */}
        <div className="hidden lg:flex items-stretch h-[72px] w-full  border-b">
          {/* Left nav */}
          <div className="flex items-stretch">
            {NAV_LEFT.map((item) => (
              <NavCell
                key={item.path}
                path={item.path}
                label={item.label}
                currentPath={location.pathname}
                borderSide="right"
              />
            ))}
          </div>

          {/* Center logo — flex-1 to push left/right symmetrically */}
          <Link
            to="/"
            aria-label="Zephyr — Accueil"
            className="flex-1 flex items-center justify-center border-x border-border/40 hover:bg-muted/20 transition-colors duration-200"
          >
            <img
              src={LogoBlanc}
              alt="Zephyr"
              className="h-15 hidden dark:block object-contain"
            />
            <img
              src={LogoNoir}
              alt="Zephyr"
              className="h-15 block dark:hidden object-contain"
            />
          </Link>

          {/* Right nav */}
          <div className="flex items-stretch">
            {NAV_RIGHT.map((item) => (
              <NavCell
                key={item.path}
                path={item.path}
                label={item.label}
                currentPath={location.pathname}
                borderSide="left"
              />
            ))}
          </div>

          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Changer le thème"
            className="px-5 border-l border-border/40 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted/20 transition-colors duration-200"
          >
            {theme === "dark" ? (
              <Sun className="w-4 h-4" />
            ) : (
              <Moon className="w-4 h-4" />
            )}
          </button>
        </div>

        {/* ── Mobile ── */}
        <div className="lg:hidden flex items-stretch h-[60px] w-full">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center px-5 border-r border-border/40 hover:bg-muted/20 transition-colors"
          >
            <img
              src={LogoBlanc}
              alt="Zephyr"
              className="h-6 hidden dark:block object-contain"
            />
            <img
              src={LogoNoir}
              alt="Zephyr"
              className="h-6 block dark:hidden object-contain"
            />
          </Link>

          {/* Spacer */}
          <div className="flex-1" />

          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Changer le thème"
            className="px-4 border-x border-border/40 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted/20 transition-colors"
          >
            {theme === "dark" ? (
              <Sun className="w-4 h-4" />
            ) : (
              <Moon className="w-4 h-4" />
            )}
          </button>

          {/* Hamburger button */}
          <button
            onClick={() => setOpen(!open)}
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            className="w-14 flex items-center justify-center text-foreground hover:bg-muted/20 transition-colors relative z-50"
          >
            <AnimatePresence mode="wait" initial={false}>
              {open ? (
                <motion.span
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.18 }}
                >
                  <X className="w-5 h-5" />
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.18 }}
                >
                  <Menu className="w-5 h-5" />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu Content — Moved OUTSIDE motion.header */}
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
                const isActive =
                  location.pathname === item.path ||
                  location.pathname.startsWith(item.path + "/");
                return (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: i * 0.06,
                      duration: 0.3,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    <Link
                      to={item.path}
                      className={`flex items-center justify-between py-5 border-b border-border/30 ${
                        isActive ? "text-[#1A3AFF]" : "text-foreground"
                      }`}
                    >
                      <span className="font-['Orbitron'] text-2xl font-medium tracking-wide">
                        {item.label}
                      </span>
                      <ArrowUpRight className="w-5 h-5 text-muted-foreground" />
                    </Link>
                  </motion.div>
                );
              })}
            </nav>

            {/* Bottom contact block */}
            <div className="mt-auto px-6 pb-10 border-t border-border/30 pt-8">
              <p className="text-muted-foreground text-sm mb-1">
                contact@zephyr.sn
              </p>
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
  const borderClass =
    borderSide === "right"
      ? "border-r border-border/40"
      : "border-l border-border/40";

  return (
    <Link
      to={path}
      className={`
        relative flex items-center px-7 text-[11px] uppercase tracking-widest font-semibold
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
