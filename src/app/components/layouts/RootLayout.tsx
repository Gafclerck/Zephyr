import { Outlet, useLocation } from "react-router";
import { Header } from "../Header";
import { Footer } from "../Footer";
import { ChatBot } from "../ChatBot";
import { motion, AnimatePresence } from "motion/react";

export function RootLayout() {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <AnimatePresence mode="wait" initial={false}>
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
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
