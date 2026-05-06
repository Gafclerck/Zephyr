import { Outlet, Link, useLocation } from "react-router";
import {
  LayoutDashboard,
  Users,
  FileText,
  MessageSquare,
  Briefcase,
  Package,
  LogOut,
  Settings,
} from "lucide-react";
import LogoBlanc from "../../../assets/logos/Logo-Zephyr-Blanc.png";
import LogoNoir from "../../../assets/logos/Logo-Zephyr-Noir.png";

export function AdminLayout() {
  const location = useLocation();

  const navItems = [
    { path: "/admin", label: "Dashboard", icon: LayoutDashboard },
    { path: "/admin/leads", label: "Acquisitions", icon: Users },
    { path: "/admin/portfolio", label: "Portfolio", icon: Briefcase },
    { path: "/admin/solutions", label: "Solutions", icon: Package },
    { path: "/admin/blog", label: "Publications", icon: FileText },
    { path: "/admin/testimonials", label: "Avis Clients", icon: MessageSquare },
  ];

  return (
    <div className="min-h-screen bg-[#F8F9FA] dark:bg-[#050A14] flex selection:bg-[#1A3AFF] selection:text-white font-sans text-foreground">
      {/* Sidebar */}
      <aside className="w-64 bg-white dark:bg-[#0A1220] border-r border-border/40 flex flex-col z-20">
        <div className="h-20 px-6 border-b border-border/40 flex items-center">
          <Link to="/" className="flex items-center gap-3">
            <img src={LogoBlanc} alt="Zephyr" className="h-8 md:h-10 hidden dark:block object-contain" />
            <img src={LogoNoir} alt="Zephyr" className="h-8 md:h-10 block dark:hidden object-contain" />
          </Link>
        </div>

        <nav className="flex-1 py-6 px-4 space-y-1 overflow-y-auto">
          <span className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4 px-3">
            Général
          </span>
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;

            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-3 px-3 py-2.5 transition-colors text-sm font-medium ${
                  isActive
                    ? "bg-[#1A3AFF]/10 text-[#1A3AFF]"
                    : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? "text-[#1A3AFF]" : "text-muted-foreground"}`} />
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-border/40 space-y-1">
          <button className="w-full flex items-center gap-3 px-3 py-2.5 text-muted-foreground hover:bg-muted/50 hover:text-foreground transition-colors text-sm font-medium">
            <Settings className="w-4 h-4" />
            Paramètres
          </button>
          <Link
            to="/"
            className="flex items-center gap-3 px-3 py-2.5 text-muted-foreground hover:text-destructive transition-colors text-sm font-medium"
          >
            <LogOut className="w-4 h-4" />
            Déconnexion
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 h-screen overflow-auto">
        <div className="max-w-[1600px] mx-auto p-8 md:p-12">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
