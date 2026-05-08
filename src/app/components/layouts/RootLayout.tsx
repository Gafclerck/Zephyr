import { Outlet, useLocation } from "react-router";
import { Header } from "../Header";
import { Footer } from "../Footer";
import { ChatBot } from "../ChatBot";
import { motion, AnimatePresence } from "motion/react";
import { useEffect } from "react";
import { useLenis, getLenis } from "../../hooks/useLenis";

export function RootLayout() {
  const location = useLocation();
  useLenis();

  // Scroll to top on every route change — compatible with Lenis smooth scroll
  useEffect(() => {
    const lenis = getLenis();
    if (lenis) {
      // Immediate so the page isn't mid-scroll when it renders
      lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo({ top: 0, behavior: "instant" });
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
      <ChatBot />
    </div>
  );
}
