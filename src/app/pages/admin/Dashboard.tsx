import {
  Users,
  Eye,
  TrendingUp,
  Activity,
  ArrowUpRight
} from "lucide-react";
import { Link } from "react-router";

export function AdminDashboard() {
  const stats = [
    {
      label: "Visites Totales (30j)",
      value: "12,450",
      change: "+14.5%",
      icon: Eye,
    },
    {
      label: "Nouveaux Leads",
      value: "48",
      change: "+22.4%",
      icon: Users,
    },
    {
      label: "Taux de Conversion",
      value: "3.2%",
      change: "+1.2%",
      icon: Activity,
    },
    {
      label: "Revenus Projettés",
      value: "14.5M",
      change: "+8.4%",
      icon: TrendingUp,
    },
  ];

  const recentLeads = [
    { name: "Marie Faye", company: "TechCorp", date: "Aujourd'hui, 14:30", status: "Nouveau" },
    { name: "Amadou Diallo", company: "StartUpX", date: "Aujourd'hui, 09:15", status: "Contacté" },
    { name: "Sophie Martin", company: "RetailCo", date: "Hier, 16:45", status: "En cours" },
    { name: "Lucas Dupont", company: "E-Shop", date: "Hier, 11:20", status: "Nouveau" },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-semibold text-foreground tracking-tight mb-1">Vue d'ensemble</h1>
        <p className="text-sm text-muted-foreground">Suivez vos indicateurs clés de performance et vos dernières acquisitions.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, i) => (
          <div key={i} className="p-5 bg-white dark:bg-[#0A1220] border border-border/40 flex flex-col justify-between">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-medium text-muted-foreground">{stat.label}</span>
              <stat.icon className="w-4 h-4 text-muted-foreground" />
            </div>
            <div className="flex items-baseline gap-3">
              <span className="text-2xl font-semibold text-foreground">{stat.value}</span>
              <span className="text-xs font-medium text-emerald-600 dark:text-emerald-500 bg-emerald-500/10 px-1.5 py-0.5">
                {stat.change}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Main Content Area */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Recent Leads */}
        <div className="lg:col-span-2 bg-white dark:bg-[#0A1220] border border-border/40">
          <div className="p-5 border-b border-border/40 flex items-center justify-between">
            <h2 className="text-base font-semibold text-foreground">Acquisitions Récentes</h2>
            <Link to="/admin/leads" className="text-sm text-[#1A3AFF] hover:underline font-medium flex items-center gap-1">
              Voir tout <ArrowUpRight className="w-3 h-3" />
            </Link>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="bg-muted/30 text-muted-foreground">
                <tr>
                  <th className="px-5 py-3 font-medium">Nom</th>
                  <th className="px-5 py-3 font-medium">Entreprise</th>
                  <th className="px-5 py-3 font-medium">Date</th>
                  <th className="px-5 py-3 font-medium text-right">Statut</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/40">
                {recentLeads.map((lead, i) => (
                  <tr key={i} className="hover:bg-muted/10 transition-colors">
                    <td className="px-5 py-3.5 font-medium text-foreground">{lead.name}</td>
                    <td className="px-5 py-3.5 text-muted-foreground">{lead.company}</td>
                    <td className="px-5 py-3.5 text-muted-foreground">{lead.date}</td>
                    <td className="px-5 py-3.5 text-right">
                      <span className={`inline-flex items-center px-2 py-1 text-xs font-medium ${
                        lead.status === "Nouveau" 
                          ? "bg-[#1A3AFF]/10 text-[#1A3AFF]" 
                          : "bg-muted text-muted-foreground"
                      }`}>
                        {lead.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Quick Actions / Activity */}
        <div className="bg-white dark:bg-[#0A1220] border border-border/40">
          <div className="p-5 border-b border-border/40">
            <h2 className="text-base font-semibold text-foreground">Actions Rapides</h2>
          </div>
          <div className="p-3">
            <Link to="/admin/portfolio" className="flex items-center justify-between p-3 hover:bg-muted/30 transition-colors group">
              <span className="text-sm font-medium text-foreground group-hover:text-[#1A3AFF] transition-colors">Ajouter un Projet</span>
              <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-[#1A3AFF] transition-colors" />
            </Link>
            <Link to="/admin/blog" className="flex items-center justify-between p-3 hover:bg-muted/30 transition-colors group">
              <span className="text-sm font-medium text-foreground group-hover:text-[#1A3AFF] transition-colors">Publier un Article</span>
              <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-[#1A3AFF] transition-colors" />
            </Link>
            <Link to="/admin/testimonials" className="flex items-center justify-between p-3 hover:bg-muted/30 transition-colors group">
              <span className="text-sm font-medium text-foreground group-hover:text-[#1A3AFF] transition-colors">Valider un Témoignage</span>
              <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-[#1A3AFF] transition-colors" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
