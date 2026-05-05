import { Outlet } from "react-router";
import { Header } from "../Header";
import { Footer } from "../Footer";
import { ChatBot } from "../ChatBot";

export function RootLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 pt-20">
        <Outlet />
      </main>
      <Footer />
      <ChatBot />
    </div>
  );
}
