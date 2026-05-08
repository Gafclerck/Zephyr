import { Outlet, useLocation } from "react-router";
import { Header } from "../Header";
import { Footer } from "../Footer";
import { FloatingContactMenu } from "../FloatingContactMenu";
import { motion, AnimatePresence } from "motion/react";
import { useEffect } from "react";
import { useLenis, getLenis } from "../../hooks/useLenis";

export function RootLayout() {
  const location = useLocation();
  useLenis();

  // Scroll to top on every route change.
  // Do NOT use lenis.scrollTo(0, { immediate: true }) — in Lenis v1.x it calls
  // lenis.stop() internally which sets stopped=true and freezes scroll until refresh.
  // Instead: jump the window natively, then call lenis.resize() to resync.
  useEffect(() => {
    window.scrollTo(0, 0);
    const lenis = getLenis();
    if (lenis) {
      lenis.resize(); // resync Lenis internal state with new scroll position
    }
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <AnimatePresence mode="wait" initial={false}>
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
          className="flex-1 pt-[60px] lg:pt-[72px]"
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>
      <Footer />
      {/* Unified floating contact system */}
      <FloatingContactMenu />
    </div>
  );
}
