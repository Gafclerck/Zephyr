import { useState } from "react";
import { Search, Filter, X, CheckCircle } from "lucide-react";

type LeadStatus = "new" | "contacted" | "qualified" | "closed";

interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  projectType: string;
  businessGoal: string;
  budget: string;
  timeline: string;
  description: string;
  status: LeadStatus;
  createdAt: string;
  notes: string;
}

export function AdminLeads() {
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<LeadStatus | "all">("all");

  const [leads, setLeads] = useState<Lead[]>([
    {
      id: "1",
      name: "Sarah Johnson",
      email: "sarah@techcorp.com",
      phone: "+221 77 123 4567",
      company: "TechCorp",
      projectType: "Plateforme Web",
      businessGoal: "Génération de Leads B2B",
      budget: "15M - 30M FCFA",
      timeline: "Standard (1-3 mois)",
      description: "Need a modern platform with advanced B2B lead generation capabilities.",
      status: "new",
      createdAt: "2026-05-05T10:30:00",
      notes: "",
    },
    {
      id: "2",
      name: "Michael Chen",
      email: "michael@startupx.com",
      phone: "+221 77 234 5678",
      company: "StartupX",
      projectType: "App Mobile",
      businessGoal: "Lancement de Nouveau Produit",
      budget: "30M+ FCFA",
      timeline: "Stratégique (3-6 mois)",
      description: "MVP for a fintech application targeting young professionals.",
      status: "contacted",
      createdAt: "2026-05-05T08:15:00",
      notes: "Scheduled call for May 8",
    },
  ]);

  const statusColors: Record<LeadStatus, string> = {
    new: "bg-[#1A3AFF]/10 text-[#1A3AFF]",
    contacted: "bg-amber-500/10 text-amber-600 dark:text-amber-500",
    qualified: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-500",
    closed: "bg-muted text-muted-foreground",
  };

  const statusLabels: Record<LeadStatus, string> = {
    new: "Nouveau",
    contacted: "Contacté",
    qualified: "Qualifié",
    closed: "Archivé",
  };

  const filteredLeads = leads.filter((lead) => {
    const matchesSearch =
      lead.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lead.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lead.email.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesStatus = statusFilter === "all" || lead.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  const updateLeadStatus = (leadId: string, newStatus: LeadStatus) => {
    setLeads(leads.map(l => l.id === leadId ? { ...l, status: newStatus } : l));
    if (selectedLead && selectedLead.id === leadId) {
      setSelectedLead({ ...selectedLead, status: newStatus });
    }
  };

  return (
    <div className="flex flex-col h-full">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-foreground tracking-tight mb-1">Acquisitions</h1>
        <p className="text-sm text-muted-foreground">Gérez vos prospects et le suivi des contacts.</p>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 flex-1 min-h-0">
        {/* Leads List */}
        <div className="xl:col-span-1 flex flex-col bg-white dark:bg-[#0A1220] border border-border/40 overflow-hidden">
          {/* Search & Filter */}
          <div className="p-4 border-b border-border/40">
            <div className="relative mb-3">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-2 bg-muted/30 border border-border/40 text-foreground text-sm focus:border-[#1A3AFF] focus:ring-1 focus:ring-[#1A3AFF] outline-none transition-colors"
                placeholder="Rechercher..."
              />
            </div>

            <div className="flex gap-2 flex-wrap">
              <button
                onClick={() => setStatusFilter("all")}
                className={`px-3 py-1 text-xs font-medium transition-colors ${
                  statusFilter === "all" ? "bg-foreground text-background" : "bg-muted/30 text-muted-foreground hover:bg-muted"
                }`}
              >
                Tous
              </button>
              {(Object.keys(statusLabels) as LeadStatus[]).map((status) => (
                <button
                  key={status}
                  onClick={() => setStatusFilter(status)}
                  className={`px-3 py-1 text-xs font-medium transition-colors ${
                    statusFilter === status
                      ? "bg-[#1A3AFF] text-white"
                      : "bg-muted/30 text-muted-foreground hover:bg-muted"
                  }`}
                >
                  {statusLabels[status]}
                </button>
              ))}
            </div>
          </div>

          {/* Leads */}
          <div className="flex-1 overflow-y-auto">
            {filteredLeads.map((lead) => (
              <button
                key={lead.id}
                onClick={() => setSelectedLead(lead)}
                className={`w-full text-left p-4 border-b border-border/20 transition-all relative ${
                  selectedLead?.id === lead.id
                    ? "bg-muted/30"
                    : "hover:bg-muted/10"
                }`}
              >
                {selectedLead?.id === lead.id && (
                  <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-[#1A3AFF]" />
                )}
                <div className="flex items-start justify-between mb-1">
                  <p className="text-sm font-medium text-foreground truncate pr-2">{lead.name}</p>
                  <span className={`shrink-0 px-2 py-0.5 text-[10px] font-medium ${statusColors[lead.status]}`}>
                    {statusLabels[lead.status]}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground truncate">{lead.company}</p>
              </button>
            ))}
            {filteredLeads.length === 0 && (
              <div className="text-center p-8 text-sm text-muted-foreground">
                Aucun prospect trouvé.
              </div>
            )}
          </div>
        </div>

        {/* Lead Details */}
        <div className="xl:col-span-2 bg-white dark:bg-[#0A1220] border border-border/40 overflow-y-auto">
          {selectedLead ? (
            <div className="p-6 md:p-8">
              <div className="flex items-start justify-between mb-8 pb-6 border-b border-border/40">
                <div>
                  <h2 className="text-2xl font-semibold text-foreground mb-1">{selectedLead.name}</h2>
                  <p className="text-sm text-muted-foreground">{selectedLead.company}</p>
                </div>
                <button onClick={() => setSelectedLead(null)} className="p-2 text-muted-foreground hover:bg-muted/50 transition-colors">
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Status Update */}
              <div className="mb-8">
                <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Statut du prospect</label>
                <div className="flex flex-wrap gap-2">
                  {(Object.keys(statusLabels) as LeadStatus[]).map((status) => (
                    <button
                      key={status}
                      onClick={() => updateLeadStatus(selectedLead.id, status)}
                      className={`px-4 py-2 text-xs font-medium transition-colors ${
                        selectedLead.status === status
                          ? "bg-[#1A3AFF] text-white"
                          : "bg-muted/30 text-muted-foreground hover:bg-muted hover:text-foreground"
                      }`}
                    >
                      {statusLabels[status]}
                    </button>
                  ))}
                </div>
              </div>

              {/* Contact Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 p-5 bg-muted/10 border border-border/40">
                <div>
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">Email</p>
                  <p className="text-sm text-foreground">{selectedLead.email}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">Téléphone</p>
                  <p className="text-sm text-foreground">{selectedLead.phone}</p>
                </div>
              </div>

              {/* Project Details */}
              <div className="space-y-6 mb-8">
                <h3 className="text-sm font-semibold text-foreground border-b border-border/40 pb-2">Détails du projet</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">Type de projet</p>
                    <p className="text-sm text-foreground">{selectedLead.projectType}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">Objectif</p>
                    <p className="text-sm text-foreground">{selectedLead.businessGoal}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">Budget</p>
                    <p className="text-sm text-foreground">{selectedLead.budget}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">Délai souhaité</p>
                    <p className="text-sm text-foreground">{selectedLead.timeline}</p>
                  </div>
                </div>

                <div>
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Description</p>
                  <p className="text-sm text-foreground leading-relaxed p-4 bg-muted/10 border border-border/40">{selectedLead.description}</p>
                </div>
              </div>

              {/* Notes */}
              <div>
                <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Notes internes</label>
                <textarea
                  defaultValue={selectedLead.notes}
                  className="w-full p-4 bg-muted/10 border border-border/40 text-sm text-foreground focus:border-[#1A3AFF] focus:ring-1 focus:ring-[#1A3AFF] outline-none transition-colors resize-y min-h-[100px]"
                  placeholder="Ajouter des notes sur ce prospect..."
                />
                <button className="mt-3 px-4 py-2 bg-foreground text-background text-sm font-medium hover:bg-foreground/90 transition-colors flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" /> Enregistrer les notes
                </button>
              </div>
            </div>
          ) : (
            <div className="h-full flex flex-col items-center justify-center text-center p-12 text-muted-foreground">
              <Filter className="w-12 h-12 mb-4 opacity-20" />
              <p className="text-sm">Sélectionnez un prospect<br/>pour voir les détails</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
