import { Users, FileText, Briefcase, TrendingUp } from "lucide-react";
import { GlassCard } from "../../components/ui/GlassCard";
import { Badge } from "../../components/ui/Badge";

export function AdminDashboard() {
  const stats = [
    { label: "Total Leads", value: "127", change: "+12%", icon: Users, color: "from-[#1A3AFF] to-[#00B4FF]" },
    { label: "Active Projects", value: "8", change: "+2", icon: Briefcase, color: "from-[#00B4FF] to-[#00E5FF]" },
    { label: "Blog Posts", value: "23", change: "+3", icon: FileText, color: "from-[#1A3AFF] to-[#00E5FF]" },
    { label: "Conversion Rate", value: "18%", change: "+5%", icon: TrendingUp, color: "from-[#00B4FF] to-[#1A3AFF]" },
  ];

  const recentLeads = [
    { name: "Sarah Johnson", company: "TechCorp", project: "Website Development", status: "new", date: "2h ago" },
    { name: "Michael Chen", company: "StartupX", project: "Mobile App", status: "contacted", date: "5h ago" },
    { name: "Emma Williams", company: "BrandCo", project: "Branding", status: "qualified", date: "1d ago" },
    { name: "James Brown", company: "RetailPlus", project: "E-Commerce", status: "new", date: "2d ago" },
  ];

  const statusColors: Record<string, string> = {
    new: "primary",
    contacted: "cyan",
    qualified: "gray",
  };

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-['Orbitron'] text-foreground mb-2">Dashboard</h1>
        <p className="text-muted-foreground">Overview of your agency performance</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <GlassCard key={index}>
            <div className="flex items-start justify-between mb-4">
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${stat.color} flex items-center justify-center`}>
                <stat.icon className="w-6 h-6 text-foreground" />
              </div>
              <span className="text-[#00E5FF] text-sm">{stat.change}</span>
            </div>
            <p className="text-3xl font-['Orbitron'] text-foreground mb-1">{stat.value}</p>
            <p className="text-muted-foreground text-sm">{stat.label}</p>
          </GlassCard>
        ))}
      </div>

      {/* Recent Leads */}
      <GlassCard>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-['Orbitron'] text-foreground">Recent Leads</h2>
          <a href="/admin/leads" className="text-[#00B4FF] hover:text-[#00E5FF]">View All</a>
        </div>

        <div className="space-y-4">
          {recentLeads.map((lead, index) => (
            <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-muted/40 border border-[#00B4FF]/10">
              <div className="flex-1">
                <p className="text-foreground font-medium">{lead.name}</p>
                <p className="text-muted-foreground text-sm">{lead.company} • {lead.project}</p>
              </div>
              <div className="flex items-center gap-4">
                <Badge variant={statusColors[lead.status] as any}>{lead.status}</Badge>
                <span className="text-muted-foreground text-sm w-16 text-right">{lead.date}</span>
              </div>
            </div>
          ))}
        </div>
      </GlassCard>
    </div>
  );
}
