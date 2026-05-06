import { Link, useLocation } from "react-router";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "motion/react";
import { Sun, Moon, Menu, X, ArrowUpRight } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";
import React, { useState } from "react";
import LogoBlanc from "../../assets/logos/Logo-Zephyr-Blanc.png";
import LogoNoir from "../../assets/logos/Logo-Zephyr-Noir.png";

const NAV_ITEMS = [
  { path: "/services", label: "Services" },
  { path: "/portfolio", label: "Portfolio" },
  { path: "/solutions", label: "Solutions" },
  { path: "/blog", label: "Blog" },
];

export function Header() {
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const prev = scrollY.getPrevious() ?? 0;
    setScrolled(latest > 20);
    setHidden(latest > prev && latest > 150);
  });

  return (
    <motion.header
      variants={{ visible: { y: 0 }, hidden: { y: "-100%" } }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-foreground/10 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="flex items-center group relative z-10">
          <img 
            src={LogoBlanc} 
            alt="Zephyr Logo" 
            className="h-10 md:h-12 hidden dark:block object-contain" 
          />
          <img 
            src={LogoNoir} 
            alt="Zephyr Logo" 
            className="h-10 md:h-12 block dark:hidden object-contain" 
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          {NAV_ITEMS.map((item) => {
            const isActive = location.pathname === item.path || location.pathname.startsWith(item.path + '/');
            return (
              <Link
                key={item.path}
                to={item.path}
                className="relative py-2 group"
              >
                <span className={`text-sm font-medium tracking-wide transition-colors duration-300 ${
                  isActive ? "text-[#1A3AFF]" : "text-foreground/70 hover:text-foreground"
                }`}>
                  {item.label}
                </span>
                {isActive && (
                  <motion.div
                    layoutId="header-active-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#1A3AFF]"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <div className="absolute -bottom-1 left-0 right-0 h-[2px] bg-foreground/20 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out" />
              </Link>
            );
          })}
        </nav>

        {/* Right Actions */}
        <div className="hidden lg:flex items-center gap-6 z-10">
          <button
            onClick={toggleTheme}
            className="w-10 h-10 rounded-none flex items-center justify-center bg-foreground/5 hover:bg-foreground/10 text-foreground transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          
          <Link
            to="/contact"
            className="group relative inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-[#1A3AFF] text-white overflow-hidden rounded-none"
          >
            <div className="absolute inset-0 w-0 bg-white/20 transition-all duration-[250ms] ease-out group-hover:w-full" />
            <span className="relative font-medium text-sm tracking-wide">Démarrer un projet</span>
            <ArrowUpRight className="relative w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div className="lg:hidden z-10 flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="w-10 h-10 rounded-none flex items-center justify-center bg-foreground/5 text-foreground"
          >
            {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          <MobileNav currentPath={location.pathname} />
        </div>
      </div>
    </motion.header>
  );
}



/* ── Mobile Nav ── */
function MobileNav({ currentPath }: { currentPath: string }) {
  const [open, setOpen] = useState(false);

  React.useEffect(() => { setOpen(false); }, [currentPath]);

  React.useEffect(() => {
    if (open) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="w-10 h-10 flex items-center justify-center text-foreground z-50 relative"
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
              <X className="w-6 h-6" />
            </motion.div>
          ) : (
            <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
              <Menu className="w-6 h-6" />
            </motion.div>
          )}
        </AnimatePresence>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 top-0 left-0 right-0 bottom-0 bg-background/98 backdrop-blur-xl z-40 flex flex-col pt-24 px-6 pb-12"
          >
            <nav className="flex flex-col gap-6 mt-8">
              {NAV_ITEMS.map((item, i) => (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  key={item.path}
                >
                  <Link
                    to={item.path}
                    className={`text-3xl font-['Orbitron'] font-semibold tracking-wider flex items-center justify-between ${
                      currentPath === item.path || currentPath.startsWith(item.path + '/')
                        ? "text-[#1A3AFF]"
                        : "text-foreground"
                    }`}
                  >
                    {item.label}
                    <ArrowUpRight className="w-6 h-6 opacity-50" />
                  </Link>
                  <div className="h-px w-full bg-foreground/10 mt-6" />
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: NAV_ITEMS.length * 0.1, duration: 0.4 }}
                className="mt-8"
              >
                <Link
                  to="/contact"
                  className="flex items-center justify-center gap-3 w-full py-4 bg-[#1A3AFF] text-white font-['Orbitron'] text-lg tracking-wider"
                >
                  Démarrer un projet
                  <ArrowUpRight className="w-5 h-5" />
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

