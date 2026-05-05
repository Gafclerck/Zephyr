import { Outlet, Link, useLocation } from "react-router";
import {
  LayoutDashboard,
  Users,
  FileText,
  MessageSquare,
  Briefcase,
  Package,
  LogOut
} from "lucide-react";

export function AdminLayout() {
  const location = useLocation();

  const navItems = [
    { path: "/admin", label: "Dashboard", icon: LayoutDashboard },
    { path: "/admin/leads", label: "Leads", icon: Users },
    { path: "/admin/blog", label: "Blog", icon: FileText },
    { path: "/admin/testimonials", label: "Testimonials", icon: MessageSquare },
    { path: "/admin/portfolio", label: "Portfolio", icon: Briefcase },
    { path: "/admin/solutions", label: "Solutions", icon: Package },
  ];

  return (
    <div className="min-h-screen bg-muted flex">
      {/* Sidebar */}
      <aside className="w-64 bg-background/40 border-r border-[#00B4FF]/20 backdrop-blur-sm">
        <div className="p-6">
          <Link to="/" className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#1A3AFF] to-[#00B4FF] flex items-center justify-center">
              <span className="text-foreground font-['Orbitron'] text-xl">Z</span>
            </div>
            <span className="text-foreground font-['Orbitron'] text-xl">Zephyr Admin</span>
          </Link>

          <nav className="space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                    isActive
                      ? "bg-gradient-to-r from-[#1A3AFF] to-[#00B4FF] text-foreground"
                      : "text-muted-foreground hover:bg-[#0D1F4E] hover:text-foreground"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="absolute bottom-0 left-0 right-0 w-64 p-6 border-t border-[#00B4FF]/20">
          <Link
            to="/"
            className="flex items-center gap-3 px-4 py-3 rounded-lg text-muted-foreground hover:bg-[#0D1F4E] hover:text-foreground transition-all"
          >
            <LogOut className="w-5 h-5" />
            <span>Back to Site</span>
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        <Outlet />
      </main>
    </div>
  );
}
