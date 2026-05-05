import { Link, useLocation } from "react-router";
import { motion, useScroll, useMotionValueEvent } from "motion/react";
import { Sun, Moon, Menu, X } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";
import React, { useState } from "react";

const NAV_ITEMS = [
  { path: "/", label: "Home" },
  { path: "/services", label: "Services" },
  { path: "/portfolio", label: "Portfolio" },
  { path: "/solutions", label: "Solutions" },
  { path: "/blog", label: "Blog" },
  { path: "/contact", label: "Contact" },
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
      transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-xl border-b border-[#1A3AFF]/20"
          : "bg-background/60 backdrop-blur-md border-b border-[#1A3AFF]/10"
      }`}
    >
      {/* Desktop Grid */}
      <div
        className="hidden lg:grid h-[72px]"
        style={{ gridTemplateColumns: "1fr 1fr 1fr 240px 1fr 1fr 1fr 72px" }}
      >
        {NAV_ITEMS.slice(0, 3).map((item) => (
          <DesktopNavCell
            key={item.path}
            path={item.path}
            label={item.label}
            isActive={location.pathname === item.path}
            borderRight
          />
        ))}

        {/* Logo Cell */}
        <Link to="/" className="flex items-center justify-center border-x border-[#1A3AFF]/20 group">
          <div className="flex items-center gap-2.5">
            <LogoMark />
            <span className="font-['Orbitron'] text-lg tracking-widest text-foreground">
              ZEPHYR
            </span>
          </div>
        </Link>

        {NAV_ITEMS.slice(3, 6).map((item, i) => (
          <DesktopNavCell
            key={item.path}
            path={item.path}
            label={item.label}
            isActive={location.pathname === item.path}
            borderRight={i < 2}
            borderLeft={i === 0}
          />
        ))}

        {/* Theme Toggle Cell */}
        <button
          onClick={toggleTheme}
          className="h-full flex items-center justify-center border-l border-[#1A3AFF]/20 text-muted-foreground hover:text-[#1A3AFF] hover:bg-[#1A3AFF]/5 transition-colors"
          aria-label="Toggle theme"
        >
          {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Nav */}
      <MobileNav
        currentPath={location.pathname}
        theme={theme}
        onToggleTheme={toggleTheme}
      />
    </motion.header>
  );
}

/* ── Desktop Nav Cell ── */
interface DesktopNavCellProps {
  path: string;
  label: string;
  isActive: boolean;
  borderRight?: boolean;
  borderLeft?: boolean;
}

function DesktopNavCell({ path, label, isActive, borderRight, borderLeft }: DesktopNavCellProps) {
  return (
    <Link
      to={path}
      className={`
        relative h-full flex items-center justify-center
        text-sm font-['Orbitron'] uppercase tracking-wider
        transition-colors duration-200
        ${borderRight ? "border-r border-[#1A3AFF]/20" : ""}
        ${borderLeft ? "border-l border-[#1A3AFF]/20" : ""}
        ${isActive
          ? "text-[#1A3AFF] bg-[#1A3AFF]/5"
          : "text-muted-foreground hover:text-foreground hover:bg-muted/40"
        }
      `}
    >
      {isActive && (
        <motion.span
          layoutId="nav-indicator"
          className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#1A3AFF]"
          transition={{ type: "spring", stiffness: 500, damping: 40 }}
        />
      )}
      {label}
    </Link>
  );
}

/* ── Logo Mark ── */
function LogoMark() {
  return (
    <div className="w-9 h-9 border border-[#1A3AFF] flex items-center justify-center">
      <span className="font-['Orbitron'] text-[#1A3AFF] text-lg leading-none font-bold">Z</span>
    </div>
  );
}

/* ── Mobile Nav ── */
interface MobileNavProps {
  currentPath: string;
  theme: "dark" | "light";
  onToggleTheme: () => void;
}

function MobileNav({ currentPath, theme, onToggleTheme }: MobileNavProps) {
  const [open, setOpen] = useState(false);

  // Close on route change
  React.useEffect(() => { setOpen(false); }, [currentPath]);

  return (
    <>
      <div className="lg:hidden flex items-center justify-between h-[64px] px-5">
        <Link to="/" className="flex items-center gap-2">
          <LogoMark />
          <span className="font-['Orbitron'] text-base tracking-widest text-foreground">ZEPHYR</span>
        </Link>

        <div className="flex items-center gap-3">
          <button
            onClick={onToggleTheme}
            className="w-10 h-10 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
          >
            {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          <button
            onClick={() => setOpen(!open)}
            className="w-10 h-10 flex items-center justify-center text-foreground"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Fullscreen drawer */}
      <motion.div
        initial={false}
        animate={open ? { opacity: 1, y: 0 } : { opacity: 0, y: -16, pointerEvents: "none" }}
        transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
        className="lg:hidden absolute top-full left-0 right-0 bg-background border-b border-[#1A3AFF]/20"
        style={{ pointerEvents: open ? "auto" : "none" }}
      >
        <nav className="flex flex-col">
          {NAV_ITEMS.map((item, i) => (
            <Link
              key={item.path}
              to={item.path}
              className={`
                flex items-center justify-between px-6 py-4
                border-b border-[#1A3AFF]/10
                font-['Orbitron'] text-sm uppercase tracking-wider
                transition-colors duration-150
                ${currentPath === item.path
                  ? "text-[#1A3AFF] bg-[#1A3AFF]/5"
                  : "text-muted-foreground hover:text-foreground"
                }
              `}
            >
              <span>{item.label}</span>
              <span className="font-mono text-xs text-muted-foreground/50">0{i + 1}</span>
            </Link>
          ))}
        </nav>
      </motion.div>
    </>
  );
}
